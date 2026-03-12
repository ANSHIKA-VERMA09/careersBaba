
"use client"
import { useState } from "react";
import {
  FaBookOpen, FaVideo, FaFileAlt, FaPen, FaAward, FaChevronDown,
  FaChevronRight, FaStar, FaUsers, FaClock, FaChartLine, FaCheckCircle,
  FaBell, FaDownload, FaPlay, FaArrowRight, FaShieldAlt, FaBullseye, FaBolt
} from "react-icons/fa";

const NAV_LINKS = ["Overview", "Courses", "Free Resources", "Exam Info", "Mentors", "Results", "FAQs"];

const COURSES = [
  { title: "UPSC Foundation Batch 2026", tag: "Most Popular", price: "₹18,999", original: "₹28,000", duration: "18 months", mode: "Live Online", students: "12,400+", color: "#1a3a6b", features: ["300+ Live Classes", "Full GS Coverage", "Essay & Ethics", "PI Prep"] },
  { title: "UPSC Prelims Crash Course", tag: "Quick Start", price: "₹6,499", original: "₹10,000", duration: "4 months", mode: "Live + Recorded", students: "8,200+", color: "#7B2FBE", features: ["100 Topic Tests", "Current Affairs", "CSAT Special", "Doubt Sessions"] },
  { title: "UPSC Mains Exclusive", tag: "Advanced", price: "₹12,999", original: "₹19,000", duration: "6 months", mode: "Offline + Online", students: "5,900+", color: "#2D6A4F", features: ["Answer Writing", "Mains Mock Tests", "Faculty Review", "Strategy Sessions"] },
  { title: "UPSC Test Series 2026", tag: "Self-Prep", price: "₹3,499", original: "₹5,000", duration: "12 months", mode: "Self-Paced", students: "22,000+", color: "#B5451B", features: ["60 Full Mocks", "PYQ Bank", "Performance Analytics", "Rank Predictor"] },
];

const RESOURCES = [
  { icon: FaFileAlt, label: "Previous Year Papers", desc: "Last 10 years solved papers", color: "#1a3a6b" },
  { icon: FaPen, label: "Free Prelims Mock", desc: "Full-length exam simulation", color: "#2D6A4F" },
  { icon: FaBookOpen, label: "UPSC Syllabus PDF", desc: "GS I-IV + Optional breakdown", color: "#B5451B" },
  { icon: FaVideo, label: "Free Video Lectures", desc: "30+ hours of expert content", color: "#7B2FBE" },
];

const EXAM_DATA = {
  Prelims: [
    { label: "Date", value: "May 25, 2026 (Expected)" },
    { label: "Papers", value: "GS Paper I + CSAT (Paper II)" },
    { label: "Total Marks", value: "400 (200 each)" },
    { label: "Duration", value: "2 hours per paper" },
    { label: "Negative Marking", value: "1/3rd for wrong answers" },
    { label: "Mode", value: "Offline (OMR Based)" },
  ],
  Mains: [
    { label: "Date", value: "Sep 19, 2026 (Expected)" },
    { label: "Papers", value: "9 Papers (4 GS + Essay + Optional x2 + Lang)" },
    { label: "Total Marks", value: "1750 (Written)" },
    { label: "Duration", value: "3 hours per paper" },
    { label: "Answer Type", value: "Descriptive/Analytical" },
    { label: "Mode", value: "Offline (Written)" },
  ],
  Interview: [
    { label: "Date", value: "Feb–May 2027 (Expected)" },
    { label: "Conducting Body", value: "UPSC Board" },
    { label: "Total Marks", value: "275 marks" },
    { label: "Duration", value: "30–45 minutes" },
    { label: "Focus Areas", value: "Personality, Current Affairs, DAF" },
    { label: "Mode", value: "In-Person, New Delhi" },
  ],
};

const MENTORS = [
  { name: "Ankur Sir", role: "IAS (Retd.) | 22 yrs experience", specialty: "GS & Essay Specialist", color: "#1a3a6b", initials: "AS" },
  { name: "Nikita Ma'am", role: "AIR 12, CSE 2019", specialty: "Mains Answer Writing", color: "#2D6A4F", initials: "NM" },
]

const TOPPERS = [
  { name: "Aryan Kapoor", rank: "AIR 34", batch: "Foundation 2024", quote: "The structured answer writing program at this institute transformed my Mains score completely." },
  { name: "Divya Nair", rank: "AIR 67", batch: "Crash Course 2024", quote: "Current affairs integration with static syllabus — the way they teach is something I've never experienced." },
  { name: "Rohan Tiwari", rank: "AIR 112", batch: "Test Series 2024", quote: "60 mocks with detailed analytics gave me a clear edge in the actual Prelims." },
];

const FAQS = [
  { q: "What is the eligibility for UPSC CSE?", a: "Candidates must hold a Bachelor's degree from a recognised university. The minimum age is 21 years and maximum is 32 (with relaxations for reserved categories). General candidates can attempt up to 6 times." },
  { q: "How long does UPSC preparation typically take?", a: "Most aspirants take 1–2 years for serious preparation. With a strong academic background and dedicated strategy, 12–14 months of focused study can yield results in the first attempt." },
  { q: "Which optional subject is best for UPSC Mains?", a: "The best optional depends on your academic background, interest level, and overlap with GS syllabus. Popular choices include Anthropology, PSIR, History, Geography, and Sociology." },
  { q: "Does your institute offer offline classes?", a: "Yes, we offer classroom coaching in major cities alongside live online and recorded options. Our hybrid model ensures flexibility without compromising on quality." },
  { q: "What free resources do you provide for UPSC?", a: "We provide free Previous Year Papers, a full-length Prelims Mock Test, the official UPSC Syllabus PDF, and 30+ hours of introductory video lectures — all without registration." },
];
type ExamTab = "Prelims" | "Mains" | "Interview";
const EXAM_TABS: ExamTab[] = ["Prelims", "Mains", "Interview"];

export default function UPSCPage() {
  const [activeTab, setActiveTab] = useState<ExamTab>("Prelims");
  const [openFaq, setOpenFaq] = useState<null | number>(null);
  const [activeNav, setActiveNav] = useState("Overview");

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F5F4F0", minHeight: "100vh", color: "#1a1a1a" }}>




      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #0f2448 0%, #1a3a6b 55%, #1e4d8c 100%)", padding: "72px 24px 80px", position: "relative", overflow: "hidden" }}>
        {/* bg decor */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
        <div style={{ position: "absolute", bottom: -80, left: "30%", width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 380px", gap: 48, alignItems: "center" }}>
          <div className="hero-anim">
            <span className="badge" style={{ background: "rgba(255,200,60,0.15)", color: "#ffd44d", marginBottom: 20 }}>
              ★ India's #1 UPSC Coaching Platform
            </span>
            <h1 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "#fff", marginBottom: 16 }}>
              Crack UPSC CSE <br />
              <span style={{ fontStyle: "italic", color: "#ffd44d" }}>with Expert Guidance</span>
            </h1>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.72)", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
              From Prelims strategy to Interview coaching — a complete ecosystem built for serious aspirants. Over <strong style={{ color: "#fff" }}>15,000+ selections</strong> across IAS, IPS, IFS and allied services.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn-primary" style={{ background: "#ffd44d", color: "#1a1a1a", padding: "13px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700 }}>
                Explore Courses →
              </button>
              <button className="btn-primary" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", padding: "13px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600, border: "1px solid rgba(255,255,255,0.25)" }}>
                ▶ Watch Free Demo
              </button>
            </div>
            <div style={{ display: "flex", gap: 32, marginTop: 36 }}>
              {[ ["5.0*", "Student Rating"]].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#ffd44d", fontFamily: "'Playfair Display', serif" }}>{v}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead form */}
          <div style={{ background: "#fff", borderRadius: 20, padding: 32, boxShadow: "0 24px 64px rgba(0,0,0,0.25)" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1a3a6b", marginBottom: 6 }}>Get 1:1 UPSC Guidance</h3>
            <p style={{ fontSize: 13, color: "#888", marginBottom: 24 }}>Speak with an expert counsellor — free</p>
            {[["Full Name", "text", "Rahul Sharma"], ["Mobile Number", "tel", "+91 9876543210"], ["Email", "email", "rahul@email.com"]].map(([label, type, ph]) => (
              <div key={label} style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: "#555", display: "block", marginBottom: 5 }}>{label}</label>
                <input type={type} placeholder={ph} style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1.5px solid #e2e0da", fontSize: 14, outline: "none", color: "#333" }} />
              </div>
            ))}
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#555", display: "block", marginBottom: 5 }}>Target Year</label>
              <select style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1.5px solid #e2e0da", fontSize: 14, color: "#333", background: "#fff" }}>
                <option>CSE 2026</option>
                <option>CSE 2027</option>
                <option>Not decided yet</option>
              </select>
            </div>
            <button className="btn-primary" style={{ width: "100%", background: "#1a3a6b", color: "#fff", padding: "14px", borderRadius: 10, fontSize: 15, fontWeight: 700 }}>
              Book Free Session
            </button>
          </div>
        </div>
      </section>

      {/* UPDATES TICKER */}
      <div style={{ background: "#1a3a6b", padding: "10px 24px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ background: "#ffd44d", color: "#1a1a1a", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 4, whiteSpace: "nowrap" }}>LIVE UPDATES</span>
          <div style={{ display: "flex", gap: 32, overflow: "hidden" }}>
            {["UPSC CSE 2026 Notification expected in Feb 2026", "Prelims Date: May 25, 2026 (Expected)", "New batch starting Jan 15 — Limited seats", "Free Mock Test live now — Attempt before it closes"].map((t, i) => (
              <span key={i} style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", whiteSpace: "nowrap" }}>
                <FaBell size={12} style={{ marginRight: 5, verticalAlign: "middle", opacity: 0.7 }} />{t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>

        {/* COURSES */}
        <section style={{ padding: "72px 0 48px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="section-label" style={{ marginBottom: 10 }}>Our Programs</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "#1a1a1a", marginBottom: 14 }}>
              UPSC Coaching Programs
            </h2>
            <p style={{ color: "#777", fontSize: 15, maxWidth: 540, margin: "0 auto", lineHeight: 1.6 }}>
              From foundations to final interview — we have a program calibrated to exactly where you are in your journey.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24 }}>
            {COURSES.map((c, i) => (
              <div key={i} className="course-card" style={{ background: "#fff", borderRadius: 18, overflow: "hidden", border: "1px solid #ebe9e2" }}>
                <div style={{ background: c.color, padding: "24px 24px 20px" }}>
                  <span className="badge" style={{ background: "rgba(255,255,255,0.2)", color: "#fff", marginBottom: 12 }}>{c.tag}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>{c.title}</h3>
                  <div style={{ display: "flex", gap: 16, marginTop: 14 }}>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>⏱ {c.duration}</span>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>📡 {c.mode}</span>
                  </div>
                </div>
                <div style={{ padding: "20px 24px 24px" }}>
                  <ul style={{ listStyle: "none", marginBottom: 20 }}>
                    {c.features.map(f => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#444", marginBottom: 8 }}>
                        <FaCheckCircle size={14} color={c.color} /> {f}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                    {/* <div>
                      <div style={{ fontSize: 22, fontWeight: 700, color: c.color, fontFamily: "'Playfair Display',serif" }}>{c.price}</div>
                      <div style={{ fontSize: 12, color: "#aaa", textDecoration: "line-through" }}>{c.original}</div>
                      <div style={{ fontSize: 11, color: "#888" }}>{c.students} enrolled</div>
                    </div> */}
                    <button className="btn-primary" style={{ background: c.color, color: "#fff", padding: "10px 18px", borderRadius: 10, fontSize: 13, fontWeight: 600 }}>
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FREE RESOURCES */}
        <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div
            className="rounded-2xl p-6 sm:p-8 lg:p-12 border border-[#ede8da]"
            style={{ background: "linear-gradient(135deg, #fdf9f0, #fff8eb)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* ── LEFT: Text ── */}
              <div>
                <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#B5451B] mb-3 font-mono">
                  100% Free
                </p>
                <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-[#1a1a1a] leading-snug mb-4 tracking-tight">
                  Free Resources for<br className="hidden sm:block" /> UPSC Preparation
                </h2>
                <p className="text-[#777] text-[15px] leading-[1.75] max-w-md">
                  Before committing to a full program, test yourself. Our free tools give every
                  aspirant a fair shot at evaluating their preparation level — no signup needed.
                </p>

                {/* CTA visible only on mobile, below text */}
                <a
                  href="#all-resources"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#B5451B] hover:gap-3 transition-all lg:hidden"
                >
                  View all free resources <FaArrowRight size={12} />
                </a>
              </div>

              {/* ── RIGHT: Cards grid ── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {RESOURCES.map((r, i) => (
                  <div
                    key={i}
                    className="
                  bg-white rounded-2xl p-4 sm:p-5
                  border-[1.5px] border-[#ebe8df]
                  flex flex-col gap-3
                  hover:-translate-y-1 hover:shadow-md hover:border-[#d9d4c8]
                  transition-all duration-200 cursor-pointer
                  group
                "
                  >
                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: r.color + "15" }}
                    >
                      <r.icon size={20} color={r.color} />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <div className="text-[13px] font-semibold text-[#1a1a1a] mb-1 leading-snug">
                        {r.label}
                      </div>
                      <div className="text-[12px] text-[#888] leading-[1.5]">
                        {r.desc}
                      </div>
                    </div>

                    {/* Action */}
                    <div
                      className="flex items-center gap-1.5 text-[12px] font-semibold group-hover:gap-2.5 transition-all"
                      style={{ color: r.color }}
                    >
                      Access Free
                      <FaArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* EXAM INFO */}
        <section style={{ padding: "48px 0" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p className="section-label" style={{ marginBottom: 10 }}>Know the Battleground</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "#1a1a1a" }}>UPSC CSE Exam Details</h2>
          </div>
          <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #ebe9e2", overflow: "hidden" }}>
            <div style={{ display: "flex", borderBottom: "1px solid #ebe9e2" }}>
              {EXAM_TABS.map(t => (
                <button key={t} className="tab-btn" onClick={() => setActiveTab(t)}
                  style={{ flex: 1, padding: "16px", fontSize: 14, fontWeight: 600, background: activeTab === t ? "#1a3a6b" : "#fff", color: activeTab === t ? "#fff" : "#555" }}>
                  {t}
                </button>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
              {EXAM_DATA[activeTab].map((row, i) => (
                <div key={i} style={{ padding: "18px 28px", borderBottom: "1px solid #f0efe9", borderRight: i % 2 === 0 ? "1px solid #f0efe9" : "none", display: "flex", gap: 16 }}>
                  <FaBell size={16} color="#1a3a6b" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3 }}>{row.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "#1a1a1a" }}>{row.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MENTORS */}
        <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12">

          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#B5451B] mb-2.5 font-mono">
              Learn From The Best
            </p>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[#1a1a1a] tracking-tight">
              Top UPSC Mentors in India
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {MENTORS.map((m, i) => (
              <div
                key={i}
                className="
              bg-white rounded-[18px] px-5 py-7
              text-center border border-[#ebe9e2]
              hover:-translate-y-1 hover:shadow-md hover:border-[#d9d4c8]
              transition-all duration-200
            "
              >
                {/* Avatar */}
                <div
                  className="w-[72px] h-[72px] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
                  style={{ background: m.color, fontFamily: "'Playfair Display', serif" }}
                >
                  {m.initials}
                </div>

                {/* Name */}
                <h4 className="font-bold text-[15px] text-[#1a1a1a] mb-1 leading-snug">
                  {m.name}
                </h4>

                {/* Role */}
                <p className="text-[12px] font-semibold mb-2" style={{ color: m.color }}>
                  {m.role}
                </p>

                {/* Specialty */}
                <p className="text-[12px] text-[#888] leading-[1.55]">
                  {m.specialty}
                </p>

                {/* Stars */}
                <div className="mt-4 flex justify-center gap-[3px]">
                  {[...Array(5)].map((_, s) => (
                    <FaStar key={s} size={12} fill="#ffd44d" color="#ffd44d" />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* TOPPERS */}
       <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12">

      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
        <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#B5451B] mb-2.5 font-mono">
          Success Stories
        </p>
        <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[#1a1a1a] tracking-tight">
          What Our UPSC Toppers Say
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {TOPPERS.map((t, i) => (
          <div
            key={i}
            className="
              bg-white rounded-[18px] p-6 sm:p-7
              border border-[#ebe9e2]
              hover:-translate-y-1 hover:shadow-md hover:border-[#d9d4c8]
              transition-all duration-200
              flex flex-col
            "
          >
            {/* Quote mark */}
            <div
              className="text-[36px] leading-none mb-4 text-[#1a3a6b] select-none"
              style={{ fontFamily: "Georgia, serif" }}
            >
              &ldquo;
            </div>

            {/* Quote text — grows to fill card */}
            <p className="text-[14px] text-[#555] leading-[1.75] mb-5 flex-1">
              {t.quote}
            </p>

            {/* Footer */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#f0efe9]">
              {/* Avatar */}
              <div className="w-11 h-11 rounded-full bg-[#1a3a6b] text-white flex items-center justify-center font-bold text-[16px] flex-shrink-0">
                {t.name[0]}
              </div>

              {/* Name + meta */}
              <div className="min-w-0">
                <div className="font-bold text-[14px] text-[#1a1a1a] truncate">{t.name}</div>
                <div className="text-[12px] text-[#888] truncate">{t.batch}</div>
              </div>

              {/* Rank badge */}
              <span className="ml-auto flex-shrink-0 bg-[#eef1f8] text-[#1a3a6b] text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                {t.rank}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>

        {/* FAQs */}
        <section style={{ padding: "48px 0 72px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p className="section-label" style={{ marginBottom: 10 }}>Got Questions?</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "#1a1a1a" }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            {FAQS.map((f, i) => (
              <div key={i} className="faq-row" onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ background: "#fff", borderRadius: 14, marginBottom: 12, border: "1px solid #ebe9e2", overflow: "hidden" }}>
                <div style={{ padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", paddingRight: 20 }}>{f.q}</span>
                  <FaChevronDown size={18} color="#888" style={{ transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }} />
                </div>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", fontSize: 14, color: "#666", lineHeight: 1.7, borderTop: "1px solid #f0efe9", paddingTop: 16 }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER CTA */}
      <div style={{ background: "linear-gradient(135deg, #0f2448, #1a3a6b)", padding: "56px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "#fff", marginBottom: 12 }}>
          Your IAS Journey Starts <span style={{ fontStyle: "italic", color: "#ffd44d" }}>Today</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, marginBottom: 28 }}>Join 15,000+ successful officers who trusted us with their dream.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-primary" style={{ background: "#ffd44d", color: "#1a1a1a", padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 700 }}>
            Start Free Trial
          </button>
          <button className="btn-primary" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 600, border: "1px solid rgba(255,255,255,0.25)" }}>
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
}