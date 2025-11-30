import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CartDrawer from "./components/CartDrawer";
import CheckoutForm from "./components/CheckoutForm";
import { useCart } from "./context/CartContext";
import Navbar from "./components/Navbar";

export default function App() {
  const cart = useCart();
  const [search, setSearch] = useState("");

  // For debugging only — remove in production
  window.__cartAdd = cart.add;
  window.__cartContext__ = cart;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* ✅ Navbar */}
      <Navbar search={search} setSearch={setSearch} />

      {/* ✅ Main layout */}
      <main className="flex flex-col lg:grid lg:grid-cols-[1fr_380px] gap-8 p-6 max-w-7xl mx-auto w-full">
        {/* Left side: Product list + Checkout */}
        <div className="space-y-8">
          <ProductList apiEndpoint={null} search={search} />
          <CheckoutForm />
        </div>

        {/* Right side: Cart */}
        <div className="relative">
          <CartDrawer />
        </div>
      </main>

      {/* ✅ Optional Footer */}
      <footer className="mt-auto bg-white text-center py-4 text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Mini E-Commerce Store — Built with ❤️ using React & TailwindCSS
      </footer>
    </div>
  );
}
