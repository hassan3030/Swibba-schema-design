"use client"

import { useState } from "react"
import { Shield, ChevronDown, ChevronRight, Check, X, Eye, Edit, Trash2, Plus } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { rolesData } from "@/lib/roles-data"

export function RolesSection() {
  const [expandedRole, setExpandedRole] = useState<string | null>(null)

  return (
    <section>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/20">
          <Shield className="h-5 w-5 text-amber-500" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">Roles & Permissions</h2>
          <p className="text-sm text-muted-foreground">{rolesData.length} roles configured</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rolesData.map((role) => (
          <Card
            key={role.id}
            className={cn(
              "cursor-pointer transition-all duration-200 hover:border-amber-500/50 bg-card border-border",
              expandedRole === role.id && "ring-1 ring-amber-500/30",
            )}
            onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500" />
                  <h3 className="font-medium text-foreground">{role.name}</h3>
                </div>
                {expandedRole === role.id ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{role.description}</p>
              <div className="mt-2 flex gap-2">
                {role.adminAccess && <Badge className="text-xs bg-primary/20 text-primary border-0">Admin</Badge>}
                {role.appAccess && (
                  <Badge variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                    App Access
                  </Badge>
                )}
              </div>
            </CardHeader>
            {expandedRole === role.id && (
              <CardContent className="pt-0" onClick={(e) => e.stopPropagation()}>
                <div className="max-h-60 overflow-auto rounded-lg border border-border">
                  <table className="w-full text-xs">
                    <thead className="sticky top-0 bg-secondary">
                      <tr>
                        <th className="px-3 py-2 text-left font-medium text-muted-foreground">Collection</th>
                        <th className="px-2 py-2 text-center font-medium text-muted-foreground">
                          <Plus className="h-3 w-3 mx-auto" />
                        </th>
                        <th className="px-2 py-2 text-center font-medium text-muted-foreground">
                          <Eye className="h-3 w-3 mx-auto" />
                        </th>
                        <th className="px-2 py-2 text-center font-medium text-muted-foreground">
                          <Edit className="h-3 w-3 mx-auto" />
                        </th>
                        <th className="px-2 py-2 text-center font-medium text-muted-foreground">
                          <Trash2 className="h-3 w-3 mx-auto" />
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {role.permissions.slice(0, 8).map((perm, idx) => (
                        <tr key={idx} className="hover:bg-secondary/50">
                          <td className="px-3 py-2 font-mono text-foreground">{perm.collection}</td>
                          <td className="px-2 py-2 text-center">
                            {perm.create ? (
                              <Check className="h-3 w-3 text-primary mx-auto" />
                            ) : (
                              <X className="h-3 w-3 text-muted-foreground/50 mx-auto" />
                            )}
                          </td>
                          <td className="px-2 py-2 text-center">
                            {perm.read ? (
                              <Check className="h-3 w-3 text-primary mx-auto" />
                            ) : (
                              <X className="h-3 w-3 text-muted-foreground/50 mx-auto" />
                            )}
                          </td>
                          <td className="px-2 py-2 text-center">
                            {perm.update ? (
                              <Check className="h-3 w-3 text-primary mx-auto" />
                            ) : (
                              <X className="h-3 w-3 text-muted-foreground/50 mx-auto" />
                            )}
                          </td>
                          <td className="px-2 py-2 text-center">
                            {perm.delete ? (
                              <Check className="h-3 w-3 text-primary mx-auto" />
                            ) : (
                              <X className="h-3 w-3 text-muted-foreground/50 mx-auto" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}
