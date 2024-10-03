import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/Register";

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
      path: "/register",
      element: <RegisterPage />,
    },

    {
      path: "/viewprofile",
      element: <div>View Profile</div>,
    },

    {
      path: "/updateprofile",
      element: <div>Update Profile</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
