import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import MenuPage from "./components/MenuPage";
import AboutUsClass from "./components/AboutUsClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./components/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
import Cart from "./components/Cart";
const Grocery = lazy(() => import("./components/GroceryComponent"));

const FunctionalComponent = () => {
const [user,setUser]=useState()
useEffect(()=>{
  //calling api that fetches user name
  const useName={
    name:"techlal"
  }
  setUser(useName.name)
},[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{name:user,setUser}}>
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <FunctionalComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/menu/:id",
        element: <MenuPage />,
      },
      {
        path: "/about",
        element: <AboutUsClass Name="badal Prasad Mehta" Address="Ranchi" />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
