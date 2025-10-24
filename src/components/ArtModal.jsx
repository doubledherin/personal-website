// src/components/ArtModal.jsx
import { useState, useEffect } from "react";
import { artPieces } from "../constants/artPieces.js";

export default function ArtModal({ isOpen, onClose, initialArtId = null }) {
  const [currentArtIndex, setCurrentArtIndex] = useState(0);
  const [currentArt, setCurrentArt] = useState(null);

  // Set initial art when modal opens
  useEffect(() => {
    if (initialArtId && isOpen) {
      const artIndex = artPieces.findIndex((art) => art.id === initialArtId);
      if (artIndex !== -1) {
        setCurrentArtIndex(artIndex);
      }
    }
  }, [initialArtId, isOpen]);

  // Update current art when index changes
  useEffect(() => {
    setCurrentArt(artPieces[currentArtIndex]);
  }, [currentArtIndex]);

  // Navigation functions
  const nextArt = () => {
    setCurrentArtIndex((prev) => (prev + 1) % artPieces.length);
  };

  const previousArt = () => {
    setCurrentArtIndex(
      (prev) => (prev - 1 + artPieces.length) % artPieces.length,
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!isOpen) return;

      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowRight") {
        nextArt();
      } else if (event.key === "ArrowLeft") {
        previousArt();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !currentArt) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={handleBackdropClick}
    >
      <div className="relative flex h-full w-full flex-col lg:flex-row">
        {/* Close button */}
        <button
          onClick={onClose}
          className="hover:text-sand hover:border-sand/50 absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl font-bold text-white transition-colors md:top-6 md:right-6"
        >
          ×
        </button>

        {/* Navigation arrows */}
        <button
          onClick={previousArt}
          className="hover:text-sand hover:border-sand/50 absolute top-1/2 left-4 z-20 flex hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl font-bold text-white transition-colors md:left-6 md:block md:h-12 md:w-12"
        >
          ‹
        </button>
        <button
          onClick={nextArt}
          className="hover:text-sand hover:border-sand/50 absolute top-1/2 right-4 z-20 flex hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl font-bold text-white transition-colors md:right-6 md:block md:h-12 md:w-12"
        >
          ›
        </button>

        {/* Content area */}
        <div className="flex flex-1 items-center justify-center p-4 lg:pr-0">
          <iframe
            src={currentArt.url}
            className="h-[60vh] w-full max-w-none rounded-lg border border-white/20 md:h-[70vh] lg:h-[80vh] lg:max-w-4xl"
            frameBorder="0"
            title={currentArt.title}
          />
        </div>

        {/* Info panel */}
        <div className="w-full overflow-y-auto border-t border-white/10 bg-black/50 lg:w-80 lg:border-t-0 lg:border-l">
          <div className="p-4 md:p-6 lg:p-8">
            <h2 className="mb-3 text-2xl font-light text-white md:mb-4 md:text-3xl">
              {currentArt.title}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-gray-300 md:mb-6 md:text-base">
              {currentArt.inspiration}
            </p>

            {/* Mobile navigation buttons */}
            <div className="mb-4 flex gap-2 lg:hidden">
              <button
                onClick={previousArt}
                className="hover:border-sand/50 hover:text-sand flex-1 rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors"
              >
                ← Previous
              </button>
              <button
                onClick={nextArt}
                className="hover:border-sand/50 hover:text-sand flex-1 rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors"
              >
                Next →
              </button>
            </div>

            <div className="space-y-3 md:space-y-4">
              <a
                href={currentArt.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sand hover:bg-sand/90 block w-full rounded-lg px-4 py-2 text-center text-sm font-medium text-black transition-colors md:px-6 md:py-3 md:text-base"
              >
                View Fullscreen
              </a>
              <a
                href={currentArt.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-sand text-sand hover:bg-sand block w-full rounded-lg border px-4 py-2 text-center text-sm font-medium transition-colors hover:text-black md:px-6 md:py-3 md:text-base"
              >
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
