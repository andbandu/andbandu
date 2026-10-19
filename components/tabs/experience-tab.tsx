"use client";

import React from "react";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import ShinyText from "@/components/ShinyText/ShinyText";

export function ExperienceTab() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div>
        <ShinyText
          text="My Experience"
          className="text-2xl md:text-3xl font-black text-white tracking-tight"
          color="#f4f4f5"
          shineColor="#fedc5a"
          speed={4}
        />
        <div className="underline-gold" />
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <SpotlightCard
            key={exp.id}
            color="rgba(168, 85, 247, 0.12)"
            spotlightSize={400}
            className="p-6 md:p-7 rounded-2xl bg-[#211d2c]/80 border border-white/10 shadow-lg relative"
          >
            {/* Header: Role & Period */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-gray-400 mt-1">
                  <span className="font-semibold text-[#fedc5a]">{exp.company}</span>
                  <span className="text-gray-600">•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="self-start md:self-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2a2537] text-gray-300 border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-[#fedc5a]" />
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-sm text-gray-300 leading-relaxed mb-5">
              {exp.summary}
            </p>

            {/* Achievements Breakdown */}
            <div className="space-y-4 mb-5">
              {exp.achievements.map((ach, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#fedc5a]">
                    {ach.category}
                  </h4>
                  <ul className="space-y-1 pl-1">
                    {ach.points.map((pt, ptIdx) => (
                      <li key={ptIdx} className="flex items-start gap-2 text-xs md:text-sm text-gray-300/90 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
              {exp.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 rounded-md bg-[#2b2638] text-[11px] font-medium text-gray-300 border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}
