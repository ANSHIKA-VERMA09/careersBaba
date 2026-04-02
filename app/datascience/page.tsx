"use client"
import { useState } from "react";

const NAV_LINKS = ["Overview", "Courses", "Free Resources", "Curriculum", "Mentors", "Results", "FAQs"];

const COURSES = [
  { title: "Data Science Bootcamp 2026", tag: "Most Popular", price: "₹22,999", original: "₹35,000", duration: "9 months", mode: "Live Online", students: "18,400+", color: "#0f7275", features: ["Python & ML", "Deep Learning", "Real Projects", "Placement Support"] },
  { title: "Python for Data Science", tag: "Beginner Friendly", price: "₹7,499", original: "₹12,000", duration: "3 months", mode: "Self-Paced", students: "31,200+", color: "#6a3de8", features: ["Pandas & NumPy", "Data Viz", "SQL Essentials", "Capstone Project"] },
  { title: "ML Engineer Track", tag: "Advanced", price: "₹29,999", original: "₹45,000", duration: "12 months", mode: "Live + Mentored", students: "4,900+", color: "#c4412f", features: ["MLOps & Pipelines", "LLM Fine-tuning", "Cloud Deployment", "System Design"] },
  { title: "Data Analytics Fast Track", tag: "Quick Start", price: "₹5,499", original: "₹8,500", duration: "6 weeks", mode: "Self-Paced", students: "27,000+", color: "#1e5f30", features: ["Excel & Power BI", "SQL Mastery", "Tableau", "Business Case Studies"] },
];

const RESOURCES = [
  { label: "Python Cheatsheet", desc: "Pandas, NumPy, Scikit-learn", color: "#0f7275", icon: "🐍" },
  { label: "SQL Practice Set", desc: "100+ interview-level queries", color: "#6a3de8", icon: "🗄️" },
  { label: "Free Mini Project", desc: "End-to-end EDA on real dataset", color: "#c4412f", icon: "📊" },
  { label: "ML Roadmap PDF", desc: "Structured 6-month plan", color: "#1e5f30", icon: "🧠" },
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

const CURR_TABS = ["Foundations", "ML & AI", "Deployment"];

const STATS = [
  ["12,000+", "Placements"],
  ["400+", "Hiring Partners"],
  ["4.9★", "Avg Rating"],
  ["92%", "Placement Rate"],
];

export default function DataSciencePage() {
  const [activeTab, setActiveTab] = useState("Foundations");
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-[#F4F5F7] min-h-screen text-gray-900 mt-8">

   

      {/* HERO */}
      <section className="relative bg-[#071a1b] overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0f7275]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#6a3de8]/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",backgroundSize:"48px 48px"}} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0f7275]/20 border border-[#0f7275]/40 rounded-full px-3.5 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#2de0a7] animate-pulse inline-block" />
                <span className="text-[11px] sm:text-[12px] text-[#2de0a7] font-bold tracking-wider font-mono">India's #1 Data Science Platform</span>
              </div>

              <h1 className="font-mono text-[clamp(1.9rem,5vw,3.1rem)] text-white mb-4 leading-[1.18] tracking-tight">
                Launch Your Career in<br />
                <span className="text-[#2de0a7]">Data Science & AI</span>
              </h1>

              <p className="text-[15px] sm:text-[16px] text-white/60 leading-relaxed mb-8 max-w-[500px]">
                From Python basics to production ML — a structured, mentor-led program built for real job outcomes. Over{" "}
                <strong className="text-white">12,000+ placements</strong> at top tech, consulting, and product companies.
              </p>

              <div className="flex flex-wrap gap-3">
                <button className="bg-[#2de0a7] text-[#071a1b] px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl text-[14px] sm:text-[15px] font-bold hover:bg-[#22c992] transition-colors">
                  Explore Courses →
                </button>
                <button className="bg-white/7 text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl text-[14px] sm:text-[15px] font-semibold border border-white/20 hover:bg-white/10 transition-colors">
                  ▶ Watch Free Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-10 pt-8 border-t border-white/10">
                {STATS.map(([v, l]) => (
                  <div key={l}>
                    <div className="text-[20px] sm:text-[22px] font-bold text-[#2de0a7] font-mono">{v}</div>
                    <div className="text-[11px] sm:text-[12px] text-white/40 mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Lead Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <h3 className="font-mono text-[17px] sm:text-[18px] font-bold text-[#0f2a2b] mb-1.5 tracking-tight">
                Get a Free Career Roadmap
              </h3>
              <p className="text-[13px] text-gray-400 mb-6">Tailored to your background & goals</p>

              {[["Full Name", "text", "Priya Sharma"], ["Mobile Number", "tel", "+91 9876543210"], ["Email", "email", "priya@email.com"]].map(([label, type, ph]) => (
                <div key={label} className="mb-4">
                  <label className="text-[12px] font-semibold text-gray-500 block mb-1">{label}</label>
                  <input type={type} placeholder={ph}
                    className="w-full px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-[14px] outline-none text-gray-700 focus:border-[#0f7275] transition-colors" />
                </div>
              ))}

              <div className="mb-5">
                <label className="text-[12px] font-semibold text-gray-500 block mb-1">Experience Level</label>
                <select className="w-full px-3.5 py-2.5 rounded-lg border-[1.5px] border-gray-200 text-[14px] text-gray-700 bg-white outline-none focus:border-[#0f7275] transition-colors">
                  <option>Complete Beginner</option>
                  <option>Some Python Knowledge</option>
                  <option>Working Professional</option>
                </select>
              </div>

              <button className="w-full bg-[#0f7275] text-white py-3.5 rounded-xl text-[15px] font-bold hover:bg-[#0a5d60] transition-colors">
                Book Free Session
              </button>

              <p className="text-[11px] text-gray-400 text-center mt-3">No spam. No pressure. 100% free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-[#0f2a2b] py-2.5 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto flex items-center gap-3 sm:gap-4">
          <span className="bg-[#2de0a7] text-[#071a1b] text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded font-mono whitespace-nowrap flex-shrink-0">LIVE</span>
          <div className="flex gap-6 sm:gap-10 overflow-x-auto scrollbar-hide">
            {[
              "🚀 New Batch Starting Feb 1 — 40 Seats Left",
              "🤝 12 new unicorn startups joined as hiring partners",
              "🎓 Free Python Bootcamp every Saturday 10AM IST",
              "🏆 Placement Record: 3 offers in 8 days",
            ].map((t, i) => (
              <span key={i} className="text-[12px] sm:text-[13px] text-white/70 whitespace-nowrap">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* COURSES */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] text-[#0f7275] uppercase mb-2.5 font-mono">Our Programs</p>
            <h2 className="font-mono text-[clamp(1.6rem,3vw,2.4rem)] text-gray-900 mb-3.5 tracking-tight">Data Science Courses</h2>
            <p className="text-gray-500 text-[14px] sm:text-[15px] max-w-[480px] mx-auto leading-relaxed">
              From your first line of Python to deploying LLMs in production — choose the track that matches where you are.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {COURSES.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:-translate-y-1 transition-transform duration-200 cursor-pointer shadow-sm hover:shadow-lg">
                {/* Card Header */}
                <div className="px-5 pt-5 pb-4" style={{ background: c.color }}>
                  <span className="bg-white/20 text-white text-[11px] font-bold px-2.5 py-1 rounded-full inline-block mb-3">
                    {c.tag}
                  </span>
                  <h3 className="font-mono text-[14px] sm:text-[15px] font-bold text-white leading-snug tracking-tight">{c.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <span className="text-[11px] sm:text-[12px] text-white/65">⏱ {c.duration}</span>
                    <span className="text-[11px] sm:text-[12px] text-white/65">📡 {c.mode}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-5 pt-4 pb-5">
                  <ul className="mb-4 space-y-1.5">
                    {c.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-gray-600">
                        <span style={{ color: c.color }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                   
                    <button className="text-white px-4 py-2 rounded-lg text-[13px] font-semibold border-none cursor-pointer" style={{ background: c.color }}>
                      Enroll →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FREE RESOURCES */}
        <section className="pb-14 sm:pb-16">
          <div className="bg-[#071a1b] rounded-2xl sm:rounded-3xl px-6 sm:px-10 py-10 sm:py-12 border border-[#2de0a7]/15 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-[#0f7275]/15 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#6a3de8]/10 blur-2xl pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
              {/* Text */}
              <div>
                <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] text-[#2de0a7] uppercase mb-2.5 font-mono">100% Free</p>
                <h2 className="font-mono text-[clamp(1.5rem,2.5vw,2rem)] text-white mb-3.5 tracking-tight">
                  Free Resources to Get Started
                </h2>
                <p className="text-white/55 text-[14px] sm:text-[15px] leading-relaxed max-w-sm">
                  No signup needed. Explore our free tools to gauge where you stand — then decide if a full program is right for you.
                </p>
              </div>

              {/* Resource Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
                {RESOURCES.map((r, i) => (
                  <div key={i} className="bg-white/6 rounded-2xl px-4 py-4 sm:py-5 border border-white/10 flex flex-col gap-2.5 cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ background: r.color + "25" }}>
                      {r.icon}
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white mb-0.5">{r.label}</div>
                      <div className="text-[11px] sm:text-[12px] text-white/50">{r.desc}</div>
                    </div>
                    <div className="flex items-center gap-1 text-[12px] font-semibold mt-0.5" style={{ color: r.color }}>
                      Access Free →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CURRICULUM */}
        <section className="pb-14 sm:pb-16">
          <div className="text-center mb-10">
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] text-[#0f7275] uppercase mb-2.5 font-mono">What You'll Learn</p>
            <h2 className="font-mono text-[clamp(1.6rem,3vw,2.4rem)] text-gray-900 tracking-tight">Curriculum Overview</h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              {CURR_TABS.map(t => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`flex-1 px-3 sm:px-4 py-3.5 text-[13px] sm:text-[14px] font-semibold cursor-pointer border-none transition-colors
                    ${activeTab === t ? "bg-[#0f7275] text-white font-mono" : "bg-white text-gray-500 hover:bg-gray-50"}`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {CURRICULUM_DATA[activeTab].map((row :string, i:number) => (
                <div key={i} className={`flex gap-3 px-5 sm:px-7 py-4 border-b border-gray-100 ${i % 2 === 0 ? "sm:border-r border-gray-100" : ""}`}>
                  <span className="text-[#0f7275] mt-0.5 flex-shrink-0 text-sm">⚡</span>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">{row.label}</div>
                    <div className="text-[13px] sm:text-[14px] font-medium text-gray-800">{row.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MENTORS */}
        <section className="pb-14 sm:pb-16">
          <div className="text-center mb-10">
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] text-[#0f7275] uppercase mb-2.5 font-mono">Learn From The Best</p>
            <h2 className="font-mono text-[clamp(1.6rem,3vw,2.4rem)] text-gray-900 tracking-tight">Expert Mentors & Instructors</h2>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MENTORS.map((m, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-bold text-white text-lg sm:text-xl mx-auto mb-4" style={{ background: m.color }}>
                  {m.initials}
                </div>
                <div className="font-bold text-[14px] sm:text-[15px] text-gray-900 mb-1">{m.name}</div>
                <div className="text-[12px] text-gray-500 mb-3 leading-snug">{m.role}</div>
                <div className="inline-block text-[11px] sm:text-[12px] font-semibold px-3 py-1 rounded-full" style={{ background: m.color + "15", color: m.color }}>
                  {m.specialty}
                </div>
              </div>
            ))}
          </div> */}
        </section>

        {/* TOPPERS / RESULTS */}
        <section className="pb-14 sm:pb-16">
          <div className="text-center mb-10">
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] text-[#0f7275] uppercase mb-2.5 font-mono">Success Stories</p>
            <h2 className="font-mono text-[clamp(1.6rem,3vw,2.4rem)] text-gray-900 tracking-tight">Our Alumni Are Thriving</h2>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOPPERS.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm">
                <div className="text-4xl text-[#0f7275] leading-none mb-4 font-mono">"</div>
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mb-5">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#0f7275] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-[13px] sm:text-[14px] text-gray-900 truncate">{t.name}</div>
                    <div className="text-[11px] sm:text-[12px] text-gray-500 truncate">{t.role}</div>
                  </div>
                  <span className="ml-auto flex-shrink-0 bg-[#e8f5f5] text-[#0f7275] text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap">
                    {t.batch}
                  </span>
                </div>
              </div>
            ))}
          </div> */}
        </section>

        {/* FAQs */}
        <section className="pb-16 sm:pb-20">
          <div className="text-center mb-10">
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] text-[#0f7275] uppercase mb-2.5 font-mono">Got Questions?</p>
            <h2 className="font-mono text-[clamp(1.6rem,3vw,2.4rem)] text-gray-900 tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-[740px] mx-auto space-y-2.5">
            {FAQS.map((f, i) => (
              <div
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between px-5 sm:px-6 py-4">
                  <span className="text-[13px] sm:text-[14px] font-semibold text-gray-900 pr-4 leading-snug">{f.q}</span>
                  <span className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}>▾</span>
                </div>
                {openFaq === i && (
                  <div className="px-5 sm:px-6 pt-1 pb-5 text-[13px] sm:text-[14px] text-gray-600 leading-relaxed border-t border-gray-100">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER CTA */}
      <footer className="relative bg-[#071a1b] px-4 sm:px-6 py-16 sm:py-20 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:"linear-gradient(rgba(45,224,167,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(45,224,167,0.04) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#0f7275]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          <h2 className="font-mono text-[clamp(1.8rem,4vw,2.6rem)] text-white mb-3 tracking-tight">
            Your Data Career Starts <em className="text-[#2de0a7] not-italic">Now</em>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-white/50 mb-8">
            Join 12,000+ data professionals who launched their careers with us.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button className="bg-[#2de0a7] text-[#071a1b] px-7 sm:px-8 py-3 rounded-xl text-[14px] sm:text-[15px] font-bold hover:bg-[#22c992] transition-colors">
              Start Free Trial
            </button>
            <button className="bg-white/7 text-white px-7 sm:px-8 py-3 rounded-xl text-[14px] sm:text-[15px] font-semibold border border-white/20 hover:bg-white/10 transition-colors">
              Download Syllabus
            </button>
          </div>

          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#2de0a7] flex items-center justify-center text-[#071a1b] font-black text-xs">D</div>
              <span className="font-black text-white text-sm">DataPro</span>
            </div>
            <p className="text-[12px] text-white/30">© 2026 DataPro. All rights reserved.</p>
            <div className="flex gap-5">
              {["Privacy", "Terms", "Contact"].map(l => (
                <a key={l} href="#" className="text-[12px] text-white/40 hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}