"use client"
import { useState } from "react";
import {
  FaChevronDown, FaStar, FaCheckCircle, FaBell,
  FaArrowRight, FaBuilding, FaChartLine, FaBriefcase,
  FaHandshake, FaTrophy, FaUniversity, FaUserTie,
  FaLaptop, FaGlobe, FaAward, FaClipboardList
} from "react-icons/fa";

const COURSES = [
  {
    title: "CAT 2026 Complete Prep",
    tag: "Most Popular",
    price: "₹8,999",
    original: "₹16,000",
    duration: "12 months",
    mode: "Live Online",
    students: "54,000+",
    color: "#7c1d1d",
    features: ["VARC + DILR + QA", "100+ Mock CATs", "IIM Interview Prep", "Percentile Predictor"],
  },
  {
    title: "MBA Admissions Fast Track",
    tag: "All Exams",
    price: "₹6,499",
    original: "₹11,000",
    duration: "6 months",
    mode: "Live + Recorded",
    students: "22,800+",
    color: "#1a3fa8",
    features: ["CAT + XAT + SNAP + NMAT", "GD/PI Coaching", "SOP & Waiver Essays", "College Shortlisting"],
  },
  {
    title: "Quant & DILR Intensive",
    tag: "Weakness Fixer",
    price: "₹3,499",
    original: "₹6,000",
    duration: "3 months",
    mode: "Self-Paced",
    students: "31,500+",
    color: "#065f46",
    features: ["600+ Practice Sets", "Video Solutions", "Shortcuts & Tricks", "Sectional Mocks"],
  },
  {
    title: "VARC Mastery Program",
    tag: "Score Booster",
    price: "₹2,499",
    original: "₹4,500",
    duration: "2 months",
    mode: "Self-Paced",
    students: "19,200+",
    color: "#6d28d9",
    features: ["RC Strategy Workshop", "Para Jumbles", "Critical Reasoning", "Vocab & Grammar"],
  },
];

const RESOURCES = [
  { icon: FaClipboardList, label: "CAT PYQ Bank", desc: "2015–2025 fully solved", color: "#7c1d1d" },
  { icon: FaChartLine, label: "Percentile Calculator", desc: "Estimate your CAT score", color: "#1a3fa8" },
  { icon: FaBriefcase, label: "MBA College Predictor", desc: "Match colleges to your profile", color: "#065f46" },
  { icon: FaUserTie, label: "PI Question Bank", desc: "500+ real interview questions", color: "#6d28d9" },
];

const SYLLABUS_DATA = {
  "VARC": [
    { label: "Sections", value: "Reading Comprehension + Verbal Ability" },
    { label: "Questions", value: "24 Qs — RC (16) + VA (8)" },
    { label: "Duration", value: "40 minutes" },
    { label: "RC Passages", value: "4 passages × 4 Qs each" },
    { label: "VA Topics", value: "Para Jumbles, Para Summary, Odd Sentence" },
    { label: "Key Skill", value: "Speed reading + inference logic" },
  ],
  "DILR": [
    { label: "Sections", value: "Data Interpretation + Logical Reasoning" },
    { label: "Questions", value: "20 Qs — 4 sets × 4–6 Qs each" },
    { label: "Duration", value: "40 minutes" },
    { label: "DI Types", value: "Tables, Bar, Pie, Caselets, Networks" },
    { label: "LR Types", value: "Arrangements, Games, Constraints, Grids" },
    { label: "Key Skill", value: "Set selection + time management" },
  ],
  "QA": [
    { label: "Sections", value: "Quantitative Ability" },
    { label: "Questions", value: "22 Qs — MCQ + TITA" },
    { label: "Duration", value: "40 minutes" },
    { label: "Core Topics", value: "Arithmetic, Algebra, Geometry, Number Theory" },
    { label: "Advanced Topics", value: "P&C, Probability, Progressions, Functions" },
    { label: "Key Skill", value: "Accuracy + mental math speed" },
  ],
};

const MENTORS = [
  { name: "Nikhil Gupta", role: "IIM Ahmedabad Alum | CAT 99.97%ile", specialty: "Quant & Data Interpretation", color: "#7c1d1d", initials: "NG" },
  { name: "Shruti Malhotra", role: "IIM Bangalore | 12 yrs CAT coaching", specialty: "VARC & Reading Comprehension", color: "#1a3fa8", initials: "SM" },
  { name: "Arun Venkat", role: "Ex-McKinsey | ISB Hyderabad", specialty: "GD/PI & MBA Admissions", color: "#065f46", initials: "AV" },
  { name: "Pooja Singhvi", role: "XLRI Jamshedpur | XAT 99.8%ile", specialty: "DILR & Logical Reasoning", color: "#6d28d9", initials: "PS" },
];

const TOPPERS = [
  {
    name: "Rahul Agarwal",
    role: "Admitted — IIM Calcutta (PGP 2025)",
    batch: "CAT 2024",
    score: "99.34 %ile",
    quote: "The mock test quality here is unmatched. By mock 60 I was consistently hitting 99+ percentile. The DILR sets were harder than actual CAT — which made the real exam feel easy.",
  },
  {
    name: "Simran Kaur",
    role: "Admitted — FMS Delhi + MDI Gurgaon",
    batch: "CAT 2024",
    score: "98.71 %ile",
    quote: "I was stuck at 85 percentile for two attempts. The personalized feedback on my sectional weak areas and the VARC RC strategy workshop changed everything in 3 months.",
  },
  {
    name: "Arjun Mathur",
    role: "Admitted — XLRI Jamshedpur (BM)",
    batch: "XAT 2025",
    score: "99.1 %ile",
    quote: "The PI mock interview with an actual IIM alum mentor was brutally honest and exactly what I needed. My final XLRI interview felt like a friendly conversation.",
  },
];

const COLLEGES = [
  { name: "IIM Ahmedabad", cutoff: "99.5%ile+", color: "#7c1d1d" },
  { name: "IIM Bangalore", cutoff: "99%ile+", color: "#7c1d1d" },
  { name: "IIM Calcutta", cutoff: "98%ile+", color: "#7c1d1d" },
  { name: "FMS Delhi", cutoff: "98.5%ile+", color: "#1a3fa8" },
  { name: "XLRI Jamshedpur", cutoff: "95%ile+", color: "#065f46" },
  { name: "MDI Gurgaon", cutoff: "95%ile+", color: "#1a3fa8" },
  { name: "IIFT Delhi", cutoff: "94%ile+", color: "#6d28d9" },
  { name: "SPJIMR Mumbai", cutoff: "95%ile+", color: "#065f46" },
];

const FAQS = [
  {
    q: "What is the CAT 2026 exam pattern?",
    a: "CAT 2026 is a 2-hour computer-based test with 3 sections: VARC (40 min, ~24 Qs), DILR (40 min, ~20 Qs), and QA (40 min, ~22 Qs). MCQs carry +3/−1 and TITA (non-MCQ) carry +3 with no negative marking. Total score is scaled to a percentile by IIM.",
  },
  {
    q: "When should I start CAT 2026 preparation?",
    a: "Ideally 10–12 months before the exam (November 2026), so starting by January 2026. However, focused 6-month prep is sufficient for working professionals with a strong quant background. Beginners benefit most from a full year with structured mock schedules.",
  },
  {
    q: "Does the course cover GD/PI preparation for IIMs?",
    a: "Yes. Our MBA Admissions Fast Track and CAT Complete Prep include GD/PI prep modules with practice sessions led by IIM/XLRI alumni mentors, mock PI recordings, WAT practice, and SOP/essay review for colleges like IIFT and SPJIMR.",
  },
  {
    q: "How many mock tests are included and when should I start taking them?",
    a: "CAT Complete Prep includes 100+ full-length CAT mocks, 200+ sectional mocks, and 40+ mocks for XAT/SNAP/NMAT. We recommend starting full mocks from month 4, with 2–3 mocks per week in the final 3 months. All mocks include detailed video solutions.",
  },
  {
    q: "Can working professionals manage this course alongside a job?",
    a: "Absolutely. All live sessions are recorded and available for 12 months. The self-paced QA and VARC courses are lifetime access. Most working professionals follow a 2-hour daily study plan on weekdays + dedicated 6-hour mock analysis days on weekends.",
  },
];

type SylTab = "VARC" | "DILR" | "QA";
const SYL_TABS: SylTab[] = ["VARC", "DILR", "QA"];

const STATS = [

  ["5.0★", "Avg Rating"],
];

const EXAM_DATES = [
  { event: "CAT 2026 Notification", date: "Jul 2026" },
  { event: "Registration Window", date: "Aug–Sep 2026" },
  { event: "Admit Card Release", date: "Oct 2026" },
  { event: "CAT 2026 Exam Day", date: "Nov 2026" },
  { event: "Results & IIM Calls", date: "Jan 2027" },
];

export default function MBAPage() {
  const [activeTab, setActiveTab] = useState<SylTab>("VARC");
  const [openFaq, setOpenFaq] = useState<null | number>(null);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F4F5F7", minHeight: "100vh", color: "#111" }}>

      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a0505 0%, #3d0e0e 45%, #1a1a2e 100%)",
          padding: "72px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "radial-gradient(circle at 75% 20%, rgba(124,29,29,0.3) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(109,40,217,0.15) 0%, transparent 50%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />

        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 bg-[rgba(124,29,29,0.3)] border border-[rgba(220,80,80,0.4)] rounded-[20px] px-[14px] py-[5px] mb-[22px]">
              <span className="w-[7px] h-[7px] rounded-full bg-[#fca5a5] inline-block animate-pulse" />
              <span className="text-[12px] text-[#fca5a5] font-['Space_Mono',monospace] font-semibold">
                India's #1 CAT & MBA Prep Platform
              </span>
            </div>

            <h1 className="font-['Space_Mono',monospace] text-[clamp(2rem,4vw,3rem)] text-white mb-4 leading-[1.2] tracking-[-0.04em]">
              Crack CAT 2026 &<br />
              <span className="text-[#fca5a5]">Get Into the IIMs</span>
            </h1>

            <p className="text-[16px] text-[rgba(255,255,255,0.65)] leading-[1.75] mb-8 max-w-[500px]">
              India's most rigorous CAT prep — structured mock strategy, IIM-alum mentors, and
              real GD/PI coaching. Over{" "}
              <strong className="text-white">800+ IIM converts</strong> and 4,200+ top-10 B-school
              admissions in 2024 alone.
            </p>

            <div className="flex gap-3 flex-wrap">
              <button className="bg-[#ef4444] text-white px-[28px] py-[13px] rounded-[10px] text-[15px] font-bold border-none cursor-pointer hover:bg-[#dc2626] transition-colors">
                Explore Courses →
              </button>
              <button className="bg-[rgba(255,255,255,0.07)] text-white px-[28px] py-[13px] rounded-[10px] text-[15px] font-semibold border border-[rgba(255,255,255,0.2)] cursor-pointer hover:bg-[rgba(255,255,255,0.12)] transition-colors">
                ▶ Free Mock CAT
              </button>
            </div>

            <div className="flex flex-wrap gap-9 mt-10">
              {STATS.map(([v, l]) => (
                <div key={l}>
                  <div className="text-[22px] font-bold text-[#fca5a5] font-['Space_Mono',monospace]">{v}</div>
                  <div className="text-[12px] text-[rgba(255,255,255,0.45)] mt-[3px]">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-[20px] p-8 shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
            <h3 className="font-['Space_Mono',monospace] text-[18px] font-bold text-[#1a0505] mb-[6px] tracking-[-0.03em]">
              Get Free MBA Roadmap
            </h3>
            <p className="text-[13px] text-[#888] mb-6">Personalized for your profile & target IIM</p>

            {[
              ["Full Name", "text", "Rahul Agarwal"],
              ["Mobile Number", "tel", "+91 9876543210"],
              ["Email", "email", "rahul@email.com"],
            ].map(([label, type, ph]) => (
              <div key={label as string} className="mb-4">
                <label className="text-[12px] font-semibold text-[#555] block mb-[5px]">{label}</label>
                <input
                  type={type as string}
                  placeholder={ph as string}
                  className="w-full px-[14px] py-[11px] rounded-[8px] border-[1.5px] border-[#e0e2ea] text-[14px] outline-none text-[#333] box-border focus:border-[#7c1d1d] transition-colors"
                />
              </div>
            ))}

            <div className="mb-4">
              <label className="text-[12px] font-semibold text-[#555] block mb-[5px]">Current Status</label>
              <select className="w-full px-[14px] py-[11px] rounded-[8px] border-[1.5px] border-[#e0e2ea] text-[14px] text-[#333] bg-white focus:border-[#7c1d1d]">
                <option>Final Year Student</option>
                <option>Working Professional (1–3 yrs)</option>
                <option>Working Professional (3+ yrs)</option>
                <option>Fresher / Gap Year</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="text-[12px] font-semibold text-[#555] block mb-[5px]">Target B-School</label>
              <select className="w-full px-[14px] py-[11px] rounded-[8px] border-[1.5px] border-[#e0e2ea] text-[14px] text-[#333] bg-white">
                <option>IIM A / B / C (Top 3)</option>
                <option>IIM L / K / I (Next Tier)</option>
                <option>FMS Delhi / MDI Gurgaon</option>
                <option>XLRI / IIFT / SPJIMR</option>
                <option>Any Top-20 MBA College</option>
              </select>
            </div>

            <button className="w-full bg-[#7c1d1d] text-white py-[14px] rounded-[10px] text-[15px] font-bold border-none cursor-pointer hover:bg-[#6b1919] transition-colors">
              Book Free Counselling →
            </button>
            <p className="text-center text-[11px] text-[#bbb] mt-3">Free · No credit card · Expert callback in 2 hrs</p>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-[#1a0505] py-[10px] px-6 overflow-hidden">
        <div className="max-w-[1140px] mx-auto flex items-center gap-4">
          <span className="bg-[#ef4444] text-white text-[11px] font-bold px-[10px] py-[3px] rounded-[4px] whitespace-nowrap font-['Space_Mono',monospace]">LIVE</span>
          <div className="flex gap-9 overflow-hidden">
            {[
              "CAT 2026 expected Nov — 10 months to go. Start now 🎯",
              "Rahul A. — IIM Calcutta call after 99.34%ile with our mocks",
              "New: XAT 2026 dedicated crash course launched",
              "Free CAT diagnostic test every Sunday 9AM IST",
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

        {/* EXAM DATES */}
        <section className="py-10">
          <div className="bg-white rounded-[20px] border border-[#e4e5ea] px-8 py-6">
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#7c1d1d] uppercase mb-5 font-['Space_Mono',monospace]">
              📅 CAT 2026 Important Dates
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {EXAM_DATES.map((d, i) => (
                <div key={i} className="text-center">
                  <div className="text-[13px] font-bold text-[#7c1d1d] font-['Space_Mono',monospace] mb-1">{d.date}</div>
                  <div className="text-[12px] text-[#666] leading-[1.4]">{d.event}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COURSES */}
        <section className="py-[48px]">
          <div className="text-center mb-12">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#7c1d1d] uppercase mb-[10px] font-['Space_Mono',monospace]">Our Programs</p>
            <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.5rem)] text-[#111] mb-[14px] tracking-[-0.04em]">CAT & MBA Prep Courses</h2>
            <p className="text-[#777] text-[15px] max-w-[520px] mx-auto leading-[1.65]">
              From CAT fundamentals to final IIM interview prep — choose the course that fits your timeline and target percentile.
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

        {/* TARGET COLLEGES STRIP */}
        <section className="py-4 pb-12">
          <div className="bg-white rounded-[20px] border border-[#e4e5ea] px-8 py-7">
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#7c1d1d] uppercase mb-6 font-['Space_Mono',monospace]">
              🏛 Target Colleges & CAT Cutoffs
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {COLLEGES.map((col, i) => (
                <div key={i} className="flex items-center justify-between px-4 py-3 rounded-[12px] border border-[#f0f0f5] bg-[#fafafa]">
                  <div>
                    <div className="text-[13px] font-bold text-[#111]">{col.name}</div>
                    <div className="text-[11px] text-[#999] mt-[2px]">CAT Cutoff</div>
                  </div>
                  <span className="text-[12px] font-bold px-[8px] py-[3px] rounded-[8px] text-white" style={{ background: col.color }}>
                    {col.cutoff}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FREE RESOURCES */}
        <section className="py-4 pb-12">
          <div className="bg-[linear-gradient(135deg,#1a0505,#3d0e0e)] rounded-[24px] px-[40px] py-[48px] border border-[rgba(252,165,165,0.15)] relative overflow-hidden">
            <div className="absolute -top-[40px] -right-[40px] w-[250px] h-[250px] rounded-full bg-[rgba(124,29,29,0.2)]" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
              <div>
                <p className="text-[12px] font-bold tracking-[0.12em] text-[#fca5a5] uppercase mb-[10px] font-['Space_Mono',monospace]">100% Free</p>
                <h2 className="font-['Space_Mono',monospace] text-[clamp(1.6rem,2.5vw,2rem)] text-white mb-[14px] tracking-[-0.03em]">
                  Free CAT Prep Resources
                </h2>
                <p className="text-[rgba(255,255,255,0.6)] text-[15px] leading-[1.75]">
                  Diagnose your weak areas before you invest. Take a free mock, download PYQs, and predict which colleges match your current score — all without signing up.
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

        {/* SYLLABUS / EXAM PATTERN */}
        <section className="py-4 pb-12">
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#7c1d1d] uppercase mb-[10px] font-['Space_Mono',monospace]">Exam Pattern</p>
            <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.4rem)] text-[#111] tracking-[-0.04em]">CAT 2026 Section Breakdown</h2>
          </div>
          <div className="bg-white rounded-[20px] border border-[#e4e5ea] overflow-hidden">
            <div className="flex border-b border-[#e4e5ea]">
              {SYL_TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`flex-1 px-4 py-4 text-[14px] font-semibold cursor-pointer border-none
                    ${activeTab === t ? "bg-[#7c1d1d] text-white font-['Space_Mono',monospace]" : "bg-white text-[#555] hover:bg-[#fdf5f5]"}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {SYLLABUS_DATA[activeTab].map((row, i) => (
                <div key={i} className={`flex gap-3 px-7 py-4 border-b border-[#f0f1f5] ${i % 2 === 0 ? "md:border-r border-[#f0f1f5]" : ""}`}>
                  <FaChartLine size={15} color="#7c1d1d" className="mt-[2px] flex-shrink-0" />
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
        <section className="py-4 pb-12">
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#7c1d1d] uppercase mb-[10px] font-['Space_Mono',monospace]">Learn From The Best</p>
            <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.4rem)] text-[#111] tracking-[-0.04em]">IIM Alum Mentors & Educators</h2>
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
        <section className="py-4 pb-12">
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#7c1d1d] uppercase mb-[10px] font-['Space_Mono',monospace]">Success Stories</p>
            <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.4rem)] text-[#111] tracking-[-0.04em]">Our Students Made It</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOPPERS.map((t, i) => (
              <div key={i} className="bg-white rounded-[18px] p-7 border border-[#e4e5ea]">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[38px] text-[#7c1d1d] leading-[1] font-['Space_Mono',monospace]">&quot;</div>
                  <span className="bg-[#fef2f2] text-[#7c1d1d] text-[11px] font-bold px-[10px] py-[4px] rounded-[20px] font-['Space_Mono',monospace]">
                    {t.score}
                  </span>
                </div>
                <p className="text-[14px] text-[#555] leading-[1.75] mb-5">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f0f1f5]">
                  <div className="w-[44px] h-[44px] rounded-full bg-[#7c1d1d] text-white flex items-center justify-center font-bold text-[16px]">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-[14px] text-[#111]">{t.name}</div>
                    <div className="text-[12px] text-[#888]">{t.role}</div>
                  </div>
                  <span className="ml-auto bg-[#fef2f2] text-[#7c1d1d] text-[10px] font-bold px-2 py-[3px] rounded-[20px]">{t.batch}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-4 pb-20">
          <div className="text-center mb-10">
            <p className="text-[12px] font-bold tracking-[0.12em] text-[#7c1d1d] uppercase mb-[10px] font-['Space_Mono',monospace]">Got Questions?</p>
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
      <div className="relative bg-[linear-gradient(135deg,#1a0505,#3d0e0e)] px-6 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(252,165,165,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(252,165,165,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative py-4">
          <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,2.5rem)] text-white mb-3 tracking-[-0.04em]">
            Your IIM Journey Starts <span className="text-[#fca5a5] italic">Today</span>
          </h2>
          <p className="text-[15px] text-[rgba(255,255,255,0.55)] mb-8">
            Join 1,20,000+ aspirants preparing for CAT 2026 with India's most trusted MBA prep platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#ef4444] text-white px-8 py-3 rounded-[10px] text-[15px] font-bold border-none cursor-pointer hover:bg-[#dc2626] transition-colors">
              Start Free Trial
            </button>
            <button className="bg-[rgba(255,255,255,0.07)] text-white px-8 py-3 rounded-[10px] text-[15px] font-semibold border border-[rgba(255,255,255,0.2)] cursor-pointer hover:bg-[rgba(255,255,255,0.12)] transition-colors">
              Download CAT Syllabus PDF
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}