"use client";
import { useState } from "react";
import {
  FaStar, FaPlay, FaUsers, FaBookOpen, FaCheckCircle,
  FaTrophy, FaClock, FaYoutube, FaLinkedin, FaTwitter,
  FaChevronDown, FaChevronRight, FaMedal, FaFire,
  FaGraduationCap, FaBriefcase, FaQuoteLeft, FaLock
} from "react-icons/fa";

/* ─── DATA ─────────────────────────────────────────────────── */

const TEACHER = {
  name: "Ankur Sir",
  title: "Quantitative Aptitude & Data Interpretation",
  tagline: "Ex-SSC CGL AIR 3 · IIT Roorkee Alumnus · 14 Years Teaching",
  bio: "Ravi Sir is one of India's most recognized SSC faculty, having personally cracked SSC CGL with an All India Rank of 3. An IIT Roorkee graduate, he brings an unmatched blend of academic rigour and exam-level practicality. His shortcut-driven methodology has helped over 80,000 students clear SSC exams.",
  stats: [
    { value: "80,000+", label: "Students Taught" },
    { value: "14 Yrs", label: "Teaching Experience" },
    { value: "4.9★", label: "Average Rating" },
    { value: "AIR 3", label: "SSC CGL Rank" },
  ],
  subjects: ["Quantitative Aptitude", "Data Interpretation", "Advanced Maths", "Arithmetic"],
  highlights: [
    "Ex-SSC CGL Officer (Income Tax Dept.)",
    "IIT Roorkee — B.Tech Mathematics",
    "Author of 'Shortcuts in QA' — 1.2L+ copies sold",
    "Featured on Dainik Jagran & India TV",
    "YouTube channel: 2.1M subscribers",
  ],
  social: { yt: "2.1M", li: "85K", tw: "34K" },
};

const COURSES = [
  {
    title: "CGL QA Masterclass 2026",
    badge: "🔥 Bestseller",
    price: "₹4,999",
    original: "₹9,000",
    hours: "120 hrs",
    students: "28,000+",
    rating: 4.9,
    color: "#C0392B",
    topics: ["Number System", "Algebra", "Geometry", "Trigonometry", "DI"],
  },
  {
    title: "Arithmetic Crash Course",
    badge: "⚡ Fast Track",
    price: "₹1,999",
    original: "₹3,500",
    hours: "40 hrs",
    students: "14,200+",
    rating: 4.8,
    color: "#1a6b4b",
    topics: ["Percentages", "Profit & Loss", "SI/CI", "Time & Work", "Ratio"],
  },
  {
    title: "Free QA Foundation",
    badge: "✅ Free",
    price: "FREE",
    original: null,
    hours: "12 hrs",
    students: "1,10,000+",
    rating: 4.7,
    color: "#1a3a6b",
    topics: ["Basic Number Theory", "Fractions", "BODMAS", "Divisibility"],
  },
];

const REVIEWS = [
  {
    name: "Arjun Singh",
    rank: "CGL AIR 44",
    batch: "CGL QA Masterclass 2024",
    stars: 5,
    review: "Ravi Sir's trick for geometry problems saved me 4–5 minutes per paper. His shortcuts are genuinely exam-tested, not random hacks.",
    initials: "AS",
    color: "#C0392B",
  },
  {
    name: "Pooja Rathi",
    rank: "CHSL AIR 12",
    batch: "Arithmetic Crash 2024",
    stars: 5,
    review: "I was terrible at percentages and profit-loss before joining. In 3 weeks, it became my strongest section. Cleared CHSL on first attempt.",
    initials: "PR",
    color: "#1a6b4b",
  },
  {
    name: "Manish Gupta",
    rank: "CGL AIR 103",
    batch: "Free Foundation + Paid",
    stars: 5,
    review: "Started with the free batch, got hooked, bought the full course. Best investment of my SSC journey.",
    initials: "MG",
    color: "#1a3a6b",
  },
  {
    name: "Tanvi Desai",
    rank: "MTS Selected",
    batch: "Arithmetic Crash 2024",
    stars: 4,
    review: "Extremely clear explanations. No formula dumping — Ravi Sir always explains WHY. That changed how I approach Maths entirely.",
    initials: "TD",
    color: "#7B2FBE",
  },
];

const SCHEDULE = [
  { day: "Mon", time: "7:00 AM", topic: "Geometry — Triangles & Circles", live: true },
  { day: "Tue", time: "7:00 AM", topic: "Algebra — Quadratic Equations", live: false },
  { day: "Wed", time: "7:00 AM", topic: "DI — Bar Chart & Pie Chart", live: true },
  { day: "Thu", time: "7:00 AM", topic: "Doubt Clearing Session", live: false },
  { day: "Fri", time: "7:00 AM", topic: "Trigonometry — Heights & Distances", live: false },
  { day: "Sat", time: "9:00 AM", topic: "Weekly Full Mock Review", live: true },
];

const FAQS = [
  { q: "Are all lectures live or recorded?", a: "The CGL Masterclass includes both — 3 live classes per week plus all recordings accessible on-demand. Doubt sessions are always live." },
  { q: "In which language does Ravi Sir teach?", a: "Classes are conducted in Hinglish (Hindi + English). All notes and PDFs are available in both Hindi and English." },
  { q: "What is the validity of the course?", a: "Course access is valid for 12 months from the date of purchase for all paid batches." },
  { q: "Is there a demo class available?", a: "Yes — the Free QA Foundation batch (12 hours) is fully free and gives you a complete sample of Ravi Sir's teaching methodology." },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

export default function TeacherPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState(false);

  return (
    <div className="font-sans bg-[#F6F5F1] min-h-screen text-[#1a1a1a]" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d0404 0%, #1a0808 45%, #C0392B 100%)", padding: "64px 24px 72px" }}
      >
        {/* Decorative */}
        <div className="absolute top-[-60px] right-[-60px] w-[420px] h-[420px] rounded-full opacity-[0.04] bg-white" />
        <div className="absolute bottom-[-80px] left-[30%] w-[300px] h-[300px] rounded-full opacity-[0.04] bg-white" />
        <div className="absolute top-20 right-[15%] w-[140px] h-[140px] rounded-full opacity-10" style={{ border: "1px solid rgba(255,255,255,0.25)" }} />

        <div className="max-w-[1140px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[12px] text-white/40 mb-8">
            <span>Home</span>
            <FaChevronRight size={9} />
            <span>Mentors</span>
            <FaChevronRight size={9} />
            <span className="text-white/70">Ankur Sir</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">
            {/* Left — Teacher Info */}
            <div className="flex gap-8 items-start flex-col sm:flex-row">
              {/* Avatar */}
              <div className="relative shrink-0">
                <div
                  className="w-[120px] h-[120px] rounded-2xl flex items-center justify-center text-white text-[42px] font-black shadow-2xl"
                  style={{ background: "linear-gradient(135deg, #e04030, #C0392B)", fontFamily: "'Playfair Display', serif" }}
                >
                  RK
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#ffd44d] text-[#1a1a1a] text-[10px] font-black px-2 py-0.5 rounded-full">
                  AIR 3
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="bg-[#ffd44d]/20 text-[#ffd44d] text-[11px] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full">
                    ★ Top Educator
                  </span>
                  <span className="bg-white/10 text-white/70 text-[11px] font-bold px-3 py-1 rounded-full">
                    QA Expert
                  </span>
                </div>

                <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-white leading-tight tracking-tight mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  {TEACHER.name}
                </h1>
                <p className="text-[15px] text-white/70 mb-3">{TEACHER.title}</p>
                <p className="text-[13px] text-white/50 mb-6">{TEACHER.tagline}</p>

                {/* Social */}
                <div className="flex items-center gap-4 mb-6">
                  {[
                    { icon: FaYoutube, val: TEACHER.social.yt, color: "#FF4444" },
                    { icon: FaLinkedin, val: TEACHER.social.li, color: "#4A90D9" },
                    { icon: FaTwitter, val: TEACHER.social.tw, color: "#6EC6F0" },
                  ].map(({ icon: Icon, val, color }, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <Icon size={15} color={color} />
                      <span className="text-[13px] font-semibold text-white/70">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex gap-8 flex-wrap">
                  {TEACHER.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-[20px] font-black text-[#ffd44d]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {s.value}
                      </div>
                      <div className="text-[11px] text-white/50 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — CTA Card */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h3 className="text-[17px] font-black text-[#1a1a1a] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                Book a Free Demo Class
              </h3>
              <p className="text-[12px] text-[#888] mb-5">Experience Ravi Sir's teaching before enrolling</p>

              {[
                ["Your Name", "text", "Rahul Sharma"],
                ["Mobile Number", "tel", "+91 98765 43210"],
              ].map(([label, type, ph]) => (
                <div key={label} className="mb-4">
                  <label className="block text-[11px] font-semibold text-[#555] mb-1.5 uppercase tracking-[0.08em]">{label}</label>
                  <input
                    type={type}
                    placeholder={ph}
                    className="w-full px-4 py-2.5 rounded-lg border-[1.5px] border-[#e2e0da] text-[14px] text-[#333] outline-none focus:border-[#C0392B] transition-colors"
                  />
                </div>
              ))}

              <div className="mb-5">
                <label className="block text-[11px] font-semibold text-[#555] mb-1.5 uppercase tracking-[0.08em]">Target Exam</label>
                <select className="w-full px-4 py-2.5 rounded-lg border-[1.5px] border-[#e2e0da] text-[14px] text-[#333] bg-white outline-none focus:border-[#C0392B]">
                  <option>SSC CGL 2026</option>
                  <option>SSC CHSL 2026</option>
                  <option>SSC MTS 2026</option>
                </select>
              </div>

              <button className="w-full bg-[#C0392B] text-white font-bold text-[14px] py-3 rounded-xl hover:bg-[#a93226] transition-colors mb-3">
                Book Free Demo →
              </button>

              <button className="w-full bg-[#fdf0ee] text-[#C0392B] font-semibold text-[13px] py-2.5 rounded-xl hover:bg-[#fde4e1] transition-colors">
                ▶ Watch 2-min Intro
              </button>

              <p className="text-center text-[11px] text-[#aaa] mt-3">No spam · Free session · Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="bg-[#C0392B] py-2 px-6">
        <div className="max-w-[1140px] mx-auto flex items-center gap-4">
          <span className="bg-[#ffd44d] text-[#1a1a1a] text-[10px] font-black px-2 py-0.5 rounded whitespace-nowrap">NEXT CLASS</span>
          <span className="text-[13px] text-white/90">
            Monday 7:00 AM — Geometry: Triangles & Circles · Live on YouTube & App
          </span>
        </div>
      </div>

      {/* ── MAIN ── */}
      <div className="max-w-[1140px] mx-auto px-6">

        {/* ── ABOUT ── */}
        <section className="py-14 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          {/* Bio + Highlights */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#C0392B] mb-3 font-mono">About</p>
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-black text-[#1a1a1a] tracking-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Meet Ravi Kumar
            </h2>
            <p className="text-[15px] text-[#555] leading-[1.85] mb-8 max-w-[600px]">{TEACHER.bio}</p>

            <div className="space-y-3">
              {TEACHER.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle size={15} color="#C0392B" className="shrink-0" />
                  <span className="text-[14px] text-[#333]">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Subjects + Video Preview */}
          <div className="space-y-5">
            {/* Subjects */}
            <div className="bg-white rounded-2xl p-6 border border-[#ebe9e2]">
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#888] mb-4">Subjects</p>
              <div className="flex flex-wrap gap-2">
                {TEACHER.subjects.map((s) => (
                  <span key={s} className="bg-[#fdf0ee] text-[#C0392B] text-[12px] font-semibold px-3 py-1.5 rounded-full border border-[#f5d4d0]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Video Thumb */}
            <div
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{ background: "#1a0808", aspectRatio: "16/9" }}
              onClick={() => setActiveVideo(true)}
            >
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                <div className="w-14 h-14 rounded-full bg-[#C0392B] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <FaPlay size={18} color="white" style={{ marginLeft: 3 }} />
                </div>
                <p className="text-white/80 text-[13px] font-semibold">Watch Intro — 2 min</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#2d0f0f] to-[#C0392B] opacity-60" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-[11px] opacity-70">"I'll show you that Maths is not about memory, it's about method."</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── COURSES ── */}
        <section className="py-10">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#C0392B] mb-3 font-mono">Programs</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-[#1a1a1a] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Courses by Ravi Sir
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-[#ebe9e2] hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
              >
                {/* Header */}
                <div className="p-6 pb-5" style={{ background: c.color }}>
                  <span className="inline-block bg-white/20 text-white text-[10px] font-bold px-2 py-1 rounded-full mb-3">{c.badge}</span>
                  <h3 className="text-white text-[17px] font-bold leading-snug mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {c.title}
                  </h3>
                  <div className="flex gap-4">
                    <span className="text-white/70 text-[12px] flex items-center gap-1.5"><FaClock size={10} />{c.hours}</span>
                    <span className="text-white/70 text-[12px] flex items-center gap-1.5"><FaUsers size={10} />{c.students}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <FaStar key={s} size={12} color={s < Math.floor(c.rating) ? "#ffd44d" : "#e0ddd8"} />
                    ))}
                    <span className="text-[12px] font-semibold text-[#555] ml-1">{c.rating}</span>
                  </div>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {c.topics.map((t) => (
                      <span key={t} className="bg-[#f4f2ed] text-[#555] text-[11px] font-medium px-2 py-1 rounded-md">{t}</span>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#f0efe9]">
                    <div>
                      <span className="text-[19px] font-black text-[#1a1a1a]">{c.price}</span>
                      {c.original && (
                        <span className="text-[13px] text-[#aaa] line-through ml-2">{c.original}</span>
                      )}
                    </div>
                    <button
                      className="text-white text-[12px] font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
                      style={{ background: c.color }}
                    >
                      {c.price === "FREE" ? "Access Free" : "Enroll"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SCHEDULE ── */}
        <section className="py-10">
          <div
            className="rounded-2xl p-8 lg:p-10 border border-[#e8ddd0]"
            style={{ background: "linear-gradient(135deg, #fff8f6, #fff5f0)" }}
          >
            <div className="mb-8">
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#C0392B] mb-2 font-mono">This Week</p>
              <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-black text-[#1a1a1a] tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Live Class Schedule
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SCHEDULE.map((s, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-xl p-4 border flex gap-4 items-start transition-all ${
                    s.live ? "border-[#C0392B]/30 shadow-sm" : "border-[#ebe9e2]"
                  }`}
                >
                  {/* Day Badge */}
                  <div
                    className="w-12 h-12 rounded-xl shrink-0 flex flex-col items-center justify-center text-white text-center"
                    style={{ background: s.live ? "#C0392B" : "#888" }}
                  >
                    <span className="text-[9px] font-bold uppercase tracking-wide opacity-80">{s.day}</span>
                    <span className="text-[11px] font-black">{s.time.split(" ")[0]}</span>
                    <span className="text-[8px] opacity-70">{s.time.split(" ")[1]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-[#1a1a1a] leading-snug mb-1">{s.topic}</p>
                    {s.live && (
                      <span className="inline-block bg-[#C0392B]/10 text-[#C0392B] text-[10px] font-bold px-2 py-0.5 rounded-full">
                        ● LIVE
                      </span>
                    )}
                    {!s.live && (
                      <span className="inline-block bg-[#f4f2ed] text-[#888] text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Recorded
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section className="py-10">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#C0392B] mb-3 font-mono">Student Reviews</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-[#1a1a1a] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              What Students Say
            </h2>
          </div>

          {/* Rating Summary */}
          <div className="bg-white rounded-2xl p-8 mb-6 border border-[#ebe9e2]">
            <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
              <div className="text-center">
                <div className="text-[64px] font-black text-[#1a1a1a] leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>4.9</div>
                <div className="flex justify-center gap-1 mt-2 mb-1">
                  {[...Array(5)].map((_, i) => <FaStar key={i} size={16} color="#ffd44d" />)}
                </div>
                <div className="text-[13px] text-[#888]">Based on 3,200+ reviews</div>
              </div>
              <div className="flex-1 max-w-[340px] space-y-2">
                {[[5, 84], [4, 11], [3, 3], [2, 1], [1, 1]].map(([stars, pct]) => (
                  <div key={stars} className="flex items-center gap-3">
                    <span className="text-[12px] text-[#888] w-4 text-right">{stars}</span>
                    <FaStar size={10} color="#ffd44d" />
                    <div className="flex-1 bg-[#f4f2ed] rounded-full h-2">
                      <div className="h-2 rounded-full bg-[#ffd44d]" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-[12px] text-[#888] w-8">{pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#ebe9e2] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                <FaQuoteLeft size={22} color="#C0392B" className="opacity-30 mb-4" />
                <p className="text-[14px] text-[#555] leading-[1.8] mb-5">{r.review}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f0efe9]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[13px] shrink-0"
                    style={{ background: r.color }}
                  >
                    {r.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[14px] text-[#1a1a1a]">{r.name}</p>
                    <p className="text-[12px] text-[#888] truncate">{r.batch}</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    {[...Array(r.stars)].map((_, s) => <FaStar key={s} size={11} color="#ffd44d" />)}
                  </div>
                </div>
                {r.rank && (
                  <div className="mt-3">
                    <span className="bg-[#fdf0ee] text-[#C0392B] text-[10px] font-bold px-2.5 py-1 rounded-full">
                      🏆 {r.rank}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="py-12 pb-20">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#C0392B] mb-3 font-mono">Got Questions?</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-[#1a1a1a] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Frequently Asked
            </h2>
          </div>

          <div className="max-w-[720px] mx-auto space-y-3">
            {FAQS.map((f, i) => (
              <div
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="bg-white rounded-2xl border border-[#ebe9e2] overflow-hidden cursor-pointer hover:border-[#d9d4c8] transition-colors"
              >
                <div className="px-6 py-5 flex items-center justify-between gap-4">
                  <span className="text-[14px] font-semibold text-[#1a1a1a]">{f.q}</span>
                  <FaChevronDown
                    size={14}
                    color="#888"
                    style={{
                      transform: openFaq === i ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                      flexShrink: 0,
                    }}
                  />
                </div>
                {openFaq === i && (
                  <div className="px-6 pb-5 pt-0 text-[13px] text-[#666] leading-[1.8] border-t border-[#f0efe9]">
                    <div className="pt-4">{f.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── FOOTER CTA ── */}
      <div
        className="text-center px-6 py-16"
        style={{ background: "linear-gradient(135deg, #0d0404 0%, #1a0808 50%, #C0392B 100%)" }}
      >
        <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-5">
          <FaGraduationCap size={28} color="#ffd44d" />
        </div>
        <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-white mb-3 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          Start Learning with{" "}
          <span className="italic text-[#ffd44d]">Ravi Sir Today</span>
        </h2>
        <p className="text-white/60 text-[15px] mb-8 max-w-[440px] mx-auto">
          Join 80,000+ students who cracked SSC QA with India's most trusted Maths faculty.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-[#ffd44d] text-[#1a1a1a] font-black text-[14px] px-8 py-4 rounded-xl hover:bg-[#f0c840] transition-colors">
            Enroll in CGL Masterclass
          </button>
          <button className="bg-white/10 text-white font-semibold text-[14px] px-8 py-4 rounded-xl border border-white/25 hover:bg-white/15 transition-colors">
            Try Free Course
          </button>
        </div>
        <p className="text-white/30 text-[12px] mt-6">Rated 4.9★ by 3,200+ students · Hinglish Medium · 12-month access</p>
      </div>

    </div>
  );
}