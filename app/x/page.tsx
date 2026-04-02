"use client"
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Subject {
  name: string;
  icon: string;
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
  icon: string;
  label: string;
  desc: string;
  color: string;
}

interface Feature {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

interface ExamDate {
  event: string;
  date: string;
}

type SubjectTab = "Mathematics" | "Science" | "Social Science" | "English" | "Hindi";

// ─── Data ────────────────────────────────────────────────────────────────────

const SUBJECTS: Subject[] = [
  { name: "Mathematics", icon: "🧮", color: "#1a237e", chapters: 15, videos: 145, tests: 55, topics: ["Real Numbers", "Polynomials", "Quadratic Equations", "Arithmetic Progressions", "Triangles", "Probability"], tag: "Board Important" },
  { name: "Science", icon: "⚗️", color: "#880e4f", chapters: 16, videos: 160, tests: 60, topics: ["Chemical Reactions", "Acids, Bases & Salts", "Light — Reflection", "Electricity", "Life Processes", "Heredity"], tag: "Most Marks" },
  { name: "Social Science", icon: "🌍", color: "#1b5e20", chapters: 22, videos: 120, tests: 48, topics: ["Nationalism in India", "Resources & Dev.", "Power Sharing", "Development", "Manufacturing Industries", "Democracy"] },
  { name: "English", icon: "📖", color: "#bf360c", chapters: 12, videos: 96, tests: 40, topics: ["First Flight Prose", "Footprints Stories", "Grammar", "Writing Skills", "Literature Analysis", "Unseen Passages"] },
  { name: "Hindi", icon: "✏️", color: "#006064", chapters: 18, videos: 105, tests: 42, topics: ["Kshitij-2", "Kritika-2", "Sparsh-2", "Sanchayan-2", "Vyakaran", "Lekhan"] },
];

const SUBJECT_TABS: SubjectTab[] = ["Mathematics", "Science", "Social Science", "English", "Hindi"];

const CHAPTERS: Record<SubjectTab, ChapterRow[]> = {
  Mathematics: [
    { no: 1, title: "Real Numbers", subject: "Maths", color: "#1a237e", lessons: 7, quiz: true, notes: true, free: true },
    { no: 2, title: "Polynomials", subject: "Maths", color: "#1a237e", lessons: 6, quiz: true, notes: true, free: true },
    { no: 3, title: "Pair of Linear Equations in Two Variables", subject: "Maths", color: "#1a237e", lessons: 9, quiz: true, notes: true, free: false },
    { no: 4, title: "Quadratic Equations", subject: "Maths", color: "#1a237e", lessons: 8, quiz: true, notes: true, free: false },
    { no: 5, title: "Arithmetic Progressions", subject: "Maths", color: "#1a237e", lessons: 7, quiz: true, notes: true, free: false },
    { no: 6, title: "Triangles", subject: "Maths", color: "#1a237e", lessons: 9, quiz: true, notes: true, free: false },
    { no: 7, title: "Coordinate Geometry", subject: "Maths", color: "#1a237e", lessons: 6, quiz: true, notes: true, free: false },
    { no: 8, title: "Introduction to Trigonometry", subject: "Maths", color: "#1a237e", lessons: 8, quiz: true, notes: true, free: false },
  ],
  Science: [
    { no: 1, title: "Chemical Reactions and Equations", subject: "Chemistry", color: "#880e4f", lessons: 8, quiz: true, notes: true, free: true },
    { no: 2, title: "Acids, Bases and Salts", subject: "Chemistry", color: "#880e4f", lessons: 9, quiz: true, notes: true, free: true },
    { no: 3, title: "Metals and Non-metals", subject: "Chemistry", color: "#880e4f", lessons: 8, quiz: true, notes: true, free: false },
    { no: 4, title: "Carbon and Its Compounds", subject: "Chemistry", color: "#880e4f", lessons: 9, quiz: true, notes: true, free: false },
    { no: 5, title: "Life Processes", subject: "Biology", color: "#880e4f", lessons: 10, quiz: true, notes: true, free: false },
    { no: 6, title: "Control and Coordination", subject: "Biology", color: "#880e4f", lessons: 8, quiz: true, notes: true, free: false },
    { no: 7, title: "Light — Reflection and Refraction", subject: "Physics", color: "#880e4f", lessons: 10, quiz: true, notes: true, free: false },
    { no: 8, title: "Electricity", subject: "Physics", color: "#880e4f", lessons: 9, quiz: true, notes: true, free: false },
  ],
  "Social Science": [
    { no: 1, title: "The Rise of Nationalism in Europe", subject: "History", color: "#1b5e20", lessons: 6, quiz: true, notes: true, free: true },
    { no: 2, title: "Nationalism in India", subject: "History", color: "#1b5e20", lessons: 8, quiz: true, notes: true, free: false },
    { no: 3, title: "Resources and Development", subject: "Geography", color: "#1b5e20", lessons: 6, quiz: true, notes: true, free: true },
    { no: 4, title: "Water Resources", subject: "Geography", color: "#1b5e20", lessons: 5, quiz: true, notes: true, free: false },
    { no: 5, title: "Power Sharing", subject: "Civics", color: "#1b5e20", lessons: 5, quiz: true, notes: true, free: false },
    { no: 6, title: "Development", subject: "Economics", color: "#1b5e20", lessons: 6, quiz: true, notes: true, free: false },
    { no: 7, title: "The Age of Industrialisation", subject: "History", color: "#1b5e20", lessons: 7, quiz: true, notes: true, free: false },
    { no: 8, title: "Agriculture", subject: "Geography", color: "#1b5e20", lessons: 6, quiz: true, notes: true, free: false },
  ],
  English: [
    { no: 1, title: "A Letter to God (First Flight)", subject: "Literature", color: "#bf360c", lessons: 4, quiz: true, notes: true, free: true },
    { no: 2, title: "Nelson Mandela — Long Walk (First Flight)", subject: "Literature", color: "#bf360c", lessons: 4, quiz: true, notes: true, free: true },
    { no: 3, title: "A Triumph of Surgery (Footprints)", subject: "Literature", color: "#bf360c", lessons: 3, quiz: true, notes: true, free: false },
    { no: 4, title: "Grammar — Reported Speech & Clauses", subject: "Grammar", color: "#bf360c", lessons: 8, quiz: true, notes: true, free: false },
    { no: 5, title: "Writing — Formal Letter & Article", subject: "Writing", color: "#bf360c", lessons: 6, quiz: true, notes: true, free: false },
    { no: 6, title: "Unseen Passage & Comprehension", subject: "Reading", color: "#bf360c", lessons: 6, quiz: true, notes: true, free: false },
  ],
  Hindi: [
    { no: 1, title: "सूरदास के पद (Kshitij-2)", subject: "Literature", color: "#006064", lessons: 4, quiz: true, notes: true, free: true },
    { no: 2, title: "राम-लक्ष्मण-परशुराम संवाद (Kshitij-2)", subject: "Literature", color: "#006064", lessons: 5, quiz: true, notes: true, free: true },
    { no: 3, title: "माता का आँचल (Kritika-2)", subject: "Prose", color: "#006064", lessons: 3, quiz: true, notes: true, free: false },
    { no: 4, title: "व्याकरण — रचना व अर्थ के आधार पर वाक्य", subject: "Grammar", color: "#006064", lessons: 7, quiz: true, notes: true, free: false },
    { no: 5, title: "लेखन — निबंध, पत्र, विज्ञापन", subject: "Writing", color: "#006064", lessons: 6, quiz: true, notes: true, free: false },
    { no: 6, title: "तताँरा-वामीरो कथा (Sparsh-2)", subject: "Literature", color: "#006064", lessons: 4, quiz: true, notes: true, free: false },
  ],
};

const TOPPERS: Topper[] = [
  { name: "Kavya Nair", school: "Kendriya Vidyalaya, Kochi", score: "99/100", tag: "Maths Topper", quote: "The Trigonometry and Quadratic Equations videos were phenomenal. The step-by-step approach for board-style answers made all the difference. I scored full marks in Section C — something I never thought possible." },
  { name: "Rohan Verma", school: "DPS, Noida", score: "97/100", tag: "Science Star", quote: "The chapter on Electricity and Light (Reflection/Refraction) had the best diagram walkthroughs I've seen anywhere. The mock board tests exactly matched the real paper pattern. I walked into the exam with full confidence." },
  { name: "Tanisha Reddy", school: "St. Ann's High School, Hyderabad", score: "98/100", tag: "SST Ace", quote: "Nationalism in India and Development were my weak chapters. The structured notes with timelines, maps and flowcharts transformed how I approached SST. The previous year paper analysis was incredibly accurate." },
];

const RESOURCES: Resource[] = [
  { icon: "📄", label: "NCERT Solutions Class 10", desc: "All subjects, all chapters", color: "#1a237e" },
  { icon: "📋", label: "Board Sample Papers 2025–26", desc: "Latest CBSE pattern, with answers", color: "#880e4f" },
  { icon: "📊", label: "Previous Year Papers", desc: "2018–2025 Board papers + solutions", color: "#1b5e20" },
  { icon: "📚", label: "Revision Notes PDF", desc: "Chapter-wise quick revision notes", color: "#bf360c" },
];

const FEATURES: Feature[] = [
  { icon: "🎬", title: "HD Video Lectures", desc: "2,400+ concept videos by expert teachers covering all NCERT chapters for board exam", color: "#1a237e" },
  { icon: "📋", title: "Chapter-wise Tests", desc: "250+ practice tests with instant evaluation, performance analytics and weak-area identification", color: "#880e4f" },
  { icon: "📄", title: "NCERT Solutions", desc: "Board-style step-by-step solutions to every exercise, including value-based questions", color: "#1b5e20" },
  { icon: "🎧", title: "Doubt Solving", desc: "Ask doubts anytime — subject experts respond within 2 hours, live sessions before boards", color: "#bf360c" },
  { icon: "📈", title: "Progress Tracker", desc: "Visual dashboards tracking chapter completion, test scores, and board readiness index", color: "#006064" },
  { icon: "🏆", title: "Mock Board Series", desc: "Full-syllabus mocks modeled exactly on CBSE Class 10 Board Exam pattern — with OMR practice", color: "#4a148c" },
];

const FAQS: Faq[] = [
  { q: "Is this course aligned with the latest CBSE Class 10 Board Exam syllabus?", a: "Yes, all content is fully aligned with the CBSE Class 10 curriculum for 2025–26 Board exams. We cover the reduced/rationalized syllabus as per the latest NCERT updates. Any changes by the Board are reflected within 48 hours. The course covers Mathematics, Science, Social Science, English and Hindi." },
  { q: "How are the mock board tests structured?", a: "Our mock board tests follow the exact CBSE Class 10 Board paper pattern — 1-mark, 2-mark, 3-mark and 5-mark questions, internal choices, and case-based MCQs. Each mock includes detailed solution PDFs with CBSE marking scheme. You can also practice with OMR sheets to simulate the real exam environment." },
  { q: "Does the course include case-based and competency-based questions?", a: "Yes. CBSE has significantly increased the weight of case-based, source-based and competency questions since 2023. Our question banks and chapter tests are specifically designed to build this skill. For Science and Social Science especially, we have dedicated modules for graph-reading, map-based and data-interpretation questions." },
  { q: "How are doubt-solving sessions structured?", a: "Students can submit text or photo doubts through the app. Subject experts respond within 2 hours on weekdays and within 4 hours on weekends. We also conduct weekly live doubt-clearing sessions for high-priority chapters before board exams, with special crash sessions in February–March." },
  { q: "Are previous year board papers included?", a: "Yes. The course includes official CBSE Board papers from 2018 to 2025 across all regions — Delhi, Outside Delhi, Compartment — all with detailed solutions and marking scheme explanations. We also include subject-wise analysis of most-repeated topics so you can prioritize your preparation smartly." },
];

const EXAM_DATES: ExamDate[] = [
  { event: "Unit Test 1", date: "Apr 15, 2026" },
  { event: "Mid-Term Exam", date: "Sep 18, 2026" },
  { event: "Pre-Board 1", date: "Dec 10, 2026" },
  { event: "Pre-Board 2", date: "Jan 20, 2027" },
  { event: "CBSE Board Exam", date: "Feb–Mar 2027" },
];

const NAV_LINKS = ["Overview", "Subjects", "Chapters", "Features", "Results", "FAQs"];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Class10Page() {
  const [activeSubject, setActiveSubject] = useState<SubjectTab>("Mathematics");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeSubjectData = SUBJECTS.find((s) => s.name === activeSubject)!;
  const activeChapters = CHAPTERS[activeSubject];

  return (
    <div className="font-serif bg-[#F5F3EE] min-h-screen mt-8 text-gray-900">

   

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0a0a1a] overflow-hidden">
        {/* Ambient effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6478ff]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#ff5064]/8 rounded-full blur-[100px]" />
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(100,120,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(100,120,255,0.04) 1px,transparent 1px)", backgroundSize: "52px 52px" }} />
        </div>

        {/* Watermark — hidden on mobile */}
        <div className="absolute top-14 right-[440px] pointer-events-none hidden xl:block font-mono text-[11px] leading-loose text-[#7890ff]/7">
          <div>Ch 1 — Real Numbers | Polynomials — Ch 2</div>
          <div>Science: Chemical Reactions · Acids · Electricity · Life Processes</div>
          <div>SST: Nationalism in India · Power Sharing · Development</div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Left copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#6478ff]/12 border border-[#6478ff]/40 rounded-full px-3.5 py-1.5 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#7b8fff] animate-pulse" />
                <span className="text-[11px] sm:text-[12px] text-[#a0aaff] font-bold tracking-wider font-mono">CBSE Class 10 Board Exam — Session 2025–26</span>
              </div>

              <h1 className="text-[clamp(1.9rem,5vw,3rem)] text-white mb-4 leading-[1.18] font-bold tracking-tight">
                Class 10 Board Prep —<br />
                <span className="text-[#7b8fff]">Score 95+ in CBSE Boards</span>
              </h1>

              <p className="text-[15px] sm:text-[16px] text-white/60 leading-relaxed mb-8 max-w-[500px] font-sans">
                Maths · Science · Social Science · English · Hindi — complete board preparation with{" "}
                <span className="bg-[#6478ff]/15 text-[#a0aaff] px-2 py-0.5 rounded font-mono text-sm">HD videos</span>,{" "}
                <span className="bg-[#6478ff]/15 text-[#a0aaff] px-2 py-0.5 rounded font-mono text-sm">mock boards</span>, and NCERT solutions. Trusted by{" "}
                <strong className="text-white">1,80,000+ Class 10 students</strong> across India.
              </p>

              <div className="flex flex-wrap gap-3">
                <button className="bg-[#4f5bd5] text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl text-[14px] sm:text-[15px] font-bold hover:bg-[#3d4abf] transition-colors font-sans">
                  Start Learning Free →
                </button>
                <button className="bg-white/7 text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl text-[14px] sm:text-[15px] font-semibold border border-white/20 hover:bg-white/10 transition-colors font-sans">
                  ▶ Watch Demo Lecture
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-10 pt-8 border-t border-white/10">
                {[["2,400+", "Video Lectures"], ["73", "Chapters Covered"], ["250+", "Practice Tests"], ["4.9★", "Student Rating"]].map(([v, l]) => (
                  <div key={l}>
                    <div className="text-[20px] sm:text-[22px] font-bold text-[#7b8fff] font-mono">{v}</div>
                    <div className="text-[11px] sm:text-[12px] text-white/40 mt-0.5 font-sans">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lead form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              {/* Code snippet header */}
              <div className="bg-[#0a0a1a] rounded-lg px-4 py-3 mb-5 border-l-[3px] border-[#4f5bd5]">
                <div className="text-[11px] font-mono leading-loose">
                  <span className="text-gray-500"># Class 10 Board Planner</span><br />
                  <span className="text-[#a0aaff]">student</span> = <span className="text-[#7b8fff]">Class10</span>.<span className="text-green-400">enroll</span>(<span className="text-yellow-200">board="CBSE"</span>)<br />
                  <span className="text-[#a0aaff]">student</span>.ace_boards()
                </div>
              </div>

              {([["Student's Full Name", "text", "Aryan Kapoor"], ["Parent's Mobile", "tel", "+91 9876543210"], ["Email", "email", "aryan@email.com"]] as [string, string, string][]).map(([label, type, ph]) => (
                <div key={label} className="mb-4">
                  <label className="text-[12px] font-semibold text-gray-500 block mb-1 font-sans">{label}</label>
                  <input type={type} placeholder={ph} className="w-full px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-[14px] outline-none text-gray-700 focus:border-[#4f5bd5] transition-colors font-sans" />
                </div>
              ))}

              <div className="mb-4">
                <label className="text-[12px] font-semibold text-gray-500 block mb-1 font-sans">Board</label>
                <select className="w-full px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-[14px] text-gray-700 bg-white outline-none font-sans">
                  <option>CBSE</option><option>ICSE</option><option>State Board</option>
                </select>
              </div>

              <div className="mb-5">
                <label className="text-[12px] font-semibold text-gray-500 block mb-1 font-sans">Weakest Subject</label>
                <select className="w-full px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-[14px] text-gray-700 bg-white outline-none font-sans">
                  {SUBJECT_TABS.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              <button className="w-full bg-[#1a237e] text-white py-3.5 rounded-xl text-[15px] font-bold hover:bg-[#111863] transition-colors font-mono">
                Get Free Board Study Plan →
              </button>
              <p className="text-center text-[11px] text-gray-400 mt-2.5 font-sans">Free · Includes Board Pattern Notes PDF · Expert callback in 2 hrs</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────────────────────── */}
      <div className="bg-[#0a0a1a] py-2.5 px-4 overflow-hidden border-b border-white/5">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <span className="bg-[#4f5bd5] text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded font-mono whitespace-nowrap flex-shrink-0">LIVE</span>
          <div className="flex gap-6 sm:gap-10 overflow-x-auto">
            {["📚 CBSE Class 10 Board Exam 2027 — Start your preparation today", "🎓 New batch for Class 10 Maths starting April 8", "🏆 Rohan Mehta — 100/100 in Maths, Delhi Board 2025", "📄 Free NCERT Solutions Class 10 — All chapters uploaded", "🏅 Scholarship test for Class 10 — Apr 5"].map((t, i) => (
              <span key={i} className="text-[12px] sm:text-[13px] text-white/70 whitespace-nowrap font-sans">🔔 {t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* EXAM DATES */}
        <section className="pt-8 sm:pt-10">
          <div className="bg-white rounded-2xl border border-[#e4d9c8] px-5 sm:px-8 py-5 sm:py-6">
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#1a237e] uppercase mb-4 font-sans">📅 Important Exam Dates 2026–27</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {EXAM_DATES.map((d, i) => (
                <div key={i} className="text-center bg-[#f9f7f4] rounded-xl p-3">
                  <div className="text-[12px] sm:text-[13px] font-bold text-[#4f5bd5] font-mono mb-1">{d.date}</div>
                  <div className="text-[11px] sm:text-[12px] text-gray-500 leading-snug font-sans">{d.event}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUBJECT CARDS */}
        <section className="pt-12 sm:pt-14">
          <div className="text-center mb-10">
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] text-[#4f5bd5] uppercase mb-2.5 font-sans">All Subjects</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] text-gray-900 mb-3 tracking-tight font-bold">Class 10 — Subject-wise Board Courses</h2>
            <p className="text-gray-500 text-[14px] sm:text-[15px] max-w-[480px] mx-auto leading-relaxed font-sans">Every subject broken into chapters, with board-pattern videos, notes, and tests — all NCERT-aligned.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
            {SUBJECTS.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border-2 hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-lg"
                style={{ borderColor: activeSubject === s.name ? s.color : "#e4d9c8" }}
                onClick={() => setActiveSubject(s.name as SubjectTab)}
              >
                <div className="px-5 pt-5 pb-4" style={{ background: s.color }}>
                  {s.tag && (
                    <span className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full inline-block mb-2.5 font-sans">{s.tag}</span>
                  )}
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-2xl mb-3">{s.icon}</div>
                  <h3 className="text-[15px] font-bold text-white leading-snug">{s.name}</h3>
                </div>
                <div className="px-5 pt-4 pb-5">
                  <div className="grid grid-cols-3 gap-1.5 mb-4">
                    {[[s.chapters, "Chapters"], [s.videos, "Videos"], [s.tests, "Tests"]].map(([val, lbl], j) => (
                      <div key={j} className="text-center bg-[#f9f7f4] rounded-lg py-2">
                        <div className="text-[15px] font-bold font-mono" style={{ color: s.color }}>{val}</div>
                        <div className="text-[10px] text-gray-400 font-sans">{lbl}</div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full text-white py-2.5 rounded-lg text-[12px] font-bold cursor-pointer font-sans" style={{ background: s.color }}>
                    Explore →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CHAPTER LIST */}
        <section className="pt-12 sm:pt-14 pb-2">
          <div className="text-center mb-10">
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] text-[#4f5bd5] uppercase mb-2.5 font-sans">Chapter Index</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] text-gray-900 tracking-tight font-bold">NCERT Class 10 — Chapter-wise Board Content</h2>
          </div>

          <div className="bg-white rounded-2xl border border-[#e4d9c8] overflow-hidden shadow-sm">
            {/* Subject tabs — scrollable on mobile */}
            <div className="flex border-b border-[#e4d9c8] overflow-x-auto">
              {SUBJECT_TABS.map((t) => {
                const subj = SUBJECTS.find((s) => s.name === t)!;
                return (
                  <button
                    key={t}
                    onClick={() => setActiveSubject(t)}
                    className="flex-shrink-0 sm:flex-1 px-4 py-3.5 text-[12px] sm:text-[13px] font-semibold cursor-pointer border-none whitespace-nowrap min-w-[110px] transition-colors font-sans"
                    style={{ background: activeSubject === t ? subj.color : "white", color: activeSubject === t ? "white" : "#555" }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            {/* Desktop table header */}
            <div className="hidden md:grid md:grid-cols-[40px_1fr_100px_80px_56px_56px_80px] px-5 py-2.5 bg-[#f9f7f4] border-b border-[#e4d9c8]">
              {["#", "Chapter", "Tag", "Lessons", "Quiz", "Notes", "Access"].map((h, i) => (
                <div key={h} className={`text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans ${i > 2 ? "text-center" : ""}`}>{h}</div>
              ))}
            </div>

            {/* Chapter rows */}
            <div>
              {activeChapters.map((ch, i) => (
                <div key={i} className="border-b border-[#f5f0e8] hover:bg-[#faf8f5] transition-colors cursor-pointer">
                  {/* Desktop row */}
                  <div className="hidden md:grid md:grid-cols-[40px_1fr_100px_80px_56px_56px_80px] px-5 py-3.5 items-center">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[12px] font-bold text-white font-mono flex-shrink-0" style={{ background: ch.color }}>{ch.no}</div>
                    <div className="text-[13px] font-semibold text-gray-800 pr-4 leading-snug font-sans">{ch.title}</div>
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded font-mono" style={{ color: ch.color, background: ch.color + "18" }}>{ch.subject}</span>
                    </div>
                    <div className="text-center text-[12px] text-gray-500 font-mono">{ch.lessons}</div>
                    <div className="text-center">{ch.quiz ? <span className="text-[#4f5bd5] text-sm font-bold">✓</span> : <span className="text-gray-200">—</span>}</div>
                    <div className="text-center">{ch.notes ? <span className="text-green-700 text-sm font-bold">✓</span> : <span className="text-gray-200">—</span>}</div>
                    <div className="text-center">
                      {ch.free
                        ? <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full font-mono">🔓 Free</span>
                        : <span className="text-[10px] font-bold text-[#1a237e] bg-blue-50 px-2 py-0.5 rounded-full font-mono">🔒 Pro</span>}
                    </div>
                  </div>

                  {/* Mobile row */}
                  <div className="md:hidden px-4 py-3.5 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold text-white font-mono flex-shrink-0 mt-0.5" style={{ background: ch.color }}>{ch.no}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-semibold text-gray-800 leading-snug font-sans mb-1">{ch.title}</div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded font-mono" style={{ color: ch.color, background: ch.color + "18" }}>{ch.subject}</span>
                        <span className="text-[11px] text-gray-400 font-sans">{ch.lessons} lessons</span>
                        {ch.free
                          ? <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full font-mono">🔓 Free</span>
                          : <span className="text-[10px] font-bold text-[#1a237e] bg-blue-50 px-2 py-0.5 rounded-full font-mono">🔒 Pro</span>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Table footer */}
            <div className="px-5 py-4 bg-[#f9f7f4] border-t border-[#e4d9c8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-[12px] text-gray-400 font-sans">
                Showing {activeChapters.length} of {activeSubjectData.chapters} chapters ·{" "}
                <span className="text-green-700 font-bold">{activeChapters.filter(c => c.free).length} free</span> chapters available
              </p>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a237e] text-white text-[12px] font-bold font-mono">
                View All Chapters →
              </button>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="pt-12 sm:pt-14">
          <div className="text-center mb-10">
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] text-[#4f5bd5] uppercase mb-2.5 font-sans">What's Included</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] text-gray-900 tracking-tight font-bold">Everything You Need to Score 95+ in Boards</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {FEATURES.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e4d9c8] shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-pointer">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ background: f.color + "18" }}>{f.icon}</div>
                <h4 className="text-[16px] sm:text-[17px] font-bold text-gray-900 mb-2">{f.title}</h4>
                <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed font-sans">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FREE RESOURCES */}
        <section className="pt-12 sm:pt-14">
          <div className="bg-[#0a0a1a] rounded-2xl sm:rounded-3xl px-5 sm:px-10 py-10 sm:py-12 border border-[#6478ff]/15 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-[#4f5bd5]/12 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#ff5064]/8 blur-2xl pointer-events-none" />

            {/* Formula watermark */}
            <div className="absolute bottom-6 right-8 pointer-events-none hidden lg:block font-mono text-[11px] leading-loose text-[#6478ff]/5">
              <div>Trigonometry — sin²θ + cos²θ = 1</div>
              <div>Arithmetic Progressions — nth term, Sum</div>
              <div>Probability — Favourable / Total Outcomes</div>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
              <div>
                <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] text-[#7b8fff] uppercase mb-2.5 font-sans">100% Free Resources</p>
                <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] text-white mb-3.5 tracking-tight font-bold">Free Study Material for Class 10 Boards</h2>
                <p className="text-white/55 text-[14px] sm:text-[15px] leading-relaxed max-w-sm font-sans">Download NCERT Solutions, board sample papers and revision notes — no login required. Includes previous year papers with CBSE marking schemes.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
                {RESOURCES.map((r, i) => (
                  <div key={i} className="bg-white/6 rounded-2xl px-4 py-4 sm:py-5 border border-white/10 flex flex-col gap-2.5 cursor-pointer hover:-translate-y-1 transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: r.color + "30" }}>{r.icon}</div>
                    <div>
                      <div className="text-[13px] font-semibold text-white mb-0.5 font-sans">{r.label}</div>
                      <div className="text-[11px] sm:text-[12px] text-white/50 font-sans">{r.desc}</div>
                    </div>
                    <div className="text-[12px] font-semibold mt-0.5 font-sans" style={{ color: r.color }}>⬇ Free Download</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TOPPERS */}
        {/* <section className="pt-12 sm:pt-14">
          <div className="text-center mb-10">
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] text-[#4f5bd5] uppercase mb-2.5 font-sans">Student Success Stories</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] text-gray-900 tracking-tight font-bold">Class 10 Board Toppers from GovPrep</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {TOPPERS.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e4d9c8] shadow-sm">
                <div className="text-4xl text-[#4f5bd5] leading-none mb-4 font-mono">"</div>
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mb-5 font-sans">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#1a237e] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">{t.name[0]}</div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-[13px] sm:text-[14px] text-gray-900 truncate font-sans">{t.name}</div>
                    <div className="text-[11px] sm:text-[12px] text-gray-500 truncate font-sans">{t.school}</div>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-end gap-1">
                    <span className="text-[12px] font-bold text-[#4f5bd5] font-mono">{t.score}</span>
                    <span className="text-[10px] font-bold text-[#1a237e] bg-blue-50 px-2 py-0.5 rounded-full font-sans whitespace-nowrap">{t.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* FAQs */}
        <section className="pt-12 sm:pt-14 pb-16 sm:pb-20">
          <div className="text-center mb-10">
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] text-[#4f5bd5] uppercase mb-2.5 font-sans">Got Questions?</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] text-gray-900 tracking-tight font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-[740px] mx-auto space-y-2.5">
            {FAQS.map((f, i) => (
              <div
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="bg-white rounded-xl border border-[#e4d9c8] overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between px-5 sm:px-6 py-4">
                  <span className="text-[13px] sm:text-[14px] font-semibold text-gray-900 pr-4 leading-snug font-sans">{f.q}</span>
                  <span className={`flex-shrink-0 text-gray-400 text-sm transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}>▾</span>
                </div>
                {openFaq === i && (
                  <div className="px-5 sm:px-6 pt-1 pb-5 text-[13px] sm:text-[14px] text-gray-600 leading-relaxed border-t border-gray-100 font-sans">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── FOOTER CTA ───────────────────────────────────────────────────── */}
      <footer className="relative bg-[#0a0a1a] px-4 sm:px-6 py-16 sm:py-20 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(100,120,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(100,120,255,0.04) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px] bg-[#4f5bd5]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Code decoration */}
        <div className="absolute bottom-10 left-6 sm:left-12 text-left pointer-events-none hidden sm:block">
          <div className="font-mono text-[11px] leading-loose text-[#6478ff]/8">
            <div>while board_score &lt; 95:</div>
            <div>&nbsp;&nbsp;watch_lecture()</div>
            <div>&nbsp;&nbsp;attempt_mock_board()</div>
            <div>&nbsp;&nbsp;clear_doubts()</div>
          </div>
        </div>

        <div className="relative">
          <div className="text-3xl mb-3">🎓</div>
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] text-white mb-3 tracking-tight font-bold">
            Your Class 10 Board Success Story Starts{" "}
            <em className="text-[#7b8fff] not-italic">Today</em>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-white/50 mb-8 font-sans">
            Join 1,80,000+ Class 10 students who are acing their board exams with GovPrep India.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button className="bg-[#4f5bd5] text-white px-7 sm:px-8 py-3 rounded-xl text-[14px] sm:text-[15px] font-bold hover:bg-[#3d4abf] transition-colors font-sans">
              Start Free Trial
            </button>
            <button className="bg-white/7 text-white px-7 sm:px-8 py-3 rounded-xl text-[14px] sm:text-[15px] font-semibold border border-white/20 hover:bg-white/10 transition-colors font-sans">
              Download Free Board Study Plan PDF
            </button>
          </div>

          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <span>🎓</span>
              <span className="font-bold text-white text-sm font-sans">GovPrep India</span>
              <span className="text-[10px] font-bold bg-[#4f5bd5]/30 text-[#a0aaff] px-2 py-0.5 rounded font-mono ml-1">CLASS 10</span>
            </div>
            <p className="text-[12px] text-white/30 font-sans">© 2026 GovPrep India. All rights reserved.</p>
            <div className="flex gap-5">
              {["Privacy", "Terms", "Contact"].map(l => (
                <a key={l} href="#" className="text-[12px] text-white/40 hover:text-white transition-colors font-sans">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}