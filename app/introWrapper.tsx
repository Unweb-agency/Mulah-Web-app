"use client";
import { useEffect, useState } from "react";

export default function IntroWrapper({ children }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000); // 👈 set to your video length

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Website ALWAYS mounted */}
      <div style={{ visibility: showIntro ? "hidden" : "visible" }}>
        {children}
      </div>

      {/* Video overlay */}
      {showIntro && (
        <div className="fixed inset-0 z-[9999] bg-black">
          <video
            src="/intro.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </>
  );
}
