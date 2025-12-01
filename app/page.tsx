import { SchemaViewer } from "@/components/schema-viewer"
import Link from "next/link"
import { FileText } from "lucide-react"

export default function Page() {
  return (
    <>
      <Link
        href="/report"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-emerald-500 hover:shadow-xl"
      >
        <FileText className="h-4 w-4" />
        View Manager Report
      </Link>
      
      <SchemaViewer />
    </>
  )
}
