import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store"; // Import the store
import Header from "./Header";
import Body from "./Body";
import Error from "./Error";
import About from "./About";
import ContactUs from "./ContactUs";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// AppLayout component with Header and Outlet
const AppLayout = () => {
  return (
    <div className="Main">
      <Header />
      {/* Outlet renders child route components */}
      <Outlet />
    </div>
  );
};

// Creating the router with routes
const appRouter = createBrowserRouter([
  {
    path: "/", // Root path
    element: <AppLayout />, // Parent component (AppLayout)
    errorElement: <Error />, // Error component for unknown routes
    children: [
      {
        path: "/", // Default child route
        element: <Body />, // Body component for the homepage
      },
      {
        path: "about", // Path for About page
        element: <About />, // About component
      },
      {
        path: "contact", // Path for Contact Us page
        element: <ContactUs />, // Contact Us component
      },
    ],
  },
]);

// Rendering the RouterProvider wrapped with Redux Provider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
