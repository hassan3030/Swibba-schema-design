import { rolesData } from "@/lib/roles-data"
import { X, Minus } from "lucide-react"

export function RolesOverview() {
  const collections = [
    "directus_users",
    "business_profiles",
    "stores",
    "categories",
    "brands",
    "products",
    "offers",
    "orders",
  ]

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm print:break-before-page print:border-0 print:p-0 print:shadow-none">
      <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-sm font-bold text-emerald-600">
          4
        </span>
        Roles & Permissions
      </h2>

      <p className="mt-4 text-sm text-slate-600">
        The system implements a 7-tier role-based access control (RBAC) model, with permissions ranging from full
        administrative access to public read-only access.
      </p>

      {/* Role Cards */}
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rolesData.map((role) => (
          <div key={role.id} className="rounded-xl border border-slate-200 p-4 print:break-inside-avoid">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-slate-900">{role.name}</h3>
                <p className="mt-1 text-xs text-slate-500">{role.description}</p>
              </div>
              <div className="flex gap-1">
                {role.adminAccess && (
                  <span className="rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-medium text-red-700">ADMIN</span>
                )}
                {role.appAccess && (
                  <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700">
                    APP
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Permissions Matrix */}
      <div className="mt-8">
        <h3 className="font-semibold text-slate-900">Permissions Matrix (Key Collections)</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="px-3 py-2 text-left font-medium text-slate-600">Collection</th>
                {rolesData.map((role) => (
                  <th key={role.id} className="px-2 py-2 text-center font-medium text-slate-600">
                    <div className="truncate max-w-[80px]">{role.name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {collections.map((collection) => (
                <tr key={collection} className="border-b border-slate-100 last:border-0">
                  <td className="px-3 py-2">
                    <code className="text-[10px] text-slate-700">{collection}</code>
                  </td>
                  {rolesData.map((role) => {
                    const perm = role.permissions.find((p) => p.collection === collection)
                    if (!perm)
                      return (
                        <td key={role.id} className="px-2 py-2 text-center">
                          <Minus className="mx-auto h-3 w-3 text-slate-300" />
                        </td>
                      )

                    const crud = [perm.create, perm.read, perm.update, perm.delete]
                    const all = crud.every(Boolean)
                    const none = crud.every((v) => !v)
                    const partial = !all && !none

                    return (
                      <td key={role.id} className="px-2 py-2 text-center">
                        {all && <span className="font-mono text-[10px] font-medium text-emerald-600">CRUD</span>}
                        {none && <X className="mx-auto h-3 w-3 text-slate-300" />}
                        {partial && (
                          <span className="font-mono text-[10px] text-slate-500">
                            {perm.create ? "C" : "-"}
                            {perm.read ? "R" : "-"}
                            {perm.update ? "U" : "-"}
                            {perm.delete ? "D" : "-"}
                          </span>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Legend: C = Create, R = Read, U = Update, D = Delete | CRUD = Full access
        </p>
      </div>
    </section>
  )
}
