"use client"

import { Database, Search, ChevronDown, ChevronUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText } from "lucide-react"

interface SchemaHeaderProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  expandAll: () => void
  collapseAll: () => void
  totalCollections: number
}

export function SchemaHeader({
  searchQuery,
  setSearchQuery,
  expandAll,
  collapseAll,
  totalCollections,
}: SchemaHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Database className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">Swibba Database Schema</h1>
              <p className="text-sm text-muted-foreground">{totalCollections} Collections</p>
            </div>

 <div>
            
             
             </div>



          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="relative">
              <Link  href="/report"
        className="flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-emerald-500 hover:shadow-xl"
      >
        <FileText className="h-4 w-4" />
        View Manager Report
      </Link>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={expandAll} className="border-border bg-transparent">
                <ChevronDown className="mr-1.5 h-4 w-4" />
                Expand All
              </Button>
              <Button variant="outline" size="sm" onClick={collapseAll} className="border-border bg-transparent">
                <ChevronUp className="mr-1.5 h-4 w-4" />
                Collapse All
              </Button>
            </div>
          </div>
        </div>
      </div>

     

    </header>
  )
}
