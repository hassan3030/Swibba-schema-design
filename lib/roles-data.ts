export interface Permission {
  collection: string
  create: boolean
  read: boolean
  update: boolean
  delete: boolean
}

export interface Role {
  id: string
  name: string
  description: string
  adminAccess: boolean
  appAccess: boolean
  permissions: Permission[]
}

export const rolesData: Role[] = [
  {
    id: "admin",
    name: "Administrator",
    description: "Full platform access with all permissions",
    adminAccess: true,
    appAccess: true,
    permissions: [
      { collection: "directus_users", create: true, read: true, update: true, delete: true },
      { collection: "business_profiles", create: true, read: true, update: true, delete: true },
      { collection: "stores", create: true, read: true, update: true, delete: true },
      { collection: "categories", create: true, read: true, update: true, delete: true },
      { collection: "brands", create: true, read: true, update: true, delete: true },
      { collection: "products", create: true, read: true, update: true, delete: true },
      { collection: "offers", create: true, read: true, update: true, delete: true },
      { collection: "orders", create: true, read: true, update: true, delete: true },
    ],
  },
  {
    id: "swibba_manager",
    name: "Swibba Manager",
    description: "Platform owner role - manages everything",
    adminAccess: false,
    appAccess: true,
    permissions: [
      { collection: "directus_users", create: true, read: true, update: true, delete: false },
      { collection: "business_profiles", create: true, read: true, update: true, delete: false },
      { collection: "stores", create: true, read: true, update: true, delete: true },
      { collection: "categories", create: true, read: true, update: true, delete: true },
      { collection: "brands", create: true, read: true, update: true, delete: true },
      { collection: "products", create: true, read: true, update: true, delete: true },
      { collection: "offers", create: true, read: true, update: true, delete: true },
      { collection: "orders", create: true, read: true, update: true, delete: false },
    ],
  },
  {
    id: "business_owner",
    name: "Business Owner",
    description: "Business accounts with multiple stores",
    adminAccess: false,
    appAccess: true,
    permissions: [
      { collection: "directus_users", create: false, read: true, update: true, delete: false },
      { collection: "business_profiles", create: true, read: true, update: true, delete: false },
      { collection: "stores", create: true, read: true, update: true, delete: true },
      { collection: "categories", create: false, read: true, update: false, delete: false },
      { collection: "brands", create: false, read: true, update: false, delete: false },
      { collection: "products", create: true, read: true, update: true, delete: true },
      { collection: "offers", create: true, read: true, update: true, delete: true },
      { collection: "orders", create: true, read: true, update: true, delete: false },
    ],
  },
  {
    id: "store_manager",
    name: "Store Manager",
    description: "Manages assigned store(s) only",
    adminAccess: false,
    appAccess: true,
    permissions: [
      { collection: "directus_users", create: false, read: true, update: true, delete: false },
      { collection: "business_profiles", create: false, read: false, update: false, delete: false },
      { collection: "stores", create: false, read: true, update: true, delete: false },
      { collection: "categories", create: false, read: true, update: false, delete: false },
      { collection: "brands", create: false, read: true, update: false, delete: false },
      { collection: "products", create: true, read: true, update: true, delete: true },
      { collection: "offers", create: false, read: true, update: true, delete: false },
      { collection: "orders", create: false, read: true, update: true, delete: false },
    ],
  },
  {
    id: "brand_rep",
    name: "Brand Representative",
    description: "Manages assigned brand content",
    adminAccess: false,
    appAccess: true,
    permissions: [
      { collection: "directus_users", create: false, read: true, update: true, delete: false },
      { collection: "business_profiles", create: false, read: false, update: false, delete: false },
      { collection: "stores", create: false, read: false, update: false, delete: false },
      { collection: "categories", create: false, read: true, update: false, delete: false },
      { collection: "brands", create: false, read: true, update: true, delete: false },
      { collection: "products", create: false, read: true, update: false, delete: false },
      { collection: "offers", create: false, read: false, update: false, delete: false },
      { collection: "orders", create: false, read: false, update: false, delete: false },
    ],
  },
  {
    id: "individual",
    name: "Individual User",
    description: "Regular marketplace users (buy/sell/swap/rent)",
    adminAccess: false,
    appAccess: true,
    permissions: [
      { collection: "directus_users", create: false, read: true, update: true, delete: false },
      { collection: "business_profiles", create: true, read: true, update: true, delete: false },
      { collection: "stores", create: false, read: true, update: false, delete: false },
      { collection: "categories", create: false, read: true, update: false, delete: false },
      { collection: "brands", create: false, read: true, update: false, delete: false },
      { collection: "products", create: true, read: true, update: true, delete: true },
      { collection: "offers", create: true, read: true, update: true, delete: true },
      { collection: "orders", create: true, read: true, update: true, delete: false },
    ],
  },
  {
    id: "public",
    name: "Public",
    description: "Unauthenticated/guest access",
    adminAccess: false,
    appAccess: false,
    permissions: [
      { collection: "directus_users", create: false, read: false, update: false, delete: false },
      { collection: "business_profiles", create: false, read: false, update: false, delete: false },
      { collection: "stores", create: false, read: true, update: false, delete: false },
      { collection: "categories", create: false, read: true, update: false, delete: false },
      { collection: "brands", create: false, read: true, update: false, delete: false },
      { collection: "products", create: false, read: true, update: false, delete: false },
      { collection: "offers", create: false, read: false, update: false, delete: false },
      { collection: "orders", create: false, read: false, update: false, delete: false },
    ],
  },
]
