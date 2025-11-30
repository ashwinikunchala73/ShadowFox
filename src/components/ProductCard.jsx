import React from "react";

export default function ProductCard({ p, onAdd }) {
  return (
    <article className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center">
      <div className="w-full h-48 overflow-hidden rounded-xl mb-3">
        {p.image ? (
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover hover:scale-105 transition"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">
            No image
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{p.title}</h3>
      <p className="text-indigo-600 font-bold">₹{(p.price / 100).toFixed(2)}</p>
      <p className="text-sm text-gray-500 line-clamp-2">{p.description}</p>
      <button
        onClick={() => onAdd(p)}
        className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Add to Cart
      </button>
    </article>
  );
}
