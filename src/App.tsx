import React from "react";
import "./App.css";
import LandingPage from "./components/pages/landingPage/LandingPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import ProjectPage from "./components/pages/projects/ProjectPage";
import ContactMe from "./components/pages/contactMe/ContactMe";

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
        element: <LandingPage />,
      },
      {
        path: "/Project",
        element: <ProjectPage />,
      },
      {
        path: "/Contact",
        element: <ContactMe />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
