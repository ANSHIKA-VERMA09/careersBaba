"use client";
import { useState } from "react";
import {
  FaBookOpen, FaVideo, FaFileAlt, FaPen, FaCheckCircle,
  FaBell, FaArrowRight, FaStar, FaChevronDown, FaFire,
  FaTrophy, FaUsers, FaClock, FaShieldAlt, FaBolt, FaMedal
} from "react-icons/fa";

/* ─── DATA ─────────────────────────────────────────────────── */

const NAV_LINKS = ["Overview", "Courses", "Resources", "Exam Info", "Mentors", "Results", "FAQs"];

const STATS = [
  { value: "2.4L+", label: "Students Enrolled" },
  { value: "94%", label: "Selection Rate" },
  { value: "18+", label: "Years of Excellence" },
  { value: "4.9★", label: "Average Rating" },
];

const COURSES = [
  {
    title: "SSC CGL Complete Batch 2026",
    tag: "🔥 Best Seller",
    price: "₹8,999",
    original: "₹14,000",
    duration: "10 months",
    mode: "Live Online",
    students: "48,000+",
    color: "#C0392B",
    accent: "#FF6B5B",
    features: ["Tier I + II Coverage", "200+ Live Classes", "Weekly Mock Tests", "Current Affairs Module"],
  },
  {
    title: "SSC CHSL Crash Course",
    tag: "⚡ Fast Track",
    price: "₹3,999",
    original: "₹7,000",
    duration: "3 months",
    mode: "Live + Recorded",
    students: "22,000+",
    color: "#1a6b4b",
    accent: "#2ECC71",
    features: ["Tier I + II + III", "50 Full Mock Tests", "English Special", "Doubt Sessions"],
  },
  {
    title: "SSC MTS + Havaldar 2026",
    tag: "🎯 Focused",
    price: "₹2,499",
    original: "₹4,500",
    duration: "4 months",
    mode: "Recorded",
    students: "31,000+",
    color: "#1a3a6b",
    accent: "#4A90D9",
    features: ["GK + Reasoning", "Math Foundation", "30 Mock Tests", "PDF Notes"],
  },
  {
    title: "SSC All Exams Test Series",
    tag: "📊 Self-Prep",
    price: "₹1,999",
    original: "₹3,500",
    duration: "12 months",
    mode: "Self-Paced",
    students: "85,000+",
    color: "#7B2FBE",
    accent: "#A855F7",
    features: ["100+ Mock Tests", "PYQ Bank 2015–25", "Section-wise Tests", "Rank Predictor"],
  },
];

const RESOURCES = [
  { icon: FaFileAlt, label: "SSC Previous Year Papers", desc: "10 years CGL, CHSL, MTS solved", color: "#C0392B" },
  { icon: FaPen, label: "Free Tier I Mock Test", desc: "Full-length 100Q simulation", color: "#1a6b4b" },
  { icon: FaBookOpen, label: "SSC Syllabus PDF 2026", desc: "All posts – updated officially", color: "#1a3a6b" },
  { icon: FaVideo, label: "Free Video Lectures", desc: "20+ hours — Math & Reasoning", color: "#7B2FBE" },
];

type ExamTab = "CGL" | "CHSL" | "MTS";
const EXAM_TABS: ExamTab[] = ["CGL", "CHSL", "MTS"];

const EXAM_DATA: Record<ExamTab, { label: string; value: string }[]> = {
  CGL: [
    { label: "Full Form", value: "Combined Graduate Level" },
    { label: "Conducting Body", value: "Staff Selection Commission" },
    { label: "Tiers", value: "Tier I (CBT) + Tier II (CBT) + Tier III (Desc)" },
    { label: "Tier I Marks", value: "200 Marks | 100 Questions | 60 Min" },
    { label: "Negative Marking", value: "0.50 per wrong answer" },
    { label: "Eligibility", value: "Bachelor's Degree, Age 18–32" },
  ],
  CHSL: [
    { label: "Full Form", value: "Combined Higher Secondary Level" },
    { label: "Posts", value: "LDC, JSA, PA, SA, DEO" },
    { label: "Tiers", value: "Tier I (CBT) + Tier II (CBT + Desc)" },
    { label: "Tier I Marks", value: "200 Marks | 100 Questions | 60 Min" },
    { label: "Negative Marking", value: "0.50 per wrong answer" },
    { label: "Eligibility", value: "10+2 Pass, Age 18–27" },
  ],
  MTS: [
    { label: "Full Form", value: "Multi-Tasking Staff" },
    { label: "Posts", value: "MTS + Havaldar (CBIC & CBN)" },
    { label: "Sessions", value: "Session I (Numeric/Math) + Session II (GI/Reasoning)" },
    { label: "Total Marks", value: "Session I: 60 | Session II: 60 | Tier II: 25+25" },
    { label: "Negative Marking", value: "None in Tier I Sessions" },
    { label: "Eligibility", value: "Class 10 Pass, Age 18–25" },
  ],
};

const MENTORS = [
  { name: "Ravi Sir", role: "Ex-SSC CGL AIR 3 | 14 yrs", specialty: "Quantitative Aptitude", color: "#C0392B", initials: "RS" },
  { name: "Preeti Ma'am", role: "AIR 7, SSC CGL 2018", specialty: "English Language & Grammar", color: "#1a6b4b", initials: "PM" },
  { name: "Deepak Sir", role: "IIT Kanpur | 10 yrs SSC", specialty: "Reasoning & GI", color: "#1a3a6b", initials: "DS" },
  { name: "Sunita Ma'am", role: "MA History | 9 yrs SSC", specialty: "General Awareness & GK", color: "#7B2FBE", initials: "SM" },
];

const TOPPERS = [
  { name: "Karan Mehta", rank: "CGL AIR 11", batch: "CGL Batch 2024", quote: "The mock test analytics helped me identify my weak zones and fix them before the actual exam. Rank 11 felt unbelievable." },
  { name: "Swati Yadav", rank: "CHSL AIR 23", batch: "CHSL Crash 2024", quote: "Three months, 50 mocks, and Preeti ma'am's English classes — that's all it took. PA post was my dream." },
  { name: "Amit Patel", rank: "CGL AIR 58", batch: "Test Series 2024", quote: "Being a working professional, the self-paced test series was perfect. Cleared Tier I and II on first attempt." },
];

const FAQS = [
  { q: "What is the eligibility for SSC CGL?", a: "Candidates must hold a Bachelor's degree from a recognised university. Age limit is 18–32 years (with relaxation for OBC/SC/ST/EWS). No specific stream is mandatory — any graduate can apply." },
  { q: "How many attempts are allowed in SSC CGL?", a: "There is no restriction on the number of attempts. You can appear till you hit the upper age limit. However, strategic preparation with mock analysis typically yields results within 1–2 attempts." },
  { q: "What is the difference between SSC CGL and CHSL?", a: "CGL requires a graduation degree and offers Group B and C posts (Income Tax Inspector, Auditor, etc.). CHSL requires 10+2 and offers Group C posts like LDC, PA, DEO. Salary and grade pay differ accordingly." },
  { q: "Is coaching necessary for SSC preparation?", a: "Self-study with quality material is possible, but structured coaching provides curated content, doubt sessions, and regular testing — significantly reducing preparation time and improving efficiency." },
  { q: "Do you offer bilingual (Hindi + English) content?", a: "Yes. All live classes are conducted in Hinglish (Hindi + English blend) and recorded sessions are available in both mediums. Study material is provided in both languages." },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

export default function SSCPage() {
  const [activeTab, setActiveTab] = useState<ExamTab>("CGL");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="font-sans bg-[#F6F5F1] min-h-screen text-[#1a1a1a]" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── NAV ── */}
      {/* <nav className="sticky top-0 z-50 bg-white border-b border-[#e8e4db] shadow-sm">
        <div className="max-w-[1140px] mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#C0392B] flex items-center justify-center">
              <FaShieldAlt size={16} color="white" />
            </div>
            <span className="font-black text-[18px] tracking-tight text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>
              SSC<span className="text-[#C0392B]">Pro</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a key={l} href="#" className="text-[13px] font-medium text-[#555] hover:text-[#C0392B] transition-colors">
                {l}
              </a>
            ))}
          </div>
          <button className="bg-[#C0392B] text-white text-[13px] font-bold px-5 py-2.5 rounded-lg hover:bg-[#a93226] transition-colors">
            Enroll Now
          </button>
        </div>
      </nav> */}

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a0a0a 0%, #2d0f0f 40%, #C0392B 100%)", padding: "72px 24px 80px" }}
      >
        {/* Decorative circles */}
        <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full opacity-5 bg-white" />
        <div className="absolute bottom-[-100px] left-[25%] w-[350px] h-[350px] rounded-full opacity-[0.04] bg-white" />
        <div
          className="absolute top-16 right-[20%] w-[180px] h-[180px] rounded-full opacity-10"
          style={{ border: "1px solid rgba(255,255,255,0.3)" }}
        />

        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-center">
          {/* Left */}
          <div>
            <span
              className="inline-block text-[12px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full mb-5"
              style={{ background: "rgba(255,200,60,0.15)", color: "#ffd44d" }}
            >
              🏆 India's Most Trusted SSC Platform
            </span>
            <h1
              className="text-[clamp(2rem,4.5vw,3.4rem)] font-black text-white leading-[1.15] mb-5 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Clear SSC in Your<br />
              <span className="italic text-[#FF9F8F]">First Attempt</span>
            </h1>
            <p className="text-[16px] text-white/70 leading-relaxed mb-8 max-w-[520px]">
              India's #1 SSC coaching platform for CGL, CHSL, MTS & more. Structured courses, 100+ mock tests, and mentors who've cracked it themselves.{" "}
              <strong className="text-white">2,40,000+ selections</strong> and counting.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button className="bg-[#ffd44d] text-[#1a1a1a] font-bold text-[15px] px-7 py-3.5 rounded-xl hover:bg-[#f0c840] transition-colors">
                Explore Courses →
              </button>
              <button className="bg-white/10 text-white font-semibold text-[15px] px-7 py-3.5 rounded-xl border border-white/25 hover:bg-white/15 transition-colors">
                ▶ Free Demo Class
              </button>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-10 flex-wrap">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-[22px] font-black text-[#ffd44d]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {s.value}
                  </div>
                  <div className="text-[12px] text-white/50 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-[20px] font-black text-[#1a1a1a] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get Free Counselling
            </h3>
            <p className="text-[13px] text-[#888] mb-6">Talk to an expert — pick the right course</p>

            {[
              ["Full Name", "text", "Rahul Sharma"],
              ["Mobile Number", "tel", "+91 9876543210"],
              ["Email Address", "email", "rahul@email.com"],
            ].map(([label, type, ph]) => (
              <div key={label} className="mb-4">
                <label className="block text-[12px] font-semibold text-[#555] mb-1.5">{label}</label>
                <input
                  type={type}
                  placeholder={ph}
                  className="w-full px-4 py-3 rounded-lg border-[1.5px] border-[#e2e0da] text-[14px] text-[#333] outline-none focus:border-[#C0392B] transition-colors"
                />
              </div>
            ))}

            <div className="mb-5">
              <label className="block text-[12px] font-semibold text-[#555] mb-1.5">Target Exam</label>
              <select className="w-full px-4 py-3 rounded-lg border-[1.5px] border-[#e2e0da] text-[14px] text-[#333] bg-white outline-none focus:border-[#C0392B] transition-colors">
                <option>SSC CGL 2026</option>
                <option>SSC CHSL 2026</option>
                <option>SSC MTS 2026</option>
                <option>Not decided yet</option>
              </select>
            </div>

            <button className="w-full bg-[#C0392B] text-white font-bold text-[15px] py-3.5 rounded-xl hover:bg-[#a93226] transition-colors">
              Book Free Session →
            </button>

            <p className="text-center text-[11px] text-[#aaa] mt-3">
              No spam · 100% free · Expert advice
            </p>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="bg-[#C0392B] py-2.5 px-6 overflow-hidden">
        <div className="max-w-[1140px] mx-auto flex items-center gap-4">
          <span className="bg-[#ffd44d] text-[#1a1a1a] text-[11px] font-black px-2.5 py-1 rounded whitespace-nowrap">
            LIVE
          </span>
          <div className="flex gap-8 overflow-hidden">
            {[
              "SSC CGL 2026 Notification released — Apply now",
              "New CGL Batch starts Feb 1 — Only 200 seats left",
              "Free Mock Test LIVE — Attempt before Jan 31",
              "CHSL Tier II Date: March 14, 2026 (Official)",
            ].map((t, i) => (
              <span key={i} className="text-[13px] text-white/90 whitespace-nowrap flex items-center gap-2">
                <FaBell size={11} className="opacity-70" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1140px] mx-auto px-6">

        {/* ── COURSES ── */}
        <section className="py-16">
          <div className="text-center mb-12">
            <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#C0392B] mb-3 font-mono">
              Our Programs
            </p>
            <h2
              className="text-[clamp(1.8rem,3vw,2.6rem)] font-black text-[#1a1a1a] mb-4 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              SSC Coaching Programs
            </h2>
            <p className="text-[#777] text-[15px] max-w-[520px] mx-auto leading-relaxed">
              Targeted programs for every SSC exam — from CGL to MTS. Pick your path and start preparing with India's best faculty.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COURSES.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-[#ebe9e2] hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
              >
                {/* Card Header */}
                <div className="p-6 pb-5" style={{ background: c.color }}>
                  <span className="inline-block bg-white/20 text-white text-[11px] font-bold px-2.5 py-1 rounded-full mb-3">
                    {c.tag}
                  </span>
                  <h3
                    className="text-white text-[16px] font-bold leading-snug mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {c.title}
                  </h3>
                  <div className="flex gap-4">
                    <span className="text-[12px] text-white/70 flex items-center gap-1.5">
                      <FaClock size={10} /> {c.duration}
                    </span>
                    <span className="text-[12px] text-white/70 flex items-center gap-1.5">
                      <FaBolt size={10} /> {c.mode}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <ul className="mb-5 space-y-2">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-[#444]">
                        <FaCheckCircle size={13} style={{ color: c.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                   
                    <button
                      className="text-white text-[13px] font-bold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                      style={{ background: c.color }}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FREE RESOURCES ── */}
        <section className="py-10">
          <div
            className="rounded-2xl p-8 lg:p-12 border border-[#e8ddd0]"
            style={{ background: "linear-gradient(135deg, #fff8f6, #fff5f0)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#C0392B] mb-3 font-mono">
                  100% Free
                </p>
                <h2
                  className="text-[clamp(1.5rem,3vw,2.2rem)] font-black text-[#1a1a1a] leading-snug mb-4 tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Free SSC Resources
                  <br className="hidden sm:block" />
                  — No Sign-up Needed
                </h2>
                <p className="text-[#777] text-[15px] leading-[1.75] max-w-md">
                  Practice with real papers, attempt a full Tier I mock, and explore the syllabus before spending a rupee. We believe every aspirant deserves a free first step.
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#C0392B] hover:gap-3 transition-all lg:hidden"
                >
                  View all free resources <FaArrowRight size={12} />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RESOURCES.map((r, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 border-[1.5px] border-[#ebe8df] flex flex-col gap-3 hover:-translate-y-1 hover:shadow-md hover:border-[#d9d4c8] transition-all duration-200 cursor-pointer group"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: r.color + "15" }}
                    >
                      <r.icon size={20} color={r.color} />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-[#1a1a1a] mb-1">{r.label}</div>
                      <div className="text-[12px] text-[#888]">{r.desc}</div>
                    </div>
                    <div
                      className="flex items-center gap-1.5 text-[12px] font-semibold group-hover:gap-2.5 transition-all"
                      style={{ color: r.color }}
                    >
                      Access Free <FaArrowRight size={11} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── EXAM INFO ── */}
        <section className="py-12">
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#C0392B] mb-3 font-mono">
              Know The Exam
            </p>
            <h2
              className="text-[clamp(1.8rem,3vw,2.4rem)] font-black text-[#1a1a1a] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              SSC Exam Pattern & Details
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-[#ebe9e2] overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-[#ebe9e2]">
              {EXAM_TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`flex-1 py-4 text-[14px] font-bold transition-colors ${
                    activeTab === t
                      ? "bg-[#C0392B] text-white"
                      : "bg-white text-[#555] hover:bg-[#fdf3f2] hover:text-[#C0392B]"
                  }`}
                >
                  SSC {t}
                </button>
              ))}
            </div>

            {/* Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {EXAM_DATA[activeTab].map((row, i) => (
                <div
                  key={i}
                  className={`p-5 flex gap-4 border-b border-[#f0efe9] ${i % 2 === 0 ? "sm:border-r" : ""}`}
                >
                  <FaBell size={15} color="#C0392B" className="mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[11px] font-semibold text-[#aaa] uppercase tracking-[0.08em] mb-1">
                      {row.label}
                    </div>
                    <div className="text-[14px] font-medium text-[#1a1a1a]">{row.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MENTORS ── */}
        <section className="py-10">
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#C0392B] mb-3 font-mono">
              Learn From The Best
            </p>
            <h2
              className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-[#1a1a1a] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              SSC Expert Faculty
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MENTORS.map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-[18px] px-5 py-7 text-center border border-[#ebe9e2] hover:-translate-y-1 hover:shadow-md hover:border-[#d9d4c8] transition-all duration-200"
              >
                <div
                  className="w-[72px] h-[72px] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
                  style={{ background: m.color, fontFamily: "'Playfair Display', serif" }}
                >
                  {m.initials}
                </div>
                <h4 className="font-bold text-[15px] text-[#1a1a1a] mb-1">{m.name}</h4>
                <p className="text-[12px] font-semibold mb-2" style={{ color: m.color }}>
                  {m.role}
                </p>
                <p className="text-[12px] text-[#888] leading-relaxed">{m.specialty}</p>
                <div className="mt-4 flex justify-center gap-1">
                  {[...Array(5)].map((_, s) => (
                    <FaStar key={s} size={12} color="#ffd44d" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TOPPERS ── */}
        <section className="py-10">
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#C0392B] mb-3 font-mono">
              Success Stories
            </p>
            <h2
              className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-[#1a1a1a] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Our SSC Toppers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOPPERS.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-[18px] p-6 sm:p-7 border border-[#ebe9e2] hover:-translate-y-1 hover:shadow-md hover:border-[#d9d4c8] transition-all duration-200 flex flex-col"
              >
                <div className="text-[36px] leading-none mb-4 text-[#C0392B] select-none" style={{ fontFamily: "Georgia, serif" }}>
                  &ldquo;
                </div>
                <p className="text-[14px] text-[#555] leading-[1.75] mb-5 flex-1">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f0efe9]">
                  <div className="w-11 h-11 rounded-full bg-[#C0392B] text-white flex items-center justify-center font-bold text-[16px] shrink-0">
                    {t.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-[14px] text-[#1a1a1a] truncate">{t.name}</div>
                    <div className="text-[12px] text-[#888] truncate">{t.batch}</div>
                  </div>
                  <span className="ml-auto shrink-0 bg-[#fdf0ee] text-[#C0392B] text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                    {t.rank}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="py-12 pb-20">
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#C0392B] mb-3 font-mono">
              Got Questions?
            </p>
            <h2
              className="text-[clamp(1.8rem,3vw,2.4rem)] font-black text-[#1a1a1a] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-[780px] mx-auto space-y-3">
            {FAQS.map((f, i) => (
              <div
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="bg-white rounded-2xl border border-[#ebe9e2] overflow-hidden cursor-pointer hover:border-[#d9d4c8] transition-colors"
              >
                <div className="px-6 py-5 flex items-center justify-between gap-4">
                  <span className="text-[15px] font-semibold text-[#1a1a1a]">{f.q}</span>
                  <FaChevronDown
                    size={16}
                    color="#888"
                    style={{
                      transform: openFaq === i ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                      flexShrink: 0,
                    }}
                  />
                </div>
                {openFaq === i && (
                  <div className="px-6 pb-5 pt-0 text-[14px] text-[#666] leading-[1.75] border-t border-[#f0efe9]">
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
        style={{ background: "linear-gradient(135deg, #1a0a0a 0%, #2d0f0f 50%, #C0392B 100%)" }}
      >
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-[12px] font-bold px-4 py-1.5 rounded-full mb-5 border border-white/15">
          <FaTrophy size={12} color="#ffd44d" />
          Trusted by 2,40,000+ SSC Aspirants
        </div>
        <h2
          className="text-[clamp(1.8rem,3vw,2.6rem)] font-black text-white mb-3 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your Government Job Journey{" "}
          <span className="italic text-[#ffd44d]">Starts Today</span>
        </h2>
        <p className="text-white/60 text-[15px] mb-8">
          Join thousands of officers who cleared SSC with our proven system.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-[#ffd44d] text-[#1a1a1a] font-black text-[15px] px-8 py-4 rounded-xl hover:bg-[#f0c840] transition-colors">
            Start Free Trial
          </button>
          <button className="bg-white/10 text-white font-semibold text-[15px] px-8 py-4 rounded-xl border border-white/25 hover:bg-white/15 transition-colors">
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
}   