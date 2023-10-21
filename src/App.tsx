import React from "react";
import "./App.css";
import LandingPage from "./components/pages/landingPage/LandingPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import ProjectPage from "./components/pages/projects/ProjectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header name="Jon" />
        <main>
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
        element: (
          <div style={{ textAlign: "center", padding: 100 }}>
            <h2>The Contact page is still</h2>
            <h1 style={{ color: "red" }}>UNDER CONSTRUCTION</h1>
          </div>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
