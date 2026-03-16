"use client"
import { useState } from "react";
import {
  FaChevronDown, FaStar, FaCheckCircle, FaBell,
  FaArrowRight, FaBook, FaFlask, FaCalculator,
  FaGlobe, FaAtom, FaLeaf, FaLandmark, FaPlay,
  FaDownload, FaFileAlt, FaClipboardList, FaTrophy,
  FaUserGraduate, FaChartBar, FaLock, FaUnlock,
  FaPencilAlt, FaVideo, FaHeadphones
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

type SubjectTab = "Mathematics" | "Science" | "Social Science" | "English" | "Hindi";

// ─── Data ────────────────────────────────────────────────────────────────────

const SUBJECTS: Subject[] = [
  {
    name: "Mathematics",
    icon: FaCalculator,
    color: "#0f3460",
    chapters: 15,
    videos: 120,
    tests: 45,
    topics: ["Number Systems", "Polynomials", "Coordinate Geometry", "Linear Equations", "Triangles", "Statistics"],
    tag: "High Scoring",
  },
  {
    name: "Science",
    icon: FaFlask,
    color: "#7b1a1a",
    chapters: 15,
    videos: 140,
    tests: 50,
    topics: ["Matter in Our Surroundings", "Atoms & Molecules", "Motion", "Force & Laws", "Tissues", "Cell"],
    tag: "Most Asked",
  },
  {
    name: "Social Science",
    icon: FaGlobe,
    color: "#14532d",
    chapters: 21,
    videos: 110,
    tests: 42,
    topics: ["French Revolution", "India Size & Location", "Democracy", "Poverty", "Forest & Wildlife", "Electoral Politics"],
  },
  {
    name: "English",
    icon: FaBook,
    color: "#78350f",
    chapters: 11,
    videos: 88,
    tests: 35,
    topics: ["Beehive Prose", "Moments Stories", "Grammar", "Writing Skills", "Literature", "Unseen Passages"],
  },
  {
    name: "Hindi",
    icon: FaPencilAlt,
    color: "#1e3a5f",
    chapters: 17,
    videos: 95,
    tests: 38,
    topics: ["Kshitij", "Kritika", "Sparsh", "Sanchayan", "Vyakaran", "Lekhan"],
  },
];

const SUBJECT_TABS: SubjectTab[] = ["Mathematics", "Science", "Social Science", "English", "Hindi"];

const CHAPTERS: Record<SubjectTab, ChapterRow[]> = {
  "Mathematics": [
    { no: 1, title: "Number Systems", subject: "Maths", color: "#0f3460", lessons: 8, quiz: true, notes: true, free: true },
    { no: 2, title: "Polynomials", subject: "Maths", color: "#0f3460", lessons: 7, quiz: true, notes: true, free: true },
    { no: 3, title: "Coordinate Geometry", subject: "Maths", color: "#0f3460", lessons: 5, quiz: true, notes: true, free: false },
    { no: 4, title: "Linear Equations in Two Variables", subject: "Maths", color: "#0f3460", lessons: 8, quiz: true, notes: true, free: false },
    { no: 5, title: "Introduction to Euclid's Geometry", subject: "Maths", color: "#0f3460", lessons: 4, quiz: true, notes: true, free: false },
    { no: 6, title: "Lines and Angles", subject: "Maths", color: "#0f3460", lessons: 6, quiz: true, notes: true, free: false },
    { no: 7, title: "Triangles", subject: "Maths", color: "#0f3460", lessons: 9, quiz: true, notes: true, free: false },
    { no: 8, title: "Quadrilaterals", subject: "Maths", color: "#0f3460", lessons: 7, quiz: true, notes: true, free: false },
  ],
  "Science": [
    { no: 1, title: "Matter in Our Surroundings", subject: "Science", color: "#7b1a1a", lessons: 7, quiz: true, notes: true, free: true },
    { no: 2, title: "Is Matter Around Us Pure?", subject: "Science", color: "#7b1a1a", lessons: 8, quiz: true, notes: true, free: true },
    { no: 3, title: "Atoms and Molecules", subject: "Science", color: "#7b1a1a", lessons: 9, quiz: true, notes: true, free: false },
    { no: 4, title: "Structure of the Atom", subject: "Science", color: "#7b1a1a", lessons: 7, quiz: true, notes: true, free: false },
    { no: 5, title: "The Fundamental Unit of Life", subject: "Science", color: "#7b1a1a", lessons: 6, quiz: true, notes: true, free: false },
    { no: 6, title: "Tissues", subject: "Science", color: "#7b1a1a", lessons: 8, quiz: true, notes: true, free: false },
    { no: 7, title: "Motion", subject: "Science", color: "#7b1a1a", lessons: 10, quiz: true, notes: true, free: false },
    { no: 8, title: "Force and Laws of Motion", subject: "Science", color: "#7b1a1a", lessons: 8, quiz: true, notes: true, free: false },
  ],
  "Social Science": [
    { no: 1, title: "The French Revolution", subject: "History", color: "#14532d", lessons: 6, quiz: true, notes: true, free: true },
    { no: 2, title: "Socialism in Europe & Russian Revolution", subject: "History", color: "#14532d", lessons: 7, quiz: true, notes: true, free: false },
    { no: 3, title: "India — Size and Location", subject: "Geography", color: "#14532d", lessons: 5, quiz: true, notes: true, free: true },
    { no: 4, title: "Physical Features of India", subject: "Geography", color: "#14532d", lessons: 6, quiz: true, notes: true, free: false },
    { no: 5, title: "What is Democracy? Why Democracy?", subject: "Civics", color: "#14532d", lessons: 5, quiz: true, notes: true, free: false },
    { no: 6, title: "The Story of Village Palampur", subject: "Economics", color: "#14532d", lessons: 5, quiz: true, notes: true, free: false },
    { no: 7, title: "Forest Society and Colonialism", subject: "History", color: "#14532d", lessons: 6, quiz: true, notes: true, free: false },
    { no: 8, title: "Drainage", subject: "Geography", color: "#14532d", lessons: 7, quiz: true, notes: true, free: false },
  ],
  "English": [
    { no: 1, title: "The Fun They Had (Beehive)", subject: "Literature", color: "#78350f", lessons: 4, quiz: true, notes: true, free: true },
    { no: 2, title: "The Sound of Music (Beehive)", subject: "Literature", color: "#78350f", lessons: 4, quiz: true, notes: true, free: true },
    { no: 3, title: "The Lost Child (Moments)", subject: "Literature", color: "#78350f", lessons: 3, quiz: true, notes: true, free: false },
    { no: 4, title: "Grammar — Tenses & Voice", subject: "Grammar", color: "#78350f", lessons: 8, quiz: true, notes: true, free: false },
    { no: 5, title: "Writing — Letter & Notice", subject: "Writing", color: "#78350f", lessons: 5, quiz: true, notes: true, free: false },
    { no: 6, title: "Unseen Passage Practice", subject: "Reading", color: "#78350f", lessons: 6, quiz: true, notes: true, free: false },
  ],
  "Hindi": [
    { no: 1, title: "दो बैलों की कथा (Kshitij)", subject: "Literature", color: "#1e3a5f", lessons: 4, quiz: true, notes: true, free: true },
    { no: 2, title: "ल्हासा की ओर (Kshitij)", subject: "Literature", color: "#1e3a5f", lessons: 4, quiz: true, notes: true, free: true },
    { no: 3, title: "उपवन (Sparsh)", subject: "Poetry", color: "#1e3a5f", lessons: 3, quiz: true, notes: true, free: false },
    { no: 4, title: "व्याकरण — संज्ञा, सर्वनाम", subject: "Grammar", color: "#1e3a5f", lessons: 7, quiz: true, notes: true, free: false },
    { no: 5, title: "लेखन — अनुच्छेद व पत्र", subject: "Writing", color: "#1e3a5f", lessons: 5, quiz: true, notes: true, free: false },
    { no: 6, title: "माटी वाली (Kritika)", subject: "Literature", color: "#1e3a5f", lessons: 4, quiz: true, notes: true, free: false },
  ],
};

const TOPPERS: Topper[] = [
  {
    name: "Priya Sharma",
    school: "DAV Public School, Delhi",
    score: "98/100",
    tag: "Maths Topper",
    quote: "The chapter-wise video explanations for Triangles and Circles were incredibly clear. I used to fear Geometry but now it's my strongest chapter. Got full marks in the unit test!",
  },
  {
    name: "Arjun Mehta",
    school: "Kendriya Vidyalaya, Pune",
    score: "96/100",
    tag: "Science Star",
    quote: "The animated diagrams for Atoms & Molecules and Motion chapters made everything click. The practice tests after every chapter helped me identify weak spots before the exam.",
  },
  {
    name: "Simran Kaur",
    school: "DPS, Chandigarh",
    score: "97/100",
    tag: "SST Ace",
    quote: "Social Science felt overwhelming with History, Geography, Civics and Economics together. The structured notes and timeline diagrams for the French Revolution chapter were a game changer.",
  },
];

const RESOURCES: Resource[] = [
  { icon: FaFileAlt, label: "NCERT Solutions Class 9", desc: "All subjects, all chapters", color: "#0f3460" },
  { icon: FaClipboardList, label: "Sample Papers 2025–26", desc: "Board pattern, with answers", color: "#7b1a1a" },
  { icon: FaChartBar, label: "Previous Year Papers", desc: "2018–2025 with solutions", color: "#14532d" },
  { icon: FaBook, label: "Revision Notes PDF", desc: "Chapter-wise quick notes", color: "#78350f" },
];

const FEATURES: Feature[] = [
  { icon: FaVideo, title: "HD Video Lectures", desc: "2000+ concept videos by expert teachers, chapter-wise and topic-wise", color: "#0f3460" },
  { icon: FaClipboardList, title: "Chapter-wise Tests", desc: "200+ practice tests with instant evaluation and performance analytics", color: "#7b1a1a" },
  { icon: FaFileAlt, title: "NCERT Solutions", desc: "Step-by-step solutions to every exercise question across all subjects", color: "#14532d" },
  { icon: FaHeadphones, title: "Doubt Solving", desc: "Ask doubts anytime — answered by subject experts within 2 hours", color: "#78350f" },
  { icon: FaChartBar, title: "Progress Tracker", desc: "Visual dashboards showing chapter completion, test scores and weak areas", color: "#1e3a5f" },
  { icon: FaTrophy, title: "Mock Exam Series", desc: "Full-syllabus mocks modeled on school and board exam patterns", color: "#166534" },
];

const FAQS: Faq[] = [
  {
    q: "Is this course aligned with the latest CBSE Class 9 syllabus?",
    a: "Yes, all content is fully aligned with the CBSE Class 9 curriculum for 2025–26. Whenever NCERT updates chapters or the board revises the syllabus, we update our videos, notes and tests within 48 hours. The course covers Mathematics, Science, Social Science, English and Hindi.",
  },
  {
    q: "Can I access recorded lectures if I miss a live class?",
    a: "Absolutely. Every live class is recorded and available on-demand within 2 hours of the session. You can watch it as many times as you want. Most students re-watch key concept videos before exams for quick revision.",
  },
  {
    q: "Does the course cover all four parts of Social Science?",
    a: "Yes. The Social Science course is divided into four clear modules: History (India and the Contemporary World), Geography (Contemporary India), Democratic Politics (Civics), and Economics. Each module has separate chapter videos, notes and tests.",
  },
  {
    q: "How are doubt-solving sessions structured?",
    a: "Students can submit text or photo doubts through the app. Subject experts respond within 2 hours on weekdays and within 4 hours on weekends. We also conduct weekly live doubt-clearing sessions for high-priority chapters before exams.",
  },
  {
    q: "Are sample papers and previous year papers included?",
    a: "Yes. The course includes official CBSE sample papers for 2025–26, school-level sample papers, and previous year question papers from 2018 to 2025 — all with detailed solutions and marking scheme explanations.",
  },
];

const EXAM_DATES: ExamDate[] = [
  { event: "Unit Test 1", date: "Apr 12, 2026" },
  { event: "Half Yearly Exam", date: "Sep 15, 2026" },
  { event: "Pre-Board Mock", date: "Jan 10, 2027" },
  { event: "Annual Exam", date: "Mar 5, 2027" },
  { event: "Result Declaration", date: "May 2027" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Class9Page() {
  const [activeSubject, setActiveSubject] = useState<SubjectTab>("Mathematics");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSubjectCard, setActiveSubjectCard] = useState<string | null>(null);

  const activeSubjectData = SUBJECTS.find((s) => s.name === activeSubject)!;
  const activeChapters = CHAPTERS[activeSubject];

  return (
    <div
      style={{
        fontFamily: "'Crimson Pro', Georgia, serif",
        background: "#F5F3EE",
        minHeight: "100vh",
        color: "#111",
      }}
    >
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(160deg, #06112a 0%, #0f2044 50%, #091830 100%)",
          padding: "72px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ambient glow */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage:
              "radial-gradient(circle at 70% 20%, rgba(255,153,0,0.12) 0%, transparent 45%), radial-gradient(circle at 10% 80%, rgba(19,136,8,0.08) 0%, transparent 45%)",
            pointerEvents: "none",
          }}
        />
        {/* dot grid */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,153,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,153,0,0.03) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            pointerEvents: "none",
          }}
        />
        {/* NCERT watermark */}
        <div
          style={{
            position: "absolute", top: 52, right: 440,
            color: "rgba(255,153,0,0.07)",
            fontFamily: "'Crimson Pro', Georgia, serif",
            fontSize: 12, lineHeight: 2, pointerEvents: "none",
          }}
        >
          <div>Ch 1 — Number Systems | Polynomials — Ch 2</div>
          <div>Science: Matter · Atoms · Motion · Tissues</div>
          <div>SST: French Revolution · Indian Geography · Democracy</div>
        </div>

        <div
          style={{
            maxWidth: 1140, margin: "0 auto",
            display: "grid", gridTemplateColumns: "1fr 380px",
            gap: 48, alignItems: "center", position: "relative",
          }}
        >
          {/* LEFT */}
          <div>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,153,0,0.12)",
                border: "1px solid rgba(255,153,0,0.4)",
                borderRadius: 20, padding: "5px 14px", marginBottom: 22,
              }}
            >
              <span
                style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#ff9900", display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: 12, color: "#ffb84d",
                  fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.06em",
                }}
              >
                CBSE Class 9 — Session 2025–26
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Crimson Pro', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "white", marginBottom: 16,
                lineHeight: 1.2, fontWeight: 700, letterSpacing: "-0.02em",
              }}
            >
              Class 9 Complete Prep —<br />
              <span style={{ color: "#ff9900" }}>Score 95+ in Every Subject</span>
            </h1>

            <p
              style={{
                fontSize: 16, color: "rgba(255,255,255,0.65)",
                lineHeight: 1.75, marginBottom: 32, maxWidth: 500,
              }}
            >
              Maths · Science · Social Science · English · Hindi — all five subjects
              covered with{" "}
              <span
                style={{
                  background: "rgba(255,153,0,0.15)", color: "#ffb84d",
                  padding: "2px 8px", borderRadius: 4,
                  fontFamily: "monospace", fontSize: 14,
                }}
              >
                HD videos
              </span>
              ,{" "}
              <span
                style={{
                  background: "rgba(255,153,0,0.15)", color: "#ffb84d",
                  padding: "2px 8px", borderRadius: 4,
                  fontFamily: "monospace", fontSize: 14,
                }}
              >
                NCERT solutions
              </span>
              , and chapter tests. Trusted by{" "}
              <strong style={{ color: "white" }}>1,40,000+ Class 9 students</strong> across India.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                style={{
                  background: "#d97706", color: "white",
                  padding: "13px 28px", borderRadius: 10,
                  fontSize: 15, fontWeight: 700, border: "none",
                  cursor: "pointer", fontFamily: "inherit",
                }}
              >
                Start Learning Free →
              </button>
              <button
                style={{
                  background: "rgba(255,255,255,0.07)", color: "white",
                  padding: "13px 28px", borderRadius: 10, fontSize: 15,
                  fontWeight: 600,
                  border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer",
                }}
              >
                ▶ Watch Demo Lecture
              </button>
            </div>

            {/* stats */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 36, marginTop: 40 }}>
              {[
                ["2,000+", "Video Lectures"],
                ["553", "Chapters Covered"],
                ["210+", "Practice Tests"],
                ["4.9★", "Student Rating"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#ff9900", fontFamily: "monospace" }}>{v}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 3, fontFamily: "sans-serif" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Form */}
          <div
            style={{
              background: "white", borderRadius: 20, padding: 32,
              boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
            }}
          >
            <div
              style={{
                background: "#06112a", borderRadius: 8, padding: "12px 16px",
                marginBottom: 20, fontFamily: "monospace", fontSize: 12,
                color: "#ffb84d", lineHeight: 1.9,
                borderLeft: "3px solid #d97706",
              }}
            >
              <span style={{ color: "#666" }}># Class 9 Study Planner</span><br />
              <span style={{ color: "#ffb84d" }}>student</span> = <span style={{ color: "#ff9900" }}>Class9</span>.<span style={{ color: "#86efac" }}>enroll</span>(<span style={{ color: "#fde68a" }}>board="CBSE"</span>)<br />
              <span style={{ color: "#ffb84d" }}>student</span>.get_free_notes()
            </div>

            {([
              ["Student's Full Name", "text", "Riya Gupta"],
              ["Parent's Mobile", "tel", "+91 9876543210"],
              ["Email", "email", "riya@email.com"],
            ] as [string, string, string][]).map(([label, type, ph]) => (
              <div key={label} style={{ marginBottom: 16 }}>
                <label
                  style={{
                    fontSize: 12, fontWeight: 600, color: "#555",
                    display: "block", marginBottom: 5, fontFamily: "sans-serif",
                  }}
                >
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={ph}
                  style={{
                    width: "100%", padding: "11px 14px", borderRadius: 8,
                    border: "1.5px solid #e0e2ea", fontSize: 14,
                    outline: "none", color: "#333",
                    boxSizing: "border-box", fontFamily: "sans-serif",
                  }}
                />
              </div>
            ))}

            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  fontSize: 12, fontWeight: 600, color: "#555",
                  display: "block", marginBottom: 5, fontFamily: "sans-serif",
                }}
              >
                Board
              </label>
              <select
                style={{
                  width: "100%", padding: "11px 14px", borderRadius: 8,
                  border: "1.5px solid #e0e2ea", fontSize: 14,
                  color: "#333", background: "white", fontFamily: "sans-serif",
                }}
              >
                <option>CBSE</option>
                <option>ICSE</option>
                <option>State Board</option>
              </select>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label
                style={{
                  fontSize: 12, fontWeight: 600, color: "#555",
                  display: "block", marginBottom: 5, fontFamily: "sans-serif",
                }}
              >
                Weakest Subject
              </label>
              <select
                style={{
                  width: "100%", padding: "11px 14px", borderRadius: 8,
                  border: "1.5px solid #e0e2ea", fontSize: 14,
                  color: "#333", background: "white", fontFamily: "sans-serif",
                }}
              >
                <option>Mathematics</option>
                <option>Science</option>
                <option>Social Science</option>
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>

            <button
              style={{
                width: "100%", background: "#0f3460", color: "white",
                padding: 14, borderRadius: 10, fontSize: 15,
                fontWeight: 700, border: "none", cursor: "pointer",
                fontFamily: "monospace",
              }}
            >
              Get Free Study Plan →
            </button>
            <p
              style={{
                textAlign: "center", fontSize: 11,
                color: "#bbb", marginTop: 12, fontFamily: "sans-serif",
              }}
            >
              Free · Includes NCERT Notes PDF · Expert callback in 2 hrs
            </p>
          </div>
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────────────────────── */}
      <div style={{ background: "#06112a", padding: "10px 24px", overflow: "hidden" }}>
        <div
          style={{
            maxWidth: 1140, margin: "0 auto",
            display: "flex", alignItems: "center", gap: 16,
          }}
        >
          <span
            style={{
              background: "#d97706", color: "white", fontSize: 11,
              fontWeight: 700, padding: "3px 10px", borderRadius: 4,
              whiteSpace: "nowrap", fontFamily: "monospace",
            }}
          >
            LIVE
          </span>
          <div style={{ display: "flex", gap: 36, overflow: "hidden" }}>
            {[
              "CBSE Class 9 Annual Exam 2027 — Preparation starts NOW 📚",
              "New batch for Class 9 Maths starting April 5 — Limited seats 🎓",
              "Ananya Kapoor — 99/100 in Maths, DAV Delhi — GovPrep student 🏆",
              "Free NCERT Solutions Class 9 — All chapters uploaded 📄",
              "Scholarship test for Class 9 — Mar 30 — Win up to 100% fee waiver 🏅",
            ].map((t, i) => (
              <span key={i} style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", whiteSpace: "nowrap" }}>
                <FaBell size={11} style={{ marginRight: 5, verticalAlign: "middle", opacity: 0.6 }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>

        {/* ── EXAM DATES ───────────────────────────────────────────────── */}
        <section style={{ padding: "40px 0 0" }}>
          <div
            style={{
              background: "white", borderRadius: 20,
              border: "1px solid #e4d9c8", padding: "24px 32px",
            }}
          >
            <p
              style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
                color: "#0f3460", textTransform: "uppercase",
                marginBottom: 20, fontFamily: "sans-serif",
              }}
            >
              📅 Important Exam Dates 2026–27
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
              {EXAM_DATES.map((d, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: 13, fontWeight: 700, color: "#d97706",
                      fontFamily: "monospace", marginBottom: 4,
                    }}
                  >
                    {d.date}
                  </div>
                  <div style={{ fontSize: 12, color: "#666", lineHeight: 1.4, fontFamily: "sans-serif" }}>{d.event}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SUBJECT CARDS ─────────────────────────────────────────────── */}
        <section style={{ padding: "48px 0 0" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p
              style={{
                fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
                color: "#d97706", textTransform: "uppercase",
                marginBottom: 10, fontFamily: "sans-serif",
              }}
            >
              All Subjects
            </p>
            <h2
              style={{
                fontFamily: "'Crimson Pro', Georgia, serif",
                fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#111",
                marginBottom: 14, letterSpacing: "-0.02em",
              }}
            >
              Class 9 — Subject-wise Courses
            </h2>
            <p
              style={{
                color: "#777", fontSize: 15, maxWidth: 520,
                margin: "0 auto", lineHeight: 1.65, fontFamily: "sans-serif",
              }}
            >
              Every subject broken into chapters, with videos, notes, and tests — all NCERT-aligned.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: 20 }}>
            {SUBJECTS.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "white", borderRadius: 18, overflow: "hidden",
                  border: `2px solid ${activeSubjectCard === s.name ? s.color : "#e4d9c8"}`,
                  transition: "transform 0.2s, border-color 0.2s",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setActiveSubjectCard(s.name);
                  setActiveSubject(s.name as SubjectTab);
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {/* header */}
                <div style={{ padding: "22px 20px 18px", background: s.color }}>
                  {s.tag && (
                    <span
                      style={{
                        background: "rgba(255,255,255,0.18)", color: "white",
                        fontSize: 10, fontWeight: 700, padding: "3px 9px",
                        borderRadius: 20, display: "inline-block",
                        marginBottom: 10, fontFamily: "sans-serif",
                      }}
                    >
                      {s.tag}
                    </span>
                  )}
                  <div
                    style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: "rgba(255,255,255,0.15)",
                      display: "flex", alignItems: "center",
                      justifyContent: "center", marginBottom: 12,
                    }}
                  >
                    <s.icon size={22} color="white" />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Crimson Pro', Georgia, serif",
                      fontSize: 16, fontWeight: 700, color: "white", lineHeight: 1.2,
                    }}
                  >
                    {s.name}
                  </h3>
                </div>

                <div style={{ padding: "16px 20px 20px" }}>
                  {/* counts */}
                  <div
                    style={{
                      display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                      gap: 8, marginBottom: 16,
                    }}
                  >
                    {[
                      [s.chapters, "Chapters"],
                      [s.videos, "Videos"],
                      [s.tests, "Tests"],
                    ].map(([val, lbl], j) => (
                      <div
                        key={j}
                        style={{
                          textAlign: "center", background: "#f9f7f4",
                          borderRadius: 8, padding: "8px 4px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 16, fontWeight: 700,
                            color: s.color, fontFamily: "monospace",
                          }}
                        >
                          {val}
                        </div>
                        <div
                          style={{
                            fontSize: 10, color: "#999",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {lbl}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    style={{
                      width: "100%", color: "white",
                      padding: "9px", borderRadius: 8, fontSize: 12,
                      fontWeight: 700, border: "none", cursor: "pointer",
                      background: s.color, fontFamily: "sans-serif",
                    }}
                  >
                    Explore Chapters →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CHAPTER LIST ─────────────────────────────────────────────── */}
        <section style={{ padding: "48px 0" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p
              style={{
                fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
                color: "#d97706", textTransform: "uppercase",
                marginBottom: 10, fontFamily: "sans-serif",
              }}
            >
              Chapter Index
            </p>
            <h2
              style={{
                fontFamily: "'Crimson Pro', Georgia, serif",
                fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "#111",
              }}
            >
              NCERT Class 9 — Chapter-wise Content
            </h2>
          </div>

          <div
            style={{
              background: "white", borderRadius: 20,
              border: "1px solid #e4d9c8", overflow: "hidden",
            }}
          >
            {/* tabs */}
            <div
              style={{
                display: "flex", borderBottom: "1px solid #e4d9c8",
                overflowX: "auto",
              }}
            >
              {SUBJECT_TABS.map((t) => {
                const subj = SUBJECTS.find((s) => s.name === t)!;
                return (
                  <button
                    key={t}
                    onClick={() => setActiveSubject(t)}
                    style={{
                      flex: 1, padding: "14px 12px",
                      fontSize: 13, fontWeight: 600,
                      cursor: "pointer", border: "none",
                      whiteSpace: "nowrap", minWidth: 120,
                      background: activeSubject === t ? subj.color : "white",
                      color: activeSubject === t ? "white" : "#555",
                      fontFamily: activeSubject === t ? "monospace" : "sans-serif",
                      transition: "all 0.2s",
                    }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            {/* chapter rows */}
            <div>
              {/* header row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr 100px 80px 70px 70px 80px",
                  padding: "10px 24px",
                  background: "#f9f7f4",
                  borderBottom: "1px solid #e4d9c8",
                }}
              >
                {["#", "Chapter", "Subject Tag", "Lessons", "Quiz", "Notes", "Access"].map((h, i) => (
                  <div
                    key={h}
                    style={{
                      fontSize: 10, fontWeight: 700, color: "#aaa",
                      textTransform: "uppercase", letterSpacing: "0.08em",
                      fontFamily: "sans-serif",
                      textAlign: i > 2 ? "center" : "left",
                    }}
                  >
                    {h}
                  </div>
                ))}
              </div>

              {activeChapters.map((ch, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr 100px 80px 70px 70px 80px",
                    padding: "14px 24px",
                    borderBottom: "1px solid #f5f0e8",
                    alignItems: "center",
                    transition: "background 0.15s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#faf8f5")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <div
                    style={{
                      width: 28, height: 28, borderRadius: 8,
                      background: ch.color, color: "white",
                      display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: 12,
                      fontWeight: 700, fontFamily: "monospace",
                    }}
                  >
                    {ch.no}
                  </div>
                  <div
                    style={{
                      fontSize: 14, fontWeight: 600,
                      color: "#111", fontFamily: "sans-serif",
                      paddingRight: 16, lineHeight: 1.3,
                    }}
                  >
                    {ch.title}
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: 10, fontWeight: 700,
                        color: ch.color, background: ch.color + "18",
                        padding: "2px 8px", borderRadius: 4,
                        fontFamily: "monospace",
                      }}
                    >
                      {ch.subject}
                    </span>
                  </div>
                  <div style={{ textAlign: "center", fontSize: 13, fontFamily: "monospace", color: "#555" }}>
                    {ch.lessons} lessons
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {ch.quiz
                      ? <FaCheckCircle size={14} color="#d97706" />
                      : <span style={{ fontSize: 12, color: "#ddd" }}>—</span>}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {ch.notes
                      ? <FaCheckCircle size={14} color="#14532d" />
                      : <span style={{ fontSize: 12, color: "#ddd" }}>—</span>}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {ch.free ? (
                      <span
                        style={{
                          display: "inline-flex", alignItems: "center",
                          gap: 4, fontSize: 11, fontWeight: 700,
                          color: "#14532d", background: "#dcfce7",
                          padding: "3px 8px", borderRadius: 20,
                          fontFamily: "monospace",
                        }}
                      >
                        <FaUnlock size={9} /> Free
                      </span>
                    ) : (
                      <span
                        style={{
                          display: "inline-flex", alignItems: "center",
                          gap: 4, fontSize: 11, fontWeight: 700,
                          color: "#0f3460", background: "#eff6ff",
                          padding: "3px 8px", borderRadius: 20,
                          fontFamily: "monospace",
                        }}
                      >
                        <FaLock size={9} /> Pro
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* footer */}
            <div
              style={{
                padding: "16px 24px",
                background: "#f9f7f4",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid #e4d9c8",
              }}
            >
              <p style={{ fontSize: 12, color: "#888", fontFamily: "sans-serif" }}>
                Showing {activeChapters.length} of {activeSubjectData.chapters} chapters •{" "}
                <span style={{ color: "#14532d", fontWeight: 700 }}>
                  {activeChapters.filter((c) => c.free).length} free
                </span>{" "}
                chapters available
              </p>
              <button
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "8px 16px", borderRadius: 8,
                  background: "#0f3460", color: "white",
                  fontSize: 12, fontWeight: 700, border: "none",
                  cursor: "pointer", fontFamily: "monospace",
                }}
              >
                View All Chapters <FaArrowRight size={10} />
              </button>
            </div>
          </div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────────────────── */}
        <section style={{ paddingBottom: 48 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p
              style={{
                fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
                color: "#d97706", textTransform: "uppercase",
                marginBottom: 10, fontFamily: "sans-serif",
              }}
            >
              What's Included
            </p>
            <h2
              style={{
                fontFamily: "'Crimson Pro', Georgia, serif",
                fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "#111",
              }}
            >
              Everything You Need to Score 95+
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {FEATURES.map((f, i) => (
              <div
                key={i}
                style={{
                  background: "white", borderRadius: 18,
                  padding: "28px 24px", border: "1px solid #e4d9c8",
                  transition: "transform 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div
                  style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: f.color + "18",
                    display: "flex", alignItems: "center",
                    justifyContent: "center", marginBottom: 16,
                  }}
                >
                  <f.icon size={22} color={f.color} />
                </div>
                <h4
                  style={{
                    fontFamily: "'Crimson Pro', Georgia, serif",
                    fontSize: 17, fontWeight: 700, color: "#111",
                    marginBottom: 8,
                  }}
                >
                  {f.title}
                </h4>
                <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.65, fontFamily: "sans-serif" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FREE RESOURCES ────────────────────────────────────────────── */}
        <section style={{ paddingBottom: 48 }}>
          <div
            style={{
              background: "linear-gradient(135deg, #06112a, #0f2044)",
              borderRadius: 24, padding: "48px 40px",
              border: "1px solid rgba(255,153,0,0.15)",
              position: "relative", overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute", top: -40, right: -40,
                width: 250, height: 250, borderRadius: "50%",
                background: "rgba(217,119,6,0.12)",
              }}
            />
            <div
              style={{
                position: "absolute", bottom: 24, right: 40,
                color: "rgba(255,153,0,0.05)",
                fontFamily: "monospace", fontSize: 11,
                lineHeight: 2, pointerEvents: "none",
              }}
            >
              <div>Polynomials — Remainder Theorem, Factor Theorem</div>
              <div>Heron's Formula — Area of Triangle</div>
              <div>Statistics — Mean, Median, Mode</div>
            </div>

            <div
              style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: 48, alignItems: "center", position: "relative",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
                    color: "#ff9900", textTransform: "uppercase",
                    marginBottom: 10, fontFamily: "sans-serif",
                  }}
                >
                  100% Free Resources
                </p>
                <h2
                  style={{
                    fontFamily: "'Crimson Pro', Georgia, serif",
                    fontSize: "clamp(1.6rem,2.5vw,2rem)",
                    color: "white", marginBottom: 14,
                  }}
                >
                  Free Study Material for Class 9
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.6)", fontSize: 15,
                    lineHeight: 1.75, fontFamily: "sans-serif",
                  }}
                >
                  Download NCERT Solutions, sample papers and revision notes — no login required. Start with free chapters before enrolling in the full course.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {RESOURCES.map((r, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,0.06)", borderRadius: 16,
                      padding: "18px 16px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex", flexDirection: "column", gap: 10,
                      cursor: "pointer", transition: "transform 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                  >
                    <div
                      style={{
                        width: 42, height: 42, borderRadius: 10,
                        display: "flex", alignItems: "center",
                        justifyContent: "center", background: r.color + "30",
                      }}
                    >
                      <r.icon size={18} color={r.color} />
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "white", marginBottom: 3 }}>{r.label}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontFamily: "sans-serif" }}>{r.desc}</div>
                    </div>
                    <div
                      style={{
                        display: "flex", alignItems: "center",
                        gap: 4, fontSize: 12, fontWeight: 600,
                        color: r.color, marginTop: 2,
                      }}
                    >
                      <FaDownload size={10} /> Free Download
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TOPPERS ───────────────────────────────────────────────────── */}
        <section style={{ paddingBottom: 48 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p
              style={{
                fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
                color: "#d97706", textTransform: "uppercase",
                marginBottom: 10, fontFamily: "sans-serif",
              }}
            >
              Student Success Stories
            </p>
            <h2
              style={{
                fontFamily: "'Crimson Pro', Georgia, serif",
                fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "#111",
              }}
            >
              Class 9 Toppers from GovPrep
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {TOPPERS.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "white", borderRadius: 18,
                  padding: 28, border: "1px solid #e4d9c8",
                }}
              >
                <div
                  style={{
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between", marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      fontSize: 38, color: "#d97706",
                      lineHeight: 1,
                      fontFamily: "'Crimson Pro', serif",
                    }}
                  >
                    &ldquo;
                  </div>
                  <span
                    style={{
                      background: "#fef3c7", color: "#92400e",
                      fontSize: 11, fontWeight: 700, padding: "4px 10px",
                      borderRadius: 20, fontFamily: "monospace",
                    }}
                  >
                    {t.tag}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 14, color: "#555", lineHeight: 1.75,
                    marginBottom: 20, fontFamily: "sans-serif",
                  }}
                >
                  {t.quote}
                </p>
                <div
                  style={{
                    display: "flex", alignItems: "center", gap: 12,
                    paddingTop: 16, borderTop: "1px solid #f5f0e8",
                  }}
                >
                  <div
                    style={{
                      width: 44, height: 44, borderRadius: "50%",
                      background: "#0f3460", color: "white",
                      display: "flex", alignItems: "center",
                      justifyContent: "center", fontWeight: 700,
                      fontSize: 16, fontFamily: "serif",
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700, fontSize: 14, color: "#111",
                        fontFamily: "'Crimson Pro', serif",
                      }}
                    >
                      {t.name}
                    </div>
                    <div style={{ fontSize: 12, color: "#888", fontFamily: "sans-serif" }}>
                      {t.school}
                    </div>
                  </div>
                  <span
                    style={{
                      marginLeft: "auto", background: "#eff6ff", color: "#0f3460",
                      fontSize: 12, fontWeight: 700, padding: "4px 10px",
                      borderRadius: 20, fontFamily: "monospace",
                    }}
                  >
                    {t.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────────────────────────────── */}
        <section style={{ paddingBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p
              style={{
                fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
                color: "#d97706", textTransform: "uppercase",
                marginBottom: 10, fontFamily: "sans-serif",
              }}
            >
              Got Questions?
            </p>
            <h2
              style={{
                fontFamily: "'Crimson Pro', Georgia, serif",
                fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "#111",
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            {FAQS.map((f, i) => (
              <div
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  background: "white", borderRadius: 14, marginBottom: 10,
                  border: "1px solid #e4d9c8", overflow: "hidden", cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between", padding: "16px 24px",
                  }}
                >
                  <span
                    style={{
                      fontSize: 14, fontWeight: 600, color: "#111",
                      paddingRight: 20, fontFamily: "sans-serif",
                    }}
                  >
                    {f.q}
                  </span>
                  <FaChevronDown
                    size={16}
                    color="#888"
                    style={{
                      flexShrink: 0,
                      transform: openFaq === i ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                    }}
                  />
                </div>
                {openFaq === i && (
                  <div
                    style={{
                      padding: "16px 24px 20px", fontSize: 14,
                      color: "#666", lineHeight: 1.75,
                      borderTop: "1px solid #f5f0e8", fontFamily: "sans-serif",
                    }}
                  >
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── FOOTER CTA ───────────────────────────────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(135deg, #06112a, #0f2044)",
          padding: "80px 24px", textAlign: "center",
          position: "relative", overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage:
              "linear-gradient(rgba(255,153,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,153,0,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          style={{
            position: "absolute", bottom: 32, left: 48,
            color: "rgba(255,153,0,0.05)", fontFamily: "monospace",
            fontSize: 12, lineHeight: 2, pointerEvents: "none", textAlign: "left",
          }}
        >
          <div>while score &lt; 95:</div>
          <div>&nbsp;&nbsp;watch_lecture()</div>
          <div>&nbsp;&nbsp;practice_test()</div>
          <div>&nbsp;&nbsp;clear_doubts()</div>
        </div>

        <div style={{ position: "relative", padding: "16px 0" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🎓</div>
          <h2
            style={{
              fontFamily: "'Crimson Pro', Georgia, serif",
              fontSize: "clamp(1.8rem,3vw,2.5rem)",
              color: "white", marginBottom: 12,
            }}
          >
            Your Class 9 Success Story Starts{" "}
            <em style={{ color: "#ff9900" }}>Today</em>
          </h2>
          <p
            style={{
              fontSize: 15, color: "rgba(255,255,255,0.55)",
              marginBottom: 32, fontFamily: "sans-serif",
            }}
          >
            Join 1,40,000+ Class 9 students who are acing their exams with GovPrep India.
          </p>
          <div
            style={{
              display: "flex", flexWrap: "wrap",
              justifyContent: "center", gap: 16,
            }}
          >
            <button
              style={{
                background: "#d97706", color: "white",
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
              Download Free Study Plan PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}