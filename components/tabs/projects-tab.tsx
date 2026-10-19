"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Table, BarChart3, Database, Code2, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA, Project } from "@/lib/portfolio-data";
import { ProjectModal } from "@/components/project-modal";

export function ProjectsTab() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { projects } = PORTFOLIO_DATA;

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "powerbi", label: "Power BI" },
    { id: "excel", label: "Excel" },
    { id: "sql", label: "SQL" },
    { id: "python", label: "Python" },
    { id: "ai", label: "AI & ML" },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.toolType === selectedFilter);

  const handleOpenProject = (project: Project) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  const getToolIcon = (toolType: string) => {
    switch (toolType) {
      case "excel":
        return <Table className="w-5 h-5 text-emerald-400" />;
      case "powerbi":
        return <BarChart3 className="w-5 h-5 text-amber-400" />;
      case "sql":
        return <Database className="w-5 h-5 text-sky-400" />;
      case "python":
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case "ai":
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      default:
        return <BarChart3 className="w-5 h-5 text-[#fedc5a]" />;
    }
  };

  return (
    <>
      <div className="space-y-8 animate-in fade-in duration-300">
        {/* Title */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            My Projects
          </h2>
          <div className="underline-gold" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-1 pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === filter.id
                  ? "bg-[#fedc5a] text-[#111215] shadow-md shadow-[#fedc5a]/20 scale-105"
                  : "bg-[#212328] text-gray-300 border border-[#31343e] hover:border-[#fedc5a]/40 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenProject(project)}
              className="project-card-outer p-3.5 flex flex-col justify-between cursor-pointer group"
            >
              {/* Image Preview Box */}
              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[#18191d] border border-[#2c2f38]">
                {project.screenshots?.[0]?.image ? (
                  <img
                    src={project.screenshots[0].image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-gray-500">
                    No Preview
                  </div>
                )}
                {/* Tool Badge Chip */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-bold text-gray-200">
                  {project.toolLabel}
                </div>
              </div>

              {/* Data Section */}
              <div className="pt-4 pb-2 px-1 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#fedc5a] transition-colors line-clamp-2 mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-4 line-clamp-1">
                    <span className="text-gray-400">Domain/Function: </span>
                    <span className="text-gray-300 font-medium">{project.domain}</span>
                  </p>
                </div>

                {/* Bottom Bar: Action Button + Tool Icon */}
                <div className="flex items-center justify-between pt-2 border-t border-[#2d3038]">
                  <button
                    type="button"
                    className="project-action-btn text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#444853] text-gray-300 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>See My Work</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="w-8 h-8 rounded-lg bg-[#272a33] flex items-center justify-center">
                    {getToolIcon(project.toolType)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

