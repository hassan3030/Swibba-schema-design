import { FolderTree, FileCode, Layers, Component, Palette, Settings } from "lucide-react"

export function FrontendStructure() {
  const folderStructure = [
    {
      name: "app/",
      description: "Next.js App Router",
      children: [
        {
          name: "(auth)/",
          description: "Auth group routes",
          children: ["login/", "register/", "forgot-password/", "verify-email/"],
        },
        {
          name: "(dashboard)/",
          description: "Protected dashboard",
          children: ["dashboard/", "profile/", "settings/", "addresses/"],
        },
        {
          name: "(marketplace)/",
          description: "Public marketplace",
          children: ["products/", "categories/", "brands/", "stores/", "search/"],
        },
        {
          name: "(business)/",
          description: "Business portal",
          children: ["business/", "store-manager/", "analytics/", "inventory/"],
        },
        {
          name: "(admin)/",
          description: "Admin panel",
          children: ["admin/", "moderation/", "reports/", "promotions/"],
        },
        {
          name: "api/",
          description: "API routes",
          children: ["auth/", "products/", "orders/", "payments/", "webhooks/"],
        },
      ],
    },
    {
      name: "components/",
      description: "Reusable components",
      children: [
        { name: "ui/", description: "Base UI components (shadcn)" },
        { name: "forms/", description: "Form components" },
        { name: "products/", description: "Product-related components" },
        { name: "orders/", description: "Order management" },
        { name: "chat/", description: "Messaging components" },
        { name: "reviews/", description: "Reviews & ratings" },
        { name: "layout/", description: "Layout components" },
      ],
    },
    {
      name: "lib/",
      description: "Utilities & config",
      children: ["directus.ts", "auth.ts", "validations/", "hooks/", "utils.ts"],
    },
    {
      name: "types/",
      description: "TypeScript definitions",
      children: ["database.ts", "api.ts", "forms.ts"],
    },
  ]

  const pages = [
    {
      category: "Authentication",
      count: 5,
      pages: ["Login", "Register", "Forgot Password", "Reset Password", "Email Verification"],
    },
    {
      category: "User Dashboard",
      count: 8,
      pages: [
        "Overview",
        "Profile",
        "Addresses",
        "Favorites",
        "My Products",
        "Purchase History",
        "Notifications",
        "Settings",
      ],
    },
    {
      category: "Marketplace",
      count: 12,
      pages: [
        "Home",
        "Product Listing",
        "Product Detail",
        "Category Browse",
        "Brand Pages",
        "Store Pages",
        "Search Results",
        "Compare Products",
        "Wishlist",
        "Recently Viewed",
        "Deals",
        "New Arrivals",
      ],
    },
    {
      category: "Product Management",
      count: 6,
      pages: ["Add Product", "Edit Product", "Product Preview", "Media Upload", "Pricing Config", "Inventory"],
    },
    {
      category: "Orders & Transactions",
      count: 10,
      pages: [
        "Cart",
        "Checkout",
        "Order Confirmation",
        "Order Detail",
        "Order Tracking",
        "Rental Calendar",
        "Swap Proposal",
        "Swap Confirmation",
        "Payment",
        "Invoice",
      ],
    },
    {
      category: "Business Portal",
      count: 8,
      pages: [
        "Business Dashboard",
        "Store Setup",
        "Store Settings",
        "Analytics",
        "Order Management",
        "Customer Messages",
        "Reviews Management",
        "Promotions",
      ],
    },
    { category: "Communication", count: 4, pages: ["Inbox", "Conversation", "Notifications Center", "Contact Seller"] },
    {
      category: "Admin Panel",
      count: 10,
      pages: [
        "Admin Dashboard",
        "User Management",
        "Product Moderation",
        "Category Management",
        "Brand Management",
        "Reports Queue",
        "Promotions Manager",
        "Analytics",
        "System Settings",
        "Audit Logs",
      ],
    },
  ]

  const totalPages = pages.reduce((sum, cat) => sum + cat.count, 0)

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm print:break-before-page print:border-0 print:p-0 print:shadow-none">
      <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
          6
        </span>
        Frontend Structure (Next.js 14+)
      </h2>

      {/* Tech Stack */}
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {[
          { icon: Layers, label: "Framework", value: "Next.js 14 App Router", color: "bg-slate-900 text-white" },
          { icon: Palette, label: "Styling", value: "Tailwind CSS + shadcn/ui", color: "bg-blue-100 text-blue-700" },
          { icon: Component, label: "State", value: "React Query + Zustand", color: "bg-violet-100 text-violet-700" },
          { icon: Settings, label: "Forms", value: "React Hook Form + Zod", color: "bg-emerald-100 text-emerald-700" },
        ].map((tech) => (
          <div key={tech.label} className="rounded-xl border border-slate-200 p-4">
            <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${tech.color}`}>
              <tech.icon className="h-5 w-5" />
            </div>
            <p className="text-xs text-slate-500">{tech.label}</p>
            <p className="font-medium text-slate-900">{tech.value}</p>
          </div>
        ))}
      </div>

      {/* Folder Structure */}
      <div className="mt-8">
        <h3 className="flex items-center gap-2 font-semibold text-slate-900">
          <FolderTree className="h-5 w-5 text-amber-600" />
          Project Structure
        </h3>
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-6 font-mono text-sm">
          <div className="space-y-1">
            <p className="font-bold text-slate-700">swibba-frontend/</p>
            {folderStructure.map((folder) => (
              <div key={folder.name} className="ml-4">
                <p className="text-blue-600">
                  {folder.name} <span className="text-slate-400">— {folder.description}</span>
                </p>
                {folder.children && (
                  <div className="ml-4 text-slate-600">
                    {folder.children.map((child, idx) => (
                      <div key={idx}>
                        {typeof child === "string" ? (
                          <p>{child}</p>
                        ) : (
                          <div>
                            <p className="text-emerald-600">
                              {child.name} <span className="text-slate-400">— {child.description}</span>
                            </p>
                            {child.children && (
                              <div className="ml-4 text-slate-500">
                                {child.children.map((subChild, subIdx) => (
                                  <span key={subIdx}>
                                    {subChild}
                                    {subIdx < child.children!.length - 1 ? ", " : ""}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pages Breakdown */}
      <div className="mt-8">
        <h3 className="flex items-center gap-2 font-semibold text-slate-900">
          <FileCode className="h-5 w-5 text-violet-600" />
          Pages & Views Summary
          <span className="ml-2 rounded-full bg-violet-100 px-2 py-0.5 text-xs font-bold text-violet-700">
            {totalPages} Total Pages
          </span>
        </h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-medium text-slate-600">Category</th>
                <th className="px-4 py-3 text-center font-medium text-slate-600">Count</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Pages</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((category) => (
                <tr key={category.category} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-900">{category.category}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-700">
                      {category.count}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <div className="flex flex-wrap gap-1">
                      {category.pages.map((page) => (
                        <span key={page} className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                          {page}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
