import { ListChecks, Clock, User, Tag } from "lucide-react"

export function TaskBreakdown() {
  const taskCategories = [
    {
      category: "Backend Development (Directus)",
      totalDays: 40,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-700",
      tasks: [
        { task: "Directus Installation & Server Setup", days: 2, priority: "High", assignee: "Backend Lead" },
        { task: "Database Schema Creation (33 Collections)", days: 5, priority: "High", assignee: "Backend Lead" },
        { task: "Field Configurations & Validations", days: 4, priority: "High", assignee: "Backend Dev" },
        { task: "Relationships Setup (M2O, O2M, M2M, O2O)", days: 3, priority: "High", assignee: "Backend Dev" },
        { task: "Roles & Permissions (7 Roles)", days: 4, priority: "High", assignee: "Backend Lead" },
        { task: "Custom Hooks & Extensions", days: 5, priority: "Medium", assignee: "Backend Dev" },
        { task: "File Storage Configuration", days: 2, priority: "Medium", assignee: "Backend Dev" },
        { task: "Email Templates Setup", days: 2, priority: "Medium", assignee: "Backend Dev" },
        { task: "API Testing & Documentation", days: 5, priority: "High", assignee: "Backend Lead" },
        { task: "Flows & Automations", days: 4, priority: "Medium", assignee: "Backend Dev" },
        { task: "Performance Optimization", days: 2, priority: "Low", assignee: "Backend Lead" },
        { task: "Backup & Recovery Setup", days: 2, priority: "High", assignee: "Backend Lead" },
      ],
    },
    {
      category: "Authentication & User Management",
      totalDays: 18,
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      tasks: [
        { task: "Login/Register Pages", days: 2, priority: "High", assignee: "Frontend Dev 1" },
        { task: "JWT Token Management", days: 2, priority: "High", assignee: "Frontend Dev 1" },
        { task: "Password Reset Flow", days: 1, priority: "High", assignee: "Frontend Dev 1" },
        { task: "Email Verification", days: 1, priority: "High", assignee: "Frontend Dev 1" },
        { task: "User Profile Management", days: 3, priority: "High", assignee: "Frontend Dev 1" },
        { task: "Address Management", days: 2, priority: "Medium", assignee: "Frontend Dev 1" },
        { task: "Account Settings", days: 2, priority: "Medium", assignee: "Frontend Dev 1" },
        { task: "Business Profile Setup", days: 3, priority: "High", assignee: "Frontend Dev 1" },
        { task: "Role-based Route Protection", days: 2, priority: "High", assignee: "Frontend Dev 1" },
      ],
    },
    {
      category: "Product & Catalog System",
      totalDays: 35,
      color: "bg-violet-500",
      lightColor: "bg-violet-50",
      textColor: "text-violet-700",
      tasks: [
        { task: "Product Listing Page (Grid/List)", days: 4, priority: "High", assignee: "Frontend Dev 2" },
        { task: "Product Detail Page", days: 4, priority: "High", assignee: "Frontend Dev 2" },
        { task: "Product Image Gallery", days: 2, priority: "High", assignee: "Frontend Dev 2" },
        { task: "Category Navigation & Pages", days: 3, priority: "High", assignee: "Frontend Dev 2" },
        { task: "Brand Pages", days: 2, priority: "Medium", assignee: "Frontend Dev 2" },
        { task: "Store Pages", days: 3, priority: "High", assignee: "Frontend Dev 2" },
        { task: "Search with Filters", days: 5, priority: "High", assignee: "Frontend Dev 2" },
        { task: "Product Add/Edit Form", days: 5, priority: "High", assignee: "Frontend Dev 2" },
        { task: "Dynamic Attributes Form", days: 3, priority: "Medium", assignee: "Frontend Dev 2" },
        { task: "Image/Video Upload", days: 3, priority: "High", assignee: "Frontend Dev 2" },
        { task: "Favorites System", days: 1, priority: "Medium", assignee: "Frontend Dev 2" },
      ],
    },
    {
      category: "Offers & Negotiations",
      totalDays: 22,
      color: "bg-amber-500",
      lightColor: "bg-amber-50",
      textColor: "text-amber-700",
      tasks: [
        { task: "Purchase Offer Flow", days: 4, priority: "High", assignee: "Frontend Dev 3" },
        { task: "Rental Offer with Calendar", days: 5, priority: "High", assignee: "Frontend Dev 3" },
        { task: "Swap Proposal System", days: 5, priority: "High", assignee: "Frontend Dev 3" },
        { task: "Counter Offer System", days: 3, priority: "Medium", assignee: "Frontend Dev 3" },
        { task: "Offer Messages", days: 2, priority: "Medium", assignee: "Frontend Dev 3" },
        { task: "Offer Status Management", days: 3, priority: "High", assignee: "Frontend Dev 3" },
      ],
    },
    {
      category: "Orders & Transactions",
      totalDays: 28,
      color: "bg-rose-500",
      lightColor: "bg-rose-50",
      textColor: "text-rose-700",
      tasks: [
        { task: "Shopping Cart", days: 3, priority: "High", assignee: "Frontend Dev 3" },
        { task: "Checkout Flow", days: 4, priority: "High", assignee: "Frontend Dev 3" },
        { task: "Order Confirmation", days: 2, priority: "High", assignee: "Frontend Dev 3" },
        { task: "Order Detail & Tracking", days: 3, priority: "High", assignee: "Frontend Dev 3" },
        { task: "Order History", days: 2, priority: "Medium", assignee: "Frontend Dev 3" },
        { task: "Rental Management", days: 4, priority: "High", assignee: "Frontend Dev 3" },
        { task: "Swap Transaction Flow", days: 4, priority: "High", assignee: "Frontend Dev 3" },
        { task: "Payment Integration (Stripe)", days: 4, priority: "High", assignee: "Frontend Dev 3" },
        { task: "Invoice Generation", days: 2, priority: "Medium", assignee: "Frontend Dev 3" },
      ],
    },
    {
      category: "Communication System",
      totalDays: 16,
      color: "bg-cyan-500",
      lightColor: "bg-cyan-50",
      textColor: "text-cyan-700",
      tasks: [
        { task: "Inbox & Conversation List", days: 3, priority: "High", assignee: "Frontend Dev 1" },
        { task: "Real-time Chat Interface", days: 4, priority: "High", assignee: "Frontend Dev 1" },
        { task: "Message Attachments", days: 2, priority: "Medium", assignee: "Frontend Dev 1" },
        { task: "Notification Center", days: 3, priority: "High", assignee: "Frontend Dev 1" },
        { task: "Push Notifications", days: 2, priority: "Medium", assignee: "Backend Dev" },
        { task: "Email Notifications", days: 2, priority: "Medium", assignee: "Backend Dev" },
      ],
    },
    {
      category: "Reviews & Ratings",
      totalDays: 10,
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      textColor: "text-orange-700",
      tasks: [
        { task: "Review Form Component", days: 2, priority: "Medium", assignee: "Frontend Dev 2" },
        { task: "Review Display & List", days: 2, priority: "Medium", assignee: "Frontend Dev 2" },
        { task: "Rating Aggregation", days: 2, priority: "Medium", assignee: "Backend Dev" },
        { task: "Review Voting", days: 1, priority: "Low", assignee: "Frontend Dev 2" },
        { task: "Seller Response", days: 1, priority: "Medium", assignee: "Frontend Dev 2" },
        { task: "Review Moderation", days: 2, priority: "Medium", assignee: "Frontend Dev 2" },
      ],
    },
    {
      category: "Business & Store Management",
      totalDays: 23,
      color: "bg-indigo-500",
      lightColor: "bg-indigo-50",
      textColor: "text-indigo-700",
      tasks: [
        { task: "Business Dashboard", days: 4, priority: "High", assignee: "Frontend Dev 1" },
        { task: "Store Setup Wizard", days: 4, priority: "High", assignee: "Frontend Dev 1" },
        { task: "Store Settings Management", days: 3, priority: "High", assignee: "Frontend Dev 1" },
        { task: "Store Analytics", days: 4, priority: "Medium", assignee: "Frontend Dev 1" },
        { task: "Inventory Management", days: 3, priority: "High", assignee: "Frontend Dev 1" },
        { task: "Promotions Management", days: 3, priority: "Medium", assignee: "Frontend Dev 1" },
        { task: "Brand Representative Portal", days: 2, priority: "Low", assignee: "Frontend Dev 1" },
      ],
    },
    {
      category: "Admin Panel",
      totalDays: 25,
      color: "bg-slate-500",
      lightColor: "bg-slate-50",
      textColor: "text-slate-700",
      tasks: [
        { task: "Admin Dashboard Overview", days: 3, priority: "High", assignee: "Frontend Dev 2" },
        { task: "User Management", days: 3, priority: "High", assignee: "Frontend Dev 2" },
        { task: "Product Moderation Queue", days: 4, priority: "High", assignee: "Frontend Dev 2" },
        { task: "Category/Brand Management", days: 3, priority: "High", assignee: "Frontend Dev 2" },
        { task: "Reports & Disputes", days: 4, priority: "High", assignee: "Frontend Dev 2" },
        { task: "Promotions Manager", days: 2, priority: "Medium", assignee: "Frontend Dev 2" },
        { task: "Platform Analytics", days: 3, priority: "Medium", assignee: "Frontend Dev 2" },
        { task: "System Settings", days: 2, priority: "Medium", assignee: "Frontend Dev 2" },
        { task: "Audit Logs Viewer", days: 1, priority: "Low", assignee: "Frontend Dev 2" },
      ],
    },
    {
      category: "Quality Assurance & Launch",
      totalDays: 20,
      color: "bg-teal-500",
      lightColor: "bg-teal-50",
      textColor: "text-teal-700",
      tasks: [
        { task: "Unit Testing", days: 5, priority: "High", assignee: "QA Engineer" },
        { task: "Integration Testing", days: 4, priority: "High", assignee: "QA Engineer" },
        { task: "E2E Testing", days: 4, priority: "High", assignee: "QA Engineer" },
        { task: "Performance Testing", days: 2, priority: "Medium", assignee: "QA Engineer" },
        { task: "Security Audit", days: 2, priority: "High", assignee: "Backend Lead" },
        { task: "Bug Fixes & Polish", days: 3, priority: "High", assignee: "All Devs" },
      ],
    },
  ]

  const totalDays = taskCategories.reduce((sum, cat) => sum + cat.totalDays, 0)
  const totalTasks = taskCategories.reduce((sum, cat) => sum + cat.tasks.length, 0)

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm print:break-before-page print:border-0 print:p-0 print:shadow-none">
      <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 text-sm font-bold text-rose-600">
          8
        </span>
        Detailed Task Breakdown
      </h2>

      {/* Summary */}
      <div className="mt-6 flex flex-wrap gap-4">
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <ListChecks className="h-4 w-4" />
            Total Tasks
          </div>
          <p className="mt-1 text-2xl font-bold text-slate-900">{totalTasks}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Clock className="h-4 w-4" />
            Total Effort
          </div>
          <p className="mt-1 text-2xl font-bold text-slate-900">{totalDays} Days</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <User className="h-4 w-4" />
            Parallel Work
          </div>
          <p className="mt-1 text-2xl font-bold text-slate-900">~130 Days</p>
          <p className="text-xs text-slate-500">(With 7 team members)</p>
        </div>
      </div>

      {/* Task Categories */}
      <div className="mt-8 space-y-6">
        {taskCategories.map((category) => (
          <div key={category.category} className={`rounded-xl border border-slate-200 ${category.lightColor} p-5`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`h-4 w-4 rounded ${category.color}`} />
                <h3 className="font-semibold text-slate-900">{category.category}</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">{category.tasks.length} tasks</span>
                <span className={`rounded-full ${category.color} px-3 py-1 text-sm font-medium text-white`}>
                  {category.totalDays} days
                </span>
              </div>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200/50">
                    <th className="px-3 py-2 text-left font-medium text-slate-600">Task</th>
                    <th className="px-3 py-2 text-center font-medium text-slate-600">Days</th>
                    <th className="px-3 py-2 text-center font-medium text-slate-600">Priority</th>
                    <th className="px-3 py-2 text-left font-medium text-slate-600">Assignee</th>
                  </tr>
                </thead>
                <tbody>
                  {category.tasks.map((task, idx) => (
                    <tr
                      key={task.task}
                      className={idx < category.tasks.length - 1 ? "border-b border-slate-200/30" : ""}
                    >
                      <td className="px-3 py-2 text-slate-700">{task.task}</td>
                      <td className="px-3 py-2 text-center font-medium text-slate-900">{task.days}</td>
                      <td className="px-3 py-2 text-center">
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                            task.priority === "High"
                              ? "bg-red-100 text-red-700"
                              : task.priority === "Medium"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {task.priority}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-slate-600">{task.assignee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Notes */}
      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h4 className="flex items-center gap-2 font-semibold text-amber-800">
          <Tag className="h-4 w-4" />
          Estimation Notes
        </h4>
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-amber-700">
          <li>Estimates assume experienced developers familiar with the tech stack</li>
          <li>Buffer of 20% recommended for unexpected issues and scope changes</li>
          <li>Some tasks can run in parallel with proper team coordination</li>
          <li>Design and UX work runs parallel throughout the project</li>
          <li>Code reviews and documentation time included in estimates</li>
        </ul>
      </div>
    </section>
  )
}
