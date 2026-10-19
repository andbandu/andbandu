"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Play,
  Layers,
  Sparkles,
  BarChart,
  CheckCircle2,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";
import { Project } from "@/lib/portfolio-data";
import ShinyText from "@/components/ShinyText/ShinyText";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!project) return null;

  const screenshots = project.screenshots || [];
  const hasMultipleSlides = screenshots.length > 1;

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl max-h-[92vh] overflow-y-auto bg-[#1a1725] border-white/10 p-6 md:p-8 text-gray-200 shadow-2xl">
        <DialogHeader className="border-b border-white/10 pb-4">
          <DialogTitle className="text-xl md:text-2xl font-black text-white text-left tracking-tight">
            <ShinyText text={project.title} color="#ffffff" shineColor="#fedc5a" speed={4} />
          </DialogTitle>
        </DialogHeader>

        {/* Top Split Section: Info Left, Carousel Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 pb-6">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Tool & Domain Badges */}
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-lg bg-blue-500/15 text-blue-400 border border-blue-500/30 text-xs md:text-sm font-semibold">
                {project.toolLabel}
              </span>
              <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                {project.toolType.toUpperCase()}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
              {project.title}
            </h3>

            <div className="text-sm text-gray-400">
              <span className="text-gray-400 font-medium">Domain / Function: </span>
              <span className="text-emerald-400 font-bold">{project.domain}</span>
            </div>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Engagement & Source Action Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {/* LinkedIn Pill */}
              {project.engagementUrl && (
                <a
                  href={project.engagementUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:text-white transition-all text-xs font-semibold"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <LinkedInIcon className="w-3.5 h-3.5" />
                  </div>
                  <span>View Project Engagement</span>
                </a>
              )}

              {/* GitHub Pill */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 hover:text-white transition-all text-xs font-semibold"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                    <GitHubIcon className="w-3.5 h-3.5" />
                  </div>
                  <span>View Project on GitHub</span>
                </a>
              )}

              {/* Live Interactive Dashboard Pill */}
              {project.liveDashboardUrl && (
                <a
                  href={project.liveDashboardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#fedc5a]/10 border border-[#fedc5a]/30 text-[#fedc5a] hover:bg-[#fedc5a]/20 hover:text-[#fedc5a] transition-all text-xs font-semibold"
                >
                  <div className="w-6 h-6 rounded-full bg-[#fedc5a] text-[#111215] flex items-center justify-center">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <span>Live Interactive Dashboard</span>
                </a>
              )}
            </div>

            {/* Other Tools Badges */}
            {project.otherTools && project.otherTools.length > 0 && (
              <div className="pt-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-2.5">
                  Other Tools & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.otherTools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#242730] text-gray-300 border border-[#373a46] text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column (7 cols): Interactive Carousel */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {screenshots.length > 0 ? (
              <div className="relative rounded-2xl overflow-hidden bg-[#221e2d] border border-white/10 p-2 shadow-xl">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/60">
                  <img
                    src={screenshots[currentSlide].image}
                    alt={screenshots[currentSlide].title}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />

                  {/* Carousel Nav Arrows */}
                  {hasMultipleSlides && (
                    <>
                      <button
                        onClick={handlePrevSlide}
                        aria-label="Previous slide"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 hover:bg-[#fedc5a] hover:text-black text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNextSlide}
                        aria-label="Next slide"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 hover:bg-[#fedc5a] hover:text-black text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Caption & Indicators */}
                <div className="p-3 text-center">
                  <p className="text-xs md:text-sm text-gray-300/90 italic font-medium px-4">
                    &ldquo;{screenshots[currentSlide].caption}&rdquo;
                  </p>

                  {/* Indicators */}
                  {hasMultipleSlides && (
                    <div className="flex items-center justify-center gap-1.5 mt-2.5">
                      {screenshots.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            idx === currentSlide
                              ? "w-6 bg-[#fedc5a]"
                              : "w-2 bg-gray-600 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-white/10 my-4" />

        {/* Bottom Section: Full Project Details */}
        <div className="space-y-6 pt-2">
          <div>
            <h4 className="text-xl font-black text-white tracking-tight mb-3">
              Project Details
            </h4>
            <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed bg-[#221e2d]/75 p-5 rounded-2xl border border-white/10 shadow-lg">
              <div>
                <span className="font-bold text-white block mb-1">
                  📈 Project Overview
                </span>
                <p>{project.overview}</p>
              </div>

              {project.steps && project.steps.length > 0 && (
                <div className="pt-2">
                  <span className="font-bold text-white block mb-2">
                    🔍 Process & Steps
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.steps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#2b2638] border border-white/10 text-xs md:text-sm"
                      >
                        <span className="font-bold text-[#fedc5a] block mb-0.5">
                          {step.phase}
                        </span>
                        <span className="text-gray-300">{step.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.keyInsights && project.keyInsights.length > 0 && (
                <div className="pt-2">
                  <span className="font-bold text-white block mb-2">
                    💡 Key Insights Uncovered
                  </span>
                  <ul className="space-y-1.5 pl-1">
                    {project.keyInsights.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs md:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#fedc5a] shrink-0 mt-0.5" />
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.results && (
                <div className="pt-2">
                  <span className="font-bold text-white block mb-1">
                    🎯 Business Result & Impact
                  </span>
                  <p className="text-[#fedc5a]/95 font-medium">{project.results}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
