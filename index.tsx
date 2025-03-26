import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeNotification } from "./components/home-notification";
export function Hook() {
  // return <h1>Hello</h1>;
  const router = createBrowserRouter(
    [{ path: "/", element: <HomeNotification /> }],
    {
      basename: "/notification",
    }
  );
  return <RouterProvider router={router} />;
}
