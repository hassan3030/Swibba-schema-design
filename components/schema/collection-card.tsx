"use client"

import { ChevronDown, ChevronRight, Key, Link2, FileText } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Collection } from "@/lib/schema-data"

interface CollectionCardProps {
  collection: Collection
  isExpanded: boolean
  onToggle: () => void
  moduleColor: string
}

export function CollectionCard({ collection, isExpanded, onToggle, moduleColor }: CollectionCardProps) {
  const fieldCount = collection.fields.length
  const relationCount = collection.fields.filter((f) => f.relationship).length

  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-200 hover:border-primary/50 bg-card border-border",
        isExpanded && "ring-1 ring-primary/30",
      )}
      onClick={onToggle}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: moduleColor }} />
            <h3 className="font-mono text-sm font-medium text-foreground">{collection.name}</h3>
          </div>
          {isExpanded ? (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
            <FileText className="mr-1 h-3 w-3" />
            {fieldCount} fields
          </Badge>
          {relationCount > 0 && (
            <Badge variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
              <Link2 className="mr-1 h-3 w-3" />
              {relationCount} relations
            </Badge>
          )}
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent className="pt-0" onClick={(e) => e.stopPropagation()}>
          <div className="max-h-80 overflow-auto rounded-lg border border-border">
            <table className="w-full text-xs">
              <thead className="sticky top-0 bg-secondary">
                <tr>
                  <th className="px-3 py-2 text-left font-medium text-muted-foreground">Field</th>
                  <th className="px-3 py-2 text-left font-medium text-muted-foreground">Type</th>
                  <th className="px-3 py-2 text-left font-medium text-muted-foreground">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {collection.fields.map((field, idx) => (
                  <tr key={idx} className="hover:bg-secondary/50">
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-1.5">
                        {field.isPrimaryKey && <Key className="h-3 w-3 text-primary" />}
                        <span className="font-mono text-foreground">{field.name}</span>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <span className="text-muted-foreground">{field.type}</span>
                      {field.relationship && <span className="ml-1 text-primary">→ {field.relationship}</span>}
                    </td>
                    <td className="px-3 py-2 text-muted-foreground">{field.notes || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
