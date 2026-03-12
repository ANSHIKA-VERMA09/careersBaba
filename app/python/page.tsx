"use client"
import { useState } from "react";
import {
  FaChevronDown, FaStar, FaCheckCircle, FaBell,
  FaArrowRight, FaCode, FaDatabase, FaBrain,
  FaTerminal, FaLayerGroup, FaCubes, FaRocket,
  FaLaptopCode, FaPython, FaServer, FaTools
} from "react-icons/fa";

const COURSES = [
  {
    title: "Python Zero to Hero 2026",
    tag: "Most Popular",
    price: "₹4,999",
    original: "₹9,000",
    duration: "4 months",
    mode: "Live Online",
    students: "67,000+",
    color: "#1e6b35",
    features: ["Core Python + OOP", "File I/O & Modules", "APIs & Automation", "5 Real Projects"],
  },
  {
    title: "Python for Data Science",
    tag: "Data Track",
    price: "₹6,499",
    original: "₹12,000",
    duration: "5 months",
    mode: "Live + Recorded",
    students: "43,200+",
    color: "#1a3fa8",
    features: ["NumPy & Pandas", "Matplotlib & Seaborn", "Scikit-learn Basics", "Kaggle Projects"],
  },
  {
    title: "Python Backend Dev",
    tag: "Web Track",
    price: "₹7,999",
    original: "₹14,000",
    duration: "6 months",
    mode: "Live + Mentored",
    students: "18,400+",
    color: "#7c3aed",
    features: ["Django & FastAPI", "REST APIs & Auth", "PostgreSQL + ORM", "Deploy on AWS"],
  },
  {
    title: "Python Automation & Scripting",
    tag: "Quick Win",
    price: "₹2,499",
    original: "₹4,500",
    duration: "6 weeks",
    mode: "Self-Paced",
    students: "51,000+",
    color: "#b45309",
    features: ["Selenium & BeautifulSoup", "Excel & PDF Automation", "Cron Jobs & Bots", "10 Mini Scripts"],
  },
];

const RESOURCES = [
  { icon: FaPython, label: "Python Cheatsheet", desc: "Syntax, builtins & tricks", color: "#1e6b35" },
  { icon: FaTerminal, label: "50 Python Puzzles", desc: "Beginner to advanced", color: "#1a3fa8" },
  { icon: FaDatabase, label: "pandas Quick Guide", desc: "Most-used operations", color: "#7c3aed" },
  { icon: FaCode, label: "Free Mini Project", desc: "Build a URL shortener", color: "#b45309" },
];

const CURRICULUM_DATA = {
  "Foundations": [
    { label: "Duration", value: "Weeks 1–5" },
    { label: "Topics", value: "Syntax, Variables, Loops, Functions, Recursion" },
    { label: "Data Structures", value: "Lists, Tuples, Dicts, Sets, Comprehensions" },
    { label: "Projects", value: "Calculator, Number Games, Todo CLI" },
    { label: "Tools", value: "VS Code, Jupyter, Git & GitHub" },
    { label: "Assessment", value: "Daily Coding Challenges + Peer Review" },
  ],
  "OOP & Modules": [
    { label: "Duration", value: "Weeks 6–10" },
    { label: "Topics", value: "Classes, Inheritance, Dunder Methods, Decorators" },
    { label: "Modules", value: "os, sys, datetime, itertools, collections" },
    { label: "Projects", value: "Library System, Inventory Manager" },
    { label: "Tools", value: "PyPI, pip, virtualenv, pytest" },
    { label: "Assessment", value: "OOP Design Challenge + Unit Tests" },
  ],
  "Advanced & Deployment": [
    { label: "Duration", value: "Weeks 11–16" },
    { label: "Topics", value: "Async Python, Concurrency, Design Patterns" },
    { label: "APIs & DB", value: "REST APIs, SQLAlchemy, Redis, Docker" },
    { label: "Projects", value: "Full-stack Python App deployed to cloud" },
    { label: "Tools", value: "FastAPI, Docker, AWS Lambda, GitHub Actions" },
    { label: "Assessment", value: "Capstone + Live Code Review" },
  ],
};

const MENTORS = [
  { name: "Karan Mehta", role: "Ex-Google SWE | Python Core Contrib", specialty: "Core Python & Performance", color: "#1e6b35", initials: "KM" },
  { name: "Divya Nair", role: "Ex-Netflix | MS Stanford CS", specialty: "Backend & System Design", color: "#1a3fa8", initials: "DN" },
  { name: "Siddharth Rao", role: "Kaggle Master | IIT Madras", specialty: "Python for ML & Data", color: "#7c3aed", initials: "SR" },
  { name: "Anita Joshi", role: "DevOps Lead | 11 yrs exp", specialty: "Automation & Cloud Deploy", color: "#b45309", initials: "AJ" },
];

const TOPPERS = [
  {
    name: "Rohan Verma",
    role: "Python Developer @ Razorpay",
    batch: "Zero to Hero 2024",
    tag: "₹18 LPA",
    quote: "I went from zero coding knowledge to a backend role at a fintech unicorn in 7 months. The project-first approach meant I had a portfolio before I finished week 10.",
  },
  {
    name: "Nisha Patel",
    role: "Data Engineer @ Swiggy",
    batch: "DS Track 2024",
    tag: "₹14 LPA",
    quote: "The pandas and SQL combo sessions were exactly what data engineering interviews test. I cracked Swiggy's take-home assignment using patterns taught in week 8.",
  },
  {
    name: "Aman Gupta",
    role: "Automation Engineer @ Infosys",
    batch: "Automation 2024",
    tag: "2× Salary",
    quote: "I was a manual QA tester. Six weeks of Python automation and I automated 40% of my team's regression suite. Got promoted before the course even ended.",
  },
];

const FAQS = [
  {
    q: "Do I need any prior programming experience?",
    a: "No. The Zero to Hero and Automation courses are designed for absolute beginners. We start from installing Python and writing your first line of code. The Data Science and Backend tracks recommend completing the Foundations module first or having basic Python familiarity.",
  },
  {
    q: "Which Python version is taught?",
    a: "All courses use Python 3.12+, the latest stable release. We cover version-specific features like structural pattern matching, improved type hints, and asyncio enhancements. Legacy Python 2 is not covered.",
  },
  {
    q: "How are the projects structured?",
    a: "Every course includes 5–10 real projects of increasing complexity — from CLI tools and automation scripts to full REST APIs and deployed web apps. Projects are code-reviewed by mentors and added directly to your GitHub portfolio.",
  },
  {
    q: "Is this course good for cracking Python interview questions?",
    a: "Yes. Every module includes a dedicated interview prep segment covering LeetCode-style problems, system design for Python roles, and common interview patterns (generators, decorators, context managers, async). Our students have cracked interviews at Google, Amazon, Razorpay, and Swiggy.",
  },
  {
    q: "What is the difference between the Data Science and Backend tracks?",
    a: "The Data Science track focuses on NumPy, Pandas, Matplotlib, and Scikit-learn for analysis and ML tasks. The Backend track focuses on Django/FastAPI, databases, authentication, and cloud deployment. Both start from Python fundamentals but diverge significantly from week 4 onwards.",
  },
];

const STACK_ICONS = [
  { label: "Python 3.12", color: "#1e6b35" },
  { label: "NumPy", color: "#1a3fa8" },
  { label: "Pandas", color: "#1a3fa8" },
  { label: "FastAPI", color: "#065f46" },
  { label: "Django", color: "#1e6b35" },
  { label: "Scikit-learn", color: "#7c3aed" },
  { label: "Docker", color: "#0369a1" },
  { label: "PostgreSQL", color: "#1e40af" },
  { label: "Redis", color: "#991b1b" },
  { label: "AWS Lambda", color: "#92400e" },
  { label: "Git & GitHub", color: "#374151" },
  { label: "Jupyter", color: "#b45309" },
];

type CurrTab = "Foundations" | "OOP & Modules" | "Advanced & Deployment";
const CURR_TABS: CurrTab[] = ["Foundations", "OOP & Modules", "Advanced & Deployment"];

const STATS = [
  
  ["5.0★", "Avg Rating"],
];

const EXAM_DATES = [
  { event: "New Batch Starts", date: "Apr 1, 2026" },
  { event: "Early Bird Ends", date: "Mar 25, 2026" },
  { event: "Free Demo Class", date: "Mar 22, 2026" },
  { event: "Scholarship Test", date: "Mar 28, 2026" },
  { event: "Placement Drive", date: "Sep 2026" },
];

export default function PythonPage() {
  const [activeTab, setActiveTab] = useState<CurrTab>("Foundations");
  const [openFaq, setOpenFaq] = useState<null | number>(null);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F4F5F7", minHeight: "100vh", color: "#111" }}>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #051a0a 0%, #0a2e14 45%, #05141e 100%)", padding: "72px 24px 80px", position: "relative", overflow: "hidden" }}>
        {/* Glows */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "radial-gradient(circle at 72% 22%, rgba(30,107,53,0.28) 0%, transparent 50%), radial-gradient(circle at 12% 78%, rgba(124,58,237,0.14) 0%, transparent 50%)" }} />
        {/* Grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
        {/* Floating code decoration */}
        <div className="absolute top-12 right-[420px] text-[rgba(30,107,53,0.18)] font-['Space_Mono',monospace] text-[13px] leading-[1.8] pointer-events-none hidden xl:block">
          <div>def train_model(X, y):</div>
          <div>&nbsp;&nbsp;model = RandomForest()</div>
          <div>&nbsp;&nbsp;model.fit(X, y)</div>
          <div>&nbsp;&nbsp;return model</div>
          <div className="mt-3">@app.get("/predict")</div>
          <div>async def predict(data):</div>
          <div>&nbsp;&nbsp;return model.infer(data)</div>
        </div>

        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-center relative">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(30,107,53,0.25)] border border-[rgba(30,107,53,0.5)] rounded-[20px] px-[14px] py-[5px] mb-[22px]">
              <span className="w-[7px] h-[7px] rounded-full bg-[#4ade80] inline-block animate-pulse" />
              <span className="text-[12px] text-[#4ade80] font-['Space_Mono',monospace] font-semibold">
                India's #1 Python Learning Platform
              </span>
            </div>

            <h1 className="font-['Space_Mono',monospace] text-[clamp(2rem,4vw,3rem)] text-white mb-4 leading-[1.2] tracking-[-0.04em]">
              Master Python 3.12 &<br />
              <span className="text-[#4ade80]">Build Real-World Projects</span>
            </h1>

            <p className="text-[16px] text-[rgba(255,255,255,0.65)] leading-[1.75] mb-8 max-w-[500px]">
              From your first <code className="bg-[rgba(74,222,128,0.15)] text-[#4ade80] px-[6px] py-[2px] rounded-[4px] text-[14px]">print("Hello World")</code> to
              deploying production APIs — mentor-led Python courses for developers, data scientists,
              and automation engineers. Over{" "}
              <strong className="text-white">1,80,000+ students</strong> placed at top companies.
            </p>

            <div className="flex gap-3 flex-wrap">
              <button className="bg-[#16a34a] text-white px-[28px] py-[13px] rounded-[10px] text-[15px] font-bold border-none cursor-pointer hover:bg-[#15803d] transition-colors">
                Explore Courses →
              </button>
              <button className="bg-[rgba(255,255,255,0.07)] text-white px-[28px] py-[13px] rounded-[10px] text-[15px] font-semibold border border-[rgba(255,255,255,0.2)] cursor-pointer hover:bg-[rgba(255,255,255,0.12)] transition-colors">
                ▶ Free Demo Class
              </button>
            </div>

            <div className="flex flex-wrap gap-9 mt-10">
              {STATS.map(([v, l]) => (
                <div key={l}>
                  <div className="text-[22px] font-bold text-[#4ade80] font-['Space_Mono',monospace]">{v}</div>
                  <div className="text-[12px] text-[rgba(255,255,255,0.45)] mt-[3px]">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-[20px] p-8 shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
              <span className="ml-2 text-[11px] font-['Space_Mono',monospace] text-[#aaa]">get_free_roadmap.py</span>
            </div>
            <div className="bg-[#0f1a10] rounded-[8px] px-4 py-3 mb-5 font-['Space_Mono',monospace] text-[12px] text-[#4ade80] leading-[1.8]">
              <span className="text-[#888]"># Fill in your details below</span><br />
              <span className="text-[#60a5fa]">student</span> = Python<span className="text-[#f59e0b]">Learner</span>()<br />
              <span className="text-[#60a5fa]">student</span>.get_roadmap()
            </div>

            {[
              ["Full Name", "text", "Rohan Verma"],
              ["Mobile Number", "tel", "+91 9876543210"],
              ["Email", "email", "rohan@email.com"],
            ].map(([label, type, ph]) => (
              <div key={label as string} className="mb-4">
                <label className="text-[12px] font-semibold text-[#555] block mb-[5px]">{label}</label>
                <input type={type as string} placeholder={ph as string} className="w-full px-[14px] py-[11px] rounded-[8px] border-[1.5px] border-[#e0e2ea] text-[14px] outline-none text-[#333] box-border focus:border-[#16a34a] transition-colors" />
              </div>
            ))}

            <div className="mb-4">
              <label className="text-[12px] font-semibold text-[#555] block mb-[5px]">Your Goal</label>
              <select className="w-full px-[14px] py-[11px] rounded-[8px] border-[1.5px] border-[#e0e2ea] text-[14px] text-[#333] bg-white focus:border-[#16a34a]">
                <option>Get a Developer Job</option>
                <option>Switch to Data Science</option>
                <option>Automate My Work</option>
                <option>Build My Own Product</option>
                <option>Learn for Fun / Upskill</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="text-[12px] font-semibold text-[#555] block mb-[5px]">Experience Level</label>
              <select className="w-full px-[14px] py-[11px] rounded-[8px] border-[1.5px] border-[#e0e2ea] text-[14px] text-[#333] bg-white">
                <option>Complete Beginner</option>
                <option>Know Basic Python</option>
                <option>Intermediate — Want to Level Up</option>
              </select>
            </div>

            <button className="w-full bg-[#16a34a] text-white py-[14px] rounded-[10px] text-[15px] font-bold border-none cursor-pointer hover:bg-[#15803d] transition-colors font-['Space_Mono',monospace]">
              run(get_roadmap) →
            </button>
            <p className="text-center text-[11px] text-[#bbb] mt-3">Free · No spam · Expert callback in 2 hrs</p>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-[#051a0a] py-[10px] px-6 overflow-hidden">
        <div className="max-w-[1140px] mx-auto flex items-center gap-4">
          <span className="bg-[#16a34a] text-white text-[11px] font-bold px-[10px] py-[3px] rounded-[4px] whitespace-nowrap font-['Space_Mono',monospace]">LIVE</span>
          <div className="flex gap-9 overflow-hidden">
            {[
              "New batch starting Apr 1 — 60 seats remaining 🐍",
              "Rohan V. placed at Razorpay (₹18 LPA) — Zero to Hero batch",
              "Free Python puzzle challenge every Monday — Join now",
              "Python 3.13 features workshop — this Saturday 11AM IST",
            ].map((t, i) => (
              <span key={i} className="text-[13px] text-[rgba(255,255,255,0.75)] whitespace-nowrap">
                <FaBell size={11} className="mr-[5px] align-middle opacity-60" />{t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>

        {/* BATCH DATES */}
        <section className="py-10">
          <div className="bg-white rounded-[20px] border border-[#e4e5ea] px-8 py-6">
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#1e6b35] uppercase mb-5 font-['Space_Mono',monospace]">
              📅 Upcoming Batch Dates
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {EXAM_DATES.map((d, i) => (
                <div key={i} className="text-center">
                  <div className="text-[13px] font-bold text-[#1e6b35] font-['Space_Mono',monospace] mb-1">{d.date}</div>
                  <div className="text-[12px] text-[#666] leading-[1.4]">{d.event}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COURSES */}
        <section className="py-[48px]">
          <div className="text-center mb-12">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#1e6b35] uppercase mb-[10px] font-['Space_Mono',monospace]">Our Programs</p>
            <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.5rem)] text-[#111] mb-[14px] tracking-[-0.04em]">Python Courses</h2>
            <p className="text-[#777] text-[15px] max-w-[520px] mx-auto leading-[1.65]">
              Pick your track — whether you want to build web apps, analyze data, automate workflows, or land a developer job.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(265px,1fr))] gap-6">
            {COURSES.map((c, i) => (
              <div key={i} className="bg-white rounded-[18px] overflow-hidden border border-[#e4e5ea] hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
                <div className="px-6 pt-6 pb-5" style={{ background: c.color }}>
                  <span className="bg-[rgba(255,255,255,0.18)] text-white text-[11px] font-bold px-[10px] py-[4px] rounded-[20px] inline-block mb-3">{c.tag}</span>
                  <h3 className="font-['Space_Mono',monospace] text-[15px] font-bold text-white leading-[1.4] tracking-[-0.02em]">{c.title}</h3>
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
                      <div className="text-[22px] font-bold font-['Space_Mono',monospace]" style={{ color: c.color }}>{c.price}</div>
                      <div className="text-[12px] text-[#bbb] line-through">{c.original}</div>
                      <div className="text-[11px] text-[#999]">{c.students} enrolled</div>
                    </div> */}
                    <button className="text-white px-[18px] py-[10px] rounded-[10px] text-[13px] font-semibold border-none cursor-pointer" style={{ background: c.color }}>
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK STRIP */}
        <section className="pb-10">
          <div className="bg-white rounded-[20px] border border-[#e4e5ea] px-8 py-7">
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#1e6b35] uppercase mb-6 font-['Space_Mono',monospace]">
              🛠 Tools & Libraries You'll Master
            </p>
            <div className="flex flex-wrap gap-3">
              {STACK_ICONS.map((s, i) => (
                <span
                  key={i}
                  className="px-[14px] py-[7px] rounded-[8px] text-[12px] font-bold font-['Space_Mono',monospace] text-white"
                  style={{ background: s.color + "ee" }}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FREE RESOURCES */}
        <section className="pb-12">
          <div className="bg-[linear-gradient(135deg,#051a0a,#0a2e14)] rounded-[24px] px-[40px] py-[48px] border border-[rgba(74,222,128,0.15)] relative overflow-hidden">
            <div className="absolute -top-[40px] -right-[40px] w-[250px] h-[250px] rounded-full bg-[rgba(30,107,53,0.2)]" />
            {/* bg code decoration */}
            <div className="absolute bottom-6 right-10 text-[rgba(74,222,128,0.07)] font-['Space_Mono',monospace] text-[11px] leading-[2] pointer-events-none hidden lg:block">
              <div>import pandas as pd</div>
              <div>df = pd.read_csv("data.csv")</div>
              <div>df.groupby("city").mean()</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
              <div>
                <p className="text-[12px] font-bold tracking-[0.12em] text-[#4ade80] uppercase mb-[10px] font-['Space_Mono',monospace]">100% Free</p>
                <h2 className="font-['Space_Mono',monospace] text-[clamp(1.6rem,2.5vw,2rem)] text-white mb-[14px] tracking-[-0.03em]">
                  Free Python Resources
                </h2>
                <p className="text-[rgba(255,255,255,0.6)] text-[15px] leading-[1.75]">
                  Not sure which track is right for you? Start with our free resources — no login required. Gauge your level, explore syntax, and build your first project before you commit.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-[14px]">
                {RESOURCES.map((r, i) => (
                  <div key={i} className="bg-[rgba(255,255,255,0.06)] rounded-[16px] px-[16px] py-[18px] border border-[rgba(255,255,255,0.1)] flex flex-col gap-[10px] cursor-pointer hover:-translate-y-[3px] hover:shadow-lg transition-all duration-300">
                    <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center" style={{ background: r.color + "30" }}>
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

        {/* CURRICULUM */}
        <section className="pb-12">
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#1e6b35] uppercase mb-[10px] font-['Space_Mono',monospace]">What You'll Learn</p>
            <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.4rem)] text-[#111] tracking-[-0.04em]">Curriculum Overview</h2>
          </div>
          <div className="bg-white rounded-[20px] border border-[#e4e5ea] overflow-hidden">
            <div className="flex border-b border-[#e4e5ea]">
              {CURR_TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`flex-1 px-4 py-4 text-[13px] font-semibold cursor-pointer border-none whitespace-nowrap
                    ${activeTab === t ? "bg-[#1e6b35] text-white font-['Space_Mono',monospace]" : "bg-white text-[#555] hover:bg-[#f0fdf4]"}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {CURRICULUM_DATA[activeTab].map((row, i) => (
                <div key={i} className={`flex gap-3 px-7 py-4 border-b border-[#f0f1f5] ${i % 2 === 0 ? "md:border-r border-[#f0f1f5]" : ""}`}>
                  <FaTerminal size={15} color="#1e6b35" className="mt-[2px] flex-shrink-0" />
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
        <section className="pb-12">
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#1e6b35] uppercase mb-[10px] font-['Space_Mono',monospace]">Learn From The Best</p>
            <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.4rem)] text-[#111] tracking-[-0.04em]">Expert Python Instructors</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {MENTORS.map((m, i) => (
              <div key={i} className="bg-white rounded-[18px] px-5 py-7 text-center border border-[#e4e5ea] hover:-translate-y-1 transition-transform duration-200">
                <div className="w-[72px] h-[72px] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-[22px] font-bold font-['Space_Mono',monospace]" style={{ background: m.color }}>
                  {m.initials}
                </div>
                <h4 className="font-bold text-[15px] text-[#111] mb-1">{m.name}</h4>
                <p className="text-[12px] font-semibold mb-1" style={{ color: m.color }}>{m.role}</p>
                <p className="text-[12px] text-[#888] leading-[1.5]">{m.specialty}</p>
                <div className="mt-3 flex justify-center gap-[2px]">
                  {[...Array(5)].map((_, s) => <FaStar key={s} size={12} fill="#f5a623" color="#f5a623" />)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TOPPERS */}
        <section className="pb-12">
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#1e6b35] uppercase mb-[10px] font-['Space_Mono',monospace]">Success Stories</p>
            <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.4rem)] text-[#111] tracking-[-0.04em]">Our Students Are Building & Earning</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOPPERS.map((t, i) => (
              <div key={i} className="bg-white rounded-[18px] p-7 border border-[#e4e5ea]">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[38px] text-[#1e6b35] leading-[1] font-['Space_Mono',monospace]">&quot;</div>
                  <span className="bg-[#f0fdf4] text-[#1e6b35] text-[11px] font-bold px-[10px] py-[4px] rounded-[20px] font-['Space_Mono',monospace]">{t.tag}</span>
                </div>
                <p className="text-[14px] text-[#555] leading-[1.75] mb-5">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f0f1f5]">
                  <div className="w-[44px] h-[44px] rounded-full bg-[#1e6b35] text-white flex items-center justify-center font-bold text-[16px]">{t.name[0]}</div>
                  <div>
                    <div className="font-bold text-[14px] text-[#111]">{t.name}</div>
                    <div className="text-[12px] text-[#888]">{t.role}</div>
                  </div>
                  <span className="ml-auto bg-[#f0fdf4] text-[#1e6b35] text-[10px] font-bold px-2 py-[3px] rounded-[20px]">{t.batch}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="pb-20">
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#1e6b35] uppercase mb-[10px] font-['Space_Mono',monospace]">Got Questions?</p>
            <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.4rem)] text-[#111] tracking-[-0.04em]">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-[780px] mx-auto">
            {FAQS.map((f, i) => (
              <div key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="bg-white rounded-[14px] mb-2.5 border border-[#e4e5ea] overflow-hidden cursor-pointer">
                <div className="flex items-center justify-between px-6 py-4">
                  <span className="text-[14px] font-semibold text-[#111] pr-5">{f.q}</span>
                  <FaChevronDown size={16} color="#888" className={`flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </div>
                {openFaq === i && (
                  <div className="px-6 pt-4 pb-5 text-[14px] text-[#666] leading-[1.75] border-t border-[#f0f1f5]">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER CTA */}
      <div className="relative bg-[linear-gradient(135deg,#051a0a,#0a2e14)] px-6 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(74,222,128,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute bottom-8 left-12 text-[rgba(74,222,128,0.06)] font-['Space_Mono',monospace] text-[12px] leading-[2] pointer-events-none hidden lg:block text-left">
          <div>while not_hired:</div>
          <div>&nbsp;&nbsp;practice()</div>
          <div>&nbsp;&nbsp;build()</div>
          <div>&nbsp;&nbsp;apply()</div>
        </div>
        <div className="relative py-4">
          <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.5rem)] text-white mb-3 tracking-[-0.04em]">
            Your Python Journey Starts <span className="text-[#4ade80] italic">Now</span>
          </h2>
          <p className="text-[15px] text-[rgba(255,255,255,0.55)] mb-8">
            Join 1,80,000+ developers who learned Python and landed their dream roles.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#16a34a] text-white px-8 py-3 rounded-[10px] text-[15px] font-bold border-none cursor-pointer hover:bg-[#15803d] transition-colors">
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