"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export function ContactTab() {
  const { profile } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      <div>
        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          Let&apos;s Work Together!
        </h2>
        <div className="underline-gold" />

        <p className="text-sm md:text-base text-gray-300/90 leading-relaxed max-w-3xl">
          Feel free to get in touch with me. I am always open to discussing new projects,
          creative ideas, executive BI implementations, or opportunities to be part of your visions.
        </p>
      </div>

      {/* Contact Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email Box */}
        <div className="p-5 rounded-2xl bg-[#202227] border border-[#2e313b] flex items-start gap-4 hover:border-[#fedc5a]/40 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-[#2a2d36] flex items-center justify-center text-[#fedc5a] shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div className="overflow-hidden min-w-0">
            <p className="text-xs uppercase font-bold tracking-wider text-gray-400">
              Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm md:text-base font-medium text-white hover:text-[#fedc5a] truncate block mt-0.5 transition-colors"
            >
              {profile.email}
            </a>
          </div>
        </div>

        {/* LinkedIn Box */}
        <div className="p-5 rounded-2xl bg-[#202227] border border-[#2e313b] flex items-start gap-4 hover:border-[#fedc5a]/40 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-[#2a2d36] flex items-center justify-center text-[#fedc5a] shrink-0">
            <LinkedInIcon className="w-6 h-6" />
          </div>
          <div className="overflow-hidden min-w-0">
            <p className="text-xs uppercase font-bold tracking-wider text-gray-400">
              LinkedIn
            </p>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-medium text-white hover:text-[#fedc5a] truncate block mt-0.5 transition-colors"
            >
              Connect over LinkedIn
            </a>
          </div>
        </div>

        {/* GitHub Box */}
        <div className="p-5 rounded-2xl bg-[#202227] border border-[#2e313b] flex items-start gap-4 hover:border-[#fedc5a]/40 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-[#2a2d36] flex items-center justify-center text-[#fedc5a] shrink-0">
            <GitHubIcon className="w-6 h-6" />
          </div>
          <div className="overflow-hidden min-w-0">
            <p className="text-xs uppercase font-bold tracking-wider text-gray-400">
              GitHub
            </p>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-medium text-white hover:text-[#fedc5a] truncate block mt-0.5 transition-colors"
            >
              View GitHub Repositories
            </a>
          </div>
        </div>

        {/* Location Box */}
        <div className="p-5 rounded-2xl bg-[#202227] border border-[#2e313b] flex items-start gap-4 hover:border-[#fedc5a]/40 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-[#2a2d36] flex items-center justify-center text-[#fedc5a] shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="overflow-hidden min-w-0">
            <p className="text-xs uppercase font-bold tracking-wider text-gray-400">
              Location & Availability
            </p>
            <p className="text-sm md:text-base font-medium text-white truncate mt-0.5">
              {profile.location}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Contact Form */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#202227] border border-[#2e313b] shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#fedc5a]/10 text-[#fedc5a] flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
              Send Me a Direct Message
            </h3>
            <p className="text-xs text-gray-400">
              Typically replies within 24 business hours
            </p>
          </div>
        </div>

        {isSuccess ? (
          <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 shrink-0" />
            <div>
              <h4 className="font-bold text-white">Thank you! Your message has been sent.</h4>
              <p className="text-xs text-emerald-300/80 mt-1">
                I look forward to discussing how we can work together.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-gray-300 mb-1.5">
                  Your Name <span className="text-[#fedc5a]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#17181c] border border-[#333640] text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-[#fedc5a] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-gray-300 mb-1.5">
                  Your Email Address <span className="text-[#fedc5a]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#17181c] border border-[#333640] text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-[#fedc5a] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-gray-300 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                placeholder="Data Analytics Consultation / Role Opportunity"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#17181c] border border-[#333640] text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-[#fedc5a] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-gray-300 mb-1.5">
                Message <span className="text-[#fedc5a]">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Share project scope, dataset requirements, or questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#17181c] border border-[#333640] text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-[#fedc5a] transition-colors resize-none"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="warning"
                size="lg"
                className="rounded-full px-8 font-bold flex items-center gap-2"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
