"use client";

import React, { useState } from "react";
import { SidebarProfile } from "@/components/sidebar-profile";
import { AboutTab } from "@/components/tabs/about-tab";
import { ProjectsTab } from "@/components/tabs/projects-tab";
import { ExperienceTab } from "@/components/tabs/experience-tab";
import { CertificatesTab } from "@/components/tabs/certificates-tab";
import { ContactTab } from "@/components/tabs/contact-tab";
import { PortfolioFooter } from "@/components/portfolio-footer";
import { User, FolderGit2, Briefcase, Award, Send } from "lucide-react";

type TabKey = "about" | "projects" | "experience" | "certificates" | "contact";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("about");

  const navItems: { key: TabKey; label: string; icon: React.ElementType }[] = [
    { key: "about", label: "About", icon: User },
    { key: "projects", label: "Projects", icon: FolderGit2 },
    { key: "experience", label: "Experience", icon: Briefcase },
    { key: "certificates", label: "Certificates", icon: Award },
    { key: "contact", label: "Contact", icon: Send },
  ];

  return (
    <div className="min-h-screen bg-[#0f1013] text-gray-100 flex flex-col selection:bg-[#fedc5a] selection:text-black">
      {/* Main Content Area */}
      <main className="flex-1 pt-8 md:pt-12 pb-20 md:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          {/* Left Column: Profile Card (Sticky on xl screens) */}
          <div className="xl:col-span-4 xl:sticky xl:top-8 z-20">
            <SidebarProfile />
          </div>

          {/* Right Column: Main Tab Content Card */}
          <div className="xl:col-span-8">
            <div className="portfolio-card relative overflow-hidden min-h-[640px] shadow-2xl">
              {/* Desktop Tab Navigation (Anchored to top right of the card) */}
              <div className="hidden lg:flex justify-end">
                <nav
                  aria-label="Portfolio tabs"
                  className="menu-tab-container flex items-center px-4 py-1"
                >
                  {navItems.map((item) => {
                    const isActive = activeTab === item.key;
                    return (
                      <button
                        key={item.key}
                        onClick={() => setActiveTab(item.key)}
                        className={`px-4 py-3 text-sm font-semibold transition-all relative cursor-pointer ${
                          isActive
                            ? "text-[#fedc5a]"
                            : "text-gray-400 hover:text-gray-200"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <div className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-[#fedc5a] rounded-full" />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Tab Content Padding */}
              <div className="p-6 md:p-10 pt-8 lg:pt-12">
                {activeTab === "about" && <AboutTab />}
                {activeTab === "projects" && <ProjectsTab />}
                {activeTab === "experience" && <ExperienceTab />}
                {activeTab === "certificates" && <CertificatesTab />}
                {activeTab === "contact" && <ContactTab />}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Fixed Navigation Bar */}
      <div className="menu-tab-mobile lg:hidden flex items-center justify-around py-2.5 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.key;
          return (
            <button
              key={item.key}
              onClick={() => {
                setActiveTab(item.key);
                window.scrollTo({ top: 320, behavior: "smooth" });
              }}
              className={`flex flex-col items-center gap-1 py-1 px-2.5 text-[11px] font-medium transition-colors cursor-pointer ${
                isActive
                  ? "text-[#fedc5a]"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-[#fedc5a]" : "text-gray-400"}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <PortfolioFooter />
    </div>
  );
}
