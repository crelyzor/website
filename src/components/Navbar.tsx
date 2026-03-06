"use client";

import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between"
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div
          className="w-7 h-7 rounded-lg border flex items-center justify-center"
          style={{ borderColor: "#d4af6150", backgroundColor: "#111" }}
        >
          <span style={{ color: "#d4af61" }} className="text-[11px] font-semibold">C</span>
        </div>
        <span className="text-white font-medium text-sm tracking-tight">Crelyzor</span>
      </div>

      {/* Right */}
      <a
        href="#waitlist"
        className="text-xs font-medium px-4 py-2 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all"
      >
        Early access
      </a>
    </motion.header>
  );
}
