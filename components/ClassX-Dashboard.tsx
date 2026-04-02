import React, { useState } from 'react';
import { FaArrowRight, FaCalculator, FaFlask, FaCode } from 'react-icons/fa6';
import { CiCalculator1 } from "react-icons/ci";
import {
  FiBookOpen,
  FiVideo,
  FiFileText,
  FiCheckCircle,
  FiLock,
  FiUnlock,
  FiDownload,
  FiChevronDown,
  FiAward,
  FiBarChart,
  FiClock,

} from "react-icons/fi";

const Class11Dashboard: React.FC = () => {
  const [activeSubject, setActiveSubject] = useState('Physics');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const streams = [
    { label: "PCM", sub: "Maths + Physics + Chemistry", color: "text-blue-800", bg: "bg-blue-50", border: "border-blue-100", badge: "JEE", icon: <CiCalculator1 size={24} /> },
    { label: "PCB", sub: "Physics + Chemistry + Biology", color: "text-green-800", bg: "bg-green-50", border: "border-green-100", badge: "NEET", icon: <FaFlask size={24} /> },
    { label: "PCMB", sub: "All four science subjects", color: "text-purple-800", bg: "bg-purple-50", border: "border-purple-100", badge: "JEE + NEET", icon: <FaFlask size={24} /> },
    { label: "Commerce", sub: "Accounts + Economics + BSt", color: "text-orange-800", bg: "bg-orange-50", border: "border-orange-100", badge: "CA / BBA", icon: <FiBarChart size={24} /> },
  ];

  const subjects = [
    { name: "Physics", color: "bg-blue-600", tag: "Most Popular", chapters: 15, videos: 120, tests: 45, icon: CiCalculator1 },
    { name: "Chemistry", color: "bg-emerald-600", tag: "Organic Incl.", chapters: 14, videos: 110, tests: 40, icon: FaCode },
    { name: "Mathematics", color: "bg-indigo-600", tag: "JEE Level", chapters: 16, videos: 145, tests: 50, icon: FaCalculator },
    { name: "Biology", color: "bg-rose-600", tag: "NEET Prep", chapters: 22, videos: 180, tests: 60, icon: FaFlask },
  ];

  return (
    <div className="max-w-[1140px] mx-auto px-4 md:px-6 py-8 space-y-12 bg-[#fafafa]">
      
      {/* STREAM BANNER */}
      <section>
        <div className="bg-white rounded-3xl border border-stone-200 p-6 md:p-8 shadow-sm">
          <p className="text-[10px] font-bold tracking-widest text-purple-700 uppercase mb-6 font-mono">
            🔬 Choose Your Stream
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {streams.map((s, i) => (
              <div key={i} className={`${s.bg} ${s.border} border-2 rounded-2xl p-5 cursor-pointer hover:-translate-y-1 transition-transform duration-200 group`}>
                <div className={`${s.color} mb-3`}>{s.icon}</div>
                <div className={`font-mono font-bold text-lg ${s.color} mb-1`}>{s.label}</div>
                <div className="text-xs text-stone-500 mb-4 leading-relaxed">{s.sub}</div>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full font-mono ${s.color} bg-white/50 border border-current/10`}>
                  {s.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBJECT CARDS */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {subjects.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border-2 border-stone-100 hover:border-purple-200 hover:-translate-y-1 transition-all duration-300 group shadow-sm">
                <div className={`${s.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <Icon size={80} />
                  </div>
                  <span className="bg-white/20 text-[10px] font-bold px-2 py-0.5 rounded-full mb-3 inline-block">
                    {s.tag}
                  </span>
                  <h3 className="text-xl font-serif font-bold">{s.name}</h3>
                </div>
                <div className="p-5">
                  <button className={`w-full py-2.5 rounded-xl text-xs font-bold text-white transition-opacity hover:opacity-90 flex items-center justify-center gap-2 ${s.color}`}>
                    Explore Chapters <FaArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CHAPTER TABLE */}
      <section className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <tbody>
              {[1, 2, 3, 4, 5].map((num) => (
                <tr key={num} className="hover:bg-purple-50/30 transition-colors cursor-pointer group">
                  <td className="px-6 py-4">{num}</td>
                  <td className="px-6 py-4">Physical World & Units</td>
                  <td className="px-6 py-4 text-center">12 Lessons</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center text-emerald-500">
                      <FiCheckCircle size={16} />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      {num < 3 ? (
                        <span className="flex items-center gap-1 text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full uppercase">
                          <FiUnlock size={10} /> Free
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[10px] font-bold bg-purple-100 text-purple-800 px-2.5 py-1 rounded-full uppercase">
                          <FiLock size={10} /> Pro
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FREE RESOURCES */}
      <section>
        <div className="bg-gradient-to-br from-[#06000f] to-[#0d0a2e] rounded-[2rem] p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "NCERT Solutions", desc: "Detailed step-by-step", icon: FiBookOpen, color: "bg-blue-500" },
              { label: "Practice Papers", desc: "Top school samples", icon: FiFileText, color: "bg-emerald-500" },
              { label: "Revision Notes", desc: "Chapter summaries", icon: FiClock, color: "bg-amber-500" },
              { label: "Topper Sheets", desc: "Actual board copies", icon: FiAward, color: "bg-purple-500" },
            ].map((res, i) => {
              const Icon = res.icon;
              return (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <div className={`${res.color} w-10 h-10 rounded-xl flex items-center justify-center mb-4`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h4 className="text-sm font-bold mb-1">{res.label}</h4>
                  <p className="text-[11px] text-white/40 mb-3">{res.desc}</p>
                  <div className="text-[10px] font-bold text-purple-400 flex items-center gap-1">
                    <FiDownload size={12} /> Free Download
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto">
        <div className="space-y-3">
          {[
            { q: "Is the syllabus updated for 2026–27 session?", a: "Yes, all our content is mapped exactly to the latest NCERT and CBSE guidelines." },
            { q: "Can I access the free chapters without an account?", a: "Yes, first 2 chapters are free." },
            { q: "Does this course cover JEE and NEET basics?", a: "Yes, foundation modules included." }
          ].map((f, i) => (
            <div key={i} className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-sm font-bold text-stone-800">{f.q}</span>
                <FiChevronDown size={18} className={`text-stone-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-sm text-stone-500">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Class11Dashboard;
