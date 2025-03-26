import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeNotification,
  HomeNotificationTwo,
} from "./components/home-notification";
const routing = [
  { path: "/notification", element: <HomeNotification /> },
  { path: "/notification/home", element: <HomeNotificationTwo />, nav: true },
];
export function Hook() {
  // return <h1>Hello</h1>;
  const router = createBrowserRouter(routing);
  return <RouterProvider router={router} />;
}
