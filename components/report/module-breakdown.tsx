import { schemaData } from "@/lib/schema-data"

export function ModuleBreakdown() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm print:break-before-page print:border-0 print:p-0 print:shadow-none">
      <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-sm font-bold text-emerald-600">
          3
        </span>
        Module Breakdown
      </h2>

      <p className="mt-4 text-sm text-slate-600">
        The schema is organized into {schemaData.modules.length} functional modules, each serving a specific domain
        within the marketplace ecosystem.
      </p>

      <div className="mt-6 space-y-6">
        {schemaData.modules.map((module) => {
          const totalFields = module.collections.reduce((a, c) => a + c.fields.length, 0)
          const totalRelations = module.collections.reduce(
            (a, c) => a + c.fields.filter((f) => f.relationship).length,
            0,
          )

          return (
            <div
              key={module.id}
              className="rounded-xl border border-slate-200 overflow-hidden print:break-inside-avoid"
            >
              {/* Module Header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ backgroundColor: `${module.color}15` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{ backgroundColor: module.color }}
                  >
                    <module.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{module.name}</h3>
                    <p className="text-xs text-slate-500">
                      {module.collections.length} collections | {totalFields} fields | {totalRelations} relationships
                    </p>
                  </div>
                </div>
              </div>

              {/* Collections Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50/50">
                      <th className="px-5 py-2.5 text-left font-medium text-slate-600">Collection</th>
                      <th className="px-5 py-2.5 text-center font-medium text-slate-600">Fields</th>
                      <th className="px-5 py-2.5 text-center font-medium text-slate-600">Relations</th>
                      <th className="px-5 py-2.5 text-left font-medium text-slate-600">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {module.collections.map((collection) => {
                      const relationCount = collection.fields.filter((f) => f.relationship).length
                      const purpose = getCollectionPurpose(collection.id)

                      return (
                        <tr key={collection.id} className="border-b border-slate-50 last:border-0">
                          <td className="px-5 py-3">
                            <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-700">
                              {collection.name}
                            </code>
                          </td>
                          <td className="px-5 py-3 text-center text-slate-600">{collection.fields.length}</td>
                          <td className="px-5 py-3 text-center text-slate-600">{relationCount}</td>
                          <td className="px-5 py-3 text-slate-500">{purpose}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function getCollectionPurpose(id: string): string {
  const purposes: Record<string, string> = {
    directus_users: "Extended user profiles with verification and preferences",
    business_profiles: "Business account details and subscription management",
    user_addresses: "Shipping and billing addresses for users",
    stores: "Storefront configuration and analytics",
    store_followers: "User-store follow relationships",
    categories: "Hierarchical product categorization",
    category_attributes: "Dynamic filterable attributes per category",
    brands: "Brand registry with verification",
    brand_followers: "User-brand follow relationships",
    models: "Product models under brands",
    brand_categories: "Brand-category associations",
    brand_representatives: "Official brand representatives",
    products: "Core product listings with pricing",
    product_images: "Product image gallery",
    product_videos: "Product video content",
    product_favorites: "User wishlist items",
    offers: "Price negotiations and proposals",
    swap_offer_items: "Items offered in swap deals",
    offer_messages: "Negotiation communication",
    orders: "Purchase and rental transactions",
    order_items: "Line items within orders",
    swap_transactions: "Completed swap exchanges",
    swap_transaction_items: "Items in swap transactions",
    payments: "Payment records and refunds",
    reviews: "Product and seller reviews",
    review_votes: "Helpful/not helpful votes on reviews",
    conversations: "Message threads between users",
    conversation_participants: "Users in conversations",
    messages: "Individual messages",
    notifications: "User notifications",
    promotions: "Discount codes and campaigns",
    reports: "User reports for moderation",
    saved_searches: "Saved search filters",
    seo_metadata: "SEO data for entities",
  }
  return purposes[id] || "Supporting data"
}
