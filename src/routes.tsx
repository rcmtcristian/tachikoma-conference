import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";

// const Jumbotron = lazy(() => import("@/routes/Jumbotron"));
// const Nav = lazy(() => import("@/routes/Nav"));
// const IntroSection = lazy(() => import("@/routes/IntroSection"));
// const DisplaySection = lazy(() => import("@/routes/DisplaySection"));
const Bundle = lazy(() => import("@/routes/Bundle"));

const Notfound = lazy(() => import("@/routes/404"));

export const routes: Array<RouteObject> = [
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
