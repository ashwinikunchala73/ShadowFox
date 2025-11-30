import React from "react";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Trash2, Minus, Plus } from "lucide-react";

export default function CartDrawer() {
  const { items, updateQty, remove, total, clear } = useCart();

  const isEmpty = items.length === 0;

  return (
    <aside className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm mx-auto mt-6 border border-gray-100 transition-all">
      <h3 className="text-2xl font-bold text-indigo-600 flex items-center gap-2 mb-4">
        <ShoppingCart className="w-6 h-6 text-indigo-500" />
        Your Cart
      </h3>

      {/* 🛒 Empty cart UI */}
      {isEmpty ? (
        <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
            className="w-24 h-24 opacity-70"
          />
          <p className="text-gray-500 text-lg font-medium">
            Your cart is empty
          </p>
          <p className="text-sm text-gray-400">Start adding some products 🛍️</p>
        </div>
      ) : (
        <>
          {/* 🧾 Cart Items */}
          <ul className="divide-y divide-gray-200 max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {items.map((it) => (
              <li
                key={it.id}
                className="flex justify-between items-center py-4 hover:bg-gray-50 px-2 rounded-lg transition"
              >
                <div>
                  <strong className="text-gray-800 block">{it.title}</strong>
                  <div className="text-sm text-gray-500">
                    ₹{(it.price / 100).toFixed(2)}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(it.id, it.qty - 1)}
                    disabled={it.qty <= 1}
                    className="p-1 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-6 text-center font-medium">{it.qty}</span>
                  <button
                    onClick={() => updateQty(it.id, it.qty + 1)}
                    className="p-1 rounded-md bg-gray-200 hover:bg-gray-300"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => remove(it.id)}
                  className="text-red-500 hover:text-red-600 transition"
                  title="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>

          {/* 💰 Total + Clear Cart */}
          <div className="mt-6 border-t pt-4 flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-800">
              Total: ₹{(total / 100).toFixed(2)}
            </span>
            <button
              onClick={clear}
              className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              <Trash2 className="w-4 h-4" /> Clear
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
