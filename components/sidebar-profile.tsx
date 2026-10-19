"use client";

import React, { useState } from "react";
import { Mail, Download, Play, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { VideoModal } from "@/components/video-modal";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import ProfileCard from "@/components/ProfileCard/ProfileCard";

export function SidebarProfile() {
  const [showContactsMobile, setShowContactsMobile] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { profile } = PORTFOLIO_DATA;

  const handleContactClick = () => {
    // Smooth scroll to contact tab if on page or open email
    const contactElement = document.querySelector("#contact") || document.querySelector("footer");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <>
      <div className="portfolio-card p-4 md:p-6 text-center relative overflow-hidden transition-all duration-300">
        {/* Mobile Toggle Button */}
        <div className="xl:hidden mb-3 flex justify-end">
          <Button
            variant="soft"
            size="sm"
            onClick={() => setShowContactsMobile(!showContactsMobile)}
            className="flex items-center gap-1.5 text-xs font-semibold py-1 px-3 rounded-lg"
          >
            <span>{showContactsMobile ? "Hide Details" : "Show Details"}</span>
            {showContactsMobile ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </Button>
        </div>

        {/* React Bits ProfileCard Component with 3D Holographic Tilt */}
        <div className="flex justify-center mb-4 relative group">
          <ProfileCard
            avatarUrl={profile.avatarUrl}
            name={profile.name}
            title={profile.headline}
            handle="andbandu"
            status="Available for Projects"
            statusColor="#22c55e"
            contactText="Contact"
            onContactClick={handleContactClick}
            theme="dark"
            radius={18}
            holo={0.85}
            glare={0.6}
            tiltStrength={12}
            parallax={8}
            enableTilt={true}
            intro={true}
            showUserInfo={true}
            className="w-full max-w-[340px]"
          />

          {/* Floating Video Intro Play Button */}
          <button
            onClick={() => setIsVideoModalOpen(true)}
            aria-label="Play introduction video"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#fedc5a] text-[#111215] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-[#1a1b1f]"
            title="Watch Intro Video"
          >
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#2d3038] my-4" />

        {/* Contact Info & Socials (Always visible on desktop, toggled on mobile) */}
        <div className={`space-y-4 text-left ${showContactsMobile ? "block" : "hidden xl:block"}`}>
          {/* Email Item */}
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#22242b]/60 border border-[#2d3038]/70 hover:border-[#fedc5a]/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-[#2a2d36] flex items-center justify-center text-[#fedc5a] shrink-0">
              <Mail className="w-4 h-4" />
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
            <div className="w-9 h-9 rounded-xl bg-[#2a2d36] flex items-center justify-center text-[#fedc5a] shrink-0">
              <MapPin className="w-4 h-4" />
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
          <div className="flex items-center justify-center gap-3 pt-1">
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
          <div className="pt-1">
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
