"use client";

import { PRODUCT_DN_SIZES } from "@/lib/constants";
import { useState } from "react";

export default function SizeSelector() {
  const [selected, setSelected] = useState("");

  return (
    <div className="space-y-2 mb-10">
      <label className="text-sm font-semibold text-slate-600">Select Size (DN)</label>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
      >
        <option value="">Select DN Size</option>
        {PRODUCT_DN_SIZES.map((size) => (
          <option key={size} value={size}>{size}</option>
        ))}
      </select>
    </div>
  );
}
