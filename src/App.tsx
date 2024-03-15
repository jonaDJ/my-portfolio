import React, { lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import LoadingState from "./components/states/loadingState/LoadingState";
import landingPageData from "./data/landingPageData";
import projectPageData from "./data/projectPageData";
import contactPageData from "./data/contactPageData";

const LandingPage = lazy(
  () => import("./components/pages/landingPage/LandingPage")
);
const ProjectPage = lazy(
  () => import("./components/pages/projects/ProjectPage")
);
const ContactMe = lazy(() => import("./components/pages/contactMe/ContactMe"));

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
            <LandingPage {...landingPageData} />
          </Suspense>
        ),
      },
      {
        path: "/Project",
        element: (
          <Suspense fallback={<LoadingState />}>
            <ProjectPage {...projectPageData} />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: (
          <Suspense fallback={<LoadingState />}>
            <ContactMe {...contactPageData} />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
