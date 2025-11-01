// app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getAuth } from '@clerk/nextjs/server'
import { uploadToCloudinary } from '@/lib/cloudinary'
import { extractTextFromPDF, validatePDF } from '@/lib/pdf-utils'
import { analyzeContractWithAI } from '@/lib/ai-analysis'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    // 1. Clerk Authentication
    const { userId } = getAuth(request)
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    // 2. Get or create user in database
    let user = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      // Create user if doesn't exist
      user = await prisma.user.create({
        data: {
          id: userId,
          email: `${userId}@user.com`, // Placeholder, you can get from Clerk if needed
          password: 'clerk-auth'
        }
      })
    }

    // 3. File validation
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    const validation = validatePDF(file)
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    // 4. Process file
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Extract text from PDF
    const pdfText = await extractTextFromPDF(buffer)
    
    if (!pdfText || pdfText.trim().length < 50) {
      return NextResponse.json(
        { error: 'Could not extract sufficient text from PDF' },
        { status: 400 }
      )
    }

    // 5. Upload to Cloudinary
    const uploadResult = await uploadToCloudinary(buffer, file.name)

    // 6. AI Analysis
    const analysis = await analyzeContractWithAI(pdfText)

    // 7. Save to database
    const contract = await prisma.contract.create({
      data: {
        userId: user.id,
        fileName: file.name,
        fileUrl: uploadResult.secure_url,
        riskScore: analysis.riskScore,
        riskLevel: analysis.riskLevel,
        summary: analysis.summary,
        analysis: analysis.detailedAnalysis,
      }
    })

    // 8. Return response
    return NextResponse.json({
      success: true,
      contract: {
        id: contract.id,
        fileName: contract.fileName,
        riskScore: contract.riskScore,
        riskLevel: contract.riskLevel,
        summary: contract.summary,
        analysis: contract.analysis,
        createdAt: contract.createdAt
      }
    })

  } catch (error: any) {
    console.error('Upload error:', error)
    
    if (error.message.includes('extract text')) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}