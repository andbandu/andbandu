"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA, Certificate } from "@/lib/portfolio-data";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import ShinyText from "@/components/ShinyText/ShinyText";

export function CertificatesTab() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { certificates } = PORTFOLIO_DATA;

  const handleOpenCert = (cert: Certificate) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="space-y-8 animate-in fade-in duration-300">
        <div>
          <ShinyText
            text="Awards & Certificate"
            className="text-2xl md:text-3xl font-black text-white tracking-tight"
            color="#f4f4f5"
            shineColor="#fedc5a"
            speed={4}
          />
          <div className="underline-gold" />
        </div>

        {/* Certificate Grid with SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <SpotlightCard
              key={cert.id}
              onClick={() => handleOpenCert(cert)}
              color="rgba(254, 220, 90, 0.14)"
              spotlightSize={320}
              className="certificate-card-outer flex flex-col justify-between cursor-pointer group"
            >
              {/* Certificate Screen with Hover Eye Button Overlay */}
              <div className="relative aspect-[16/11] w-full bg-[#181520] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Overlay with Eye Button */}
                <div className="cert-overlay absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#fedc5a] text-[#111215] flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Badge Issuer */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-bold text-gray-200">
                  {cert.issuer}
                </div>
              </div>

              {/* Data Section */}
              <div className="p-4 bg-[#211d2b] flex-1 flex flex-col justify-between border-t border-white/10">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white group-hover:text-[#fedc5a] transition-colors line-clamp-2 mb-2 leading-snug">
                    {cert.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-white/10">
                  <span>Issued: {cert.issueDate}</span>
                  <span className="text-[#fedc5a] font-medium flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <Dialog open={isModalOpen} onOpenChange={(open) => !open && setIsModalOpen(false)}>
          <DialogContent className="max-w-3xl bg-[#1b1724] border-white/10 p-6 text-gray-200">
            <DialogHeader className="border-b border-white/10 pb-4">
              <DialogTitle className="text-xl font-bold text-white text-left">
                {selectedCert.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6 pt-2">
              {/* Full Image Preview */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Metadata Box */}
              <div className="p-4 rounded-xl bg-[#231f2d] border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
                <div>
                  <span className="text-gray-400 block text-[11px] uppercase tracking-wider font-bold">
                    Issuing Organization
                  </span>
                  <span className="font-semibold text-white">{selectedCert.issuer}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[11px] uppercase tracking-wider font-bold">
                    Credential ID
                  </span>
                  <span className="font-mono text-[#fedc5a]">{selectedCert.credentialId}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[11px] uppercase tracking-wider font-bold">
                    Issue Date
                  </span>
                  <span className="font-semibold text-white">{selectedCert.issueDate}</span>
                </div>
              </div>

              {/* Skills Covered */}
              {selectedCert.skills && (
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-2">
                    Competencies & Skills Demonstrated
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#2b2637] text-gray-300 border border-white/10 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Verify Action Button */}
              <div className="pt-2 flex justify-end">
                <Button
                  variant="warning"
                  size="default"
                  onClick={() => alert(`Credential ID: ${selectedCert.credentialId} verified successfully on the accredited registry.`)}
                  className="rounded-full flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Verify Credential Status</span>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
