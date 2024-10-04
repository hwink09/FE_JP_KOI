import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/Register";
import Dashboard from "./components/dashboard";
import ManageCategory from "./pages/admin/manage-category";
import ManageStore from "./pages/admin/mange-store";
import ManageServiceGroup from "./pages/admin/manage-store-group";
function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <div>Hello world!</div>,
    },

    {
      path: "/login",
      element: <LoginPage />,
    },

    {
      path: "/Register",
      element: <RegisterPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "category",
          element: <ManageCategory />,
        },
        {
          path: "store",
          element: <ManageStore />,
        },
        {
          path: "service-group",
          element: <ManageServiceGroup />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
