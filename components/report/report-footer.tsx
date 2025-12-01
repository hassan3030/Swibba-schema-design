export function ReportFooter() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <footer className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm print:border-0 print:p-0 print:shadow-none">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-lg font-semibold text-slate-900">Next Steps</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          This schema is ready for implementation in Directus. The recommended approach is to create collections in the
          order listed (Users → Catalog → Products → Offers → Orders) to properly establish foreign key relationships.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {[
            "1. Set up Directus instance",
            "2. Create custom collections",
            "3. Configure relationships",
            "4. Set up roles & permissions",
            "5. Test with sample data",
          ].map((step) => (
            <span
              key={step}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
            >
              {step}
            </span>
          ))}
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-500">
          <p>Generated on {currentDate} | Swibba Marketplace Database Schema v1.0</p>
          <p className="mt-1">For questions, contact the development team</p>
        </div>
      </div>
    </footer>
  )
}
