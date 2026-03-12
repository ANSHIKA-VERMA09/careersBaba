"use client"
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80",
    badge: "CUET 2026",
    heading: "Your Dream,",
    highlight: "Our Success",
    sub: "Expert coaching for CUET, CAT, CLAT, and IPMAT. Join thousands of successful students who cracked their exams with CareersBaba.",
    tag: "🎯 #1 CUET Platform in India",
  },
  {
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1920&q=80",
    badge: "CUET 2026",
    heading: "Your Dream,",
    highlight: "Our Success",
    sub: "Expert coaching for CUET, CAT, CLAT, and IPMAT. Join thousands of successful students who cracked their exams with CareersBaba.",
    tag: "🎯 #1 CUET Platform in India",
  },
  {
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1920&q=80",
    badge: "CUET 2026",
    heading: "Your Dream,",
    highlight: "Our Success",
    sub: "Expert coaching for CUET, CAT, CLAT, and IPMAT. Join thousands of successful students who cracked their exams with CareersBaba.",
    tag: "🎯 #1 CUET Platform in India",
  },
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80",
    badge: "CUET 2026",
    heading: "Your Dream,",
    highlight: "Our Success",
    sub: "Expert coaching for CUET, CAT, CLAT, and IPMAT. Join thousands of successful students who cracked their exams with CareersBaba.",
    tag: "🎯 #1 CUET Platform in India",
  },
];

const STATS = [
  { value: "50,000+", label: "Students Enrolled" },
  { value: "92%", label: "Selection Rate" },
  { value: "340+", label: "Partner Colleges" },
  { value: "4.9★", label: "Google Rating" },
];

export default function Crausel() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const DURATION = 2000;

  const goTo = useCallback(
    (idx: number) => {
      if (animating || idx === current) return;
      setPrev(current);
      setAnimating(true);
      setProgress(0);
      setCurrent(idx);
      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 500);
    },
    [animating, current]
  );

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);
  const goToPrev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => next(), DURATION);
    return () => clearInterval(interval);
  }, [next, paused]);

  // Progress bar
  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min(((now - start) / DURATION) * 100, 100);
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [current, paused]);

  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, goToPrev]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative max-h-96 flex items-center overflow-hidden pt-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── SLIDE IMAGES ── */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 z-0 transition-opacity duration-[800ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
        >
          <Image
            src={s.image}
            alt={s.highlight}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-2xl">

          {/* Badge */}
          <div
            key={`badge-${current}`}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-[fadeSlideUp_0.6s_ease_both]"
          >
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-orange-300 text-xs font-bold tracking-widest uppercase font-mono">
              {slide.badge}
            </span>
          </div>

          {/* Heading */}
          <h1
            key={`heading-${current}`}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-[fadeSlideUp_0.65s_0.05s_ease_both]"
          >
            {slide.heading}{" "}
            <span className="text-orange-400 relative inline-block">
              {slide.highlight}
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 8"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 4 Q150 0 300 4"
                  stroke="#f97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          {/* Sub */}
          <p
            key={`sub-${current}`}
            className="text-white/80 text-lg leading-relaxed mb-4 max-w-xl animate-[fadeSlideUp_0.7s_0.1s_ease_both]"
          >
            {slide.sub}
          </p>

          {/* Tag */}
          <div
            key={`tag-${current}`}
            className="inline-block text-sm text-white/60 mb-10 animate-[fadeSlideUp_0.7s_0.15s_ease_both]"
          >
            {slide.tag}
          </div>

          {/* CTAs */}
          <div
            key={`cta-${current}`}
            className="flex flex-wrap gap-4 animate-[fadeSlideUp_0.75s_0.2s_ease_both]"
          >
            <Link
              href="/career#apply"
              className="bg-orange-500 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-orange-600 transition-all hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              Enroll Now — Free Demo
            </Link>
            <Link
              href="/about"
              className="border border-white/40 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition-all"
            >
              Learn More ↓
            </Link>
          </div>
        </div>

        {/* ── STATS ROW ── */}
        <div className="mt-20 flex flex-wrap gap-x-10 gap-y-4">
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl font-bold text-orange-400 font-mono">{s.value}</span>
              <span className="text-xs text-white/50 mt-0.5 uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SLIDE COUNTER (top-right) ── */}
      <div className="absolute top-24 right-8 z-20 hidden lg:flex items-center gap-3">
        <span className="text-white/40 text-xs font-mono">
          {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>

      {/* ── PREV / NEXT ARROWS ── */}
      <button
        onClick={goToPrev}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* ── DOTS + PROGRESS ── */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative h-[3px] rounded-full overflow-hidden transition-all duration-300"
            style={{ width: i === current ? 48 : 20, background: "rgba(255,255,255,0.25)" }}
          >
            {i === current && (
              <span
                className="absolute inset-y-0 left-0 bg-orange-400 rounded-full"
                style={{ width: `${progress}%`, transition: "width 0.05s linear" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ── THUMBNAIL STRIP (bottom-right) ──
      <div className="absolute bottom-16 right-8 z-20 hidden lg:flex flex-col gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="relative w-16 h-10 rounded-lg overflow-hidden border-2 transition-all duration-300"
            style={{ borderColor: i === current ? "#f97316" : "rgba(255,255,255,0.2)", opacity: i === current ? 1 : 0.5 }}
          >
            <Image src={s.image} alt={s.highlight} fill className="object-cover" sizes="64px" />
          </button>
        ))}
      </div> */}

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>

      {/* ── KEYFRAMES ── */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}