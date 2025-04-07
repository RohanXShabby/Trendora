import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./components/layout/AppLayout"
import About from "./pages/About"
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Error from "./pages/Error"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Wishlist from "./pages/Wishlist"
import SignUp from "./pages/SignUp";
import getProduct from "./api/getProduct"
import SingleProduct from "./pages/SingleProduct"
import getSingleProduct from "./api/getSingleProduct"
import LogIn from "./pages/LogIn"

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "products", element: <Products />, loader: getProduct },
      { path: "products/:ID", element: <SingleProduct />, loader: getSingleProduct },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "contact", element: <Contact /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <LogIn /> },
    ]
  }])

  return <RouterProvider router={router} />
}

export default App
