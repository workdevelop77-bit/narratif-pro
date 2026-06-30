"use client";

import { Maximize, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

export default function VideoCard({ video, vertical = false }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  async function toggleSound() {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    const shouldUnmute = videoEl.muted || videoEl.volume === 0;

    if (shouldUnmute) {
      videoEl.muted = false;
      videoEl.defaultMuted = false;
      videoEl.removeAttribute("muted");
      videoEl.volume = 1;
      setMuted(false);
    } else {
      videoEl.muted = true;
      videoEl.defaultMuted = true;
      videoEl.setAttribute("muted", "");
      setMuted(true);
    }

    try { await videoEl.play(); } catch (error) { console.error(error); }
  }

  async function openFullscreen() {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    try {
      if (videoEl.requestFullscreen) await videoEl.requestFullscreen();
      else if (videoEl.webkitRequestFullscreen) videoEl.webkitRequestFullscreen();
      else if (videoEl.webkitEnterFullscreen) videoEl.webkitEnterFullscreen();
    } catch (error) { console.error(error); }
  }

  return (
    <article className="group text-left transition hover:-translate-y-2">
      <div className={`video-frame gold-glow relative overflow-hidden rounded-3xl bg-black ${vertical ? "aspect-[9/16]" : "aspect-video"}`}>
        <video
          ref={videoRef}
          src={video.videoUrl}
          className="portfolio-video h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls
          controlsList="nodownload"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d9ad63]">{video.category}</p>
          <h3 className="mt-2 pr-24 text-xl font-black tracking-tight text-white">{video.title}</h3>
        </div>

        <div className="absolute right-4 top-4 flex gap-2">
          <button type="button" onClick={toggleSound} className="rounded-full border border-white/15 bg-black/55 p-3 text-white backdrop-blur transition hover:bg-white/20" aria-label={muted ? "Activer le son" : "Couper le son"}>
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <button type="button" onClick={openFullscreen} className="rounded-full border border-white/15 bg-black/55 p-3 text-white backdrop-blur transition hover:bg-white/20" aria-label="Plein écran">
            <Maximize size={18} />
          </button>
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-white/55">{video.description}</p>
    </article>
  );
}
