import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutForm() {
  const { items, total, clear } = useCart();
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (items.length === 0) {
      setStatus({ ok: false, msg: "Cart is empty." });
      return;
    }

    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      address: form.address.value.trim(),
      items,
      total,
    };

    if (!data.name || !data.email || !data.address) {
      setStatus({ ok: false, msg: "Please fill all fields." });
      return;
    }

    await new Promise((r) => setTimeout(r, 600));
    setStatus({ ok: true, msg: "Payment simulated — order placed!" });
    clear();
  };

  return (
    <form
      className="bg-white p-6 rounded-2xl shadow-lg max-w-lg mx-auto mt-6"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl font-bold text-indigo-600 mb-4">Checkout</h3>

      <label className="block mb-3">
        <span className="text-gray-700">Name</span>
        <input
          name="name"
          className="w-full mt-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
          required
        />
      </label>

      <label className="block mb-3">
        <span className="text-gray-700">Email</span>
        <input
          name="email"
          type="email"
          className="w-full mt-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
          required
        />
      </label>

      <label className="block mb-3">
        <span className="text-gray-700">Address</span>
        <textarea
          name="address"
          className="w-full mt-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
          required
        />
      </label>

      <div className="flex justify-between items-center mt-4">
        <div className="text-lg font-semibold">
          Total: ₹{(total / 100).toFixed(2)}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Place Order
        </button>
      </div>

      {status && (
        <div
          className={`mt-4 text-center font-semibold ${
            status.ok ? "text-green-600" : "text-red-500"
          }`}
        >
          {status.msg}
        </div>
      )}
    </form>
  );
}
