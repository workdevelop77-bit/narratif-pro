"use client";

import { X, ExternalLink } from "lucide-react";

function withAutoplay(url) {
  if (!url) return "";
  const separator = url.includes("?") ? "&" : "?";
  if (url.includes("autoplay=1")) return url;
  return `${url}${separator}autoplay=1&mute=1&controls=1&playsinline=1`;
}

export default function VideoModal({ video, onClose }) {
  if (!video) return null;
  const isMp4 = video.type === "mp4" || video.videoUrl?.endsWith(".mp4");
  const embedUrl = withAutoplay(video.videoUrl);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl" onClick={onClose}>
      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-12 right-0 rounded-full border border-white/15 bg-white/10 p-2 text-white" aria-label="Fermer"><X /></button>
        <div className="aspect-video overflow-hidden rounded-3xl border border-white/15 bg-black">
          {isMp4 ? (
            <video
              src={video.videoUrl}
              className="h-full w-full object-contain"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          ) : (
            <iframe
              src={embedUrl}
              title={video.title}
              className="h-full w-full"
              allow="autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>
        <div className="mt-4 flex flex-col justify-between gap-3 text-sm text-white/55 sm:flex-row sm:items-center">
          <p>Lecture automatique — son coupé par défaut, activable dans le lecteur.</p>
          {video.watchUrl && (
            <a href={video.watchUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/8 px-4 py-3 font-bold text-white/80">
              Ouvrir sur YouTube <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
