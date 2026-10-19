"use client";

import React from "react";
import { Table, BarChart3, Database, Code2, Award, Zap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export function AboutTab() {
  const { profile, metrics, allSkillsList } = PORTFOLIO_DATA;

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      {/* About Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          About Me
        </h2>
        <div className="underline-gold" />

        <div className="space-y-4 text-gray-300/90 text-sm md:text-base leading-relaxed">
          <p>{profile.bio}</p>
          <p>{profile.subBio}</p>
        </div>
      </div>

      {/* Metrics Counters / Projects by Tool */}
      <div className="pt-2">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Excel Card */}
          <div className="p-4 rounded-2xl bg-[#212328] border border-[#2e313a] flex items-center gap-3.5 shadow-md hover:border-[#fedc5a]/40 transition-colors">
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

          {/* Power BI Card */}
          <div className="p-4 rounded-2xl bg-[#212328] border border-[#2e313a] flex items-center gap-3.5 shadow-md hover:border-[#fedc5a]/40 transition-colors">
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

          {/* SQL Card */}
          <div className="p-4 rounded-2xl bg-[#212328] border border-[#2e313a] flex items-center gap-3.5 shadow-md hover:border-[#fedc5a]/40 transition-colors">
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

          {/* Python Card */}
          <div className="p-4 rounded-2xl bg-[#212328] border border-[#2e313a] flex items-center gap-3.5 shadow-md hover:border-[#fedc5a]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
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
        </div>
      </div>

      {/* Key Skills Section */}
      <div className="pt-2">
        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          Key Skills
        </h2>
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

