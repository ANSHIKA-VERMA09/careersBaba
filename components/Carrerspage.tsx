

const whyItems = [
  { icon: "📚", text: "Work in a dynamic, growth-oriented education environment" },
  { icon: "👨‍🏫", text: "Collaborate with experienced mentors and educators" },
  { icon: "🌱", text: "Continuous learning and professional development" },
  { icon: "💡", text: "Make a real impact on students' careers and futures" },
  { icon: "⏰", text: "Flexible and genuinely supportive work culture" },
];

const traits = [
  "Passion for teaching and mentoring students",
  "Strong subject knowledge and communication skills",
  "Prior coaching or education experience (preferred, not mandatory)",
  "Self-motivated, collaborative, and team-oriented mindset",
];

const roles = [
  { title: "Subject Matter Experts", badge: "Quant · English · Reasoning · GK" },
  { title: "Faculty — CUET / CAT / CLAT Preparation", badge: "Teaching" },
  { title: "Academic Counselors", badge: "Student Guidance" },
  { title: "Content Writers", badge: "Education · Exam Prep" },
  { title: "Digital Marketing Executives", badge: "Growth" },
  { title: "Student Support Executives", badge: "Operations" },
];

export default function CareersPage() {
  return (
    <section className="bg-[#faf7f2] text-[#0f0e0d] font-sans">
      <div className="max-w-6xl mx-auto">

        {/* ── HERO ── */}
        <div className="relative px-8 md:px-12 py-20 border-b border-[#e0d9d0] overflow-hidden">
          {/* Warm radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_80%_50%,#fff3e8,transparent)] pointer-events-none" />

          {/* Watermark */}
          <span className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 text-[200px] font-black text-[#e8620a]/[0.06] leading-none select-none pointer-events-none font-serif">
            CB
          </span>

          <span className="inline-flex items-center gap-2 bg-[#e8620a] text-white text-[11px] font-medium tracking-widest uppercase px-4 py-1.5 rounded-sm mb-7">
            🎓 We&apos;re Hiring
          </span>

          <h1 className="font-serif text-5xl md:text-7xl font-black leading-[1.05] max-w-2xl">
            Shape the Future of{" "}
            <em className="italic text-[#e8620a] not-italic" style={{ fontStyle: "italic" }}>
              Student Success
            </em>
          </h1>

          <p className="mt-6 text-base md:text-lg text-[#6b6560] font-light leading-relaxed max-w-xl">
            At Careersbaba, we help students conquer CUET, CAT, CLAT and beyond.
            Join a team that turns ambition into achievement — every single day.
          </p>
        </div>

        {/* ── WHY + WHO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Why Work With Us */}
          <div className="px-8 md:px-12 py-14 border-b border-r border-[#e0d9d0]">
            <p className="text-[11px] font-medium tracking-[.14em] uppercase text-[#e8620a] mb-4">
              Culture &amp; Benefits
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-8">
              Why Work<br />With Us?
            </h2>
            <ul className="flex flex-col gap-4">
              {whyItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 bg-white border border-[#e0d9d0] rounded-sm px-5 py-4 transition-all duration-200 hover:border-[#e8620a] hover:translate-x-1"
                >
                  <span className="text-xl mt-0.5 shrink-0">{item.icon}</span>
                  <span className="text-sm leading-relaxed text-[#3a3632]">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who Can Apply */}
          <div className="px-8 md:px-12 py-14 border-b border-[#e0d9d0]">
            <p className="text-[11px] font-medium tracking-[.14em] uppercase text-[#e8620a] mb-4">
              Ideal Candidate
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-8">
              Who Can<br />Apply?
            </h2>
            <ul className="flex flex-col divide-y divide-[#e0d9d0]">
              {traits.map((trait, i) => (
                <li key={i} className="flex items-center gap-6 py-5">
                  <span className="font-serif text-4xl font-bold text-[#e0d9d0] leading-none shrink-0 w-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-[#3a3632]">{trait}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── CURRENT OPENINGS ── */}
        <div className="px-8 md:px-12 py-14 border-b border-[#e0d9d0]">
          <p className="text-[11px] font-medium tracking-[.14em] uppercase text-[#e8620a] mb-4">
            Open Positions
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-8">
            Current Openings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {roles.map((role, i) => (
              <div
                key={i}
                className="group relative bg-white border border-[#e0d9d0] rounded-sm px-5 py-5 overflow-hidden transition-all duration-200 hover:border-[#e8620a] hover:shadow-md cursor-default"
              >
                {/* Bottom accent bar */}
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#e8620a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <p className="text-sm font-medium text-[#0f0e0d] leading-snug">{role.title}</p>
                <p className="mt-2.5 text-[10px] font-medium tracking-widest uppercase text-[#e8620a]">
                  {role.badge}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA BAND ── */}
        

      </div>
    </section>
  );
}