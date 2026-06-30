"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { siteConfig } from "../data/site.config";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {siteConfig.faq.map((item, index) => (
        <div key={item.question} className="premium-card overflow-hidden rounded-2xl">
          <button onClick={() => setOpen(open === index ? null : index)} className="flex w-full items-center justify-between px-6 py-5 text-left font-bold text-white">
            {item.question}<Plus className={`transition ${open === index ? "rotate-45" : ""}`} size={18} />
          </button>
          {open === index && <div className="px-6 pb-6 text-sm leading-7 text-white/58">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}
