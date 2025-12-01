"use client"

import type { Module } from "@/lib/schema-data"
import { CollectionCard } from "./collection-card"

interface ModuleSectionProps {
  module: Module
  expandedCards: Set<string>
  toggleCard: (id: string) => void
}

export function ModuleSection({ module, expandedCards, toggleCard }: ModuleSectionProps) {
  const Icon = module.icon

  return (
    <section>
      <div className="mb-6 flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${module.color}20` }}
        >
          <Icon className="h-5 w-5" style={{ color: module.color }} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">{module.name}</h2>
          <p className="text-sm text-muted-foreground">
            {module.collections.length} collection{module.collections.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {module.collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            collection={collection}
            isExpanded={expandedCards.has(collection.id)}
            onToggle={() => toggleCard(collection.id)}
            moduleColor={module.color}
          />
        ))}
      </div>
    </section>
  )
}
