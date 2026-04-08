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
import Class11Dashboard from "@/components/ClassX-Dashboard";

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
    chapters: 16,
    videos: 168,
    tests: 64,
    topics: ["Sets", "Relations & Functions", "Trigonometry", "Complex Numbers", "Sequences & Series", "Limits & Derivatives"],
    tag: "JEE Foundation",
  },
  {
    name: "Physics",
    icon: FaAtom,
    color: "#4a148c",
    chapters: 15,
    videos: 155,
    tests: 58,
    topics: ["Units & Measurement", "Motion in a Plane", "Laws of Motion", "Work & Energy", "Gravitation", "Thermodynamics"],
    tag: "JEE / NEET",
  },
  {
    name: "Chemistry",
    icon: FaFlask,
    color: "#880e4f",
    chapters: 14,
    videos: 148,
    tests: 56,
    topics: ["Basic Concepts", "Atomic Structure", "Chemical Bonding", "Equilibrium", "Redox Reactions", "Organic Chemistry"],
    tag: "Most Marks",
  },
  {
    name: "Biology",
    icon: FaDna,
    color: "#1b5e20",
    chapters: 22,
    videos: 180,
    tests: 70,
    topics: ["Cell Biology", "Biomolecules", "Plant Kingdom", "Animal Kingdom", "Morphology of Plants", "Body Fluids"],
    tag: "NEET Foundation",
  },
  {
    name: "English",
    icon: FaBook,
    color: "#bf360c",
    chapters: 10,
    videos: 88,
    tests: 36,
    topics: ["Hornbill Prose", "Snapshots Stories", "Grammar", "Writing Skills", "Literature Analysis", "Unseen Passages"],
  },
];

const SUBJECT_TABS: SubjectTab[] = ["Mathematics", "Physics", "Chemistry", "Biology", "English"];

const CHAPTERS: Record<SubjectTab, ChapterRow[]> = {
  "Mathematics": [
    { no: 1, title: "Sets", subject: "Maths", color: "#1a237e", lessons: 6, quiz: true, notes: true, free: true },
    { no: 2, title: "Relations and Functions", subject: "Maths", color: "#1a237e", lessons: 7, quiz: true, notes: true, free: true },
    { no: 3, title: "Trigonometric Functions", subject: "Maths", color: "#1a237e", lessons: 10, quiz: true, notes: true, free: false },
    { no: 4, title: "Complex Numbers and Quadratic Equations", subject: "Maths", color: "#1a237e", lessons: 8, quiz: true, notes: true, free: false },
    { no: 5, title: "Linear Inequalities", subject: "Maths", color: "#1a237e", lessons: 5, quiz: true, notes: true, free: false },
    { no: 6, title: "Permutations and Combinations", subject: "Maths", color: "#1a237e", lessons: 7, quiz: true, notes: true, free: false },
    { no: 7, title: "Binomial Theorem", subject: "Maths", color: "#1a237e", lessons: 6, quiz: true, notes: true, free: false },
    { no: 8, title: "Sequences and Series", subject: "Maths", color: "#1a237e", lessons: 9, quiz: true, notes: true, free: false },
  ],
  "Physics": [
    { no: 1, title: "Physical World & Units and Measurements", subject: "Physics", color: "#4a148c", lessons: 6, quiz: true, notes: true, free: true },
    { no: 2, title: "Motion in a Straight Line", subject: "Kinematics", color: "#4a148c", lessons: 8, quiz: true, notes: true, free: true },
    { no: 3, title: "Motion in a Plane", subject: "Kinematics", color: "#4a148c", lessons: 9, quiz: true, notes: true, free: false },
    { no: 4, title: "Laws of Motion", subject: "Dynamics", color: "#4a148c", lessons: 10, quiz: true, notes: true, free: false },
    { no: 5, title: "Work, Energy and Power", subject: "Dynamics", color: "#4a148c", lessons: 9, quiz: true, notes: true, free: false },
    { no: 6, title: "Gravitation", subject: "Physics", color: "#4a148c", lessons: 8, quiz: true, notes: true, free: false },
    { no: 7, title: "Thermodynamics", subject: "Heat", color: "#4a148c", lessons: 8, quiz: true, notes: true, free: false },
    { no: 8, title: "Oscillations and Waves", subject: "Physics", color: "#4a148c", lessons: 10, quiz: true, notes: true, free: false },
  ],
  "Chemistry": [
    { no: 1, title: "Some Basic Concepts of Chemistry", subject: "Physical", color: "#880e4f", lessons: 7, quiz: true, notes: true, free: true },
    { no: 2, title: "Structure of Atom", subject: "Physical", color: "#880e4f", lessons: 9, quiz: true, notes: true, free: true },
    { no: 3, title: "Classification of Elements & Periodicity", subject: "Inorganic", color: "#880e4f", lessons: 7, quiz: true, notes: true, free: false },
    { no: 4, title: "Chemical Bonding and Molecular Structure", subject: "Physical", color: "#880e4f", lessons: 10, quiz: true, notes: true, free: false },
    { no: 5, title: "States of Matter", subject: "Physical", color: "#880e4f", lessons: 8, quiz: true, notes: true, free: false },
    { no: 6, title: "Equilibrium", subject: "Physical", color: "#880e4f", lessons: 9, quiz: true, notes: true, free: false },
    { no: 7, title: "Redox Reactions", subject: "Physical", color: "#880e4f", lessons: 6, quiz: true, notes: true, free: false },
    { no: 8, title: "Hydrocarbons", subject: "Organic", color: "#880e4f", lessons: 10, quiz: true, notes: true, free: false },
  ],
  "Biology": [
    { no: 1, title: "The Living World", subject: "Diversity", color: "#1b5e20", lessons: 5, quiz: true, notes: true, free: true },
    { no: 2, title: "Biological Classification", subject: "Diversity", color: "#1b5e20", lessons: 6, quiz: true, notes: true, free: true },
    { no: 3, title: "Plant Kingdom", subject: "Botany", color: "#1b5e20", lessons: 8, quiz: true, notes: true, free: false },
    { no: 4, title: "Animal Kingdom", subject: "Zoology", color: "#1b5e20", lessons: 9, quiz: true, notes: true, free: false },
    { no: 5, title: "Morphology of Flowering Plants", subject: "Botany", color: "#1b5e20", lessons: 8, quiz: true, notes: true, free: false },
    { no: 6, title: "Cell — The Unit of Life", subject: "Cell Bio", color: "#1b5e20", lessons: 9, quiz: true, notes: true, free: false },
    { no: 7, title: "Biomolecules", subject: "Biochemistry", color: "#1b5e20", lessons: 8, quiz: true, notes: true, free: false },
    { no: 8, title: "Body Fluids and Circulation", subject: "Physiology", color: "#1b5e20", lessons: 9, quiz: true, notes: true, free: false },
  ],
  "English": [
    { no: 1, title: "The Portrait of a Lady (Hornbill)", subject: "Prose", color: "#bf360c", lessons: 4, quiz: true, notes: true, free: true },
    { no: 2, title: "A Photograph / The Laburnum Top (Poetry)", subject: "Poetry", color: "#bf360c", lessons: 3, quiz: true, notes: true, free: true },
    { no: 3, title: "The Address (Snapshots)", subject: "Prose", color: "#bf360c", lessons: 3, quiz: true, notes: true, free: false },
    { no: 4, title: "Grammar — Tenses, Voice & Narration", subject: "Grammar", color: "#bf360c", lessons: 8, quiz: true, notes: true, free: false },
    { no: 5, title: "Writing — Notice, Article & Letter", subject: "Writing", color: "#bf360c", lessons: 6, quiz: true, notes: true, free: false },
    { no: 6, title: "Unseen Passage & Comprehension", subject: "Reading", color: "#bf360c", lessons: 6, quiz: true, notes: true, free: false },
  ],
};

const TOPPERS: Topper[] = [
  {
    name: "Aarav Sharma",
    school: "DPS R.K. Puram, New Delhi",
    score: "98/100",
    tag: "Maths Topper",
    quote: "The Trigonometry and Complex Numbers modules were exceptional — the JEE-pattern problems alongside board questions gave me mastery over both. I cleared my school finals with 98 and cracked JEE Advanced the next year. The progressive difficulty in each chapter is perfectly designed.",
  },
  {
    name: "Priya Nambiar",
    school: "Kendriya Vidyalaya, Thiruvananthapuram",
    score: "99/100",
    tag: "Biology Star",
    quote: "Biology Class 11 is tough — Animal Kingdom, Morphology, Biomolecules — but the diagram-based videos with NEET-style MCQs made everything stick. I scored 99 in boards and my NEET Biology score was in the 99th percentile. The chapter-wise tests are as tough as real NEET questions.",
  },
  {
    name: "Harsh Patel",
    school: "Narayana Jr. College, Ahmedabad",
    score: "97/100",
    tag: "Physics Ace",
    quote: "Laws of Motion and Thermodynamics used to paralyze me. The vector diagrams and derivation walkthroughs here are far better than any textbook. I scored full marks in the Numericals section. The mock tests in Physics also helped me crack JEE Mains in my first attempt.",
  },
];

const RESOURCES: Resource[] = [
  { icon: FaFileAlt, label: "NCERT Solutions Class 11", desc: "All subjects, all chapters", color: "#1a237e" },
  { icon: FaClipboardList, label: "School Exam Sample Papers", desc: "Latest CBSE Class 11 pattern", color: "#880e4f" },
  { icon: FaChartBar, label: "JEE / NEET Foundation Notes", desc: "Chapter-wise concept sheets", color: "#4a148c" },
  { icon: FaBook, label: "Revision Notes PDF", desc: "Quick-revision notes, all subjects", color: "#1b5e20" },
];

const FEATURES: Feature[] = [
  { icon: FaVideo, title: "HD Concept Videos", desc: "2,700+ lectures covering every NCERT Class 11 chapter — with board-pattern and JEE/NEET-level problem solving side by side.", color: "#1a237e" },
  { icon: FaClipboardList, title: "Chapter-wise Tests", desc: "300+ practice tests — school-exam MCQs and JEE/NEET-style questions both included for each chapter.", color: "#880e4f" },
  { icon: FaAtom, title: "JEE & NEET Foundation", desc: "Every PCM/PCB chapter mapped to JEE Mains & NEET patterns — build the competitive exam foundation in Class 11 itself.", color: "#4a148c" },
  { icon: FaHeadphones, title: "Doubt Solving", desc: "Ask doubts anytime via text or photo — subject experts respond within 2 hours, with live sessions during exam season.", color: "#bf360c" },
  { icon: FaChartBar, title: "Progress Tracker", desc: "Visual dashboards: chapter completion %, test scores, JEE/NEET readiness index, and weak topic heatmaps.", color: "#006064" },
  { icon: FaTrophy, title: "Full-Syllabus Mock Tests", desc: "School mid-term and annual exam mocks with detailed CBSE marking scheme — plus JEE/NEET mock series for PCM/PCB students.", color: "#1b5e20" },
];

const FAQS: Faq[] = [
  {
    q: "Is this course aligned with the latest CBSE Class 11 syllabus?",
    a: "Yes, all content is fully aligned with CBSE Class 11 curriculum for 2025–26. We cover the latest NCERT rationalized syllabus across Mathematics, Physics, Chemistry, Biology and English. Any CBSE syllabus updates are reflected within 48 hours. The course also maps content to JEE Mains and NEET patterns for PCM/PCB students.",
  },
  {
    q: "Does Class 11 content also cover JEE and NEET foundation?",
    a: "Absolutely. Class 11 is the most critical year for JEE and NEET preparation. Every chapter in Physics, Chemistry, Maths and Biology is taught with both the CBSE board exam and the JEE/NEET exam pattern in mind. We include JEE-level numericals for Maths and Physics, and NEET-level MCQs for Biology and Chemistry — alongside standard NCERT exercises.",
  },
  {
    q: "How are the practice tests structured?",
    a: "Chapter tests follow the school annual exam pattern — 1-mark, 3-mark and 5-mark questions as per CBSE. We also have JEE-style (single correct, multi-correct, integer type) and NEET-style (4-option MCQ) tests for each chapter. Students can choose the test type based on their goal. Full-syllabus mocks simulate the school annual exam and competitive exam environments.",
  },
  {
    q: "Is Class 11 Biology covered for NEET aspirants?",
    a: "Yes, Biology Class 11 is covered in full depth for NEET aspirants. All 22 chapters — from The Living World and Classification through Cell Biology, Biomolecules, Plant and Animal Morphology, to Physiology — are covered with NEET-style MCQ tests, diagram-based questions and previous year NEET papers mapped to each chapter.",
  },
  {
    q: "Are NCERT solutions and previous year papers included?",
    a: "Yes. The course includes complete NCERT Solutions for all Class 11 subjects, including solved examples, exercise questions and exemplar problems. We also include school annual exam papers from CBSE schools across India — with solutions and marking scheme explanations. JEE and NEET previous year questions are tagged to corresponding Class 11 chapters.",
  },
];

const EXAM_DATES: ExamDate[] = [
  { event: "Unit Test 1", date: "Apr 18, 2026" },
  { event: "Mid-Term Exam", date: "Sep 22, 2026" },
  { event: "Pre-Annual", date: "Dec 15, 2026" },
  { event: "Annual Exam", date: "Feb–Mar 2027" },
  { event: "JEE Mains (Yr 2)", date: "Jan 2028" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Class11Page() {
  const [activeSubject, setActiveSubject] = useState<SubjectTab>("Mathematics");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSubjectCard, setActiveSubjectCard] = useState<string | null>(null);

  const activeSubjectData = SUBJECTS.find((s) => s.name === activeSubject)!;
  const activeChapters = CHAPTERS[activeSubject];

  return (
    <div
      className="font-serif bg-[#F5F3EE] min-h-screen text-[#111] mt-8"
    >
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
     <section className="relative overflow-hidden bg-[#06000f] py-12 px-6 lg:py-20 lg:px-12">
      {/* Background Gradients & Ambient Glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(160deg, #06000f 0%, #0d0a2e 50%, #04000c 100%)"
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 70% 20%, rgba(120,80,255,0.14) 0%, transparent 45%), 
            radial-gradient(circle at 10% 80%, rgba(255,60,120,0.08) 0%, transparent 45%)
          `
        }}
      />

      {/* Animated Dot Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(130,100,255,0.1) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(130,100,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px"
        }}
      />

      {/* NCERT Watermark - Hidden on small screens */}
      <div className="absolute top-12 right-[10%] hidden xl:block text-[rgba(140,110,255,0.08)] font-serif text-xs leading-loose pointer-events-none select-none">
        <div>Ch 1 — Sets | Relations & Functions — Ch 2</div>
        <div>Physics: Laws of Motion · Gravitation · Thermodynamics</div>
        <div>Biology: Cell Biology · Biomolecules · Plant Kingdom</div>
      </div>

      <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">
        
        {/* LEFT COLUMN: CONTENT */}
        <div className="z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(130,100,255,0.12)] border border-[rgba(130,100,255,0.4)] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#a07fff] animate-pulse" />
            <span className="text-[10px] sm:text-xs text-[#c0aaff] font-mono font-bold tracking-wider uppercase">
              CBSE Class 11 — Session 2025–26 · PCM · PCB · Commerce
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-[1.1] mb-6 tracking-tight">
            Class 11 Board + Entrance Prep —<br />
            <span className="text-[#a07fff]">Score 95+ & Crack JEE / NEET</span>
          </h1>

          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Maths · Physics · Chemistry · Biology · English — complete Class 11 preparation with 
            <span className="mx-1 bg-purple-500/15 text-[#c0aaff] px-2 py-0.5 rounded font-mono text-sm">HD videos</span>, 
            <span className="mx-1 bg-purple-500/15 text-[#c0aaff] px-2 py-0.5 rounded font-mono text-sm">JEE/NEET foundation</span>, 
            and NCERT solutions. Trusted by <strong className="text-white">1,50,000+ Class 11 students</strong> across India.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-purple-700 hover:bg-purple-600 transition-colors text-white px-8 py-3.5 rounded-xl text-base font-bold shadow-lg shadow-purple-900/20">
              Start Learning Free →
            </button>
            <button className="bg-white/5 hover:bg-white/10 transition-colors text-white border border-white/20 px-8 py-3.5 rounded-xl text-base font-semibold backdrop-blur-sm">
              ▶ Watch Demo Lecture
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-8 mt-12">
            {[
              ["2,700+", "Video Lectures"],
              ["77", "Chapters Covered"],
              ["300+", "Practice Tests"],
              ["4.9★", "Student Rating"],
            ].map(([val, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-[#a07fff] font-mono">{val}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: LEAD FORM */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/50 z-10 w-full max-w-md mx-auto">
          {/* Code Snippet Branding */}
          <div className="bg-[#06000f] rounded-xl p-4 mb-6 font-mono text-[11px] sm:text-xs border-l-4 border-purple-600 leading-relaxed shadow-inner">
            <div className="text-gray-500"># Class 11 Planner</div>
            <div className="text-[#c0aaff]">
              student <span className="text-white">=</span> Class11.<span className="text-green-300">enroll</span>(<span className="text-yellow-200">"PCM"</span>)
            </div>
            <div className="text-[#c0aaff]">student.ace_boards_and_jee()</div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {[
              { label: "Student's Full Name", type: "text", ph: "Ishaan Mehta" },
              { label: "Parent's Mobile", type: "tel", ph: "+91 9876543210" },
              { label: "Email", type: "email", ph: "ishaan@email.com" },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1.5 ml-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.ph}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all outline-none text-gray-800 text-sm placeholder:text-gray-300"
                />
              </div>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1.5 ml-1">Stream</label>
                <select className="w-full px-3 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 focus:border-purple-500 outline-none">
                  <option>PCM</option>
                  <option>PCB</option>
                  <option>PCMB</option>
                  <option>Commerce</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1.5 ml-1">Target Exam</label>
                <select className="w-full px-3 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 focus:border-purple-500 outline-none">
                  <option>JEE Mains</option>
                  <option>NEET</option>
                  <option>Boards Only</option>
                </select>
              </div>
            </div>

            <button className="w-full bg-[#1e0a3d] hover:bg-[#2d0f5c] transition-colors text-white py-4 rounded-xl font-mono font-bold text-sm shadow-lg shadow-purple-900/10 mt-2">
              Get Free Study Plan →
            </button>
            
            <p className="text-center text-[10px] text-gray-400 mt-4 leading-tight">
              Free · Includes JEE / NEET Roadmap PDF <br />
              <span className="text-purple-600 font-semibold">Expert callback in 2 hours</span>
            </p>
          </form>
        </div>

      </div>
    </section>

    



      {/* ── TICKER ───────────────────────────────────────────────────────── */}
     <div className="bg-[#06000f] px-4 md:px-6 py-2.5 overflow-hidden border-b border-white/5">
      <div className="max-w-[1140px] mx-auto flex items-center gap-4">
        
        {/* Fixed "LIVE" Badge */}
        <div className="relative z-10 flex items-center bg-[#06000f] pr-2">
          <span className="bg-[#6d28d9] text-white text-[10px] font-bold px-2.5 py-1 rounded-md font-mono tracking-tighter animate-pulse shadow-[0_0_15px_rgba(109,40,217,0.4)]">
            LIVE
          </span>
        </div>

        {/* Scrolling Container */}
        <div className="relative flex overflow-hidden group">
          {/* We duplicate the list to ensure the loop is seamless. 
            'animate-marquee' is a custom animation (see CSS below).
          */}
          <div className="flex gap-12 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
            {[
              "CBSE Class 11 Annual Exam 2027 — Start strong from Day 1 📚",
              "New PCM batch for Class 11 starting April 10 — Limited seats 🎓",
              "Aarav Mehta — AIR 847 JEE Advanced 2026 — GovPrep Class 11 student 🏆",
              "Free NCERT Solutions Class 11 — All chapters available 📄",
              "JEE Foundation Workshop — Apr 12 — Register Free 🧪",
            ].map((text, i) => (
              <span 
                key={i} 
                className="flex items-center gap-2 text-xs md:text-sm text-white/70 hover:text-white transition-colors cursor-default"
              >
                <FaBell size={12} className="text-purple-400/60" />
                {text}
              </span>
            ))}
          </div>
          
          {/* Optional: Fade effect on the edges to make the text appear/disappear smoothly */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#06000f] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#06000f] to-transparent z-10" />
        </div>
      </div>
    </div>

    <Class11Dashboard/>
     

      {/* ── FOOTER CTA ───────────────────────────────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(135deg, #06000f, #0d0a2e)",
          padding: "80px 24px", textAlign: "center",
          position: "relative", overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage:
              "linear-gradient(rgba(130,100,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(130,100,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          style={{
            position: "absolute", bottom: 32, left: 48,
            color: "rgba(130,100,255,0.06)", fontFamily: "monospace",
            fontSize: 12, lineHeight: 2, pointerEvents: "none", textAlign: "left",
          }}
        >
          <div>while exam_score &lt; 95:</div>
          <div>&nbsp;&nbsp;watch_lecture()</div>
          <div>&nbsp;&nbsp;attempt_mock_test()</div>
          <div>&nbsp;&nbsp;solve_jee_problems()</div>
          <div>&nbsp;&nbsp;clear_doubts()</div>
        </div>

        <div style={{ position: "relative", padding: "16px 0" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🚀</div>
          <h2
            style={{
              fontFamily: "'Crimson Pro', Georgia, serif",
              fontSize: "clamp(1.8rem,3vw,2.5rem)",
              color: "white", marginBottom: 12,
            }}
          >
            Your Class 11 & JEE / NEET Journey Starts{" "}
            <em style={{ color: "#a07fff" }}>Today</em>
          </h2>
          <p
            style={{
              fontSize: 15, color: "rgba(255,255,255,0.55)",
              marginBottom: 32, fontFamily: "sans-serif",
            }}
          >
            Join 1,50,000+ Class 11 students building their foundation for top scores and competitive exams with GovPrep India.
          </p>
          <div
            style={{
              display: "flex", flexWrap: "wrap",
              justifyContent: "center", gap: 16,
            }}
          >
            <button
              style={{
                background: "#6d28d9", color: "white",
                padding: "12px 32px", borderRadius: 10,
                fontSize: 15, fontWeight: 700, border: "none",
                cursor: "pointer", fontFamily: "'Crimson Pro', serif",
              }}
            >
              Start Free Trial
            </button>
            <button
              style={{
                background: "rgba(255,255,255,0.07)", color: "white",
                padding: "12px 32px", borderRadius: 10, fontSize: 15,
                fontWeight: 600,
                border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer",
              }}
            >
              Download Free Class 11 Study Plan PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}