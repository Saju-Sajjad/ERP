import Portal from "../components/Pages/Portal";
import CustomerManagementRoutes from "./CustomerManagement";

const router = [
  {
    path: '/',
    element: (
      <Portal/>
    ),
    children: [
      {
        path: '/',
        children: CustomerManagementRoutes
      }
    ]
  }
];


export default router;
