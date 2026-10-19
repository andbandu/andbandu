"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export function PortfolioHeader() {
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-40">
      <div className="portfolio-top-bar rounded-b-2xl px-5 py-2.5 flex items-center gap-3 backdrop-blur-md">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-[#fedc5a] shadow-inner">
          <Sparkles className="w-4 h-4 text-[#fedc5a]" />
        </div>
        <div className="text-xs sm:text-sm font-medium text-white/90 leading-tight">
          <span className="text-white/60 block text-[11px] uppercase tracking-wider">Powered by</span>
          <span className="font-bold text-[#fedc5a] hover:underline cursor-pointer">
            Codebasics Bootcamp
          </span>
        </div>
      </div>
    </div>
  );
}

