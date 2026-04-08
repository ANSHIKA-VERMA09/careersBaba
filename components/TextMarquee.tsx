export default function TextMarquee() {
  const text = "🚀 New Batch Starting Feb 1 — Limited Seats   •   📚 Live Classes Every Day   •   🎯 Expert Mentors   •   ✅ Free Demo Available   •   🔥 Enroll Before 10 April & Save 30%   •   ⭐ 4.9 Rated by  Students   •";

  return (
    <div className="overflow-hidden bg-[#C0392B] py-3 whitespace-nowrap">
      <div className="animate-marquee inline-block">
        <span className="text-white text-sm font-semibold mx-8">{text}</span>
        <span className="text-white text-sm font-semibold mx-8">{text}</span>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
}