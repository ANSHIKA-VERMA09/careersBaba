"use client"
import { useState } from "react";
import {
  FaChevronDown, FaStar, FaCheckCircle, FaBell,
  FaArrowRight, FaFileAlt, FaBook, FaClipboardList,
  FaUniversity, FaChartBar, FaShieldAlt, FaRocket,
  FaNewspaper, FaTrophy, FaUserTie, FaGraduationCap,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface Course {
  title: string;
  tag: string;
  price: string;
  original: string;
  duration: string;
  mode: string;
  students: string;
  color: string;
  features: string[];
}

interface Resource {
  icon: IconType;
  label: string;
  desc: string;
  color: string;
}

interface CurriculumRow {
  label: string;
  value: string;
}

type CurrTab = "Foundation" | "Intensive Mains" | "Interview & Final Push";

interface Mentor {
  name: string;
  role: string;
  specialty: string;
  color: string;
  initials: string;
}

interface Topper {
  name: string;
  role: string;
  batch: string;
  tag: string;
  quote: string;
}

interface Faq {
  q: string;
  a: string;
}

interface StackIcon {
  label: string;
  color: string;
}

interface ExamDate {
  event: string;
  date: string;
}

const COURSES: Course[] = [
  {
    title: "UPSC CSE Complete Prep 2026",
    tag: "Most Popular",
    price: "₹4,999",
    original: "₹12,000",
    duration: "12 months",
    mode: "Live Online",
    students: "89,000+",
    color: "#0f3460",
    features: ["GS Paper I–IV Full Coverage", "CSAT + Essay Mastery", "Daily Mains Answer Writing", "8 Full-Length Mock Tests"],
  },
  {
    title: "SSC CGL & CHSL Crash Course",
    tag: "Fast Track",
    price: "₹2,499",
    original: "₹6,000",
    duration: "3 months",
    mode: "Live + Recorded",
    students: "1,14,000+",
    color: "#7b1a1a",
    features: ["Quant, Reasoning, English", "Tier I & Tier II Strategy", "Topic-wise Speed Tests", "PYQ Deep Dives 2015–2024"],
  },
  {
    title: "Banking — IBPS PO & SBI PO",
    tag: "Trending",
    price: "₹3,499",
    original: "₹8,000",
    duration: "6 months",
    mode: "Live + Mentored",
    students: "72,500+",
    color: "#14532d",
    features: ["Prelims + Mains Coverage", "Banking Awareness (GA)", "Descriptive English Writing", "Interview Guidance"],
  },
  {
    title: "State PSC All-in-One Pack",
    tag: "Best Value",
    price: "₹3,999",
    original: "₹9,500",
    duration: "8 months",
    mode: "Self-Paced",
    students: "43,200+",
    color: "#78350f",
    features: ["UPPSC, BPSC, MPPSC, KPSC", "State-Specific GK Modules", "Regional Language Support", "10 State-Specific Mocks"],
  },
];

const RESOURCES: Resource[] = [
  { icon: FaBook,          label: "NCERT Summary Sheets",   desc: "Class 6–12 condensed notes",    color: "#0f3460" },
  { icon: FaChartBar,      label: "PYQ Analysis 2010–2024", desc: "Topic frequency heatmaps",       color: "#7b1a1a" },
  { icon: FaFileAlt,       label: "Current Affairs Digest", desc: "Monthly 50-page PDF free",       color: "#14532d" },
  { icon: FaClipboardList, label: "Free Mock Test",         desc: "100-question full-length",        color: "#78350f" },
];

const CURRICULUM_DATA: Record<CurrTab, CurriculumRow[]> = {
  "Foundation": [
    { label: "Duration",            value: "Months 1–3" },
    { label: "History & Geography", value: "Ancient, Medieval, Modern India + Indian & World Geography" },
    { label: "Polity & Economy",    value: "Indian Constitution, Governance, Budget & Economic Survey" },
    { label: "Projects",            value: "NCERT Consolidation, Monthly CA Binders, Mind Maps" },
    { label: "Tools",               value: "Testbook App, Drishti IAS Notes, Hindu PDF Archives, ForumIAS" },
    { label: "Assessment",          value: "Weekly 50-Q Test + 250-Word Answer Writing" },
  ],
  "Intensive Mains": [
    { label: "Duration",   value: "Months 4–8" },
    { label: "GS Papers",  value: "GS I (Society, Culture), GS II (Polity, IR), GS III (Economy, Env, Tech)" },
    { label: "Techniques", value: "Answer Structuring, Keyword Insertion, Diagram Usage, Ethics Case Studies" },
    { label: "Projects",   value: "15 Full Mains Answers/Week, Essay Peer Review, Optional Subject Kickoff" },
    { label: "Tools",      value: "Insights IAS Answer Copy, Vision IAS Material, Shankar IAS Environment" },
    { label: "Assessment", value: "Evaluated Mains Copy + Mentor Feedback in 72 Hours" },
  ],
  "Interview & Final Push": [
    { label: "Duration",   value: "Months 9–12" },
    { label: "Topics",     value: "DAF Analysis, Current Affairs 360°, Personality Development, Stress Mock" },
    { label: "Practice",   value: "10 Mock Interviews by Retired IAS/IPS Officers, Group Discussions" },
    { label: "Projects",   value: "Hometown & Hobbies Deep Dive, Optional Expert Sessions, Revision Sprints" },
    { label: "Tools",      value: "Unacademy Interview Prep, InsightsIAS Secure Initiative, AllIASNews" },
    { label: "Assessment", value: "Board Simulation + Scored Feedback Report" },
  ],
};

const CURR_TABS: CurrTab[] = ["Foundation", "Intensive Mains", "Interview & Final Push"];

const MENTORS: Mentor[] = [
  { name: "Anjali Srivastava", role: "IAS 2019 | AIR 34 | LBSNAA",    specialty: "GS Strategy & Essay Writing", color: "#0f3460", initials: "AS" },
  { name: "Suresh Pandey",     role: "IPS 2017 | Ex-DMPQ Faculty",    specialty: "Mains Answer Writing",        color: "#7b1a1a", initials: "SP" },
  { name: "Kavitha Menon",     role: "SSC CGL AIR 12 | 7 Yrs Faculty", specialty: "Quant, Reasoning & English",  color: "#14532d", initials: "KM" },
  { name: "Rohit Jha",         role: "IBPS PO 2018 | SBI Faculty",     specialty: "Banking Awareness & GA",      color: "#78350f", initials: "RJ" },
];

const TOPPERS: Topper[] = [
  {
    name: "Divya Agarwal",
    role: "IAS Officer — Bihar Cadre",
    batch: "UPSC 2024 Batch",
    tag: "AIR 47",
    quote: "The answer writing program was a complete game-changer. Structured daily feedback from a sitting IAS officer in the mentorship sessions gave me the edge I needed. Cleared in my second attempt.",
  },
  {
    name: "Manish Kumar",
    role: "SSC CGL — Income Tax Inspector",
    batch: "SSC Batch 2024",
    tag: "Tier I: 182/200",
    quote: "The PYQ analysis tool showed me exactly which topics to prioritize. I stopped studying everything and started studying smart. Scored 182 in Tier I — highest in my coaching centre.",
  },
  {
    name: "Asha Pillai",
    role: "IBPS PO — Punjab National Bank",
    batch: "Banking 2024",
    tag: "Final Merit List",
    quote: "Banking awareness was always my weak point. The weekly GA capsules and the mock interview module with ex-bank employees fixed that completely. Got through in 4 months of joining.",
  },
];

const FAQS: Faq[] = [
  {
    q: "Can I prepare for UPSC while working a job?",
    a: "Absolutely. Our self-paced recorded tracks are designed for working professionals. All live sessions are recorded and available on-demand within 2 hours. Most successful candidates in our 2024 batch were working professionals who dedicated 4–5 hours daily. We also provide a dedicated 'Working Professionals' study planner.",
  },
  {
    q: "Which exam should I target — UPSC, SSC, or Banking?",
    a: "It depends on your timeline, academic background, and salary expectations. UPSC has the highest prestige but takes 2–4 years. SSC CGL results come in 8–12 months and offers Group B & C posts. Banking exams are conducted 4–5 times a year with quick results. Book a free counselling session and our advisors will map the right exam to your profile.",
  },
  {
    q: "Do you cover optional subjects for UPSC Mains?",
    a: "Yes. We offer dedicated optional modules for the top 12 optionals including Public Administration, Sociology, Geography, History, Political Science, Anthropology, and PSIR. Optional faculty are subject matter experts with proven track records. The optional module is available as an add-on or bundled with the flagship program.",
  },
  {
    q: "How current is your Current Affairs coverage?",
    a: "We publish a daily 2-page Current Affairs brief every morning by 7AM IST, a weekly 15-page consolidated PDF every Sunday, and a monthly 50-page Current Affairs magazine. All content is exam-mapped — every news item is tagged to the relevant GS paper and topic so you study smarter, not more.",
  },
  {
    q: "What does the mock test series include?",
    a: "Our mock series includes full-length Prelims mocks (100 MCQ × 2 papers), subject-wise sectional tests, mains GS answer writing with evaluated feedback, and mock interview panels with retired UPSC board members and serving IAS/IPS officers. All tests come with detailed solutions, rank analysis, and topic-wise performance reports.",
  },
];

const STACK_ICONS: StackIcon[] = [
  { label: "UPSC CSE",       color: "#0f3460" },
  { label: "SSC CGL",        color: "#7b1a1a" },
  { label: "SSC CHSL",       color: "#7b1a1a" },
  { label: "IBPS PO",        color: "#14532d" },
  { label: "SBI PO",         color: "#14532d" },
  { label: "RBI Grade B",    color: "#1e3a5f" },
  { label: "UPSC CAPF",      color: "#0f3460" },
  { label: "State PSC",      color: "#78350f" },
  { label: "Railways RRB",   color: "#312e81" },
  { label: "EPFO/ESIC",      color: "#374151" },
  { label: "NDA/CDS",        color: "#1e3a5f" },
  { label: "CLAT/Judiciary", color: "#6b2737" },
];

const EXAM_DATES: ExamDate[] = [
  { event: "New UPSC Batch",   date: "Apr 5, 2026"  },
  { event: "Early Bird Ends",  date: "Mar 28, 2026" },
  { event: "Free Demo Class",  date: "Mar 23, 2026" },
  { event: "Scholarship Test", date: "Mar 30, 2026" },
  { event: "UPSC Prelims",     date: "May 25, 2026" },
];

export default function GovJobsPage() {
  const [activeTab, setActiveTab] = useState<CurrTab>("Foundation");
  const [openFaq, setOpenFaq]     = useState<number | null>(null);

  return (
    <div className="font-serif bg-[#F5F3EE] min-h-screen text-[#111]">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-[72px] pb-20 px-6 bg-[linear-gradient(160deg,#06112a_0%,#0f2044_50%,#091830_100%)]">

        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(255,153,0,0.12)_0%,transparent_45%),radial-gradient(circle_at_10%_80%,rgba(19,136,8,0.08)_0%,transparent_45%)]" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,153,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,153,0,0.03) 1px,transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        {/* Constitution watermark */}
        <div className="absolute top-12 right-[420px] pointer-events-none text-[rgba(255,153,0,0.09)] font-serif text-[13px] leading-[1.9] hidden xl:block">
          <div>Article 315 — Public Service Commission</div>
          <div>Article 320 — Functions of PSC</div>
          <div>Article 323A — Admin Tribunals</div>
          <div className="mt-3">Preamble: We, the People of India...</div>
          <div>Schedule VII — Union &amp; State Lists</div>
        </div>

        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-center relative">

          {/* Left column */}
          <div>
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(255,153,0,0.12)] border border-[rgba(255,153,0,0.4)] rounded-full px-3.5 py-[5px] mb-[22px]">
              <span className="w-[7px] h-[7px] rounded-full bg-[#ff9900] inline-block" />
              <span className="text-xs text-[#ffb84d] font-mono font-bold tracking-[0.06em]">
                India&apos;s #1 Government Job Preparation Platform
              </span>
            </div>

            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] text-white mb-4 leading-tight font-bold tracking-tight">
              Crack UPSC, SSC &amp; Banking —<br />
              <span className="text-[#ff9900]">Serve the Nation with Pride</span>
            </h1>

            <p className="text-base text-white/65 leading-relaxed mb-8 max-w-[500px]">
              From{" "}
              <span className="bg-[rgba(255,153,0,0.15)] text-[#ffb84d] px-2 py-0.5 rounded font-mono text-sm">
                Prelims
              </span>{" "}
              to the UPSC Interview — expert-led coaching for civil services, banking, and staff selection exams. Over{" "}
              <strong className="text-white">2,80,000+ students</strong> selected in government services.
            </p>

            <div className="flex gap-3 flex-wrap">
              <button className="bg-[#d97706] text-white px-7 py-[13px] rounded-[10px] text-[15px] font-bold border-none cursor-pointer font-serif">
                Explore Courses →
              </button>
              <button className="bg-white/[0.07] text-white px-7 py-[13px] rounded-[10px] text-[15px] font-semibold border border-white/20 cursor-pointer">
                ▶ Free Demo Class
              </button>
            </div>

            <div className="flex flex-wrap gap-9 mt-10">
              <div>
                <div className="text-[22px] font-bold text-[#ff9900] font-mono">4.9★</div>
                <div className="text-xs text-white/45 mt-[3px] font-sans">Avg Rating</div>
              </div>
            </div>
          </div>

          {/* Lead form */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
            <div className="bg-[#06112a] rounded-lg px-4 py-3 mb-5 font-mono text-xs text-[#ffb84d] leading-[1.9] border-l-[3px] border-[#d97706]">
              <span className="text-[#666]"># Your Government Service Journey</span><br />
              <span className="text-[#ffb84d]">exam</span> = <span className="text-[#ff9900]">UPSC</span>.<span className="text-[#86efac]">CSE</span>(<span className="text-[#fde68a]">year=2026</span>)<br />
              <span className="text-[#ffb84d]">you</span>.get_free_roadmap()
            </div>

            {([
              ["Full Name",      "text", "Rahul Mishra"],
              ["Mobile Number",  "tel",  "+91 9876543210"],
              ["Email",          "email","rahul@email.com"],
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
              <label className="block text-xs font-semibold text-[#555] mb-[5px] font-sans">Target Exam</label>
              <select className="w-full px-[14px] py-[11px] rounded-lg border-[1.5px] border-[#e0e2ea] text-sm text-[#333] bg-white font-sans">
                <option>UPSC Civil Services (IAS/IPS)</option>
                <option>SSC CGL / CHSL</option>
                <option>IBPS PO / SBI PO</option>
                <option>State PSC (UPPSC / BPSC etc.)</option>
                <option>Railway RRB / NDA / CDS</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-xs font-semibold text-[#555] mb-[5px] font-sans">Preparation Stage</label>
              <select className="w-full px-[14px] py-[11px] rounded-lg border-[1.5px] border-[#e0e2ea] text-sm text-[#333] bg-white font-sans">
                <option>Just Starting Out</option>
                <option>6+ Months into Prep</option>
                <option>Appeared Before — Want to Crack This Year</option>
              </select>
            </div>

            <button className="w-full bg-[#0f3460] text-white py-[14px] rounded-[10px] text-[15px] font-bold border-none cursor-pointer font-mono">
              Get My Free Roadmap →
            </button>
            <p className="text-center text-[11px] text-[#bbb] mt-3 font-sans">
              Free · No spam · Expert callback in 2 hrs
            </p>
          </div>
        </div>
      </section>

      {/* ── TICKER ────────────────────────────────────────────────────── */}
      <div className="bg-[#06112a] px-6 py-[10px] overflow-hidden">
        <div className="max-w-[1140px] mx-auto flex items-center gap-4">
          <span className="bg-[#d97706] text-white text-[11px] font-bold px-[10px] py-[3px] rounded font-mono whitespace-nowrap">
            LIVE
          </span>
          <div className="flex gap-9 overflow-hidden">
            {[
              "UPSC Prelims 2026 date announced — May 25 🏛️",
              "Divya Agarwal — AIR 47, IAS Bihar Cadre — Zero to Hero batch 2024",
              "SSC CGL 2025 Notification OUT — 17,727 vacancies",
              "Free Current Affairs class — Every Monday 8PM IST",
            ].map((t, i) => (
              <span key={i} className="text-sm text-white/75 whitespace-nowrap font-sans">
                <FaBell size={11} className="mr-[5px] align-middle opacity-60 inline" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN ──────────────────────────────────────────────────────── */}
      <div className="max-w-[1140px] mx-auto px-6">

        {/* BATCH DATES */}
        <section className="pt-10">
          <div className="bg-white rounded-2xl border border-[#e4d9c8] px-8 py-6">
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#0f3460] uppercase mb-5 font-sans">
              📅 Important Dates &amp; Batches
            </p>
            <div className="grid grid-cols-5 gap-4">
              {EXAM_DATES.map((d, i) => (
                <div key={i} className="text-center">
                  <div className="text-[13px] font-bold text-[#d97706] font-mono mb-1">{d.date}</div>
                  <div className="text-xs text-[#666] leading-snug font-sans">{d.event}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COURSES */}
        <section className="py-12">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.12em] text-[#d97706] uppercase mb-2.5 font-sans">
              Our Programs
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] text-[#111] mb-3.5 tracking-tight">
              Government Job Preparation Courses
            </h2>
            <p className="text-[#777] text-[15px] max-w-[520px] mx-auto leading-relaxed font-sans">
              Choose your track — whether UPSC Civil Services, SSC, Banking, or State PSC — and get expert-led preparation with proven results.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(265px,1fr))] gap-6">
            {COURSES.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-[18px] overflow-hidden border border-[#e4d9c8] cursor-pointer transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="px-6 pt-6 pb-5" style={{ background: c.color }}>
                  <span className="bg-white/[0.18] text-white text-[11px] font-bold px-[10px] py-1 rounded-full inline-block mb-3 font-sans">
                    {c.tag}
                  </span>
                  <h3 className="font-serif text-[17px] font-bold text-white leading-snug">{c.title}</h3>
                  <div className="flex gap-4 mt-3.5">
                    <span className="text-xs text-white/65 font-sans">⏱ {c.duration}</span>
                    <span className="text-xs text-white/65 font-sans">📡 {c.mode}</span>
                  </div>
                </div>

                <div className="px-6 pt-5 pb-6">
                  <ul className="list-none p-0 mb-5">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-[#444] mb-2 font-sans">
                        <FaCheckCircle size={13} color={c.color} /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-end justify-between">
                    <button
                      className="text-white px-[18px] py-[10px] rounded-[10px] text-[13px] font-semibold border-none cursor-pointer font-sans"
                      style={{ background: c.color }}
                    >
                      Enrol Now
                    </button>
                    <div className="text-right">
                      <div className="text-[18px] font-bold font-mono" style={{ color: c.color }}>
                        {c.price}
                      </div>
                      <div className="text-xs text-[#aaa] line-through font-sans">{c.original}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXAMS COVERED */}
        <section className="pb-10">
          <div className="bg-white rounded-2xl border border-[#e4d9c8] px-8 py-7">
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#0f3460] uppercase mb-6 font-sans">
              🏛 Exams We Cover
            </p>
            <div className="flex flex-wrap gap-3">
              {STACK_ICONS.map((s, i) => (
                <span
                  key={i}
                  className="px-3.5 py-[7px] rounded-lg text-xs font-bold font-mono text-white"
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
  <div className="bg-[linear-gradient(135deg,#06112a,#0f2044)] rounded-3xl px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 border border-[rgba(255,153,0,0.15)] relative overflow-hidden">

    {/* Decorative circle */}
    <div className="absolute -top-10 -right-10 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] rounded-full bg-[rgba(217,119,6,0.12)]" />

    {/* Watermark */}
    <div className="absolute bottom-6 right-10 pointer-events-none text-[rgba(255,153,0,0.05)] font-mono text-[11px] leading-loose hidden lg:block">
      <div>Part XIV — Services Under the Union and States</div>
      <div>Article 309 — Recruitment &amp; Conditions of Service</div>
      <div>Article 311 — Dismissal, Removal, Reduction in Rank</div>
    </div>

    {/* Main grid: stacks on mobile, side-by-side on lg+ */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">

      {/* Left: Text content */}
      <div>
        <p className="text-xs font-bold tracking-[0.12em] text-[#ff9900] uppercase mb-2.5 font-sans">
          100% Free
        </p>
        <h2 className="font-serif text-[clamp(1.5rem,4vw,2rem)] text-white mb-3.5">
          Free Study Resources
        </h2>
        <p className="text-white/60 text-sm sm:text-[15px] leading-relaxed font-sans">
          Not sure which exam to target? Start with our free resources — no login required.
          Test your GK, explore exam patterns, and attempt a free mock test before committing
          to any course.
        </p>
      </div>

      {/* Right: Resource cards grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
        {RESOURCES.map((r, i) => (
          <div
            key={i}
            className="bg-white/[0.06] rounded-2xl px-3 py-4 sm:px-4 sm:py-[18px] border border-white/10 flex flex-col gap-2 sm:gap-2.5 cursor-pointer transition-transform duration-300 hover:-translate-y-[3px]"
          >
            <div
              className="w-9 h-9 sm:w-[42px] sm:h-[42px] rounded-[10px] flex items-center justify-center"
              style={{ background: r.color + "30" }}
            >
              <r.icon size={16} color={r.color} className="sm:hidden" />
              <r.icon size={18} color={r.color} className="hidden sm:block" />
            </div>
            <div>
              <div className="text-xs sm:text-[13px] font-semibold text-white mb-[3px] leading-snug">
                {r.label}
              </div>
              <div className="text-[11px] sm:text-xs text-white/50 font-sans leading-snug">
                {r.desc}
              </div>
            </div>
            <div
              className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold mt-0.5"
              style={{ color: r.color }}
            >
              Access Free <FaArrowRight size={10} />
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
            <p className="text-xs font-bold tracking-[0.12em] text-[#d97706] uppercase mb-2.5 font-sans">
              What You&apos;ll Learn
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] text-[#111]">
              UPSC CSE Curriculum Overview
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-[#e4d9c8] overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-[#e4d9c8]">
              {CURR_TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className="flex-1 py-4 text-[13px] font-semibold cursor-pointer border-none whitespace-nowrap transition-all duration-150"
                  style={{
                    background: activeTab === t ? "#0f3460" : "white",
                    color:      activeTab === t ? "white"   : "#555",
                    fontFamily: activeTab === t ? "monospace" : "sans-serif",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Rows */}
            <div className="grid grid-cols-2">
              {CURRICULUM_DATA[activeTab].map((row, i) => (
                <div
                  key={i}
                  className={`flex gap-3 px-7 py-4 border-b border-[#f5f0e8] ${i % 2 === 0 ? "border-r border-[#f5f0e8]" : ""}`}
                >
                  <FaUniversity size={14} color="#d97706" className="mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[11px] font-bold text-[#aaa] uppercase tracking-[0.08em] mb-[3px] font-sans">
                      {row.label}
                    </div>
                    <div className="text-[14px] font-medium text-[#111] font-sans">{row.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MENTORS */}
        <section className="pb-12">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.12em] text-[#d97706] uppercase mb-2.5 font-sans">
              Learn From The Best
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] text-[#111]">
              Expert Instructors &amp; Toppers
            </h2>
          </div>

          {/* <div className="grid grid-cols-4 gap-5">
            {MENTORS.map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-[18px] px-5 py-7 text-center border border-[#e4d9c8] cursor-pointer transition-transform duration-200 hover:-translate-y-1"
              >
                <div
                  className="w-[72px] h-[72px] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-[22px] font-bold font-mono"
                  style={{ background: m.color }}
                >
                  {m.initials}
                </div>
                <h4 className="font-bold text-[15px] text-[#111] mb-1 font-serif">{m.name}</h4>
                <p className="text-xs font-semibold mb-1 font-sans" style={{ color: m.color }}>
                  {m.role}
                </p>
                <p className="text-xs text-[#888] leading-snug font-sans">{m.specialty}</p>
                <div className="mt-3 flex justify-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <FaStar key={s} size={12} color="#d97706" />
                  ))}
                </div>
              </div>
            ))}
          </div> */}
        </section>

        {/* TOPPERS */}
        <section className="pb-12">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.12em] text-[#d97706] uppercase mb-2.5 font-sans">
              Success Stories
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] text-[#111]">
              Our Students Are Serving the Nation
            </h2>
          </div>

          {/* <div className="grid grid-cols-3 gap-6">
            {TOPPERS.map((t, i) => (
              <div key={i} className="bg-white rounded-[18px] p-7 border border-[#e4d9c8]">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[38px] text-[#d97706] leading-none font-serif">&ldquo;</div>
                  <span className="bg-[#fef3c7] text-[#92400e] text-[11px] font-bold px-[10px] py-1 rounded-full font-mono">
                    {t.tag}
                  </span>
                </div>
                <p className="text-sm text-[#555] leading-relaxed mb-5 font-sans">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f5f0e8]">
                  <div className="w-11 h-11 rounded-full bg-[#0f3460] text-white flex items-center justify-center font-bold text-base font-serif">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#111] font-serif">{t.name}</div>
                    <div className="text-xs text-[#888] font-sans">{t.role}</div>
                  </div>
                  <span className="ml-auto bg-[#eff6ff] text-[#0f3460] text-[10px] font-bold px-2 py-[3px] rounded-full font-sans">
                    {t.batch}
                  </span>
                </div>
              </div>
            ))}
          </div> */}
        </section>

        {/* FAQs */}
        <section className="pb-20">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.12em] text-[#d97706] uppercase mb-2.5 font-sans">
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
      <div className="bg-[linear-gradient(135deg,#06112a,#0f2044)] px-6 py-20 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,153,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,153,0,0.03) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute bottom-8 left-12 pointer-events-none text-[rgba(255,153,0,0.05)] font-mono text-xs leading-loose text-left hidden lg:block">
          <div>while not_selected:</div>
          <div>&nbsp;&nbsp;study()</div>
          <div>&nbsp;&nbsp;revise()</div>
          <div>&nbsp;&nbsp;attempt()</div>
        </div>

        <div className="relative py-4">
          <div className="text-[32px] mb-3">🏛️</div>
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] text-white mb-3">
            Your Government Service Journey Starts{" "}
            <em className="text-[#ff9900]">Today</em>
          </h2>
          <p className="text-[15px] text-white/55 mb-8 font-sans">
            Join 2,80,000+ aspirants who cracked UPSC, SSC &amp; Banking with GovPrep India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#d97706] text-white px-8 py-3 rounded-[10px] text-[15px] font-bold border-none cursor-pointer font-serif">
              Start Free Trial
            </button>
            <button className="bg-white/[0.07] text-white px-8 py-3 rounded-[10px] text-[15px] font-semibold border border-white/20 cursor-pointer">
              Download Study Plan PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}