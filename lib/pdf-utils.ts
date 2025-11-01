import { PDFParse } from "pdf-parse";

export async function extractTextFromPDF(buffer: Buffer): Promise<string> {
  const parser = new PDFParse({ data: buffer });
  try {
    const result = await parser.getText();
    return result.text;
  } catch {
    throw new Error('Failed to extract text from PDF');
  } finally {
    await parser.destroy();
  }
}

export function validatePDF(file: File): { isValid: boolean; error?: string } {
  if (file.type !== 'application/pdf') {
    return { isValid: false, error: 'Only PDF files are allowed' }
  }

  if (file.size > 10 * 1024 * 1024) {
    return { isValid: false, error: 'File size must be less than 10MB' }
  }

  if (file.size === 0) {
    return { isValid: false, error: 'File is empty' }
  }

  return { isValid: true };
}