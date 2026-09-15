import { createBrowserRouter } from "react-router";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ClientLayout } from "./layouts/ClientLayout";
import { ClientHome } from "./pages/ClientHome";
import { ClientServices } from "./pages/ClientServices";
import { ClientProfessionals } from "./pages/ClientProfessionals";
import { ClientDateTime } from "./pages/ClientDateTime";
import { ClientCheckout } from "./pages/ClientCheckout";
import { ClientProfile } from "./pages/ClientProfile";
import { ProDashboard } from "./pages/ProDashboard";
import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminAddPro } from "./pages/AdminAddPro";
import { AdminAddService } from "./pages/AdminAddService";

export const router = createBrowserRouter([
  { path: "/", Component: Login },
  { path: "/register", Component: Register },
  {
    path: "/client",
    Component: ClientLayout,
    children: [
      { index: true, Component: ClientHome },
      { path: "services", Component: ClientServices },
      { path: "professionals", Component: ClientProfessionals },
      { path: "datetime", Component: ClientDateTime },
      { path: "checkout", Component: ClientCheckout },
      { path: "profile", Component: ClientProfile },
    ],
  },
  { path: "/pro", Component: ProDashboard },
  { path: "/admin", Component: AdminDashboard },
  { path: "/admin/add-pro", Component: AdminAddPro },
  { path: "/admin/add-service", Component: AdminAddService },
]);
