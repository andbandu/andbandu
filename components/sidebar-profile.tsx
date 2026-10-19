"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Download, Play, ChevronDown, ChevronUp, MapPin, Briefcase } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VideoModal } from "@/components/video-modal";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export function SidebarProfile() {
  const [showContactsMobile, setShowContactsMobile] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { profile } = PORTFOLIO_DATA;

  return (
    <>
      <div className="portfolio-card p-6 md:p-8 text-center relative overflow-hidden transition-all duration-300">
        {/* Mobile Toggle Button */}
        <div className="xl:hidden mb-4 flex justify-end">
          <Button
            variant="soft"
            size="sm"
            onClick={() => setShowContactsMobile(!showContactsMobile)}
            className="flex items-center gap-1.5 text-xs font-semibold py-1 px-3 rounded-lg"
          >
            <span>{showContactsMobile ? "Hide Contacts" : "Show Contacts"}</span>
            {showContactsMobile ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </Button>
        </div>

        {/* Profile Pic & Main Identity */}
        <div className="flex flex-col items-center">
          <div className="relative mb-5 group">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-3xl overflow-hidden border-2 border-[#363a44] p-1 bg-[#23252c] shadow-2xl relative">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Play Button overlay */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              aria-label="Play introduction video"
              className="absolute -bottom-2 -right-2 w-11 h-11 rounded-full bg-[#fedc5a] text-[#111215] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-[#1a1b1f]"
              title="Watch Intro Video"
            >
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </button>
          </div>

          <h1 className="text-xl md:text-2xl font-black text-white tracking-tight mb-2">
            {profile.name}
          </h1>

          <div className="mb-4">
            <span className="inline-block px-3.5 py-1 text-xs font-medium text-gray-200 bg-[#262830] border border-[#353842] rounded-full">
              {profile.headline}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#2d3038] my-5" />

        {/* Contact Info & Socials (Always visible on desktop, toggled on mobile) */}
        <div className={`space-y-5 text-left ${showContactsMobile ? "block" : "hidden xl:block"}`}>
          {/* Email Item */}
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#22242b]/60 border border-[#2d3038]/70 hover:border-[#fedc5a]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#2a2d36] flex items-center justify-center text-[#fedc5a] shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="overflow-hidden min-w-0">
              <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                Email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="text-xs md:text-sm text-gray-200 hover:text-[#fedc5a] font-normal truncate block transition-colors"
                title={profile.email}
              >
                {profile.email}
              </a>
            </div>
          </div>

          {/* Location Item */}
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#22242b]/60 border border-[#2d3038]/70">
            <div className="w-10 h-10 rounded-xl bg-[#2a2d36] flex items-center justify-center text-[#fedc5a] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="overflow-hidden min-w-0">
              <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                Location
              </p>
              <p className="text-xs md:text-sm text-gray-200 truncate">
                {profile.location}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full border border-[#3b3f4b] flex items-center justify-center text-gray-300 hover:text-[#fedc5a] hover:border-[#fedc5a] hover:bg-[#fedc5a]/10 transition-all cursor-pointer"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full border border-[#3b3f4b] flex items-center justify-center text-gray-300 hover:text-[#fedc5a] hover:border-[#fedc5a] hover:bg-[#fedc5a]/10 transition-all cursor-pointer"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Download CV Button */}
          <div className="pt-2">
            <Button
              variant="warning"
              size="lg"
              className="w-full rounded-full font-bold text-sm tracking-wide flex items-center justify-center gap-2"
              onClick={() => {
                alert("Downloading curriculum vitae (CV)...");
              }}
            >
              <span>Download CV</span>
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={profile.videoIntroUrl}
        title={`${profile.name} - Video Introduction`}
      />
    </>
  );
}
