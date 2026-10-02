import React from "react";
import { X, Download, Award } from "lucide-react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl?: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  imageUrl = "/assets/certificate.png"
}: CertificateModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative max-w-4xl w-full rounded-xl border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#161b22] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#d0d7de] dark:border-[#30363d] px-4 py-3 bg-[#f6f8fa] dark:bg-[#0d1117]">
          <div className="flex items-center gap-2">
            <Award className="text-[#d29922]" size={18} />
            <h3 className="font-semibold text-sm text-[#1f2328] dark:text-[#f0f6fc]">
              Certificate of Recognition — Tech for Kids Academy
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={imageUrl}
              download="TechForKids_Certificate_Hangsovoleak.png"
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#21262d] text-[#1f2328] dark:text-[#c9d1d9] hover:bg-[#f6f8fa] dark:hover:bg-[#30363d] transition-colors"
            >
              <Download size={13} />
              <span>Download</span>
            </a>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-[#656d76] dark:text-[#8b949e] hover:bg-[#eaeef2] dark:hover:bg-[#21262d] transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Certificate Image View */}
        <div className="p-4 bg-[#f6f8fa] dark:bg-[#0d1117] flex items-center justify-center max-h-[75vh] overflow-auto">
          <img
            src={imageUrl}
            alt="Official Certificate of Recognition"
            className="max-h-[70vh] w-auto rounded-lg shadow-md border border-[#d0d7de] dark:border-[#30363d] object-contain"
          />
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#161b22] text-xs text-[#656d76] dark:text-[#8b949e] flex items-center justify-between">
          <span>Awarded to Rorn Hangsovoleak for IT Support &amp; Technical Excellence</span>
          <span className="font-mono text-[11px]">October 2025 – January 2026</span>
        </div>
      </div>
    </div>
  );
}
