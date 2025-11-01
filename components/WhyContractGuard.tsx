
const WhyContractGuard = () => {
  const comparison = [
    {
      feature: "Legal Training",
      contractGuardAI:
        "Fine-tuned on millions of legal documents, clauses, and case law. Trained to think like a lawyer.",
      genericAI:
        "Trained on general internet data. Great for poems, emails, and code, but not a legal expert.",
    },
    {
      feature: "Risk Identification",
      contractGuardAI:
        "Proactively flags hidden clauses, non-standard terms, liability loopholes, and regulatory red flags.",
      genericAI:
        "Can summarize text but misses nuanced legal implications and risks.",
    },
    {
      feature: "Context & Accuracy",
      contractGuardAI:
        "Understands the specific context of an NDA, MSA, SOW, or Procurement contract. Provides legally-grounded analysis.",
      genericAI:
        "Lacks deep legal context. Prone to hallucinations – inventing clauses or case law that don't exist.",
    },
    {
      feature: "Compliance",
      contractGuardAI:
        "Pre-loaded with up-to-date regulatory frameworks (e.g., GDPR, CCPA, SOX) relevant to your industry.",
      genericAI:
        "No built-in compliance knowledge. Requires extensive, expert prompting.",
    },
    {
      feature: "Security & Confidentiality",
      contractGuardAI:
        "Enterprise-grade security. Your sensitive contracts are not used as training data.",
      genericAI:
        "User conversations can be reviewed for training. A major data security risk for proprietary contracts.",
    },
    {
      feature: "Output",
      contractGuardAI:
        "Actionable, prioritized risk reports with plain-English explanations and recommended negotiation points.",
      genericAI:
        "A text-based summary or answer. Leaves the legal analysis and business decisions to you.",
    },
  ] as const;

  return (
    <section id="why-contract-guard" className='min-h-screen w-full px-4 md:px-8 lg:px-12 py-16'> 
      <h2 className='text-center text-4xl md:text-6xl lg:text-7xl text-neutral-700 font-bold'>
        Why <span className='text-transparent bg-clip-text bg-radial from-[#2d65ff] to-[#58678e] italic'>ContractGuard </span>
        <span className='text-black'>AI?</span>
      </h2>

      <div className="mx-auto mt-12 w-full max-w-6xl overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur-sm shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-neutral-50">
          <div className="p-4 md:p-5 text-sm font-semibold text-neutral-600 uppercase tracking-wide border-b md:border-b-0 md:border-r border-neutral-200">Feature</div>
          <div className="p-4 md:p-5 text-sm font-semibold text-neutral-700 uppercase tracking-wide border-b md:border-b-0 md:border-r border-neutral-200">ContractGuard AI</div>
          <div className="p-4 md:p-5 text-sm font-semibold text-neutral-700 uppercase tracking-wide">Generic AI (e.g., ChatGPT)</div>
        </div>

        <div className="divide-y divide-neutral-200">
          {comparison.map((row, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-4 md:p-5 bg-neutral-50/60 md:border-r border-neutral-200 font-medium text-neutral-800">{row.feature}</div>
              <div className="p-4 md:p-5 md:border-r border-neutral-200 text-neutral-700">{row.contractGuardAI}</div>
              <div className="p-4 md:p-5 text-neutral-600">{row.genericAI}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyContractGuard