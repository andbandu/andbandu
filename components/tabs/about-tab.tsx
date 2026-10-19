"use client";

import React from "react";
import { Table, BarChart3, Database, Code2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import ShinyText from "@/components/ShinyText/ShinyText";

export function AboutTab() {
  const { profile, metrics, allSkillsList } = PORTFOLIO_DATA;

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      {/* About Section */}
      <div>
        <div className="flex items-center gap-3">
          <ShinyText
            text="About Me"
            className="text-2xl md:text-3xl font-black text-white tracking-tight"
            color="#f4f4f5"
            shineColor="#fedc5a"
            speed={4}
          />
        </div>
        <div className="underline-gold" />

        <div className="space-y-4 text-gray-300/90 text-sm md:text-base leading-relaxed">
          <p>{profile.bio}</p>
          <p>{profile.subBio}</p>
        </div>
      </div>

      {/* Metrics Counters with React Bits SpotlightCard */}
      <div className="pt-2">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Excel Card */}
          <SpotlightCard
            color="rgba(16, 185, 129, 0.15)"
            spotlightSize={280}
            className="p-4 rounded-2xl bg-[#23202c]/80 border border-white/10 shadow-lg"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Table className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-[#fedc5a]">
                  {metrics.excelProjects}
                </div>
                <div className="text-xs font-medium text-gray-400">
                  Excel Project
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Power BI Card */}
          <SpotlightCard
            color="rgba(245, 158, 11, 0.15)"
            spotlightSize={280}
            className="p-4 rounded-2xl bg-[#23202c]/80 border border-white/10 shadow-lg"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-[#fedc5a]">
                  {metrics.powerBiProjects}
                </div>
                <div className="text-xs font-medium text-gray-400">
                  PowerBI Projects
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* SQL Card */}
          <SpotlightCard
            color="rgba(14, 165, 233, 0.15)"
            spotlightSize={280}
            className="p-4 rounded-2xl bg-[#23202c]/80 border border-white/10 shadow-lg"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-[#fedc5a]">
                  {metrics.sqlProjects}
                </div>
                <div className="text-xs font-medium text-gray-400">
                  SQL Project
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Python Card */}
          <SpotlightCard
            color="rgba(168, 85, 247, 0.15)"
            spotlightSize={280}
            className="p-4 rounded-2xl bg-[#23202c]/80 border border-white/10 shadow-lg"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-[#fedc5a]">
                  {metrics.pythonProjects}
                </div>
                <div className="text-xs font-medium text-gray-400">
                  Python Project
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>

      {/* Key Skills Section */}
      <div className="pt-2">
        <ShinyText
          text="Key Skills"
          className="text-2xl md:text-3xl font-black text-white tracking-tight"
          color="#f4f4f5"
          shineColor="#fedc5a"
          speed={4}
        />
        <div className="underline-gold" />

        <div className="flex flex-wrap gap-2.5 md:gap-3">
          {allSkillsList.map((skill, idx) => (
            <div
              key={idx}
              className="key-badge px-4 py-2 rounded-xl text-xs md:text-sm font-semibold tracking-wide uppercase cursor-default select-none"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
