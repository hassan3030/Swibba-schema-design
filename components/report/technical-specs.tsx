import { Code, Database, Shield, Globe } from "lucide-react"

export function TechnicalSpecs() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm print:break-before-page print:border-0 print:p-0 print:shadow-none">
      <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-sm font-bold text-emerald-600">
          5
        </span>
        Technical Specifications
      </h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {/* Platform */}
        <div className="rounded-xl border border-slate-200 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
              <Database className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-900">Platform</h3>
          </div>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-500">CMS</dt>
              <dd className="font-medium text-slate-700">Directus</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Database</dt>
              <dd className="font-medium text-slate-700">PostgreSQL / MySQL</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Primary Keys</dt>
              <dd className="font-medium text-slate-700">UUID</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Timestamps</dt>
              <dd className="font-medium text-slate-700">ISO 8601</dd>
            </div>
          </dl>
        </div>

        {/* Data Types */}
        <div className="rounded-xl border border-slate-200 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100">
              <Code className="h-5 w-5 text-violet-600" />
            </div>
            <h3 className="font-semibold text-slate-900">Data Types</h3>
          </div>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-500">String Fields</dt>
              <dd className="font-medium text-slate-700">VARCHAR / TEXT</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Numeric</dt>
              <dd className="font-medium text-slate-700">INTEGER / DECIMAL</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Complex Data</dt>
              <dd className="font-medium text-slate-700">JSON / JSONB</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Files</dt>
              <dd className="font-medium text-slate-700">UUID References</dd>
            </div>
          </dl>
        </div>

        {/* Security */}
        <div className="rounded-xl border border-slate-200 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
              <Shield className="h-5 w-5 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-slate-900">Security</h3>
          </div>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-500">Authentication</dt>
              <dd className="font-medium text-slate-700">JWT / OAuth</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Authorization</dt>
              <dd className="font-medium text-slate-700">RBAC (7 Roles)</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Field-level</dt>
              <dd className="font-medium text-slate-700">Per-role filtering</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Audit Trail</dt>
              <dd className="font-medium text-slate-700">Full activity logging</dd>
            </div>
          </dl>
        </div>

        {/* Internationalization */}
        <div className="rounded-xl border border-slate-200 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
              <Globe className="h-5 w-5 text-amber-600" />
            </div>
            <h3 className="font-semibold text-slate-900">Internationalization</h3>
          </div>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-500">Languages</dt>
              <dd className="font-medium text-slate-700">English, Arabic</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Translation Fields</dt>
              <dd className="font-medium text-slate-700">_ar suffix pattern</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Currency</dt>
              <dd className="font-medium text-slate-700">Multi-currency</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Timezone</dt>
              <dd className="font-medium text-slate-700">Per-store config</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Relationship Types */}
      <div className="mt-8">
        <h3 className="font-semibold text-slate-900">Relationship Types Used</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="px-4 py-2 text-left font-medium text-slate-600">Type</th>
                <th className="px-4 py-2 text-left font-medium text-slate-600">Notation</th>
                <th className="px-4 py-2 text-left font-medium text-slate-600">Description</th>
                <th className="px-4 py-2 text-left font-medium text-slate-600">Example</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr className="border-b border-slate-100">
                <td className="px-4 py-2 font-medium">Many-to-One</td>
                <td className="px-4 py-2">
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">M2O</code>
                </td>
                <td className="px-4 py-2">Child references parent</td>
                <td className="px-4 py-2 text-xs">product.category_id → categories</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-2 font-medium">One-to-Many</td>
                <td className="px-4 py-2">
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">O2M</code>
                </td>
                <td className="px-4 py-2">Parent has many children</td>
                <td className="px-4 py-2 text-xs">store.products → products[]</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-2 font-medium">Many-to-Many</td>
                <td className="px-4 py-2">
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">M2M</code>
                </td>
                <td className="px-4 py-2">Junction table relationship</td>
                <td className="px-4 py-2 text-xs">brands ↔ categories (via brand_categories)</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-2 font-medium">One-to-One</td>
                <td className="px-4 py-2">
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">O2O</code>
                </td>
                <td className="px-4 py-2">Single related record</td>
                <td className="px-4 py-2 text-xs">product.seo → seo_metadata</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Self-referential</td>
                <td className="px-4 py-2">
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">M2O</code>
                </td>
                <td className="px-4 py-2">References same collection</td>
                <td className="px-4 py-2 text-xs">category.parent_id → categories</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
