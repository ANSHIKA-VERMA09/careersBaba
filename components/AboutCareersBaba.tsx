import React from "react";

export default function AboutCareersBaba() {
  const reasons = [
    {
      title: "Expert & Supportive Faculty",
      desc: "Seasoned educators who bring subject mastery, empathy, and genuine investment in every student's growth.",
      icon: (
        <svg className="w-8 h-8 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Personalized Attention",
      desc: "We tailor our teaching approach to each individual's pace and learning style — no student gets left behind.",
      icon: (
        <svg className="w-8 h-8 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
    },
    {
      title: "Result-Oriented Teaching",
      desc: "Our structured approach targets measurable outcomes — exam scores, skill certifications, and career placements.",
      icon: (
        <svg className="w-8 h-8 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      title: "Updated Study Material",
      desc: "Continuously refreshed content and test series aligned with the latest exam patterns and industry standards.",
      icon: (
        <svg className="w-8 h-8 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      title: "Friendly & Motivating Environment",
      desc: "A warm, encouraging atmosphere where students feel safe to ask questions, make mistakes, and grow confidently.",
      icon: (
        <svg className="w-8 h-8 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { number: "100%", label: "Dedication" },
    { number: "1 : 1", label: "Mentoring" },
    { number: "★ 5", label: "Trust" },
    { number: "∞", label: "Potential" },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans antialiased px-72">

    

      {/* ── HERO ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200 min-h-[420px]">
        {/* Left */}
        <div className="flex flex-col justify-center px-6 md:px-14 py-16 border-b md:border-b-0 md:border-r border-gray-200">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-7 h-0.5 bg-amber-500" />
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-500">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6">
            Transforming Students Into{" "}
            <em className="italic text-amber-500">Successful</em> Professionals
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-lg">
            At CareersBaba, we believe that the right guidance can transform a student's future.
            Our mission is to empower students with the knowledge, skills, and confidence they
            need to achieve their career goals.
          </p>
        </div>

       
  
          <div className="relative z-10 grid grid-cols-2  gap-px  w-max-w-sm">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col border-r border-b border-t  items-center justify-center py-9 px-4">
                <span className="text-5xl font-black text-amber-500 leading-none mb-2">{s.number}</span>
                <span className="text-xs tracking-widest uppercase  font-medium">{s.label}</span>
              </div>
            ))}
          </div>
      
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-14 py-16">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">Who We Are</span>
            <span className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug tracking-tight">
              A Trusted Name in{" "}
              <span className="italic text-amber-500">Education</span>
            </h2>
            <div className="space-y-4 text-gray-500 text-base leading-relaxed">
              <p>
                We are a dedicated educational institute focused on providing high-quality coaching,
                career guidance, and skill development programs. Whether you're preparing for
                competitive exams, improving academic performance, or exploring career opportunities,
                CareersBaba is here to support you at every step.
              </p>
              <p>
                Our experienced faculty members use practical teaching methods, personalized
                mentoring, and updated study materials to ensure every student reaches their full
                potential. We focus not just on results, but on building strong fundamentals and
                long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-14 py-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">Why Choose CareersBaba</span>
            <span className="flex-1 h-px bg-gray-200" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            Everything You Need to <span className="italic text-amber-500">Succeed</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-white p-8 group hover:bg-amber-50 transition-colors duration-200 relative overflow-hidden"
              >
                <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber-500 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300" />
                <div className="mb-4">{r.icon}</div>
                <h3 className="font-bold text-base text-gray-900 mb-2">{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-14 py-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">Our Purpose</span>
            <span className="flex-1 h-px bg-gray-200" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            Vision &amp; <span className="italic text-amber-500">Mission</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {/* Vision */}
            <div className="bg-gray-950 p-10 relative overflow-hidden">
              <span className="block text-xs font-bold tracking-widest uppercase text-amber-500 mb-4">Our Vision</span>
              <h3 className="text-xl font-bold text-white leading-snug mb-3">
                Leading the Future of Education
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                To become a leading institute that shapes successful careers through quality
                education and mentorship — building a generation of capable, confident, and
                career-ready individuals.
              </p>
              <span className="absolute bottom-3 right-5 text-8xl font-black text-white/5 select-none pointer-events-none leading-none">V</span>
            </div>
            {/* Mission */}
            <div className="bg-amber-50 p-10 relative overflow-hidden">
              <span className="block text-xs font-bold tracking-widest uppercase text-amber-500 mb-4">Our Mission</span>
              <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3">
                Accessible, Effective, Student-Focused Learning
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                To provide accessible, effective, and student-focused learning that helps
                individuals achieve their dreams — breaking barriers and opening doors to
                opportunity for every student.
              </p>
              <span className="absolute bottom-3 right-5 text-8xl font-black text-amber-400/10 select-none pointer-events-none leading-none">M</span>
            </div>
          </div>
        </div>
      </section>

     

      
    </div>
  );
}