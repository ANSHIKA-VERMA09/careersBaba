"use client"
import { useState } from "react";
import {
  FaBell, FaArrowRight, FaNewspaper, FaGlobe, FaLandmark,
  FaFlask, FaLeaf, FaChartLine, FaBook, FaDownload,
  FaPlay, FaStar, FaCheckCircle, FaCalendarAlt, FaTag,
  FaFireAlt, FaBookmark, FaSearch, FaFilter
} from "react-icons/fa";
import type { IconType } from "react-icons";

// ─── Types ───────────────────────────────────────────────────────────────────

interface CAArticle {
  id: number;
  date: string;
  category: string;
  categoryColor: string;
  title: string;
  summary: string;
  gsPaper: string;
  tags: string[];
  isHot?: boolean;
  isBookmarked?: boolean;
}

interface MonthlyMag {
  month: string;
  year: string;
  pages: string;
  topics: string[];
  color: string;
  downloadCount: string;
}

interface CategoryFilter {
  label: string;
  icon: IconType;
  color: string;
  count: number;
}

interface WeeklyDigest {
  weekRange: string;
  highlights: string[];
  examRelevance: string;
}

interface Quiz {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const ARTICLES: CAArticle[] = [
  {
    id: 1,
    date: "Mar 15, 2026",
    category: "International Relations",
    categoryColor: "#0f3460",
    title: "India-EU Trade & Technology Council: Third Ministerial Meeting Outcomes",
    summary: "The third ministerial meeting of the India-EU Trade and Technology Council concluded with agreements on semiconductor supply chains, digital connectivity, and clean energy partnerships. Both sides agreed to accelerate negotiations on the Bilateral Investment Treaty.",
    gsPaper: "GS II — IR",
    tags: ["EU", "Trade", "Technology", "Diplomacy"],
    isHot: true,
  },
  {
    id: 2,
    date: "Mar 14, 2026",
    category: "Economy",
    categoryColor: "#14532d",
    title: "RBI Monetary Policy Committee Keeps Repo Rate Unchanged at 6.25%",
    summary: "The MPC unanimously voted to maintain the repo rate at 6.25% while shifting the stance to 'neutral'. Retail inflation eased to 4.1% in February, and GDP growth projection for FY27 set at 7.2%. Key focus on rural consumption and credit offtake.",
    gsPaper: "GS III — Economy",
    tags: ["RBI", "Monetary Policy", "Inflation", "GDP"],
    isHot: true,
  },
  {
    id: 3,
    date: "Mar 14, 2026",
    category: "Environment",
    categoryColor: "#166534",
    title: "IPCC AR7 Synthesis Report: South Asia Faces Heightened Climate Risk",
    summary: "The IPCC's seventh assessment synthesis report warns of accelerated glacial retreat in the Himalayas, increased frequency of extreme heat events, and threats to monsoon reliability. India's coastal cities face compounded risks from sea-level rise and cyclone intensification.",
    gsPaper: "GS III — Environment",
    tags: ["IPCC", "Climate Change", "South Asia", "Himalayas"],
  },
  {
    id: 4,
    date: "Mar 13, 2026",
    category: "Polity & Governance",
    categoryColor: "#7b1a1a",
    title: "Supreme Court Constitution Bench Upholds 'One Rank One Pension' Formula",
    summary: "A 5-judge Constitution Bench upheld the revised OROP formula, ruling it consistent with Article 14. The bench also directed the government to resolve pension anomalies within 6 months and establish a permanent review mechanism for defence pension revisions.",
    gsPaper: "GS II — Polity",
    tags: ["Supreme Court", "OROP", "Armed Forces", "Article 14"],
  },
  {
    id: 5,
    date: "Mar 13, 2026",
    category: "Science & Technology",
    categoryColor: "#1e3a5f",
    title: "ISRO Successfully Tests Reusable Launch Vehicle RLV-TD Autonomous Landing",
    summary: "ISRO's Reusable Launch Vehicle Technology Demonstrator completed its fourth autonomous landing experiment at Chitradurga aeronautical test range. The test validated critical deceleration algorithms at 1.6 Mach, a major milestone towards India's own space shuttle capability by 2028.",
    gsPaper: "GS III — S&T",
    tags: ["ISRO", "RLV", "Space Technology", "Reusable Rocket"],
    isHot: true,
  },
  {
    id: 6,
    date: "Mar 12, 2026",
    category: "Social Issues",
    categoryColor: "#78350f",
    title: "Census 2026 — Socio-Economic Data to Be Released in Phases Starting April",
    summary: "The Registrar General of India announced a phased release of Census 2026 data beginning April 1. The socio-economic data will include first-ever caste enumeration since 1931, literacy rate disaggregation by gender and district, and data on housing and sanitation access.",
    gsPaper: "GS I — Society",
    tags: ["Census", "Caste Enumeration", "Demographics", "Social Data"],
  },
];

const MONTHLY_MAGS: MonthlyMag[] = [
  {
    month: "March",
    year: "2026",
    pages: "54 pages",
    topics: ["Budget 2026 Analysis", "IR Summits", "SC Judgments", "IPCC AR7"],
    color: "#0f3460",
    downloadCount: "1,24,000+",
  },
  {
    month: "February",
    year: "2026",
    pages: "50 pages",
    topics: ["Union Budget Highlights", "Pravasi Bharatiya", "EV Policy", "Space Missions"],
    color: "#7b1a1a",
    downloadCount: "2,11,000+",
  },
  {
    month: "January",
    year: "2026",
    pages: "48 pages",
    topics: ["Republic Day Analysis", "New Year Schemes", "Arctic Policy", "Digital India 2.0"],
    color: "#14532d",
    downloadCount: "1,98,000+",
  },
];

const CATEGORIES: CategoryFilter[] = [
  { label: "All Topics", icon: FaNewspaper, color: "#111", count: 248 },
  { label: "International Relations", icon: FaGlobe, color: "#0f3460", count: 42 },
  { label: "Polity & Governance", icon: FaLandmark, color: "#7b1a1a", count: 38 },
  { label: "Economy", icon: FaChartLine, color: "#14532d", count: 51 },
  { label: "Science & Tech", icon: FaFlask, color: "#1e3a5f", count: 29 },
  { label: "Environment", icon: FaLeaf, color: "#166534", count: 33 },
];

const WEEKLY_DIGESTS: WeeklyDigest[] = [
  {
    weekRange: "Mar 10–15, 2026",
    highlights: [
      "India-EU TTC third ministerial, semiconductor deal signed",
      "RBI MPC holds repo at 6.25%, neutral stance adopted",
      "ISRO RLV fourth landing test success at Mach 1.6",
      "IPCC AR7 warns of amplified South Asian climate risk",
      "SC 5-bench upholds revised OROP formula",
    ],
    examRelevance: "High — GS II, III + Essay",
  },
  {
    weekRange: "Mar 3–9, 2026",
    highlights: [
      "PM inaugurates National Quantum Mission Phase I labs",
      "India signs $3.2B defence deal with France for Marine Rafale",
      "Lokpal issues show-cause notice to 3 secretaries",
      "National Urban Livelihoods Mission Phase III launched",
      "India's WPI inflation turns negative for third straight month",
    ],
    examRelevance: "High — GS II, III",
  },
];

const DAILY_QUIZ: Quiz[] = [
  {
    question: "Which article of the Indian Constitution deals with the composition of the Union Public Service Commission?",
    options: ["Article 312", "Article 315", "Article 320", "Article 323"],
    correct: 1,
    explanation: "Article 315 provides for the establishment of Public Service Commissions for the Union and the States. It specifies that there shall be a Public Service Commission for the Union and for each State.",
  },
  {
    question: "The 'Repo Rate' is the rate at which:",
    options: [
      "Banks lend to each other overnight",
      "RBI lends short-term funds to commercial banks",
      "RBI borrows from commercial banks",
      "Government borrows from RBI",
    ],
    correct: 1,
    explanation: "The Repo Rate (Repurchase Rate) is the rate at which the Reserve Bank of India lends money to commercial banks for short-term requirements against government securities. It is a key instrument of monetary policy.",
  },
];

const GS_MAPPING: { paper: string; color: string; todayCount: number; weekCount: number }[] = [
  { paper: "GS Paper I", color: "#0f3460", todayCount: 3, weekCount: 18 },
  { paper: "GS Paper II", color: "#7b1a1a", todayCount: 5, weekCount: 31 },
  { paper: "GS Paper III", color: "#14532d", todayCount: 6, weekCount: 37 },
  { paper: "GS Paper IV", color: "#78350f", todayCount: 1, weekCount: 8 },
  { paper: "Essay Topics", color: "#1e3a5f", todayCount: 2, weekCount: 12 },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function CurrentAffairsPage() {
  const [activeCategory, setActiveCategory] = useState("All Topics");
  const [bookmarked, setBookmarked] = useState<Set<number>>(new Set());
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleBookmark = (id: number) => {
    setBookmarked((prev) => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  const handleOptionSelect = (i: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(i);
    setShowExplanation(true);
  };

  const currentQuiz = DAILY_QUIZ[quizIndex % DAILY_QUIZ.length];

  const filteredArticles = ARTICLES.filter((a) => {
    const matchCat = activeCategory === "All Topics" || a.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

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
          padding: "64px 24px 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ambient glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 75% 25%, rgba(255,153,0,0.13) 0%, transparent 45%), radial-gradient(circle at 15% 75%, rgba(19,136,8,0.07) 0%, transparent 45%)",
            pointerEvents: "none",
          }}
        />
        {/* grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,153,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,153,0,0.03) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            pointerEvents: "none",
          }}
        />
        {/* polity text watermark */}
        <div
          style={{
            position: "absolute",
            top: 56,
            right: 440,
            color: "rgba(255,153,0,0.07)",
            fontFamily: "'Crimson Pro', Georgia, serif",
            fontSize: 12,
            lineHeight: 2,
            pointerEvents: "none",
          }}
        >
          <div>GS II — Governance & IR | GS III — Economy & Environment</div>
          <div>GS I — Society, Heritage & Geography | GS IV — Ethics</div>
          <div>Prelims — Current Events of National & International Importance</div>
        </div>

        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: 48,
            alignItems: "center",
            position: "relative",
          }}
        >
          <div>
            {/* badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,153,0,0.12)",
                border: "1px solid rgba(255,153,0,0.4)",
                borderRadius: 20,
                padding: "5px 14px",
                marginBottom: 22,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#ff9900",
                  display: "inline-block",
                  animation: "pulse 1.5s infinite",
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  color: "#ffb84d",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                Updated Daily by 7AM IST
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Crimson Pro', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "white",
                marginBottom: 16,
                lineHeight: 1.2,
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Current Affairs for UPSC,
              <br />
              <span style={{ color: "#ff9900" }}>SSC &amp; Banking Exams</span>
            </h1>

            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.75,
                marginBottom: 32,
                maxWidth: 520,
              }}
            >
              Every news item is tagged to its{" "}
              <span
                style={{
                  background: "rgba(255,153,0,0.15)",
                  color: "#ffb84d",
                  padding: "2px 8px",
                  borderRadius: 4,
                  fontFamily: "monospace",
                  fontSize: 14,
                }}
              >
                GS Paper
              </span>{" "}
              and{" "}
              <span
                style={{
                  background: "rgba(255,153,0,0.15)",
                  color: "#ffb84d",
                  padding: "2px 8px",
                  borderRadius: 4,
                  fontFamily: "monospace",
                  fontSize: 14,
                }}
              >
                Exam Topic
              </span>
              . Daily briefs, weekly consolidations, monthly magazines — all exam-mapped. Study smarter, not more.
            </p>

            {/* search bar */}
            <div
              style={{
                display: "flex",
                gap: 0,
                background: "white",
                borderRadius: 12,
                overflow: "hidden",
                maxWidth: 480,
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
            >
              <div
                style={{
                  padding: "0 16px",
                  display: "flex",
                  alignItems: "center",
                  color: "#aaa",
                }}
              >
                <FaSearch size={15} />
              </div>
              <input
                type="text"
                placeholder="Search topics, schemes, bills, reports…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  padding: "13px 0",
                  border: "none",
                  outline: "none",
                  fontSize: 14,
                  color: "#333",
                  fontFamily: "sans-serif",
                }}
              />
              <button
                style={{
                  background: "#d97706",
                  color: "white",
                  border: "none",
                  padding: "0 20px",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  fontFamily: "monospace",
                }}
              >
                Search
              </button>
            </div>

            {/* quick stats */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 32,
                marginTop: 36,
              }}
            >
              {[
                ["248", "Articles This Month"],
                ["7AM", "Daily Brief Time"],
                ["50 pg", "Monthly Magazine"],
                ["12", "GS-Mapped Topics"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#ff9900",
                      fontFamily: "monospace",
                    }}
                  >
                    {v}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.45)",
                      marginTop: 3,
                      fontFamily: "sans-serif",
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Brief Card */}
          <div
            style={{
              background: "white",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 24px 64px rgba(0,0,0,0.45)",
            }}
          >
            <div
              style={{
                background: "#06112a",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: 12,
                  color: "#ffb84d",
                  fontWeight: 700,
                }}
              >
                📰 Today's Brief — Mar 15, 2026
              </div>
              <span
                style={{
                  background: "rgba(255,153,0,0.2)",
                  color: "#ff9900",
                  fontSize: 10,
                  fontWeight: 700,
                  padding: "3px 8px",
                  borderRadius: 20,
                  fontFamily: "monospace",
                }}
              >
                6 Stories
              </span>
            </div>
            <div style={{ padding: "16px 20px" }}>
              {ARTICLES.slice(0, 5).map((a, i) => (
                <div
                  key={a.id}
                  style={{
                    display: "flex",
                    gap: 10,
                    paddingBottom: 12,
                    marginBottom: 12,
                    borderBottom: i < 4 ? "1px solid #f5f0e8" : "none",
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: a.categoryColor,
                      marginTop: 6,
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#111",
                        lineHeight: 1.4,
                        fontFamily: "sans-serif",
                        marginBottom: 3,
                      }}
                    >
                      {a.title.length > 62 ? a.title.slice(0, 62) + "…" : a.title}
                    </div>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: a.categoryColor,
                        fontFamily: "monospace",
                        background: a.categoryColor + "18",
                        padding: "2px 6px",
                        borderRadius: 4,
                      }}
                    >
                      {a.gsPaper}
                    </span>
                  </div>
                  {a.isHot && (
                    <FaFireAlt size={11} color="#d97706" style={{ marginTop: 2, flexShrink: 0 }} />
                  )}
                </div>
              ))}
              <button
                style={{
                  width: "100%",
                  background: "#0f3460",
                  color: "white",
                  padding: "11px",
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "monospace",
                  marginTop: 4,
                }}
              >
                Read Full Brief →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────────────────────── */}
      <div style={{ background: "#06112a", padding: "10px 24px", overflow: "hidden" }}>
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span
            style={{
              background: "#d97706",
              color: "white",
              fontSize: 11,
              fontWeight: 700,
              padding: "3px 10px",
              borderRadius: 4,
              whiteSpace: "nowrap",
              fontFamily: "monospace",
            }}
          >
            TODAY
          </span>
          <div style={{ display: "flex", gap: 36, overflow: "hidden" }}>
            {[
              "RBI MPC holds repo at 6.25% — neutral stance 💹",
              "ISRO RLV fourth autonomous landing test SUCCESS 🚀",
              "IPCC AR7: South Asia faces accelerated glacial retreat 🌊",
              "Census 2026 data release from April 1 — caste data after 95 years 📊",
              "India-EU TTC: semiconductor & clean energy deal signed 🤝",
            ].map((t, i) => (
              <span
                key={i}
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.75)",
                  whiteSpace: "nowrap",
                }}
              >
                <FaBell
                  size={11}
                  style={{ marginRight: 5, verticalAlign: "middle", opacity: 0.6 }}
                />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>

        {/* GS PAPER MAPPING STRIP */}
        <section style={{ padding: "40px 0 0" }}>
          <div
            style={{
              background: "white",
              borderRadius: 20,
              border: "1px solid #e4d9c8",
              padding: "24px 32px",
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#0f3460",
                textTransform: "uppercase",
                marginBottom: 20,
                fontFamily: "sans-serif",
              }}
            >
              📌 GS Paper Mapping — Today's Coverage
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
              {GS_MAPPING.map((g, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      height: 6,
                      borderRadius: 3,
                      background: "#f0ece4",
                      marginBottom: 10,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${Math.min((g.todayCount / 8) * 100, 100)}%`,
                        background: g.color,
                        borderRadius: 3,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: g.color,
                      fontFamily: "monospace",
                      marginBottom: 4,
                    }}
                  >
                    {g.todayCount}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#888",
                      fontFamily: "sans-serif",
                      lineHeight: 1.4,
                    }}
                  >
                    {g.paper}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#bbb",
                      fontFamily: "monospace",
                      marginTop: 2,
                    }}
                  >
                    {g.weekCount} this week
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CATEGORY FILTERS + ARTICLES ──────────────────────────────── */}
        <section style={{ padding: "48px 0" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "220px 1fr",
              gap: 32,
              alignItems: "start",
            }}
          >
            {/* Sidebar Filters */}
            <div>
              <div
                style={{
                  background: "white",
                  borderRadius: 18,
                  border: "1px solid #e4d9c8",
                  overflow: "hidden",
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    padding: "16px 20px",
                    borderBottom: "1px solid #f5f0e8",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <FaFilter size={12} color="#d97706" />
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#111",
                      fontFamily: "sans-serif",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Filter by Topic
                  </span>
                </div>
                {CATEGORIES.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCategory(cat.label)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 20px",
                      border: "none",
                      background: activeCategory === cat.label ? cat.color + "12" : "transparent",
                      borderLeft:
                        activeCategory === cat.label
                          ? `3px solid ${cat.color}`
                          : "3px solid transparent",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <cat.icon size={13} color={cat.color} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: activeCategory === cat.label ? 700 : 500,
                          color: activeCategory === cat.label ? cat.color : "#555",
                          fontFamily: "sans-serif",
                        }}
                      >
                        {cat.label}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: cat.color,
                        background: cat.color + "18",
                        padding: "2px 7px",
                        borderRadius: 20,
                        fontFamily: "monospace",
                      }}
                    >
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Daily Quiz Widget */}
              <div
                style={{
                  background: "linear-gradient(135deg, #06112a, #0f2044)",
                  borderRadius: 18,
                  border: "1px solid rgba(255,153,0,0.2)",
                  overflow: "hidden",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 16,
                  }}
                >
                  <FaStar size={13} color="#d97706" />
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#ffb84d",
                      fontFamily: "monospace",
                      letterSpacing: "0.06em",
                    }}
                  >
                    DAILY QUIZ
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.6,
                    marginBottom: 14,
                    fontFamily: "sans-serif",
                  }}
                >
                  {currentQuiz.question}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {currentQuiz.options.map((opt, i) => {
                    let bg = "rgba(255,255,255,0.07)";
                    let borderColor = "rgba(255,255,255,0.12)";
                    let textColor = "rgba(255,255,255,0.75)";
                    if (selectedOption !== null) {
                      if (i === currentQuiz.correct) {
                        bg = "rgba(20,83,45,0.5)";
                        borderColor = "#16a34a";
                        textColor = "#86efac";
                      } else if (i === selectedOption) {
                        bg = "rgba(123,26,26,0.5)";
                        borderColor = "#ef4444";
                        textColor = "#fca5a5";
                      }
                    }
                    return (
                      <button
                        key={i}
                        onClick={() => handleOptionSelect(i)}
                        style={{
                          padding: "9px 12px",
                          borderRadius: 8,
                          border: `1px solid ${borderColor}`,
                          background: bg,
                          color: textColor,
                          fontSize: 12,
                          textAlign: "left",
                          cursor: selectedOption !== null ? "default" : "pointer",
                          fontFamily: "sans-serif",
                          lineHeight: 1.4,
                          transition: "all 0.15s",
                        }}
                      >
                        <span style={{ fontFamily: "monospace", marginRight: 6 }}>
                          {String.fromCharCode(65 + i)}.
                        </span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {showExplanation && (
                  <div
                    style={{
                      marginTop: 12,
                      padding: "10px 12px",
                      background: "rgba(255,153,0,0.12)",
                      borderRadius: 8,
                      border: "1px solid rgba(255,153,0,0.25)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 11,
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 1.6,
                        fontFamily: "sans-serif",
                      }}
                    >
                      💡 {currentQuiz.explanation}
                    </p>
                    <button
                      onClick={() => {
                        setQuizIndex((p) => p + 1);
                        setSelectedOption(null);
                        setShowExplanation(false);
                      }}
                      style={{
                        marginTop: 8,
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#ffb84d",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "monospace",
                      }}
                    >
                      Next Question →
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Articles */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 24,
                }}
              >
                <div>
                  <h2
                    style={{
                      fontFamily: "'Crimson Pro', Georgia, serif",
                      fontSize: "1.8rem",
                      color: "#111",
                      marginBottom: 4,
                    }}
                  >
                    {activeCategory === "All Topics" ? "Latest Articles" : activeCategory}
                  </h2>
                  <p
                    style={{ fontSize: 13, color: "#888", fontFamily: "sans-serif" }}
                  >
                    {filteredArticles.length} articles • Updated Mar 15, 2026
                  </p>
                </div>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "8px 16px",
                    borderRadius: 8,
                    border: "1.5px solid #e4d9c8",
                    background: "white",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#555",
                    cursor: "pointer",
                    fontFamily: "sans-serif",
                  }}
                >
                  <FaFilter size={11} /> Filter
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {filteredArticles.map((a) => (
                  <div
                    key={a.id}
                    style={{
                      background: "white",
                      borderRadius: 18,
                      padding: "24px 28px",
                      border: "1px solid #e4d9c8",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* left accent bar */}
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: 4,
                        background: a.categoryColor,
                        borderRadius: "0 0 0 0",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        marginBottom: 10,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: a.categoryColor,
                            background: a.categoryColor + "14",
                            padding: "3px 10px",
                            borderRadius: 20,
                            fontFamily: "monospace",
                          }}
                        >
                          {a.category}
                        </span>
                        <span
                          style={{
                            fontSize: 10,
                            color: "#aaa",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {a.date}
                        </span>
                        {a.isHot && (
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 4,
                              fontSize: 10,
                              fontWeight: 700,
                              color: "#d97706",
                              background: "#fef3c7",
                              padding: "2px 8px",
                              borderRadius: 20,
                              fontFamily: "monospace",
                            }}
                          >
                            <FaFireAlt size={9} /> HOT
                          </span>
                        )}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(a.id);
                        }}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: bookmarked.has(a.id) ? "#d97706" : "#ccc",
                          padding: 4,
                        }}
                      >
                        <FaBookmark size={14} />
                      </button>
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Crimson Pro', Georgia, serif",
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "#111",
                        marginBottom: 10,
                        lineHeight: 1.35,
                      }}
                    >
                      {a.title}
                    </h3>

                    <p
                      style={{
                        fontSize: 13.5,
                        color: "#555",
                        lineHeight: 1.75,
                        marginBottom: 16,
                        fontFamily: "sans-serif",
                      }}
                    >
                      {a.summary}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: a.categoryColor,
                            background: a.categoryColor + "18",
                            padding: "3px 10px",
                            borderRadius: 6,
                            fontFamily: "monospace",
                          }}
                        >
                          📌 {a.gsPaper}
                        </span>
                        {a.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontSize: 11,
                              color: "#888",
                              background: "#f0ece4",
                              padding: "3px 10px",
                              borderRadius: 6,
                              fontFamily: "sans-serif",
                            }}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <button
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          fontSize: 12,
                          fontWeight: 700,
                          color: a.categoryColor,
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontFamily: "monospace",
                        }}
                      >
                        Read More <FaArrowRight size={10} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div
                  style={{
                    textAlign: "center",
                    padding: "60px 20px",
                    background: "white",
                    borderRadius: 18,
                    border: "1px solid #e4d9c8",
                  }}
                >
                  <div style={{ fontSize: 36, marginBottom: 12 }}>🔍</div>
                  <p
                    style={{
                      fontSize: 15,
                      color: "#888",
                      fontFamily: "sans-serif",
                    }}
                  >
                    No articles found. Try a different search or category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── WEEKLY DIGEST ────────────────────────────────────────────── */}
        <section style={{ paddingBottom: 48 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#d97706",
                textTransform: "uppercase",
                marginBottom: 10,
                fontFamily: "sans-serif",
              }}
            >
              Weekly Consolidation
            </p>
            <h2
              style={{
                fontFamily: "'Crimson Pro', Georgia, serif",
                fontSize: "clamp(1.8rem,3vw,2.4rem)",
                color: "#111",
              }}
            >
              Weekly Digest Archives
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {WEEKLY_DIGESTS.map((w, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: 18,
                  padding: "28px",
                  border: "1px solid #e4d9c8",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 18,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#111",
                        fontFamily: "monospace",
                      }}
                    >
                      📅 {w.weekRange}
                    </div>
                  </div>
                  <span
                    style={{
                      background: "#fef3c7",
                      color: "#92400e",
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: 20,
                      fontFamily: "monospace",
                    }}
                  >
                    Exam Relevance: {w.examRelevance}
                  </span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
                  {w.highlights.map((h, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        gap: 10,
                        fontSize: 13,
                        color: "#444",
                        lineHeight: 1.5,
                        marginBottom: 10,
                        fontFamily: "sans-serif",
                      }}
                    >
                      <FaCheckCircle
                        size={13}
                        color="#d97706"
                        style={{ marginTop: 2, flexShrink: 0 }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    style={{
                      flex: 1,
                      background: "#0f3460",
                      color: "white",
                      padding: "10px",
                      borderRadius: 10,
                      fontSize: 12,
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "monospace",
                    }}
                  >
                    Read Full Digest
                  </button>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "10px 16px",
                      borderRadius: 10,
                      border: "1.5px solid #e4d9c8",
                      background: "white",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#555",
                      cursor: "pointer",
                      fontFamily: "sans-serif",
                    }}
                  >
                    <FaDownload size={11} /> PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── MONTHLY MAGAZINES ────────────────────────────────────────── */}
        <section style={{ paddingBottom: 48 }}>
          <div
            style={{
              background: "linear-gradient(135deg, #06112a, #0f2044)",
              borderRadius: 24,
              padding: "48px 40px",
              border: "1px solid rgba(255,153,0,0.15)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 250,
                height: 250,
                borderRadius: "50%",
                background: "rgba(217,119,6,0.12)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 24,
                right: 40,
                color: "rgba(255,153,0,0.05)",
                fontFamily: "monospace",
                fontSize: 11,
                lineHeight: 2,
                pointerEvents: "none",
              }}
            >
              <div>Part XVIII — Emergency Provisions (Art. 352–360)</div>
              <div>Part XIX — Miscellaneous (Art. 361–367)</div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ marginBottom: 36 }}>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "#ff9900",
                    textTransform: "uppercase",
                    marginBottom: 10,
                    fontFamily: "sans-serif",
                  }}
                >
                  Monthly Magazine — Free Download
                </p>
                <h2
                  style={{
                    fontFamily: "'Crimson Pro', Georgia, serif",
                    fontSize: "clamp(1.6rem,2.5vw,2rem)",
                    color: "white",
                    marginBottom: 8,
                  }}
                >
                  Current Affairs Monthly Magazine
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: 15,
                    fontFamily: "sans-serif",
                  }}
                >
                  50+ pages of exam-mapped current affairs. No login required.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                {MONTHLY_MAGS.map((mag, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: 16,
                      padding: "24px 20px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      transition: "transform 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-4px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0)")
                    }
                  >
                    {/* magazine cover mock */}
                    <div
                      style={{
                        background: mag.color,
                        borderRadius: 10,
                        padding: "16px",
                        marginBottom: 16,
                        textAlign: "center",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                      <FaNewspaper size={28} color="rgba(255,255,255,0.6)" style={{ marginBottom: 8 }} />
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "white",
                          fontFamily: "'Crimson Pro', serif",
                        }}
                      >
                        {mag.month} {mag.year}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "rgba(255,255,255,0.6)",
                          fontFamily: "monospace",
                        }}
                      >
                        {mag.pages}
                      </div>
                    </div>

                    <div style={{ marginBottom: 14 }}>
                      {mag.topics.map((t, j) => (
                        <div
                          key={j}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            fontSize: 12,
                            color: "rgba(255,255,255,0.65)",
                            marginBottom: 6,
                            fontFamily: "sans-serif",
                          }}
                        >
                          <FaCheckCircle size={10} color="#d97706" />
                          {t}
                        </div>
                      ))}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: 12,
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 10,
                          color: "rgba(255,255,255,0.4)",
                          fontFamily: "monospace",
                        }}
                      >
                        {mag.downloadCount} downloads
                      </span>
                      <button
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#ffb84d",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontFamily: "monospace",
                        }}
                      >
                        <FaDownload size={10} /> Free PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SUBSCRIPTION CTA ─────────────────────────────────────────── */}
        <section style={{ paddingBottom: 80 }}>
          <div
            style={{
              background: "white",
              borderRadius: 24,
              border: "1px solid #e4d9c8",
              padding: "48px 40px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, rgba(15,52,96,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(217,119,6,0.04) 0%, transparent 50%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>📬</div>
              <h2
                style={{
                  fontFamily: "'Crimson Pro', Georgia, serif",
                  fontSize: "clamp(1.6rem,2.5vw,2.2rem)",
                  color: "#111",
                  marginBottom: 10,
                }}
              >
                Never Miss a News Story That Matters
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "#777",
                  marginBottom: 28,
                  maxWidth: 480,
                  margin: "0 auto 28px",
                  lineHeight: 1.65,
                  fontFamily: "sans-serif",
                }}
              >
                Get the daily 2-page Current Affairs brief in your inbox every morning by 7AM IST.
                Free forever — no credit card.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 0,
                  maxWidth: 440,
                  margin: "0 auto 16px",
                  background: "#f5f3ee",
                  borderRadius: 12,
                  border: "1.5px solid #e4d9c8",
                  overflow: "hidden",
                }}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    flex: 1,
                    padding: "13px 18px",
                    border: "none",
                    outline: "none",
                    fontSize: 14,
                    background: "transparent",
                    color: "#333",
                    fontFamily: "sans-serif",
                  }}
                />
                <button
                  style={{
                    background: "#d97706",
                    color: "white",
                    border: "none",
                    padding: "0 24px",
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: "pointer",
                    fontFamily: "monospace",
                    whiteSpace: "nowrap",
                  }}
                >
                  Subscribe Free →
                </button>
              </div>
              <p
                style={{
                  fontSize: 11,
                  color: "#bbb",
                  fontFamily: "sans-serif",
                }}
              >
                Join 2,80,000+ aspirants • Unsubscribe anytime • No spam
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ── FOOTER CTA ───────────────────────────────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(135deg, #06112a, #0f2044)",
          padding: "80px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              "linear-gradient(rgba(255,153,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,153,0,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: 48,
            color: "rgba(255,153,0,0.05)",
            fontFamily: "monospace",
            fontSize: 12,
            lineHeight: 2,
            pointerEvents: "none",
            textAlign: "left",
          }}
        >
          <div>while not_selected:</div>
          <div>&nbsp;&nbsp;read_current_affairs()</div>
          <div>&nbsp;&nbsp;revise()</div>
          <div>&nbsp;&nbsp;attempt()</div>
        </div>
        <div style={{ position: "relative", padding: "16px 0" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🏛️</div>
          <h2
            style={{
              fontFamily: "'Crimson Pro', Georgia, serif",
              fontSize: "clamp(1.8rem,3vw,2.5rem)",
              color: "white",
              marginBottom: 12,
            }}
          >
            Stay Informed. Stay Ahead.{" "}
            <em style={{ color: "#ff9900" }}>Crack the Exam.</em>
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.55)",
              marginBottom: 32,
              fontFamily: "sans-serif",
            }}
          >
            Pair Current Affairs with our full prep courses and give yourself the best shot.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <button
              style={{
                background: "#d97706",
                color: "white",
                padding: "12px 32px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                fontFamily: "'Crimson Pro', serif",
              }}
            >
              Explore Full Courses
            </button>
            <button
              style={{
                background: "rgba(255,255,255,0.07)",
                color: "white",
                padding: "12px 32px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 600,
                border: "1px solid rgba(255,255,255,0.2)",
                cursor: "pointer",
              }}
            >
              Download March Magazine PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}