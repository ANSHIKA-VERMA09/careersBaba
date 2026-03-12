"use client"
import { useState } from "react";
import {
  FaChevronDown, FaStar, FaClock, FaCheckCircle, FaBell,
  FaArrowRight, FaCode, FaDatabase, FaBrain, FaChartBar,
  FaPython, FaRobot, FaFlask, FaLayerGroup, FaShieldAlt
} from "react-icons/fa";

const NAV_LINKS = ["Overview", "Courses", "Free Resources", "Curriculum", "Mentors", "Results", "FAQs"];

const COURSES = [
  { title: "Data Science Bootcamp 2026", tag: "Most Popular", price: "₹22,999", original: "₹35,000", duration: "9 months", mode: "Live Online", students: "18,400+", color: "#0f7275", features: ["Python & ML", "Deep Learning", "Real Projects", "Placement Support"] },
  { title: "Python for Data Science", tag: "Beginner Friendly", price: "₹7,499", original: "₹12,000", duration: "3 months", mode: "Self-Paced", students: "31,200+", color: "#6a3de8", features: ["Pandas & NumPy", "Data Viz", "SQL Essentials", "Capstone Project"] },
  { title: "ML Engineer Track", tag: "Advanced", price: "₹29,999", original: "₹45,000", duration: "12 months", mode: "Live + Mentored", students: "4,900+", color: "#c4412f", features: ["MLOps & Pipelines", "LLM Fine-tuning", "Cloud Deployment", "System Design"] },
  { title: "Data Analytics Fast Track", tag: "Quick Start", price: "₹5,499", original: "₹8,500", duration: "6 weeks", mode: "Self-Paced", students: "27,000+", color: "#1e5f30", features: ["Excel & Power BI", "SQL Mastery", "Tableau", "Business Case Studies"] },
];

const RESOURCES = [
  { icon: FaPython, label: "Python Cheatsheet", desc: "Pandas, NumPy, Scikit-learn", color: "#0f7275" },
  { icon: FaDatabase, label: "SQL Practice Set", desc: "100+ interview-level queries", color: "#6a3de8" },
  { icon: FaChartBar, label: "Free Mini Project", desc: "End-to-end EDA on real dataset", color: "#c4412f" },
  { icon: FaBrain, label: "ML Roadmap PDF", desc: "Structured 6-month plan", color: "#1e5f30" },
];

const CURRICULUM_DATA = {
  Foundations: [
    { label: "Duration", value: "Weeks 1–6" },
    { label: "Topics", value: "Python, NumPy, Pandas, Visualization" },
    { label: "Projects", value: "3 Hands-on Mini Projects" },
    { label: "Tools", value: "Jupyter, VS Code, Git" },
    { label: "Assessment", value: "Weekly Quizzes + Peer Review" },
    { label: "Mode", value: "Live Sessions + Recordings" },
  ],
  "ML & AI": [
    { label: "Duration", value: "Weeks 7–18" },
    { label: "Topics", value: "Regression, Classification, Deep Learning, NLP" },
    { label: "Projects", value: "5 Real-world Industry Projects" },
    { label: "Tools", value: "Scikit-learn, TensorFlow, HuggingFace" },
    { label: "Assessment", value: "Kaggle Competitions + Capstone" },
    { label: "Mode", value: "Live + Mentored Sessions" },
  ],
  Deployment: [
    { label: "Duration", value: "Weeks 19–24" },
    { label: "Topics", value: "MLOps, APIs, Cloud, LLM Apps" },
    { label: "Projects", value: "1 Production-grade Capstone" },
    { label: "Tools", value: "Docker, FastAPI, AWS/GCP, Airflow" },
    { label: "Assessment", value: "End-to-End Deployment Review" },
    { label: "Mode", value: "Project-based + Career Prep" },
  ],
};

const MENTORS = [
  { name: "Dr. Kavita Iyer", role: "Ex-Google AI | PhD IIT Bombay", specialty: "Deep Learning & NLP", color: "#0f7275", initials: "KI" },
  { name: "Sameer Bose", role: "Ex-Amazon DS | 14 yrs exp", specialty: "ML Systems & MLOps", color: "#6a3de8", initials: "SB" },
  { name: "Riya Desai", role: "Kaggle Grandmaster", specialty: "Feature Eng & Competition ML", color: "#c4412f", initials: "RD" },
  { name: "Arjun Pillai", role: "Ex-Meta | MS Stanford", specialty: "LLMs & Generative AI", color: "#1e5f30", initials: "AP" },
];

const TOPPERS = [
  { name: "Sneha Krishnan", role: "Data Scientist @ Microsoft", batch: "Bootcamp 2024", quote: "The project-based curriculum was unlike anything I'd seen. I had a full portfolio before I even graduated." },
  { name: "Varun Mehta", role: "ML Engineer @ Flipkart", batch: "ML Track 2024", quote: "The MLOps section alone got me placed. I was building and deploying production models in week 20." },
  { name: "Aisha Khan", role: "Data Analyst @ BCG", batch: "Analytics Fast Track", quote: "Six weeks. That's all it took to go from zero SQL to cracking a consulting interview with confidence." },
];

const FAQS = [
  { q: "Do I need prior coding experience to join?", a: "No prior experience is needed for our Foundations or Analytics tracks. For the ML Engineer Track, basic Python familiarity is recommended. We offer a free Python primer to bridge any gaps." },
  { q: "How are projects structured in the program?", a: "Every course includes real-world capstone projects sourced from industry partners. You'll build an end-to-end portfolio — from data collection and cleaning to model deployment — reviewed by senior mentors." },
  { q: "What's the placement support like?", a: "Our dedicated career team provides resume reviews, LinkedIn optimization, mock technical interviews, and access to our 400+ hiring partner network. The Bootcamp comes with a placement guarantee." },
  { q: "Are classes recorded for later viewing?", a: "Yes. All live sessions are recorded and available for 12 months. Self-paced courses are available lifetime. You can learn on your schedule without missing content." },
  { q: "Which tools and languages will I learn?", a: "Core stack: Python, SQL, Pandas, Scikit-learn, TensorFlow/PyTorch, Tableau/Power BI, and cloud platforms (AWS/GCP). For the advanced track: Docker, Airflow, FastAPI, and HuggingFace transformers." },
];

type CurrTab = "Foundations" | "ML & AI" | "Deployment";
const CURR_TABS: CurrTab[] = ["Foundations", "ML & AI", "Deployment"];

const STATS = [ ["5.0★", "Avg Rating"]];

export default function DataSciencePage() {
  const [activeTab, setActiveTab] = useState<CurrTab>("Foundations");
  const [openFaq, setOpenFaq] = useState<null | number>(null);
  const [activeNav, setActiveNav] = useState("Overview");

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F4F5F7", minHeight: "100vh", color: "#111" }}>



      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #071a1b 0%, #0f2a2b 50%, #0a2040 100%)", padding: "72px 24px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "radial-gradient(circle at 80% 20%, rgba(15,114,117,0.18) 0%, transparent 55%), radial-gradient(circle at 10% 80%, rgba(106,61,232,0.12) 0%, transparent 50%)" }} />
        {/* grid lines */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />

        <div className="max-w-[1140px] mx-auto grid grid-cols-[1fr_380px] gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 bg-[rgba(15,114,117,0.2)] border border-[rgba(15,114,117,0.4)] rounded-[20px] px-[14px] py-[5px] mb-[22px]">
              <span className="w-[7px] h-[7px] rounded-full bg-[#2de0a7] inline-block" />
              <span className="text-[12px] text-[#2de0a7] font-['Space_Mono',monospace] font-semibold">
                India's #1 Data Science Platform
              </span>
            </div>

            <h1 className="font-['Space_Mono',monospace] text-[clamp(2rem,4vw,3rem)] text-white mb-4 leading-[1.2] tracking-[-0.04em]">
              Launch Your Career in<br />
              <span className="text-[#2de0a7]">Data Science & AI</span>
            </h1>

            <p className="text-[16px] text-[rgba(255,255,255,0.65)] leading-[1.75] mb-8 max-w-[500px]">
              From Python basics to production ML — a structured, mentor-led program built for real job outcomes. Over{" "}
              <strong className="text-white">12,000+ placements</strong> at top tech, consulting, and product companies.
            </p>

            <div className="flex gap-3 flex-wrap">
              <button className="bg-[#2de0a7] text-[#071a1b] px-[28px] py-[13px] rounded-[10px] text-[15px] font-bold border-none cursor-pointer">
                Explore Courses →
              </button>

              <button className="bg-[rgba(255,255,255,0.07)] text-white px-[28px] py-[13px] rounded-[10px] text-[15px] font-semibold border border-[rgba(255,255,255,0.2)] cursor-pointer">
                ▶ Watch Free Demo
              </button>
            </div>

            <div className="flex gap-9 mt-10">
              {STATS.map(([v, l]) => (
                <div key={l}>
                  <div className="text-[22px] font-bold text-[#2de0a7] font-['Space_Mono',monospace]">
                    {v}
                  </div>
                  <div className="text-[12px] text-[rgba(255,255,255,0.45)] mt-[3px]">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead form */}
          <div className="bg-white rounded-[20px] p-8 shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
            <h3 className="font-['Space_Mono',monospace] text-[18px] font-bold text-[#0f2a2b] mb-[6px] tracking-[-0.03em]">
              Get a Free Career Roadmap
            </h3>

            <p className="text-[13px] text-[#888] mb-6">
              Tailored to your background & goals
            </p>

            {[["Full Name", "text", "Priya Sharma"], ["Mobile Number", "tel", "+91 9876543210"], ["Email", "email", "priya@email.com"]].map(([label, type, ph]) => (
              <div key={label} className="mb-4">
                <label className="text-[12px] font-semibold text-[#555] block mb-[5px]">
                  {label}
                </label>

                <input
                  type={type}
                  placeholder={ph}
                  className="w-full px-[14px] py-[11px] rounded-[8px] border-[1.5px] border-[#e0e2ea] text-[14px] outline-none text-[#333] box-border"
                />
              </div>
            ))}

            <div className="mb-5">
              <label className="text-[12px] font-semibold text-[#555] block mb-[5px]">
                Experience Level
              </label>

              <select className="w-full px-[14px] py-[11px] rounded-[8px] border-[1.5px] border-[#e0e2ea] text-[14px] text-[#333] bg-white">
                <option>Complete Beginner</option>
                <option>Some Python Knowledge</option>
                <option>Working Professional</option>
              </select>
            </div>

            <button className="w-full bg-[#0f7275] text-white py-[14px] rounded-[10px] text-[15px] font-bold border-none cursor-pointer">
              Book Free Session
            </button>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-[#0f2a2b] py-[10px] px-6">
        <div className="max-w-[1140px] mx-auto flex items-center gap-4 overflow-hidden">

          <span className="bg-[#2de0a7] text-[#071a1b] text-[11px] font-bold px-[10px] py-[3px] rounded-[4px] whitespace-nowrap font-['Space_Mono',monospace]">
            LIVE
          </span>

          <div className="flex gap-9 overflow-hidden">
            {[
              "New Batch Starting Feb 1 — 40 Seats Left",
              "Hiring Partners now include 12 new unicorn startups",
              "Free Python Bootcamp every Saturday 10AM IST",
              "Placement Record: 3 offers in 8 days — Sneha K., Bootcamp 2024",
            ].map((t, i) => (
              <span
                key={i}
                className="text-[13px] text-[rgba(255,255,255,0.75)] whitespace-nowrap"
              >
                <FaBell
                  size={11}
                  className="mr-[5px] align-middle opacity-60"
                />
                {t}
              </span>
            ))}
          </div>

        </div>
      </div>

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>

        {/* COURSES */}
        <section className="py-[72px] pb-[48px]">
          <div className="text-center mb-12">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#0f7275] uppercase mb-[10px] font-['Space_Mono',monospace]">
              Our Programs
            </p>

            <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.5rem)] text-[#111] mb-[14px] tracking-[-0.04em]">
              Data Science Courses
            </h2>

            <p className="text-[#777] text-[15px] max-w-[520px] mx-auto leading-[1.65]">
              From your first line of Python to deploying LLMs in production — choose the track that matches where you are.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(265px,1fr))] gap-6">
            {COURSES.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-[18px] overflow-hidden border border-[#e4e5ea] transition-transform duration-200 cursor-pointer"
              >
                <div
                  className="px-6 pt-6 pb-5"
                  style={{ background: c.color }}
                >
                  <span className="bg-[rgba(255,255,255,0.18)] text-white text-[11px] font-bold px-[10px] py-[4px] rounded-[20px] inline-block mb-3">
                    {c.tag}
                  </span>

                  <h3 className="font-['Space_Mono',monospace] text-[15px] font-bold text-white leading-[1.4] tracking-[-0.02em]">
                    {c.title}
                  </h3>

                  <div className="flex gap-4 mt-[14px]">
                    <span className="text-[12px] text-[rgba(255,255,255,0.65)]">
                      ⏱ {c.duration}
                    </span>
                    <span className="text-[12px] text-[rgba(255,255,255,0.65)]">
                      📡 {c.mode}
                    </span>
                  </div>
                </div>

                <div className="px-6 pt-5 pb-6">
                  <ul className="list-none mb-5 p-0">
                    {c.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-[13px] text-[#444] mb-2"
                      >
                        <FaCheckCircle size={13} color={c.color} /> {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-end justify-between">
                    {/* <div>
                      <div
                        className="text-[22px] font-bold font-['Space_Mono',monospace]"
                        style={{ color: c.color }}
                      >
                        {c.price}
                      </div>

                      <div className="text-[12px] text-[#bbb] line-through">
                        {c.original}
                      </div>

                      <div className="text-[11px] text-[#999]">
                        {c.students} enrolled
                      </div>
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
          <div className="bg-[linear-gradient(135deg,#071a1b,#0f2a2b)] rounded-[24px] px-[40px] py-[48px] border border-[rgba(45,224,167,0.15)] relative overflow-hidden">

            {/* Decorative Circle */}
            <div className="absolute -top-[40px] -right-[40px] w-[250px] h-[250px] rounded-full bg-[rgba(15,114,117,0.15)]" />

            <div className="grid grid-cols-2 gap-12 items-center relative">

              {/* Text Content */}
              <div>
                <p className="text-[12px] font-bold tracking-[0.12em] text-[#2de0a7] uppercase mb-[10px] font-['Space_Mono',monospace]">
                  100% Free
                </p>

                <h2 className="font-['Space_Mono',monospace] text-[clamp(1.6rem,2.5vw,2rem)] text-white mb-[14px] tracking-[-0.03em]">
                  Free Resources to Get Started
                </h2>

                <p className="text-[rgba(255,255,255,0.6)] text-[15px] leading-[1.75]">
                  No signup needed. Explore our free tools to gauge where you stand — then decide if a full program is right for you.
                </p>
              </div>

              {/* Resource Cards */}
              <div className="grid grid-cols-2 gap-[14px]">
                {RESOURCES.map((r, i) => (
                  <div
                    key={i}
                    className="bg-[rgba(255,255,255,0.06)] rounded-[16px] px-[16px] py-[18px] border border-[rgba(255,255,255,0.1)] flex flex-col gap-[10px] cursor-pointer
                       hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300"
                  >
                    {/* Icon */}
                    <div
                      className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center"
                      style={{ background: r.color + "25" }}
                    >
                      <r.icon size={18} color={r.color} />
                    </div>

                    {/* Label and Description */}
                    <div>
                      <div className="text-[13px] font-semibold text-white mb-[3px]">
                        {r.label}
                      </div>
                      <div className="text-[12px] text-[rgba(255,255,255,0.5)]">
                        {r.desc}
                      </div>
                    </div>

                    {/* Action */}
                    <div
                      className="flex items-center gap-1 text-[12px] font-semibold mt-[2px]"
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

        {/* CURRICULUM / EXAM INFO equivalent */}
        <section className="py-12">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#0f7275] uppercase mb-[10px] font-['Space_Mono',monospace]">
              What You'll Learn
            </p>
            <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.4rem)] text-[#111] tracking-[-0.04em]">
              Curriculum Overview
            </h2>
          </div>

          {/* Tabs Container */}
          <div className="bg-white rounded-[20px] border border-[#e4e5ea] overflow-hidden">

            {/* Tabs */}
            <div className="flex border-b border-[#e4e5ea]">
              {CURR_TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t as CurrTab)}
                  className={`flex-1 px-4 py-4 text-[14px] font-semibold cursor-pointer border-none
                      ${activeTab === t ? "bg-[#0f7275] text-white font-['Space_Mono',monospace]" : "bg-white text-[#555]"}`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Curriculum Grid */}
            <div className="grid grid-cols-2 gap-0">
              {CURRICULUM_DATA[activeTab].map((row, i) => (
                <div
                  key={i}
                  className={`flex gap-3 px-7 py-4 border-b border-[#f0f1f5] ${i % 2 === 0 ? "border-r border-[#f0f1f5]" : ""}`}
                >
                  <FaCode size={15} color="#0f7275" className="mt-[2px] flex-shrink-0" />
                  <div>
                    <div className="text-[11px] font-bold text-[#aaa] uppercase tracking-[0.08em] mb-[3px]">
                      {row.label}
                    </div>
                    <div className="text-[14px] font-medium text-[#111]">
                      {row.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* MENTORS */}
        <section className="py-12">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#0f7275] uppercase mb-[10px] font-['Space_Mono',monospace]">
              Learn From The Best
            </p>
            <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.4rem)] text-[#111] tracking-[-0.04em]">
              Expert Mentors & Instructors
            </h2>
          </div>

          {/* Mentor Grid */}
          <div className="grid grid-cols-4 gap-5">
            {MENTORS.map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-[18px] px-5 py-7 text-center border border-[#e4e5ea]"
              >
                {/* Initials Circle */}
                <div
                  className="w-[72px] h-[72px] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-[22px] font-bold font-['Space_Mono',monospace]"
                  style={{ background: m.color }}
                >
                  {m.initials}
                </div>

                {/* Name & Role */}
                <h4 className="font-bold text-[15px] text-[#111] mb-1">{m.name}</h4>
                <p className="text-[12px] font-semibold mb-1" style={{ color: m.color }}>
                  {m.role}
                </p>
                <p className="text-[12px] text-[#888] leading-[1.5]">{m.specialty}</p>

                {/* Rating */}
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
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#0f7275] uppercase mb-[10px] font-['Space_Mono',monospace]">
              Success Stories
            </p>
            <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.4rem)] text-[#111] tracking-[-0.04em]">
              Our Alumni Are Thriving
            </h2>
          </div>

          {/* Alumni Grid */}
          <div className="grid grid-cols-3 gap-6">
            {TOPPERS.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-[18px] p-7 border border-[#e4e5ea]"
              >
                {/* Quote Symbol */}
                <div className="text-[38px] text-[#0f7275] leading-[1] mb-3 font-['Space_Mono',monospace]">
                  &quot;
                </div>

                {/* Quote Text */}
                <p className="text-[14px] text-[#555] leading-[1.75] mb-5">
                  {t.quote}
                </p>

                {/* Alumni Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#f0f1f5]">

                  {/* Initial Circle */}
                  <div className="w-[44px] h-[44px] rounded-full bg-[#0f7275] text-white flex items-center justify-center font-bold text-[16px]">
                    {t.name[0]}
                  </div>

                  {/* Name & Role */}
                  <div>
                    <div className="font-bold text-[14px] text-[#111]">{t.name}</div>
                    <div className="text-[12px] text-[#888]">{t.role}</div>
                  </div>

                  {/* Batch Badge */}
                  <span className="ml-auto bg-[#e8f5f5] text-[#0f7275] text-[10px] font-bold px-2 py-[3px] rounded-[20px]">
                    {t.batch}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
       <section className="py-12 pb-18">
  {/* Header */}
  <div className="text-center mb-10">
    <p className="text-[12px] font-bold tracking-[0.12em] text-[#0f7275] uppercase mb-[10px] font-['Space_Mono',monospace]">
      Got Questions?
    </p>
    <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.4rem)] text-[#111] tracking-[-0.04em]">
      Frequently Asked Questions
    </h2>
  </div>

  {/* FAQ Items Container */}
  <div className="max-w-[780px] mx-auto">
    {FAQS.map((f, i) => (
      <div
        key={i}
        onClick={() => setOpenFaq(openFaq === i ? null : i)}
        className="bg-white rounded-[14px] mb-2.5 border border-[#e4e5ea] overflow-hidden cursor-pointer"
      >
        {/* Question Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <span className="text-[14px] font-semibold text-[#111] pr-5">{f.q}</span>
          <FaChevronDown
            size={16}
            color="#888"
            className={`flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
          />
        </div>

        {/* Answer */}
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
     <div className="relative bg-[linear-gradient(135deg,#071a1b,#0f2a2b)] px-6 py-15 text-center overflow-hidden">
  {/* Background grid overlay */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage:
        "linear-gradient(rgba(45,224,167,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(45,224,167,0.04) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}
  />

  {/* Content */}
 <div className="relative bg-[linear-gradient(135deg,#071a1b,#0f2a2b)] px-6 py-15 text-center overflow-hidden">
  {/* Background grid overlay */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage:
        "linear-gradient(rgba(45,224,167,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(45,224,167,0.04) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}
  />

  {/* Content */}
  <div className="relative py-12">
    <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.5rem)] text-white mb-3 tracking-[-0.04em]">
      Your Data Career Starts <span className="text-[#2de0a7] italic">Now</span>
    </h2>
    <p className="text-[15px] text-[rgba(255,255,255,0.55)] mb-8">
      Join 12,000+ data professionals who launched their careers with us.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-4">
      <button className="bg-[#2de0a7] text-[#071a1b] px-8 py-3 rounded-[10px] text-[15px] font-bold border-none cursor-pointer">
        Start Free Trial
      </button>
      <button className="bg-[rgba(255,255,255,0.07)] text-white px-8 py-3 rounded-[10px] text-[15px] font-semibold border border-[rgba(255,255,255,0.2)] cursor-pointer">
        Download Syllabus
      </button>
    </div>
  </div>
</div>
</div>
    </div>
  );
}