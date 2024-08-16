import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/orders" element={<OrderPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
