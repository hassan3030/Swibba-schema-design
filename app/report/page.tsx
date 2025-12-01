import { SchemaReport } from "@/components/report/schema-report"

export const metadata = {
  title: "Swibba Database Schema Report",
  description: "Technical documentation report for the Swibba marketplace database schema",
}

export default function ReportPage() {
  return <SchemaReport />
}
