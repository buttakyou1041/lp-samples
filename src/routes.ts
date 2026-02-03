import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";
import CoffeeLp from "./components/samples/CoffeeLp";
import SalonLp from "./components/samples/SalonLp";
import AnimeLp from "./components/samples/AnimeLp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "samples/coffee", Component: CoffeeLp },
      { path: "samples/salon", Component: SalonLp },
      { path: "samples/anime", Component: AnimeLp },
    ],
  },
]);
