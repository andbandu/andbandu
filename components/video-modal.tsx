"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

export function VideoModal({ isOpen, onClose, videoUrl, title = "Portfolio Video Presentation" }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-[#383b45]">
        <DialogHeader className="p-4 bg-[#18191d] border-b border-[#2d3038]">
          <DialogTitle className="text-lg text-white font-semibold">{title}</DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video w-full bg-black">
          {videoUrl ? (
            <iframe
              src={videoUrl}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Video preview unavailable
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

