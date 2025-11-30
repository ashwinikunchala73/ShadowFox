import React, { useMemo, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { products as mockProducts } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductList({ apiEndpoint }) {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("all");
  const { add } = useCart();

  useEffect(() => {
    if (apiEndpoint) {
      fetch(apiEndpoint)
        .then((r) => r.json())
        .then(setItems)
        .catch(() => setItems(mockProducts));
    } else {
      setItems(mockProducts);
    }
  }, [apiEndpoint]);

  const categories = useMemo(
    () => ["all", ...new Set(items.map((i) => i.category))],
    [items]
  );

  const filtered = items.filter((i) => {
    if (category !== "all" && i.category !== category) return false;
    if (!q) return true;
    const s = q.toLowerCase();
    return (
      i.title.toLowerCase().includes(s) ||
      (i.description || "").toLowerCase().includes(s)
    );
  });

  return (
    <section className="p-6">
      <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
        <input
          type="text"
          placeholder="Search..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} p={p} onAdd={() => add(p)} />
        ))}
      </div>
    </section>
  );
}
