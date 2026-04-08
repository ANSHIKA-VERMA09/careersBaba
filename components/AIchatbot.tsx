"use client";

import { useRef, useState, useEffect } from "react";

const AIchatbot = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delay mount animation
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;

    const ripple = document.createElement("span");
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.35);
      width: ${size}px;
      height: ${size}px;
      left: ${e.clientX - rect.left - size / 2}px;
      top: ${e.clientY - rect.top - size / 2}px;
      transform: scale(0);
      animation: ripple 0.55s linear forwards;
      pointer-events: none;
    `;

    btn.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  };

  return (
    <>
      {/* Ripple keyframe injected once */}
      <style>{`
        @keyframes ripple {
          to { transform: scale(3.5); opacity: 0; }
        }
        @keyframes pulse-ring {
          0%, 100% { box-shadow: 0 0 0 0 rgba(139,92,246,0.55), 0 20px 40px rgba(99,102,241,0.35); }
          50%       { box-shadow: 0 0 0 12px rgba(139,92,246,0), 0 20px 40px rgba(99,102,241,0.35); }
        }
        @keyframes status-glow {
          0%, 100% { box-shadow: 0 0 6px 1px rgba(52,211,153,0.65); }
          50%       { box-shadow: 0 0 12px 3px rgba(52,211,153,0.9); }
        }
        @keyframes float-up-1 {
          0%   { transform: translate(0,0) scale(0);    opacity: 0; }
          20%  { opacity: 1; }
          100% { transform: translate(-26px,-64px) scale(1.2); opacity: 0; }
        }
        @keyframes float-up-2 {
          0%   { transform: translate(0,0) scale(0);    opacity: 0; }
          20%  { opacity: 1; }
          100% { transform: translate(22px,-72px) scale(0.8); opacity: 0; }
        }
        @keyframes float-up-3 {
          0%   { transform: translate(0,0) scale(0);    opacity: 0; }
          20%  { opacity: 1; }
          100% { transform: translate(-8px,-80px) scale(1); opacity: 0; }
        }
        .chat-btn-idle {
          animation: pulse-ring 2.8s ease-in-out infinite;
        }
        .chat-btn-idle:hover {
          animation: none;
        }
        .status-dot {
          animation: status-glow 2s ease-in-out infinite;
        }
        .particle-1 { animation: float-up-1 3.5s 0.5s ease-in-out infinite; }
        .particle-2 { animation: float-up-2 4s   1s   ease-in-out infinite; }
        .particle-3 { animation: float-up-3 3s   0.2s ease-in-out infinite; }
      `}</style>

      {/* Wrapper */}
      <div
        className={`fixed bottom-10 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Tooltip label */}
        <span
          className={`
            text-slate-200 text-[13px] font-medium tracking-wide
            bg-white/10 backdrop-blur-md border border-white/15
            px-4 py-2 rounded-full whitespace-nowrap
            transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            pointer-events-none select-none
            ${hovered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-1.5 scale-95"}
          `}
        >
          ✦ Chat with AI
        </span>

        {/* Button */}
        <div className="relative">
          {/* Green online indicator */}
          <span
            className="status-dot absolute -top-1 -right-1 z-10 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0f0f1a]"
          />

          <button
            ref={btnRef}
            onClick={handleClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            aria-label="Open AI Chat"
            className={`
              chat-btn-idle
              relative overflow-hidden
              w-16 h-16
              rounded-[22px]
              bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600
              border-0 outline-none cursor-pointer
              flex items-center justify-center
              transition-all duration-[250ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
              ${hovered
                ? "scale-[1.08] -translate-y-1 rounded-[26px]"
                : "scale-100 translate-y-0"
              }
            `}
            style={
              hovered
                ? { boxShadow: "0 28px 56px rgba(99,102,241,0.55), 0 8px 20px rgba(0,0,0,0.35)" }
                : undefined
            }
          >
            {/* Sheen */}
            <span className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

            {/* Floating particles */}
            <span className="particle-1 absolute bottom-3 left-4 w-[5px] h-[5px] rounded-full bg-violet-300/70 opacity-0 pointer-events-none" />
            <span className="particle-2 absolute bottom-3 right-4 w-[3px] h-[3px] rounded-full bg-purple-300/70 opacity-0 pointer-events-none" />
            <span className="particle-3 absolute bottom-3 left-1/2 w-[4px] h-[4px] rounded-full bg-indigo-300/70 opacity-0 pointer-events-none" />

            {/* Icon */}
            <span
              className={`
                flex items-center justify-center z-10
                transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                ${hovered ? "-rotate-[8deg] scale-110" : "rotate-0 scale-100"}
              `}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7"
                fill="none"
                stroke="white"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.2))" }}
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <circle cx={9}  cy={10} r={1} fill="white" stroke="none" />
                <circle cx={12} cy={10} r={1} fill="white" stroke="none" />
                <circle cx={15} cy={10} r={1} fill="white" stroke="none" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AIchatbot;