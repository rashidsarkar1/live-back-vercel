import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.routes.js";
import { InventoryRoutes } from "../modules/inventory/inventory.routes.js";
import { TransactionRoutes } from "../modules/transactions/transaction.routes.js";
import { AnalyticsRoutes } from "../modules/analytics/analytics.routes.js";
import { CustomerRoutes } from "../modules/customers/customer.routes.js";
import { DealerRoutes } from "../modules/dealers/dealers.routes.js";
import { settingsRoutes } from "../modules/settings/settings.routes.js";
import { AIRoutes } from "../modules/ai/ai.routes.js";
import { dealerReceiptRoutes } from "../modules/dealer-receipts/dealer-receipt.routes.js";
import { CategoryRoutes } from "../modules/categories/category.routes.js";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/inventory",
    route: InventoryRoutes,
  },
  {
    path: "/categories",
    route: CategoryRoutes,
  },
  {
    path: "/transactions",
    route: TransactionRoutes,
  },
  {
    path: "/analytics",
    route: AnalyticsRoutes,
  },
  {
    path: "/customers",
    route: CustomerRoutes,
  },
  {
    path: "/dealers",
    route: DealerRoutes,
  },
  {
    path: "/dealer-receipts",
    route: dealerReceiptRoutes,
  },
  {
    path: "/settings",
    route: settingsRoutes,
  },
  {
    path: "/ai",
    route: AIRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
