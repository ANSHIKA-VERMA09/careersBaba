"use client"
import { useState } from "react";
import {
  FaChevronDown, FaStar, FaCheckCircle, FaBell,
  FaArrowRight, FaBook, FaCalculator, FaFlask,
  FaGlobe, FaLanguage, FaShieldAlt, FaTrophy,
  FaUniversity, FaCalendarAlt, FaClipboardList
} from "react-icons/fa";

const NAV_LINKS = ["Overview", "Courses", "Free Resources", "Syllabus", "Mentors", "Results", "FAQs"];

const COURSES = [
  {
    title: "CUET UG Complete Prep 2026",
    tag: "Most Popular",
    price: "₹4,999",
    original: "₹9,000",
    duration: "6 months",
    mode: "Live Online",
    students: "42,000+",
    color: "#1a3fa8",
    features: ["All Domains Covered", "Mock Tests + PYQs", "Doubt Sessions", "NTA Pattern"],
  },
  {
    title: "CUET Science Stream",
    tag: "PCM / PCB",
    price: "₹3,499",
    original: "₹6,500",
    duration: "4 months",
    mode: "Live + Recorded",
    students: "18,200+",
    color: "#0f7275",
    features: ["Physics, Chem, Bio/Maths", "Formula Sheets", "Chapter Tests", "Rank Predictor"],
  },
  {
    title: "CUET Humanities & Commerce",
    tag: "Arts / Commerce",
    price: "₹2,999",
    original: "₹5,500",
    duration: "4 months",
    mode: "Self-Paced",
    students: "24,700+",
    color: "#7c3aed",
    features: ["Economics, History, Pol Sci", "Accountancy & BST", "Case Study Practice", "Essay Writing"],
  },
  {
    title: "CUET General Test Crash",
    tag: "Quick Start",
    price: "₹999",
    original: "₹2,500",
    duration: "3 weeks",
    mode: "Self-Paced",
    students: "61,000+",
    color: "#b45309",
    features: ["Quantitative Aptitude", "Logical Reasoning", "General Knowledge", "English Language"],
  },
];

const RESOURCES = [
  { icon: FaBook, label: "CUET PYQ Bank", desc: "2022–2025 solved papers", color: "#1a3fa8" },
  { icon: FaCalculator, label: "Score Calculator", desc: "Estimate your NTA score", color: "#0f7275" },
  { icon: FaClipboardList, label: "Syllabus PDF 2026", desc: "All subjects, all domains", color: "#7c3aed" },
  { icon: FaTrophy, label: "Free Mock Test", desc: "Full-length CUET simulator", color: "#b45309" },
];

const SYLLABUS_DATA = {
  "Section IA/IB — Languages": [
    { label: "Languages Available", value: "13 languages (Hindi, English, Tamil, etc.)" },
    { label: "Question Type", value: "Reading Comprehension, Grammar, Vocabulary" },
    { label: "Total Questions", value: "50 Questions (attempt 40)" },
    { label: "Duration", value: "45 minutes per language" },
    { label: "Marks", value: "+5 correct, −1 wrong" },
    { label: "Key Focus", value: "Literary Aptitude + Verbal Ability" },
  ],
  "Section II — Domain": [
    { label: "Domain Subjects", value: "27 subjects across Science, Commerce, Arts" },
    { label: "Question Type", value: "MCQs from Class 12 NCERT syllabus" },
    { label: "Total Questions", value: "50 Questions (attempt 40)" },
    { label: "Duration", value: "45 minutes per subject" },
    { label: "Marks", value: "+5 correct, −1 wrong" },
    { label: "Key Focus", value: "NCERT Chapters + Application-based" },
  ],
  "Section III — General Test": [
    { label: "Topics", value: "QA, Reasoning, GK, Current Affairs, English" },
    { label: "Question Type", value: "MCQs — NTA standard difficulty" },
    { label: "Total Questions", value: "75 Questions (attempt 60)" },
    { label: "Duration", value: "60 minutes" },
    { label: "Marks", value: "+5 correct, −1 wrong" },
    { label: "Key Focus", value: "Speed + Accuracy + GK Depth" },
  ],
};

const MENTORS = [
  { name: "Dr. Meena Tripathi", role: "Ex-CBSE Examiner | 22 yrs exp", specialty: "English & Languages", color: "#1a3fa8", initials: "MT" },
  { name: "Rohit Khanna", role: "IIT Delhi | AIR 12 CUET '23", specialty: "Physics & Mathematics", color: "#0f7275", initials: "RK" },
  { name: "Priya Nair", role: "Delhi Univ Topper | MA History", specialty: "Humanities & GK", color: "#7c3aed", initials: "PN" },
  { name: "Suresh Rao", role: "CA + MBA | 15 yrs teaching", specialty: "Commerce & Economics", color: "#b45309", initials: "SR" },
];

const TOPPERS = [
  {
    name: "Ananya Sharma",
    role: "Admitted — Lady Shri Ram College, DU",
    batch: "CUET 2025",
    quote: "Scored 340/400 in my domain subjects. The mock tests were identical in difficulty to the actual exam. Zero surprises on the day.",
  },
  {
    name: "Dev Patel",
    role: "Admitted — Hindu College, Delhi University",
    batch: "CUET 2025",
    quote: "The General Test section felt easy only because I'd done 30+ mocks here. The reasoning shortcuts alone saved me 12 marks.",
  },
  {
    name: "Kavya Reddy",
    role: "Admitted — Presidency University, Kolkata",
    batch: "CUET 2025",
    quote: "I'm from a Telugu-medium school. The bilingual content and language paper coaching gave me the confidence I never had before.",
  },
];

const FAQS = [
  {
    q: "How many subjects can I appear for in CUET UG?",
    a: "A candidate can appear for a maximum of 6 subjects/tests in CUET UG — up to 2 language tests (Section IA/IB), up to 6 domain-specific subjects (Section II), and the General Test (Section III). Most top universities require 3–5 subjects.",
  },
  {
    q: "Is CUET score the only criterion for DU / central university admissions?",
    a: "For Delhi University and most central universities, CUET score is now the primary criterion. Class 12 board marks no longer directly determine merit list position. Some universities may conduct additional interviews or take into account co-curricular achievements.",
  },
  {
    q: "What is the exam pattern for CUET 2026?",
    a: "CUET 2026 is a Computer-Based Test (CBT). Section IA/IB (Languages) has 50 MCQs, Section II (Domain Subjects) has 50 MCQs, and the General Test has 75 MCQs. Each correct answer gives +5 marks; each wrong answer deducts 1 mark.",
  },
  {
    q: "How is the NTA CUET score calculated and normalised?",
    a: "NTA uses percentile-based normalisation since exams are held in multiple shifts. Raw scores are converted to a normalised score out of 800. The final merit list for universities is based on these normalised scores, not raw marks.",
  },
  {
    q: "How many mock tests are included in the course?",
    a: "The complete prep courses include 40+ full-length mock tests, 200+ chapter-wise tests, and full PYQ (Previous Year Question) practice sets from CUET 2022–2025. All mocks are timed and NTA-interface replicated.",
  },
];

type SylTab = "Section IA/IB — Languages" | "Section II — Domain" | "Section III — General Test";
const SYL_TABS: SylTab[] = ["Section IA/IB — Languages", "Section II — Domain", "Section III — General Test"];

const STATS = [
 
  ["5.0*", "Avg Rating"],
];

const EXAM_DATES = [
  { event: "CUET 2026 Registration Opens", date: "Feb 2026" },
  { event: "Last Date to Apply", date: "Mar 2026" },
  { event: "Admit Card Release", date: "Apr 2026" },
  { event: "CUET UG Exam", date: "May 2026" },
  { event: "Result Declaration", date: "Jun 2026" },
];

export default function CUETPage() {
  const [activeTab, setActiveTab] = useState<SylTab>("Section IA/IB — Languages");
  const [openFaq, setOpenFaq] = useState<null | number>(null);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F4F5F7", minHeight: "100vh", color: "#111" }}>

      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, #0a0f2e 0%, #111d5e 50%, #0a1a3a 100%)",
          padding: "72px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glows */}
        <div
          style={{
            position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 75% 25%, rgba(26,63,168,0.25) 0%, transparent 55%), radial-gradient(circle at 15% 75%, rgba(124,58,237,0.15) 0%, transparent 50%)",
          }}
        />
        {/* Grid lines */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-center relative">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(26,63,168,0.25)] border border-[rgba(26,63,168,0.5)] rounded-[20px] px-[14px] py-[5px] mb-[22px]">
              <span className="w-[7px] h-[7px] rounded-full bg-[#60a5fa] inline-block animate-pulse" />
              <span className="text-[12px] text-[#60a5fa] font-['Space_Mono',monospace] font-semibold">
                India's #1 CUET Preparation Platform
              </span>
            </div>

            <h1 className="font-['Space_Mono',monospace] text-[clamp(2rem,4vw,3rem)] text-white mb-4 leading-[1.2] tracking-[-0.04em]">
              Crack CUET 2026 &<br />
              <span className="text-[#60a5fa]">Get Into Your Dream College</span>
            </h1>

            <p className="text-[16px] text-[rgba(255,255,255,0.65)] leading-[1.75] mb-8 max-w-[500px]">
              NTA-aligned, mentor-led preparation for CUET UG — covering all 27 domain subjects,
              languages, and General Test. Over{" "}
              <strong className="text-white">98,000+ students</strong> secured admission to DU,
              JNU, BHU & 340+ central universities.
            </p>

            <div className="flex gap-3 flex-wrap">
              <button className="bg-[#3b82f6] text-white px-[28px] py-[13px] rounded-[10px] text-[15px] font-bold border-none cursor-pointer hover:bg-[#2563eb] transition-colors">
                Explore Courses →
              </button>
              <button className="bg-[rgba(255,255,255,0.07)] text-white px-[28px] py-[13px] rounded-[10px] text-[15px] font-semibold border border-[rgba(255,255,255,0.2)] cursor-pointer hover:bg-[rgba(255,255,255,0.12)] transition-colors">
                ▶ Free Mock Test
              </button>
            </div>

            <div className="flex flex-wrap gap-9 mt-10">
              {STATS.map(([v, l]) => (
                <div key={l}>
                  <div className="text-[22px] font-bold text-[#60a5fa] font-['Space_Mono',monospace]">{v}</div>
                  <div className="text-[12px] text-[rgba(255,255,255,0.45)] mt-[3px]">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-[20px] p-8 shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
            <h3 className="font-['Space_Mono',monospace] text-[18px] font-bold text-[#0a0f2e] mb-[6px] tracking-[-0.03em]">
              Get Free CUET Study Plan
            </h3>
            <p className="text-[13px] text-[#888] mb-6">Personalised for your stream & target college</p>

            {[
              ["Full Name", "text", "Ananya Sharma"],
              ["Mobile Number", "tel", "+91 9876543210"],
              ["Email", "email", "ananya@email.com"],
            ].map(([label, type, ph]) => (
              <div key={label as string} className="mb-4">
                <label className="text-[12px] font-semibold text-[#555] block mb-[5px]">{label}</label>
                <input
                  type={type as string}
                  placeholder={ph as string}
                  className="w-full px-[14px] py-[11px] rounded-[8px] border-[1.5px] border-[#e0e2ea] text-[14px] outline-none text-[#333] box-border focus:border-[#1a3fa8] transition-colors"
                />
              </div>
            ))}

            <div className="mb-4">
              <label className="text-[12px] font-semibold text-[#555] block mb-[5px]">Your Stream</label>
              <select className="w-full px-[14px] py-[11px] rounded-[8px] border-[1.5px] border-[#e0e2ea] text-[14px] text-[#333] bg-white focus:border-[#1a3fa8]">
                <option>Science (PCM)</option>
                <option>Science (PCB)</option>
                <option>Commerce</option>
                <option>Humanities / Arts</option>
                <option>Not Sure Yet</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="text-[12px] font-semibold text-[#555] block mb-[5px]">Target College</label>
              <select className="w-full px-[14px] py-[11px] rounded-[8px] border-[1.5px] border-[#e0e2ea] text-[14px] text-[#333] bg-white">
                <option>Delhi University (DU)</option>
                <option>JNU</option>
                <option>BHU Varanasi</option>
                <option>Jamia Millia Islamia</option>
                <option>Other Central University</option>
              </select>
            </div>

            <button className="w-full bg-[#1a3fa8] text-white py-[14px] rounded-[10px] text-[15px] font-bold border-none cursor-pointer hover:bg-[#162f7a] transition-colors">
              Book Free Counselling →
            </button>
            <p className="text-center text-[11px] text-[#bbb] mt-3">Free · No credit card · Expert callback in 2 hrs</p>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-[#0a1040] py-[10px] px-6 overflow-hidden">
        <div className="max-w-[1140px] mx-auto flex items-center gap-4">
          <span className="bg-[#3b82f6] text-white text-[11px] font-bold px-[10px] py-[3px] rounded-[4px] whitespace-nowrap font-['Space_Mono',monospace]">
            LIVE
          </span>
          <div className="flex gap-9 overflow-hidden">
            {[
              "CUET 2026 Registration expected Feb — Start Prep NOW",
              "New: CUET PG preparation batches launched",
              "Ananya S. scored 99.8 percentile — DU LSR Confirmed 🎉",
              "Free Saturday Doubt Sessions — Every week 11AM IST",
            ].map((t, i) => (
              <span key={i} className="text-[13px] text-[rgba(255,255,255,0.75)] whitespace-nowrap">
                <FaBell size={11} className="mr-[5px] align-middle opacity-60" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>

        {/* EXAM DATES STRIP */}
        <section className="py-10">
          <div className="bg-white rounded-[20px] border border-[#e4e5ea] px-8 py-6">
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#1a3fa8] uppercase mb-5 font-['Space_Mono',monospace]">
              📅 CUET 2026 Important Dates
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {EXAM_DATES.map((d, i) => (
                <div key={i} className="text-center">
                  <div className="text-[13px] font-bold text-[#1a3fa8] font-['Space_Mono',monospace] mb-1">{d.date}</div>
                  <div className="text-[12px] text-[#666] leading-[1.4]">{d.event}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COURSES */}
        <section className="py-[48px] pb-[48px]">
          <div className="text-center mb-12">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#1a3fa8] uppercase mb-[10px] font-['Space_Mono',monospace]">
              Our Programs
            </p>
            <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.5rem)] text-[#111] mb-[14px] tracking-[-0.04em]">
              CUET Preparation Courses
            </h2>
            <p className="text-[#777] text-[15px] max-w-[520px] mx-auto leading-[1.65]">
              Pick the course that matches your stream, target college, and timeline. All courses are NTA 2026 aligned.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(265px,1fr))] gap-6">
            {COURSES.map((c, i) => (
              <div key={i} className="bg-white rounded-[18px] overflow-hidden border border-[#e4e5ea] hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
                <div className="px-6 pt-6 pb-5" style={{ background: c.color }}>
                  <span className="bg-[rgba(255,255,255,0.18)] text-white text-[11px] font-bold px-[10px] py-[4px] rounded-[20px] inline-block mb-3">
                    {c.tag}
                  </span>
                  <h3 className="font-['Space_Mono',monospace] text-[15px] font-bold text-white leading-[1.4] tracking-[-0.02em]">
                    {c.title}
                  </h3>
                  <div className="flex gap-4 mt-[14px]">
                    <span className="text-[12px] text-[rgba(255,255,255,0.65)]">⏱ {c.duration}</span>
                    <span className="text-[12px] text-[rgba(255,255,255,0.65)]">📡 {c.mode}</span>
                  </div>
                </div>
                <div className="px-6 pt-5 pb-6">
                  <ul className="list-none mb-5 p-0">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-[#444] mb-2">
                        <FaCheckCircle size={13} color={c.color} /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-end justify-between">
                    {/* <div>
                      <div className="text-[22px] font-bold font-['Space_Mono',monospace]" style={{ color: c.color }}>
                        {c.price}
                      </div>
                      <div className="text-[12px] text-[#bbb] line-through">{c.original}</div>
                      <div className="text-[11px] text-[#999]">{c.students} enrolled</div>
                    </div> */}
                    <button
                      className="text-white px-[18px] py-[10px] rounded-[10px] text-[13px] font-semibold border-none cursor-pointer"
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

        {/* FREE RESOURCES */}
        <section className="py-12">
          <div className="bg-[linear-gradient(135deg,#0a0f2e,#111d5e)] rounded-[24px] px-[40px] py-[48px] border border-[rgba(96,165,250,0.15)] relative overflow-hidden">
            <div className="absolute -top-[40px] -right-[40px] w-[250px] h-[250px] rounded-full bg-[rgba(26,63,168,0.2)]" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
              <div>
                <p className="text-[12px] font-bold tracking-[0.12em] text-[#60a5fa] uppercase mb-[10px] font-['Space_Mono',monospace]">
                  100% Free
                </p>
                <h2 className="font-['Space_Mono',monospace] text-[clamp(1.6rem,2.5vw,2rem)] text-white mb-[14px] tracking-[-0.03em]">
                  Free CUET Resources
                </h2>
                <p className="text-[rgba(255,255,255,0.6)] text-[15px] leading-[1.75]">
                  Download PYQs, take a free mock, or use our score calculator — no login needed. Know exactly where you stand before you invest.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-[14px]">
                {RESOURCES.map((r, i) => (
                  <div
                    key={i}
                    className="bg-[rgba(255,255,255,0.06)] rounded-[16px] px-[16px] py-[18px] border border-[rgba(255,255,255,0.1)] flex flex-col gap-[10px] cursor-pointer hover:-translate-y-[3px] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center" style={{ background: r.color + "25" }}>
                      <r.icon size={18} color={r.color} />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white mb-[3px]">{r.label}</div>
                      <div className="text-[12px] text-[rgba(255,255,255,0.5)]">{r.desc}</div>
                    </div>
                    <div className="flex items-center gap-1 text-[12px] font-semibold mt-[2px]" style={{ color: r.color }}>
                      Access Free <FaArrowRight size={11} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SYLLABUS / EXAM PATTERN */}
        <section className="py-12">
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#1a3fa8] uppercase mb-[10px] font-['Space_Mono',monospace]">
              Exam Pattern
            </p>
            <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.4rem)] text-[#111] tracking-[-0.04em]">
              CUET 2026 Syllabus Overview
            </h2>
          </div>
          <div className="bg-white rounded-[20px] border border-[#e4e5ea] overflow-hidden">
            <div className="flex border-b border-[#e4e5ea] overflow-x-auto">
              {SYL_TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t as SylTab)}
                  className={`flex-1 px-4 py-4 text-[13px] font-semibold cursor-pointer border-none whitespace-nowrap
                    ${activeTab === t ? "bg-[#1a3fa8] text-white font-['Space_Mono',monospace]" : "bg-white text-[#555] hover:bg-[#f5f6fa]"}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {SYLLABUS_DATA[activeTab].map((row, i) => (
                <div key={i} className={`flex gap-3 px-7 py-4 border-b border-[#f0f1f5] ${i % 2 === 0 ? "md:border-r border-[#f0f1f5]" : ""}`}>
                  <FaUniversity size={15} color="#1a3fa8" className="mt-[2px] flex-shrink-0" />
                  <div>
                    <div className="text-[11px] font-bold text-[#aaa] uppercase tracking-[0.08em] mb-[3px]">{row.label}</div>
                    <div className="text-[14px] font-medium text-[#111]">{row.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MENTORS */}
        <section className="py-12">
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#1a3fa8] uppercase mb-[10px] font-['Space_Mono',monospace]">
              Learn From The Best
            </p>
            <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.4rem)] text-[#111] tracking-[-0.04em]">
              Expert CUET Educators
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {MENTORS.map((m, i) => (
              <div key={i} className="bg-white rounded-[18px] px-5 py-7 text-center border border-[#e4e5ea] hover:-translate-y-1 transition-transform duration-200">
                <div
                  className="w-[72px] h-[72px] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-[22px] font-bold font-['Space_Mono',monospace]"
                  style={{ background: m.color }}
                >
                  {m.initials}
                </div>
                <h4 className="font-bold text-[15px] text-[#111] mb-1">{m.name}</h4>
                <p className="text-[12px] font-semibold mb-1" style={{ color: m.color }}>{m.role}</p>
                <p className="text-[12px] text-[#888] leading-[1.5]">{m.specialty}</p>
                <div className="mt-3 flex justify-center gap-[2px]">
                  {[...Array(5)].map((_, s) => (
                    <FaStar key={s} size={12} fill="#f5a623" color="#f5a623" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TOPPERS / RESULTS */}
        <section className="py-12">
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#1a3fa8] uppercase mb-[10px] font-['Space_Mono',monospace]">
              Success Stories
            </p>
            <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.4rem)] text-[#111] tracking-[-0.04em]">
              Our Students Got In
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOPPERS.map((t, i) => (
              <div key={i} className="bg-white rounded-[18px] p-7 border border-[#e4e5ea]">
                <div className="text-[38px] text-[#1a3fa8] leading-[1] mb-3 font-['Space_Mono',monospace]">&quot;</div>
                <p className="text-[14px] text-[#555] leading-[1.75] mb-5">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f0f1f5]">
                  <div className="w-[44px] h-[44px] rounded-full bg-[#1a3fa8] text-white flex items-center justify-center font-bold text-[16px]">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-[14px] text-[#111]">{t.name}</div>
                    <div className="text-[12px] text-[#888]">{t.role}</div>
                  </div>
                  <span className="ml-auto bg-[#eff3ff] text-[#1a3fa8] text-[10px] font-bold px-2 py-[3px] rounded-[20px]">
                    {t.batch}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 pb-18">
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#1a3fa8] uppercase mb-[10px] font-['Space_Mono',monospace]">
              Got Questions?
            </p>
            <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.4rem)] text-[#111] tracking-[-0.04em]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-[780px] mx-auto">
            {FAQS.map((f, i) => (
              <div
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="bg-white rounded-[14px] mb-2.5 border border-[#e4e5ea] overflow-hidden cursor-pointer"
              >
                <div className="flex items-center justify-between px-6 py-4">
                  <span className="text-[14px] font-semibold text-[#111] pr-5">{f.q}</span>
                  <FaChevronDown
                    size={16}
                    color="#888"
                    className={`flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </div>
                {openFaq === i && (
                  <div className="px-6 pt-4 pb-5 text-[14px] text-[#666] leading-[1.75] border-t border-[#f0f1f5]">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER CTA */}
      <div className="relative bg-[linear-gradient(135deg,#0a0f2e,#111d5e)] px-6 py-20 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(96,165,250,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative py-4">
          <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.5rem)] text-white mb-3 tracking-[-0.04em]">
            Your Dream College Starts <span className="text-[#60a5fa] italic">Here</span>
          </h2>
          <p className="text-[15px] text-[rgba(255,255,255,0.55)] mb-8">
            Join 98,000+ students preparing for CUET 2026 with India's most trusted platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#3b82f6] text-white px-8 py-3 rounded-[10px] text-[15px] font-bold border-none cursor-pointer hover:bg-[#2563eb] transition-colors">
              Start Free Trial
            </button>
            <button className="bg-[rgba(255,255,255,0.07)] text-white px-8 py-3 rounded-[10px] text-[15px] font-semibold border border-[rgba(255,255,255,0.2)] cursor-pointer hover:bg-[rgba(255,255,255,0.12)] transition-colors">
              Download Syllabus PDF
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}