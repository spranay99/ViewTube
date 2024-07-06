import React, { lazy, Suspense } from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const MainContainer = lazy(() => import("./pages/MainContainer"));
const WatchPage = lazy(() => import("./pages/WatchPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<></>}>
            <MainContainer />
          </Suspense>
        ),
      },
      {
        path: "/watch",
        element: (
          <Suspense fallback={<></>}>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<></>}>
            <SearchPage />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
