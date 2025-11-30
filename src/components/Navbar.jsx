import React from "react";
import { useCart } from "../context/CartContext";

export default function Navbar({ search, setSearch }) {
  const { items } = useCart();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <h2 className="text-2xl font-bold text-indigo-600">Mini E-Commerce</h2>
      </div>

      <div className="flex-1 max-w-md mx-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Cart ({items.length})
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
          Orders
        </button>
      </div>
    </nav>
  );
}
