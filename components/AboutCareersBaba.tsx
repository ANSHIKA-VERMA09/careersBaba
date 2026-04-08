import React from "react";
import ServiceSection from "./ServiceSection";
import Card from "./Card";

export default function AboutCareersBaba() {
  const reasons = [
    {
      title: "Expert & Supportive Faculty",
      desc: "Seasoned educators who bring subject mastery, empathy, and genuine investment in every student's growth.",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
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
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
    },
    {
      title: "Result-Oriented Teaching",
      desc: "Our structured approach targets measurable outcomes — exam scores, skill certifications, and career placements.",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      title: "Updated Study Material",
      desc: "Continuously refreshed content and test series aligned with the latest exam patterns and industry standards.",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      title: "Friendly & Motivating Environment",
      desc: "A warm, encouraging atmosphere where students feel safe to ask questions, make mistakes, and grow confidently.",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { number: "100%", label: "Dedication" },
    { number: "1:1", label: "Mentoring" },
    { number: "★ 5", label: "Trust" },
    { number: "∞", label: "Potential" },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans antialiased w-full overflow-x-hidden">

      {/* ── HERO ── */}
      {/* <section className="border-b border-gray-200"> */}
      {/* <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[auto] lg:min-h-[480px]"> */}

      {/* Left: Text */}
      {/* <div className="flex flex-col justify-center px-5 sm:px-10 lg:px-14 py-10 sm:py-14 lg:py-16 border-b lg:border-b-0 lg:border-r border-gray-200">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="block w-6 sm:w-7 h-0.5 bg-amber-500" />
              <span className="text-xs font-semibold tracking-widest uppercase text-amber-500">About Us</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4 sm:mb-6">
              Transforming Students Into{" "}
              <em className="italic text-amber-500">Successful</em> Professionals
            </h1>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-lg">
              At CareersBaba, we believe that the right guidance can transform a student's future.
              Our mission is to empower students with the knowledge, skills, and confidence they
              need to achieve their career goals.
            </p>
          </div> */}

      {/* Right: Stats 2x2 Grid */}
      {/* <div className="grid grid-cols-2">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center py-8 sm:py-10 lg:py-14 px-4 border-gray-200
                  ${i % 2 === 0 ? "border-r" : ""}
                  ${i < 2 ? "border-b" : ""}
                `}
              >
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-amber-500 leading-none mb-1 sm:mb-2">
                  {s.number}
                </span>
                <span className="text-xs tracking-widest uppercase font-medium text-gray-500 text-center">
                  {s.label}
                </span>
              </div>
            ))}
          </div> */}
      {/* </div> */}
      {/* </section> */}

      {/* ── WHO WE ARE ── */}
      {/* <section className="border-b border-gray-200">
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-10 lg:px-14 py-10 sm:py-14 lg:py-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 whitespace-nowrap">
              Who We Are
            </span>
            <span className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-tight">
              A Trusted Name in{" "}
              <span className="italic text-amber-500">Education</span>
            </h2>
            <div className="space-y-4 text-gray-500 text-sm sm:text-base leading-relaxed">
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
      </section> */}

      {/* ── WHY CHOOSE ── */}
      <section className="border-b border-gray-200 bg-white dark:bg-slate-950">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-10 lg:px-14 py-16 sm:py-20">

          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-12 sm:mb-16 text-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm sm:text-base font-bold tracking-[0.3em] uppercase text-red-700">
                Our Volunteers
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Meet Our Team <span className="italic text-amber-500 font-serif">Succeed</span>
            </h2>
            <div className="mt-5 h-1.5 w-24 bg-amber-500 rounded-full"></div>
          </div>

          {/* Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid  grid-cols-1 sm:grid-cols-2 place-items-center  gap-10">

            <Card
              title="Er. Ankur Singhal"
              description="Appeared for the Civil Services Interview"
              imageSrc="/8.jpeg"
              // category="Er. Ankur Singhal is a dedicated educator with a strong academic background in engineering from MNNIT Allahabad. He has appeared for the Civil Services Interview, showcasing his deep understanding of competitive examinations and real exam experience.

              // Along with General Studies, he also specializes in Mathematics and Data Science, bridging analytical thinking with exam-oriented preparation. His expertise helps students develop both conceptual clarity and problem-solving skills."
            />
            <Card
              title="Er. Nitika Dwivedi "
              description="Appeared for the Civil Services Interview"
              imageSrc="/9.jpeg"

            />
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="border-b border-gray-200">
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-10 lg:px-14 py-10 sm:py-14 lg:py-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 whitespace-nowrap">
              Our Purpose
            </span>
            <span className="flex-1 h-px bg-gray-200" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-8 sm:mb-10">
            Vision &amp; <span className="italic text-amber-500">Mission</span>
          </h2>

          {/* Stack on mobile, side by side on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {/* Vision */}
            <div className="bg-gray-950 p-7 sm:p-8 lg:p-10 relative overflow-hidden">
              <span className="block text-xs font-bold tracking-widest uppercase text-amber-500 mb-3 sm:mb-4">
                Our Vision
              </span>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-snug mb-3">
                Leading the Future of Education
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                To become a leading institute that shapes successful careers through quality
                education and mentorship — building a generation of capable, confident, and
                career-ready individuals.
              </p>
              <span className="absolute bottom-2 right-4 text-6xl sm:text-8xl font-black text-white/5 select-none pointer-events-none leading-none">
                V
              </span>
            </div>

            {/* Mission */}
            <div className="bg-amber-50 p-7 sm:p-8 lg:p-10 relative overflow-hidden">
              <span className="block text-xs font-bold tracking-widest uppercase text-amber-500 mb-3 sm:mb-4">
                Our Mission
              </span>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 leading-snug mb-3">
                Accessible, Effective, Student-Focused Learning
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                To provide accessible, effective, and student-focused learning that helps
                individuals achieve their dreams — breaking barriers and opening doors to
                opportunity for every student.
              </p>
              <span className="absolute bottom-2 right-4 text-6xl sm:text-8xl font-black text-amber-400/10 select-none pointer-events-none leading-none">
                M
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}