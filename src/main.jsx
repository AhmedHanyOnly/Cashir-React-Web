import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./Layout/Mainlayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./auth/Login";
import ProtectedRoute from "./middleware/ProtectedRoute";
import "./Style/GlopalStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Settings } from "./pages/Settings";
import { Products } from "./pages/Products/index";
import { ProductForm } from "./pages/Products/CreateOrUpdate";
import { ClientsPage } from "./pages/Clientspage";
import { SuppliersPage } from "./pages/Supplierspage";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import Purchases from "./pages/Purchases/index";
import CreatePurchase from "./pages/Purchases/CreateOrUpdate";
import UpdatePurchase from "./pages/Purchases/CreateOrUpdate";
import Expenses from "./pages/Expenses";
import ExpenseCategories from "./pages/ExpenseCategories";
import Accounting from "./pages/Accounting";
import Invoices from "./pages/Invoices";
import POS from "./pages/Pos";
import ProgramAdditions from "./pages/ProgramAdditions";
import Notifications from "./pages/Notifications";
import Admins from "./pages/Admins";
import Departments from "./pages/Departments";
import Addadmin from "./pages/Addadmin";
import Roles from "./pages/Roles";
import AddRole from "./pages/AddRole";
import ProtectedAuth from "./middleware/ProtectedAuth";
import SelectFilter from "./pages/SelectFilter";
import Tree from "./pages/TreeSec";
import TreeSec from "./pages/TreeSec";
import Vouchers from "./pages/Vouchers";
import AddVoucher from "./pages/AddVoucher";
import OtherVouchers from "./pages/OtherVouchers";
import PaymentVoucher from "./pages/PaymentVoucher";
import ReceiptVoucher from "./pages/ReceiptVoucher";
import AccountStatement from "./pages/AccountStatement";
import AccountsTax from "./pages/AccountsTax";
import TrialBalance from "./pages/TrialBalance";
import IncomeStatement from "./pages/IncomeStatement";
import Reports from "./pages/Reports";
import { PaymentMethodsPage } from "./pages/PaymentMethodsPage";
import General from "./pages/General";
import ClientReport from "./pages/ClientReport";
import UserReport from "./pages/UserReport";
import SalesReport from "./pages/SalesReport";
import FinancialSessions from "./pages/FinancialSessions";
import BestSellingProducts from "./pages/BestSellingProducts";
import MostProfitableProducts from "./pages/MostProfitableProducts";
import LateClients from "./pages/LateClients";
import Treasury from "./pages/Treasury";
import Offers from "./pages/Offers";
import Createoffer from "./pages/Createoffer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "settings", element: <Settings /> },
      { path: "clients", element: <ClientsPage /> },
      { path: "suppliers", element: <SuppliersPage /> },
      { path: "products", element: <Products /> },
      { path: "products/create", element: <ProductForm /> },
      { path: "products/edit/:id", element: <ProductForm /> },
      { path: "purchases", element: <Purchases /> },
      { path: "purchases/create", element: <CreatePurchase /> },
      { path: "purchases/edit/:id", element: <UpdatePurchase /> },
      { path: "expenses", element: <Expenses /> },
      { path: "expense_categories", element: <ExpenseCategories /> },
      { path: "accounting", element: <Accounting /> },
      { path: "invoices", element: <Invoices /> },
      { path: "program-additions", element: <ProgramAdditions /> },
      { path: "notifications", element: <Notifications /> },
      { path: "offers", element: <Offers /> },
      { path: "offers/create", element: <Createoffer /> },
      { path: "admins", element: <Admins /> },
      { path: "admins/create", element: <Addadmin /> },
      { path: "roles", element: <Roles /> },
      { path: "roles/create", element: <AddRole /> },
      { path: "departments", element: <Departments /> },
      { path: "selectfilter", element: <SelectFilter /> },
      { path: "accounts/tree", element: <TreeSec /> },
      { path: "vouchers", element: <Vouchers /> },
      { path: "vouchers/create", element: <AddVoucher /> },
      { path: "other-vouchers", element: <OtherVouchers /> },
      { path: "payment-voucher", element: <PaymentVoucher /> },
      { path: "payment-voucher", element: <PaymentVoucher /> },
      { path: "receipt-voucher", element: <ReceiptVoucher /> },
      { path: "account-statement", element: <AccountStatement /> },
      { path: "accounts/tax", element: <AccountsTax /> },
      { path: "accounts/trial-balance", element: <TrialBalance /> },
      { path: "accounts/income-statement", element: <IncomeStatement /> },
      { path: "payment_methods", element: <PaymentMethodsPage /> },
      { path: "reports", element: <Reports /> },
      { path: "reports/general", element: <General /> },
      { path: "reports/client", element: <ClientReport /> },
      { path: "reports/user", element: <UserReport /> },
      { path: "reports/salesReport", element: <SalesReport /> },
      { path: "reports/financial-sessions", element: <FinancialSessions /> },
      {
        path: "reports/best-selling-products",
        element: <BestSellingProducts />,
      },
      {
        path: "reports/most-profitable-products",
        element: <MostProfitableProducts />,
      },
      {
        path: "reports/late-clients",
        element: <LateClients />,
      },
      { path: "reports/treasury", element: <Treasury /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "login",
    element: (
      <ProtectedAuth>
        <Login />
      </ProtectedAuth>
    ),
  },
  {
    path: "pos",
    element: <POS />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster position="bottom-right" richColors />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
