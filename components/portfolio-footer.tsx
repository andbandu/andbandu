"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export function PortfolioFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-16 md:mt-24 border-t border-[#272931] py-8 text-gray-400 text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left">
          &copy; 2026{" "}
          <span className="text-[#fedc5a] font-semibold">
            Andbandu.com
          </span>
          . All Rights Reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-[#fedc5a] transition-colors cursor-pointer group"
        >
          <span>Back to Top</span>
          <div className="w-7 h-7 rounded-full bg-[#24262d] group-hover:bg-[#fedc5a] group-hover:text-black text-gray-300 flex items-center justify-center transition-colors">
            <ArrowUp className="w-3.5 h-3.5" />
          </div>
        </button>
      </div>
    </footer>
  );
}

