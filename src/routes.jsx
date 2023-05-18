import {Suspense } from "react";
// import { RouteObject } from "react-router-dom";
import Bundle from "./routes/Bundle";
import Notfound from "./routes/404";
// const Jumbotron = lazy(() => import("@/routes/Jumbotron"));
// const Nav = lazy(() => import("@/routes/Nav"));
// const IntroSection = lazy(() => import("@/routes/IntroSection"));
// const DisplaySection = lazy(() => import("@/routes/DisplaySection"));
// const Bundle = lazy(() => import("./routes/Bundle"));

// const Notfound = lazy(() => import("./routes/404"));

export const routes = [
  {
    index: true,
    element: (
      <Suspense>
        <div>
          <Bundle />
        </div>
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense>
        <Notfound />
      </Suspense>
    ),
  },
];

export default routes;
