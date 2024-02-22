import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./components/About/About";
import ErrorPage from "./components/Layout/ErrorPage";
import RootLayout from "./components/Layout/RootLayout";
import ProductProvider from "./store/ProductProvider";
import CartProvider from "./store/CartProvider";
import Product from "./components/Products/Products";
import Home from "./components/Home/Home";
// const routerDefination = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Main />} />
//     <Route path="/about" element={<About />} />
//   </Route>
// );
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product", element: <Product />, errorElement: <ErrorPage /> },
      { path: "/about", element: <About /> },
    ],
    errorElement: <ErrorPage />,
  },
]);
function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductProvider>
    </>
  );
}

export default App;
