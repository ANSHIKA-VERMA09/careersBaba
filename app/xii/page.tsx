"use client"
import { useState } from "react";
import {
  FaChevronDown, FaStar, FaCheckCircle, FaBell,
  FaArrowRight, FaBook, FaFlask, FaCalculator,
  FaGlobe, FaAtom, FaLeaf, FaLandmark, FaPlay,
  FaDownload, FaFileAlt, FaClipboardList, FaTrophy,
  FaUserGraduate, FaChartBar, FaLock, FaUnlock,
  FaPencilAlt, FaVideo, FaHeadphones, FaBrain,
  FaDna, FaMicroscope, FaInfinity, FaRocket
} from "react-icons/fa";
import type { IconType } from "react-icons";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Subject {
  name: string;
  icon: IconType;
  color: string;
  chapters: number;
  videos: number;
  tests: number;
  topics: string[];
  tag?: string;
}

interface ChapterRow {
  no: number;
  title: string;
  subject: string;
  color: string;
  lessons: number;
  quiz: boolean;
  notes: boolean;
  free: boolean;
}

interface Topper {
  name: string;
  school: string;
  score: string;
  tag: string;
  quote: string;
}

interface Faq {
  q: string;
  a: string;
}

interface Resource {
  icon: IconType;
  label: string;
  desc: string;
  color: string;
}

interface Feature {
  icon: IconType;
  title: string;
  desc: string;
  color: string;
}

interface ExamDate {
  event: string;
  date: string;
}

type SubjectTab = "Mathematics" | "Physics" | "Chemistry" | "Biology" | "English";

// ─── Data ────────────────────────────────────────────────────────────────────

const SUBJECTS: Subject[] = [
  {
    name: "Mathematics",
    icon: FaCalculator,
    color: "#1a237e",
    chapters: 13,
    videos: 172,
    tests: 68,
    topics: ["Relations & Functions", "Matrices & Determinants", "Integrals", "Differential Equations", "Vectors", "Probability"],
    tag: "JEE Crucial",
  },
  {
    name: "Physics",
    icon: FaAtom,
    color: "#4a148c",
    chapters: 14,
    videos: 160,
    tests: 62,
    topics: ["Electric Charges & Fields", "Current Electricity", "Magnetism", "Electromagnetic Induction", "Optics", "Dual Nature"],
    tag: "JEE / NEET",
  },
  {
    name: "Chemistry",
    icon: FaFlask,
    color: "#880e4f",
    chapters: 16,
    videos: 155,
    tests: 60,
    topics: ["Solid State", "Solutions", "Electrochemistry", "Chemical Kinetics", "Coordination Compounds", "Biomolecules"],
    tag: "Most Marks",
  },
  {
    name: "Biology",
    icon: FaDna,
    color: "#1b5e20",
    chapters: 16,
    videos: 185,
    tests: 74,
    topics: ["Sexual Reproduction", "Genetics & Evolution", "Human Health", "Biotechnology", "Ecosystem", "Biodiversity"],
    tag: "NEET Final",
  },
  {
    name: "English",
    icon: FaBook,
    color: "#bf360c",
    chapters: 10,
    videos: 90,
    tests: 38,
    topics: ["Flamingo Prose", "Vistas Stories", "Poetry", "Writing Skills", "Grammar", "Unseen Passages"],
  },
];

const SUBJECT_TABS: SubjectTab[] = ["Mathematics", "Physics", "Chemistry", "Biology", "English"];

const CHAPTERS: Record<SubjectTab, ChapterRow[]> = {
  "Mathematics": [
    { no: 1, title: "Relations and Functions", subject: "Maths", color: "#1a237e", lessons: 7, quiz: true, notes: true, free: true },
    { no: 2, title: "Inverse Trigonometric Functions", subject: "Maths", color: "#1a237e", lessons: 6, quiz: true, notes: true, free: true },
    { no: 3, title: "Matrices", subject: "Algebra", color: "#1a237e", lessons: 8, quiz: true, notes: true, free: false },
    { no: 4, title: "Determinants", subject: "Algebra", color: "#1a237e", lessons: 9, quiz: true, notes: true, free: false },
    { no: 5, title: "Continuity and Differentiability", subject: "Calculus", color: "#1a237e", lessons: 10, quiz: true, notes: true, free: false },
    { no: 6, title: "Application of Derivatives", subject: "Calculus", color: "#1a237e", lessons: 9, quiz: true, notes: true, free: false },
    { no: 7, title: "Integrals", subject: "Calculus", color: "#1a237e", lessons: 12, quiz: true, notes: true, free: false },
    { no: 8, title: "Application of Integrals", subject: "Calculus", color: "#1a237e", lessons: 6, quiz: true, notes: true, free: false },
  ],
  "Physics": [
    { no: 1, title: "Electric Charges and Fields", subject: "Electro", color: "#4a148c", lessons: 8, quiz: true, notes: true, free: true },
    { no: 2, title: "Electrostatic Potential and Capacitance", subject: "Electro", color: "#4a148c", lessons: 9, quiz: true, notes: true, free: true },
    { no: 3, title: "Current Electricity", subject: "Circuits", color: "#4a148c", lessons: 10, quiz: true, notes: true, free: false },
    { no: 4, title: "Moving Charges and Magnetism", subject: "Magnetics", color: "#4a148c", lessons: 9, quiz: true, notes: true, free: false },
    { no: 5, title: "Magnetism and Matter", subject: "Magnetics", color: "#4a148c", lessons: 7, quiz: true, notes: true, free: false },
    { no: 6, title: "Electromagnetic Induction", subject: "EMI", color: "#4a148c", lessons: 8, quiz: true, notes: true, free: false },
    { no: 7, title: "Ray Optics and Optical Instruments", subject: "Optics", color: "#4a148c", lessons: 10, quiz: true, notes: true, free: false },
    { no: 8, title: "Wave Optics", subject: "Optics", color: "#4a148c", lessons: 8, quiz: true, notes: true, free: false },
  ],
  "Chemistry": [
    { no: 1, title: "The Solid State", subject: "Physical", color: "#880e4f", lessons: 7, quiz: true, notes: true, free: true },
    { no: 2, title: "Solutions", subject: "Physical", color: "#880e4f", lessons: 8, quiz: true, notes: true, free: true },
    { no: 3, title: "Electrochemistry", subject: "Physical", color: "#880e4f", lessons: 9, quiz: true, notes: true, free: false },
    { no: 4, title: "Chemical Kinetics", subject: "Physical", color: "#880e4f", lessons: 8, quiz: true, notes: true, free: false },
    { no: 5, title: "Surface Chemistry", subject: "Physical", color: "#880e4f", lessons: 6, quiz: true, notes: true, free: false },
    { no: 6, title: "The p-Block Elements", subject: "Inorganic", color: "#880e4f", lessons: 10, quiz: true, notes: true, free: false },
    { no: 7, title: "Coordination Compounds", subject: "Inorganic", color: "#880e4f", lessons: 9, quiz: true, notes: true, free: false },
    { no: 8, title: "Aldehydes, Ketones and Carboxylic Acids", subject: "Organic", color: "#880e4f", lessons: 11, quiz: true, notes: true, free: false },
  ],
  "Biology": [
    { no: 1, title: "Sexual Reproduction in Flowering Plants", subject: "Botany", color: "#1b5e20", lessons: 7, quiz: true, notes: true, free: true },
    { no: 2, title: "Human Reproduction", subject: "Zoology", color: "#1b5e20", lessons: 8, quiz: true, notes: true, free: true },
    { no: 3, title: "Principles of Inheritance and Variation", subject: "Genetics", color: "#1b5e20", lessons: 10, quiz: true, notes: true, free: false },
    { no: 4, title: "Molecular Basis of Inheritance", subject: "Genetics", color: "#1b5e20", lessons: 9, quiz: true, notes: true, free: false },
    { no: 5, title: "Human Health and Disease", subject: "Physiology", color: "#1b5e20", lessons: 8, quiz: true, notes: true, free: false },
    { no: 6, title: "Biotechnology — Principles and Processes", subject: "Biotech", color: "#1b5e20", lessons: 8, quiz: true, notes: true, free: false },
    { no: 7, title: "Biotechnology and its Applications", subject: "Biotech", color: "#1b5e20", lessons: 7, quiz: true, notes: true, free: false },
    { no: 8, title: "Ecosystem", subject: "Ecology", color: "#1b5e20", lessons: 8, quiz: true, notes: true, free: false },
  ],
  "English": [
    { no: 1, title: "The Last Lesson (Flamingo)", subject: "Prose", color: "#bf360c", lessons: 4, quiz: true, notes: true, free: true },
    { no: 2, title: "My Mother at Sixty-Six (Poetry)", subject: "Poetry", color: "#bf360c", lessons: 3, quiz: true, notes: true, free: true },
    { no: 3, title: "The Tiger King (Vistas)", subject: "Prose", color: "#bf360c", lessons: 3, quiz: true, notes: true, free: false },
    { no: 4, title: "Grammar — Determiners, Clauses & Tenses", subject: "Grammar", color: "#bf360c", lessons: 8, quiz: true, notes: true, free: false },
    { no: 5, title: "Writing — Report, Notice & Speech", subject: "Writing", color: "#bf360c", lessons: 6, quiz: true, notes: true, free: false },
    { no: 6, title: "Unseen Passage & Comprehension", subject: "Reading", color: "#bf360c", lessons: 6, quiz: true, notes: true, free: false },
  ],
};

const TOPPERS: Topper[] = [
  {
    name: "Ananya Singh",
    school: "Delhi Public School, Vasant Kunj",
    score: "99/100",
    tag: "Maths Topper",
    quote: "Integrals and Differential Equations are where most students lose marks — but the step-by-step board-style solutions here made them my strongest topics. I scored 99 in Maths and also cleared JEE Advanced. The practice tests are exactly like the real paper.",
  },
  {
    name: "Karthik Iyer",
    school: "Kendriya Vidyalaya, Chennai",
    score: "98/100",
    tag: "Biology Star",
    quote: "Class 12 Biology for NEET is intense — Genetics, Biotechnology, Ecology all together. The NEET-mapped MCQ banks for each chapter are exceptional. I scored 98 in boards and 680/720 in NEET. The diagram-based questions are a game changer.",
  },
  {
    name: "Shreya Mehta",
    school: "St. Xavier's College, Mumbai",
    score: "97/100",
    tag: "Chemistry Ace",
    quote: "Electrochemistry and Coordination Compounds used to be my nightmare. The colour-coded notes and reaction mechanism videos sorted everything. I walked into the board exam confident and got 97. The board sample papers were spot on.",
  },
];

const RESOURCES: Resource[] = [
  { icon: FaFileAlt, label: "NCERT Solutions Class 12", desc: "All subjects, all chapters", color: "#1a237e" },
  { icon: FaClipboardList, label: "CBSE Sample Papers 2025–26", desc: "Latest board pattern with answers", color: "#880e4f" },
  { icon: FaChartBar, label: "JEE / NEET Final Notes", desc: "Chapter-wise revision sheets", color: "#4a148c" },
  { icon: FaBook, label: "Revision Notes PDF", desc: "Quick-revision, all subjects", color: "#1b5e20" },
];

const FEATURES: Feature[] = [
  { icon: FaVideo, title: "HD Concept Videos", desc: "2,900+ lectures covering every NCERT Class 12 chapter — board-pattern solutions and JEE/NEET problems side by side.", color: "#1a237e" },
  { icon: FaClipboardList, title: "Chapter-wise Tests", desc: "320+ practice tests — CBSE board MCQs, short-answer and long-answer formats, plus JEE/NEET-style questions per chapter.", color: "#880e4f" },
  { icon: FaAtom, title: "JEE & NEET Final Year", desc: "Class 12 is the most exam-critical year. Every chapter mapped to JEE Mains, JEE Advanced and NEET patterns with PYQ analysis.", color: "#4a148c" },
  { icon: FaHeadphones, title: "Doubt Solving", desc: "Ask doubts anytime via text or photo — subject experts respond within 2 hours, with live crash sessions in Feb–Mar.", color: "#bf360c" },
  { icon: FaChartBar, title: "Progress Tracker", desc: "Visual dashboards: chapter completion %, test scores, board readiness index, JEE/NEET rank predictor and weak topic heatmaps.", color: "#006064" },
  { icon: FaTrophy, title: "Full-Syllabus Mocks", desc: "CBSE board full-mock series with CBSE marking scheme — plus JEE Mains, JEE Advanced and NEET mock test series.", color: "#1b5e20" },
];

const FAQS: Faq[] = [
  {
    q: "Is this course aligned with the latest CBSE Class 12 syllabus for 2025–26?",
    a: "Yes, all content is fully aligned with the CBSE Class 12 curriculum for 2025–26 board exams. We cover the rationalized NCERT syllabus across Mathematics, Physics, Chemistry, Biology and English. Any CBSE updates are reflected within 48 hours. The course also maps every chapter to JEE Mains, JEE Advanced and NEET patterns.",
  },
  {
    q: "Does Class 12 content help directly with JEE Mains and JEE Advanced?",
    a: "Absolutely. Class 12 forms approximately 50% of the JEE Mains syllabus. Every chapter in Physics, Chemistry and Mathematics is taught with board exam and JEE Mains/Advanced problem-solving side by side. We include JEE Advanced-level multi-correct, paragraph-based and integer-type questions for each chapter, alongside CBSE board solutions.",
  },
  {
    q: "How are the CBSE board mock tests structured?",
    a: "Our board mocks follow the exact CBSE Class 12 pattern — Section A (MCQ + Assertion-Reason), Section B (2-mark), Section C (3-mark), Section D (case-based), Section E (5-mark). All mocks include detailed solutions with CBSE marking schemes. Students also get individual rank analysis and chapter-wise performance breakdown.",
  },
  {
    q: "Is Class 12 Biology sufficient for NEET preparation?",
    a: "Class 12 Biology alone covers roughly 50% of the NEET Biology paper. Our content covers all 16 Class 12 Biology chapters — Genetics, Biotechnology, Reproduction, Ecology, Human Health — with NEET-style MCQ banks, diagram-based questions, and previous year NEET paper analysis tagged to each chapter. We strongly recommend pairing it with our Class 11 Biology module for full NEET coverage.",
  },
  {
    q: "Are previous year CBSE board papers included?",
    a: "Yes. The course includes official CBSE Class 12 board papers from 2018 to 2025 across Delhi, Outside Delhi and Compartment sets — with detailed solutions and marking scheme explanations. We also provide subject-wise frequency analysis of the most repeated topics so you can prioritize smartly in the final weeks.",
  },
];

const EXAM_DATES: ExamDate[] = [
  { event: "Unit Test 1", date: "Apr 20, 2026" },
  { event: "Mid-Term Exam", date: "Sep 25, 2026" },
  { event: "Pre-Board 1", date: "Dec 12, 2026" },
  { event: "Pre-Board 2", date: "Jan 22, 2027" },
  { event: "CBSE Board Exam", date: "Feb–Mar 2027" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Class12Page() {
  const [activeSubject, setActiveSubject] = useState<SubjectTab>("Mathematics");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSubjectCard, setActiveSubjectCard] = useState<string | null>(null);

  const activeSubjectData = SUBJECTS.find((s) => s.name === activeSubject)!;
  const activeChapters = CHAPTERS[activeSubject];

  return (
    <div className="font-serif bg-[#F5F3EE] min-h-screen text-[#111]">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-[72px] pb-20 px-6 bg-[linear-gradient(160deg,#020008_0%,#0a0520_50%,#030010_100%)]">

        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(100,60,255,0.16)_0%,transparent_45%),radial-gradient(circle_at_10%_80%,rgba(255,40,100,0.08)_0%,transparent_45%)]" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(110,80,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(110,80,255,0.05) 1px,transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        {/* NCERT watermark */}
        <div className="absolute top-[52px] right-[440px] pointer-events-none text-[rgba(120,90,255,0.07)] font-serif text-xs leading-loose hidden xl:block">
          <div>Ch 1 — Relations & Functions | Matrices — Ch 3</div>
          <div>Physics: Current Electricity · Magnetism · Optics</div>
          <div>Biology: Genetics · Biotechnology · Ecosystem</div>
        </div>

        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-center relative">

          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(110,80,255,0.12)] border border-[rgba(110,80,255,0.4)] rounded-full px-3.5 py-[5px] mb-[22px]">
              <span className="w-[7px] h-[7px] rounded-full bg-[#8b5cf6] inline-block" />
              <span className="text-xs text-[#c4b5fd] font-mono font-bold tracking-[0.06em]">
                CBSE Class 12 — Board Exam 2026–27 · JEE · NEET · Commerce
              </span>
            </div>

            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] text-white mb-4 leading-tight font-bold tracking-tight">
              Class 12 Board + JEE / NEET —<br />
              <span className="text-[#a78bfa]">Score 95+ & Crack Your Dream Exam</span>
            </h1>

            <p className="text-base text-white/65 leading-relaxed mb-8 max-w-[500px]">
              Maths · Physics · Chemistry · Biology · English — the most important year of school, with{" "}
              <span className="bg-[rgba(110,80,255,0.15)] text-[#c4b5fd] px-2 py-0.5 rounded font-mono text-sm">
                HD videos
              </span>
              ,{" "}
              <span className="bg-[rgba(110,80,255,0.15)] text-[#c4b5fd] px-2 py-0.5 rounded font-mono text-sm">
                JEE / NEET mocks
              </span>
              , and NCERT solutions. Trusted by{" "}
              <strong className="text-white">1,80,000+ Class 12 students</strong> across India.
            </p>

            <div className="flex gap-3 flex-wrap">
              <button className="bg-[#6d28d9] text-white px-7 py-[13px] rounded-[10px] text-[15px] font-bold border-none cursor-pointer font-serif">
                Start Learning Free →
              </button>
              <button className="bg-white/[0.07] text-white px-7 py-[13px] rounded-[10px] text-[15px] font-semibold border border-white/20 cursor-pointer">
                ▶ Watch Demo Lecture
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-9 mt-10">
              {[
                ["2,900+", "Video Lectures"],
                ["69", "Chapters Covered"],
                ["320+", "Practice Tests"],
                ["4.9★", "Student Rating"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="text-xl font-bold text-[#a78bfa] font-mono">{v}</div>
                  <div className="text-[11px] text-white/45 mt-[3px] font-sans">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
            <div className="bg-[#020008] rounded-lg px-4 py-3 mb-5 font-mono text-xs text-[#c4b5fd] leading-[1.9] border-l-[3px] border-[#6d28d9]">
              <span className="text-[#666]"># Class 12 Planner</span><br />
              <span className="text-[#c4b5fd]">student</span> = <span className="text-[#a78bfa]">Class12</span>.<span className="text-[#86efac]">enroll</span>(<span className="text-[#fde68a]">stream="PCM"</span>)<br />
              <span className="text-[#c4b5fd]">student</span>.ace_boards_and_jee()
            </div>

            {([
              ["Student's Full Name", "text", "Nisha Sharma"],
              ["Parent's Mobile", "tel", "+91 9876543210"],
              ["Email", "email", "nisha@email.com"],
            ] as [string, string, string][]).map(([label, type, ph]) => (
              <div key={label} className="mb-4">
                <label className="block text-xs font-semibold text-[#555] mb-[5px] font-sans">{label}</label>
                <input
                  type={type}
                  placeholder={ph}
                  className="w-full px-[14px] py-[11px] rounded-lg border-[1.5px] border-[#e0e2ea] text-sm outline-none text-[#333] font-sans box-border"
                />
              </div>
            ))}

            <div className="mb-4">
              <label className="block text-xs font-semibold text-[#555] mb-[5px] font-sans">Stream</label>
              <select className="w-full px-[14px] py-[11px] rounded-lg border-[1.5px] border-[#e0e2ea] text-sm text-[#333] bg-white font-sans">
                <option>PCM (Physics, Chemistry, Maths)</option>
                <option>PCB (Physics, Chemistry, Biology)</option>
                <option>PCMB (All four)</option>
                <option>Commerce</option>
                <option>Humanities / Arts</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-xs font-semibold text-[#555] mb-[5px] font-sans">Target Exam</label>
              <select className="w-full px-[14px] py-[11px] rounded-lg border-[1.5px] border-[#e0e2ea] text-sm text-[#333] bg-white font-sans">
                <option>JEE Mains + Advanced</option>
                <option>NEET</option>
                <option>CBSE Board Exams Only</option>
                <option>CA Foundation</option>
                <option>Not decided yet</option>
              </select>
            </div>

            <button className="w-full bg-[#3b0764] text-white py-[14px] rounded-[10px] text-[15px] font-bold border-none cursor-pointer font-mono">
              Get Free Class 12 Study Plan →
            </button>
            <p className="text-center text-[11px] text-[#bbb] mt-3 font-sans">
              Free · Includes Board + JEE / NEET Roadmap PDF · Expert callback in 2 hrs
            </p>
          </div>
        </div>
      </section>

      {/* ── TICKER ────────────────────────────────────────────────────── */}
      <div className="bg-[#020008] px-6 py-[10px] overflow-hidden">
        <div className="max-w-[1140px] mx-auto flex items-center gap-4">
          <span className="bg-[#6d28d9] text-white text-[11px] font-bold px-[10px] py-[3px] rounded font-mono whitespace-nowrap">
            LIVE
          </span>
          <div className="flex gap-9 overflow-hidden">
            {[
              "CBSE Class 12 Board Exam 2027 — Start early, score big 📚",
              "New PCM batch for Class 12 starting April 8 — Limited seats 🎓",
              "Ananya Singh — 99/100 Maths, AIR 312 JEE Advanced — GovPrep student 🏆",
              "Free NCERT Solutions Class 12 — All chapters now available 📄",
              "JEE Mains Mock Series — Free first test — Register Now 🧪",
            ].map((t, i) => (
              <span key={i} className="text-sm text-white/75 whitespace-nowrap font-sans">
                <FaBell size={11} className="mr-[5px] align-middle opacity-60 inline" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-6">

        {/* ── STREAM BANNER ─────────────────────────────────────────── */}
        <section className="pt-6 md:pt-10">
          <div className="bg-white rounded-2xl border border-[#e4d9c8] px-4 md:px-8 py-6">
            <p className="text-[10px] md:text-[11px] font-bold tracking-[0.12em] text-[#6d28d9] uppercase mb-4 font-sans">
              🎯 Choose Your Stream &amp; Target
            </p>
            {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {[
                { label: "PCM", sub: "Maths + Physics + Chemistry", color: "#1a237e", badge: "JEE", icon: "📐" },
                { label: "PCB", sub: "Physics + Chemistry + Biology", color: "#1b5e20", badge: "NEET", icon: "🧬" },
                { label: "PCMB", sub: "All four science subjects", color: "#4a148c", badge: "JEE+NEET", icon: "⚗️" },
                { label: "Commerce", sub: "Accounts + Economics + BSt", color: "#bf360c", badge: "CA / BBA", icon: "📊" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-[14px] px-[18px] py-4 cursor-pointer transition-transform duration-200 hover:-translate-y-[3px] flex flex-col items-start"
                  style={{ background: s.color + "0a", border: `1.5px solid ${s.color}22` }}
                >
                  <div className="text-[20px] md:text-[22px] mb-2">{s.icon}</div>
                  <div className="font-bold text-[14px] md:text-[15px] font-mono mb-1" style={{ color: s.color }}>{s.label}</div>
                  <div className="text-[11px] md:text-xs text-[#777] font-sans mb-3 leading-snug">{s.sub}</div>
                  <span
                    className="text-[9px] md:text-[10px] font-bold px-2 py-[2px] rounded-full font-mono mt-auto"
                    style={{ color: s.color, background: s.color + "18" }}
                  >
                    {s.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SUBJECT CARDS ─────────────────────────────────────────── */}
        <section className="pt-12">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.12em] text-[#6d28d9] uppercase mb-2.5 font-sans">
              All Subjects
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] text-[#111] mb-3.5 tracking-tight">
              Class 12 — Subject-wise Courses
            </h2>
            <p className="text-[#777] text-[15px] max-w-[540px] mx-auto leading-relaxed font-sans">
              Every subject broken into chapters with board-pattern videos, NCERT solutions, and JEE/NEET final-year tests.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-5">
            {SUBJECTS.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-[18px] overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1"
                style={{ border: `2px solid ${activeSubjectCard === s.name ? s.color : "#e4d9c8"}` }}
                onClick={() => { setActiveSubjectCard(s.name); setActiveSubject(s.name as SubjectTab); }}
              >
                {/* Card header */}
                <div className="px-5 pt-[22px] pb-[18px]" style={{ background: s.color }}>
                  {s.tag && (
                    <span className="bg-white/[0.18] text-white text-[10px] font-bold px-[9px] py-[3px] rounded-full inline-block mb-2.5 font-sans">
                      {s.tag}
                    </span>
                  )}
                  <div className="w-11 h-11 rounded-xl bg-white/[0.15] flex items-center justify-center mb-3">
                    <s.icon size={22} color="white" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-white leading-tight">{s.name}</h3>
                </div>

                {/* Card body */}
                <div className="px-5 pt-4 pb-5">
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      [s.chapters, "Chapters"],
                      [s.videos, "Videos"],
                      [s.tests, "Tests"],
                    ].map(([val, lbl], j) => (
                      <div key={j} className="text-center bg-[#f9f7f4] rounded-lg py-2 px-1">
                        <div className="text-base font-bold font-mono" style={{ color: s.color }}>{val}</div>
                        <div className="text-[10px] text-[#999] font-sans">{lbl}</div>
                      </div>
                    ))}
                  </div>
                  <button
                    className="w-full text-white py-[9px] rounded-lg text-xs font-bold border-none cursor-pointer font-sans"
                    style={{ background: s.color }}
                  >
                    Explore Chapters →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CHAPTER LIST ──────────────────────────────────────────── */}
        <section className="py-12">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-[10px] md:text-xs font-bold tracking-[0.12em] text-[#6d28d9] uppercase mb-2.5 font-sans">
              Chapter Index
            </p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#111] leading-tight max-w-2xl mx-auto">
              NCERT Class 12 — Chapter-wise Content
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-[#e4d9c8] overflow-hidden shadow-sm">

            <div className="flex border-b border-[#e4d9c8] overflow-x-auto no-scrollbar scroll-smooth">
              {SUBJECT_TABS.map((t) => {
                const subj = SUBJECTS.find((s) => s.name === t)!;
                const isActive = activeSubject === t;

                return (
                  <button
                    key={t}
                    onClick={() => setActiveSubject(t)}
                    className={`
              flex-1 min-w-[110px] md:min-w-[140px] px-4 py-3.5 md:py-[18px] 
              text-[12px] md:text-[13px] font-semibold cursor-pointer 
              border-none transition-all duration-300 ease-in-out
              ${isActive ? 'shadow-[inset_0_-2px_0_rgba(0,0,0,0.1)]' : 'hover:bg-gray-50'}
            `}
                    style={{
                      background: isActive ? subj.color : "white",
                      color: isActive ? "white" : "#555",
                      fontFamily: isActive ? "monospace" : "sans-serif",
                    }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            {/* Table header */}
            <div
              className="grid px-6 py-2.5 bg-[#f9f7f4] border-b border-[#e4d9c8]"
              style={{ gridTemplateColumns: "48px 1fr 100px 80px 70px 70px 80px" }}
            >
              {["#", "Chapter", "Subject Tag", "Lessons", "Quiz", "Notes", "Access"].map((h, i) => (
                <div
                  key={h}
                  className="text-[10px] font-bold text-[#aaa] uppercase tracking-[0.08em] font-sans"
                  style={{ textAlign: i > 2 ? "center" : "left" }}
                >
                  {h}
                </div>
              ))}
            </div>

            {/* Chapter rows */}
            {activeChapters.map((ch, i) => (
              <div
                key={i}
                className="grid px-6 py-[14px] border-b border-[#f5f0e8] items-center cursor-pointer transition-colors duration-150 hover:bg-[#faf8f5]"
                style={{ gridTemplateColumns: "48px 1fr 100px 80px 70px 70px 80px" }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white font-mono"
                  style={{ background: ch.color }}
                >
                  {ch.no}
                </div>

                <div className="text-sm font-semibold text-[#111] font-sans pr-4 leading-snug">
                  {ch.title}
                </div>

                <div>
                  <span
                    className="text-[10px] font-bold px-2 py-[2px] rounded font-mono"
                    style={{ color: ch.color, background: ch.color + "18" }}
                  >
                    {ch.subject}
                  </span>
                </div>

                <div className="text-center text-[13px] font-mono text-[#555]">
                  {ch.lessons} lessons
                </div>

                <div className="text-center">
                  {ch.quiz
                    ? <FaCheckCircle size={14} color="#6d28d9" />
                    : <span className="text-xs text-[#ddd]">—</span>}
                </div>

                <div className="text-center">
                  {ch.notes
                    ? <FaCheckCircle size={14} color="#1b5e20" />
                    : <span className="text-xs text-[#ddd]">—</span>}
                </div>

                <div className="text-center">
                  {ch.free ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1b5e20] bg-[#dcfce7] px-2 py-[3px] rounded-full font-mono">
                      <FaUnlock size={9} /> Free
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#3b0764] bg-[#f3e8ff] px-2 py-[3px] rounded-full font-mono">
                      <FaLock size={9} /> Pro
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Footer */}
            <div className="px-6 py-4 bg-[#f9f7f4] flex items-center justify-between border-t border-[#e4d9c8]">
              <p className="text-xs text-[#888] font-sans">
                Showing {activeChapters.length} of {activeSubjectData.chapters} chapters •{" "}
                <span className="text-[#1b5e20] font-bold">
                  {activeChapters.filter((c) => c.free).length} free
                </span>{" "}
                chapters available
              </p>
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#3b0764] text-white text-xs font-bold border-none cursor-pointer font-mono">
                View All Chapters <FaArrowRight size={10} />
              </button>
            </div>
          </div>
        </section>

        {/* ── FEATURES ──────────────────────────────────────────────── */}
        <section className="pb-12">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.12em] text-[#6d28d9] uppercase mb-2.5 font-sans">
              What's Included
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] text-[#111]">
              Everything You Need to Score 95+ &amp; Crack JEE / NEET
            </h2>
          </div>

          <section className="px-4 md:px-0">
            {/* Grid container: Stacks on mobile, 2-col on tablet, 3-col on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {FEATURES.map((f, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[18px] px-5 py-6 md:px-6 md:py-7 border border-[#e4d9c8] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-[0.98]"
                >
                  {/* Icon Container - slightly smaller on mobile */}
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: f.color + "18" }}
                  >
                    <f.icon size={20} className="md:w-[22px]" color={f.color} />
                  </div>

                  {/* Title - adjusted font size for mobile */}
                  <h4 className="font-serif text-base md:text-[17px] font-bold text-[#111] mb-2">
                    {f.title}
                  </h4>

                  {/* Description - leading-relaxed helps readability on narrow screens */}
                  <p className="text-[13px] md:text-[13.5px] text-[#666] leading-relaxed font-sans">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* ── FREE RESOURCES ────────────────────────────────────────── */}
        <section className="pb-12 px-4 md:px-0">
          <div className="bg-[linear-gradient(135deg,#020008,#0a0520)] rounded-3xl px-6 py-10 md:px-10 md:py-12 border border-[rgba(110,80,255,0.15)] relative overflow-hidden">

            {/* Decorative circle - hidden on small mobile to avoid clutter, visible on md+ */}
            <div className="hidden md:block absolute -top-10 -right-10 w-[250px] h-[250px] rounded-full bg-[rgba(109,40,217,0.12)]" />

            {/* Formulae watermark - shifted/opacity adjusted for mobile readability */}
            <div className="absolute bottom-4 right-6 md:bottom-6 md:right-10 pointer-events-none text-[rgba(110,80,255,0.04)] md:text-[rgba(110,80,255,0.05)] font-mono text-[9px] md:text-[11px] leading-loose text-right">
              <div className="hidden sm:block">∫ x² dx = x³/3 + C</div>
              <div>E = hν — Photoelectric</div>
              <div>ΔG = ΔH − TΔS</div>
            </div>

            {/* Main Grid: 1 column on mobile, 2 columns on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">

              {/* Left Content: Centered on mobile, left-aligned on desktop */}
              <div className="text-center lg:text-left">
                <p className="text-[10px] md:text-xs font-bold tracking-[0.12em] text-[#a78bfa] uppercase mb-2.5 font-sans">
                  100% Free Resources
                </p>
                <h2 className="font-serif text-2xl md:text-[clamp(1.6rem,2.5vw,2rem)] text-white mb-3.5 leading-tight">
                  Free Study Material for Class 12
                </h2>
                <p className="text-white/60 text-sm md:text-[15px] leading-relaxed font-sans max-w-[500px] mx-auto lg:mx-0">
                  Download NCERT Solutions, CBSE sample papers and JEE/NEET revision notes — no login required.
                </p>
              </div>

              {/* Right Grid (Cards): 1 column on very small phones, 2 columns on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {RESOURCES.map((r, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.06] rounded-2xl px-4 py-[18px] border border-white/10 flex flex-col gap-2.5 cursor-pointer transition-all duration-300 hover:bg-white/[0.1] hover:-translate-y-[3px]"
                  >
                    <div
                      className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center"
                      style={{ background: r.color + "30" }}
                    >
                      <r.icon size={18} color={r.color} />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white mb-[3px]">{r.label}</div>
                      <div className="text-xs text-white/50 font-sans">{r.desc}</div>
                    </div>
                    <div
                      className="flex items-center gap-1 text-xs font-semibold mt-0.5"
                      style={{ color: r.color }}
                    >
                      <FaDownload size={10} /> Free Download
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TOPPERS ───────────────────────────────────────────────── */}
        {/* <section className="pb-12">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.12em] text-[#6d28d9] uppercase mb-2.5 font-sans">
              Student Success Stories
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] text-[#111]">
              Class 12 Toppers from GovPrep
            </h2>
          </div>


        </section> */}

        {/* ── FAQs ──────────────────────────────────────────────────── */}
        <section className="pb-20">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.12em] text-[#6d28d9] uppercase mb-2.5 font-sans">
              Got Questions?
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] text-[#111]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-[780px] mx-auto">
            {FAQS.map((f, i) => (
              <div
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="bg-white rounded-[14px] mb-[10px] border border-[#e4d9c8] overflow-hidden cursor-pointer"
              >
                <div className="flex items-center justify-between px-6 py-4">
                  <span className="text-sm font-semibold text-[#111] pr-5 font-sans">{f.q}</span>
                  <FaChevronDown
                    size={16}
                    color="#888"
                    className="shrink-0 transition-transform duration-200"
                    style={{ transform: openFaq === i ? "rotate(180deg)" : "none" }}
                  />
                </div>
                {openFaq === i && (
                  <div className="px-6 pb-5 pt-4 text-sm text-[#666] leading-relaxed border-t border-[#f5f0e8] font-sans">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── FOOTER CTA ────────────────────────────────────────────────── */}
      <div className="bg-[linear-gradient(135deg,#020008,#0a0520)] px-6 py-20 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(110,80,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(110,80,255,0.04) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute bottom-8 left-12 pointer-events-none text-[rgba(110,80,255,0.06)] font-mono text-xs leading-loose text-left">
          <div>while exam_score &lt; 95:</div>
          <div>&nbsp;&nbsp;watch_lecture()</div>
          <div>&nbsp;&nbsp;attempt_board_mock()</div>
          <div>&nbsp;&nbsp;solve_jee_pyqs()</div>
          <div>&nbsp;&nbsp;clear_doubts()</div>
        </div>

        <div className="relative py-4">
          <div className="text-[32px] mb-3">🎓</div>
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] text-white mb-3">
            Your Class 12 &amp; JEE / NEET Final Push Starts{" "}
            <em className="text-[#a78bfa]">Today</em>
          </h2>
          <p className="text-[15px] text-white/55 mb-8 font-sans">
            Join 1,80,000+ Class 12 students acing their boards and competitive exams with GovPrep India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#6d28d9] text-white px-8 py-3 rounded-[10px] text-[15px] font-bold border-none cursor-pointer font-serif">
              Start Free Trial
            </button>
            <button className="bg-white/[0.07] text-white px-8 py-3 rounded-[10px] text-[15px] font-semibold border border-white/20 cursor-pointer">
              Download Free Class 12 Study Plan PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}