"use client"

import { useState } from "react"
import { SchemaHeader } from "./schema/schema-header"
import { ModuleSection } from "./schema/module-section"
import { schemaData } from "@/lib/schema-data"
import { RolesSection } from "./schema/roles-section"
import Link from "next/link"

export function SchemaViewer() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set())

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const expandAll = () => {
    const allIds = schemaData.modules.flatMap((m) => m.collections.map((c) => c.id))
    setExpandedCards(new Set(allIds))
  }

  const collapseAll = () => {
    setExpandedCards(new Set())
  }

  const filteredModules = schemaData.modules
    .map((module) => ({
      ...module,
      collections: module.collections.filter(
        (c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.fields.some((f) => f.name.toLowerCase().includes(searchQuery.toLowerCase())),
      ),
    }))
    .filter((m) => m.collections.length > 0)

  return (
    <div className="min-h-screen bg-background">
       

      <SchemaHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        expandAll={expandAll}
        collapseAll={collapseAll}
        totalCollections={schemaData.totalCollections}
      />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="space-y-12">
          {filteredModules.map((module) => (
            <ModuleSection key={module.id} module={module} expandedCards={expandedCards} toggleCard={toggleCard} />
          ))}
          <RolesSection />
        </div>
      </main>
    </div>
  )
}
