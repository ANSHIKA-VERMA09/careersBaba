"use client";
import React from "react";

const AnimatedText = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      
      <h1
        className="text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text 
        bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 
        tracking-wide text-center"
        style={{
          animation: "glow 2s infinite, float 3s ease-in-out infinite",
        }}
      >
        Alumni of NIT
      </h1>

      {/* Animations */}
      <style jsx>{`
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(99,102,241,0.7),
                         0 0 20px rgba(99,102,241,0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(236,72,153,0.9),
                         0 0 30px rgba(236,72,153,0.7);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

    </div>
  );
};

export default AnimatedText;