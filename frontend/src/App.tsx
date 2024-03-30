import React, { lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import LoadingState from "./components/states/loadingState/LoadingState";
import Home from "./components/pages/homePage/Home";
import IconDataContextProvider from "./context/IconDataContext";
import ContactMe from "./components/pages/contactMe/ContactMe";

const LandingPage = lazy(
  () => import("./components/pages/landingPage/LandingPage")
);
const ProjectPage = lazy(
  () => import("./components/pages/projects/ProjectPage")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">
        <Header name="Jon" />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<LoadingState />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<LoadingState />}>
            <LandingPage />
          </Suspense>
        ),
      },

      {
        path: "/Project",
        element: (
          <Suspense fallback={<LoadingState />}>
            <ProjectPage />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: (
          <Suspense fallback={<LoadingState />}>
            <ContactMe />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <IconDataContextProvider>
      <RouterProvider router={router} />
    </IconDataContextProvider>
  );
};

export default App;
