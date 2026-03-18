'use client'
import Image from 'next/image'
import { useState } from 'react'

const courses = [
  {
    name: 'CUET Mastery',
    category: 'Undergraduate',
    duration: '6 Months',
    price: '₹18,000',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
    features: ['150+ hours of live classes', 'Full syllabus coverage', '50 mock tests', 'Doubt-clearing sessions', 'Study material included'],
    badge: 'Most Popular',
    color: 'bg-brand-500',
  },
  {
    name: 'CAT Intensive',
    category: 'MBA Entrance',
    duration: '8 Months',
    price: '₹24,000',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    features: ['200+ hours of live classes', 'Verbal & Quant deep dive', '100 CAT-level mocks', 'Personal mentoring', 'Interview prep included'],
    badge: 'Best Value',
    color: 'bg-dark',
  },
  {
    name: 'CLAT Pro',
    category: 'Law Entrance',
    duration: '5 Months',
    price: '₹15,000',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
    features: ['120+ hours of live classes', 'Legal Aptitude focus', '40 full-length mocks', 'GK update classes', 'NLU-specific strategy'],
    badge: null,
    color: 'bg-brand-700',
  },
  {
    name: 'IPMAT Ace',
    category: 'IIM Entrance',
    duration: '5 Months',
    price: '₹16,000',
    img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80',
    features: ['130+ hours of live classes', 'Math & English mastery', '45 mock tests', 'IIM Indore/Rohtak strategy', 'Previous year analysis'],
    badge: 'New Batch',
    color: 'bg-orange-700',
  },
]

const faqs = [
  { q: 'Are the classes online or offline?', a: 'We offer both modes—live online classes and offline batches at our centers. Students can switch modes based on their preference.' },
  { q: 'When are the new batches starting?', a: 'New batches start every month. The next batch begins on the 1st of the following month. Fill the form below to get notified.' },
  { q: 'Is there a free demo class?', a: 'Yes! Every student gets a free demo session before enrolling. No commitment required.' },
  { q: 'What materials are provided?', a: 'All enrolled students receive curated study material, access to our question bank, and recorded video lectures.' },
]

export default function CareerPage() {
  const [activeTab, setActiveTab] = useState('All')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [form, setForm] = useState({ name: '', phone: '', email: '', exam: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const categories = ['All', 'Undergraduate', 'MBA Entrance', 'Law Entrance', 'IIM Entrance']
  const filtered = activeTab === 'All' ? courses : courses.filter((c) => c.category === activeTab)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-28  text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80"
            alt="Career guidance"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark/10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-brand-400 text-sm font-semibold tracking-widest uppercase">Explore Courses</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6">
              Build Your Career with the Right Exam
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Choose from our expert-designed courses for CUET, CAT, CLAT, IPMAT, and more. Structured, result-oriented, and crafted by toppers.
            </p>
            <div className="flex flex-wrap gap-3">
              {['CUET', 'CAT', 'CLAT', 'IPMAT'].map((exam) => (
                <span key={exam} className="bg-white/10 border border-white/20 text-white text-sm px-4 py-1.5 rounded-full">
                  {exam}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-500 text-sm font-semibold tracking-widest uppercase">Our Courses</span>
            <h2 className="font-display text-3xl font-bold mt-2 mb-6">Choose Your Path</h2>
            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === cat ? 'bg-brand-500 text-white shadow-sm' : 'bg-white text-dark/60 hover:bg-brand-50 hover:text-brand-500 border border-orange-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {filtered.map((course) => (
              <div key={course.name} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative h-44 overflow-hidden">
                  <Image src={course.img} alt={course.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute inset-0 ${course.color} opacity-60`} />
                  {course.badge && (
                    <span className="absolute top-3 right-3 bg-white text-brand-600 text-xs font-bold px-2.5 py-1 rounded-full">
                      {course.badge}
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-xs opacity-80 mb-0.5">{course.category}</div>
                    <div className="font-display text-xl font-bold">{course.name}</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-dark/50 text-xs flex items-center gap-1">
                      <span>⏱</span> {course.duration}
                    </div>
                    {/* <div className="font-display font-bold text-brand-500 text-lg">{course.price}</div> */}
                  </div>
                  <ul className="space-y-2 mb-5">
                    {course.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-dark/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#apply"
                    className="block text-center bg-brand-500 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-brand-600 transition-colors"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-widest uppercase">How It Works</span>
            <h2 className="font-display text-3xl font-bold mt-2">Your Journey in 4 Steps</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Book a Free Demo', desc: 'Attend a free session to experience our teaching methodology.', icon: '🎯' },
              { step: '02', title: 'Choose Your Course', desc: 'Select the exam and batch that fits your schedule and goals.', icon: '📋' },
              { step: '03', title: 'Start Learning', desc: 'Dive into live classes, mocks, and doubt-clearing sessions.', icon: '📖' },
              { step: '04', title: 'Crack the Exam', desc: 'Appear for your exam with full confidence and preparation.', icon: '🏆' },
            ].map((step) => (
              <div key={step.step} className="relative bg-cream rounded-2xl p-6 text-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                  {step.step}
                </div>
                <div className="text-4xl mt-4 mb-3">{step.icon}</div>
                <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-dark/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-500 text-sm font-semibold tracking-widest uppercase">FAQ</span>
            <h2 className="font-display text-3xl font-bold mt-2">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-dark">{faq.q}</span>
                  <span className={`text-brand-500 text-xl transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-dark/60 text-sm leading-relaxed border-t border-orange-50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      {/* <section id="apply" className="py-24 bg-dark text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-400 text-sm font-semibold tracking-widest uppercase">Enroll Today</span>
            <h2 className="font-display text-3xl font-bold mt-2">Book Your Free Demo</h2>
            <p className="text-white/50 mt-3 text-sm">No payment required. Just fill in your details and we'll reach out.</p>
          </div>

          {submitted ? (
            <div className="bg-white/10 border border-white/20 rounded-2xl p-12 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-display text-2xl font-bold text-brand-400 mb-2">You're on the list!</h3>
              <p className="text-white/60">Our team will contact you within 24 hours to schedule your free demo session.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/60 text-xs mb-1.5 uppercase tracking-wide">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-400 text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs mb-1.5 uppercase tracking-wide">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-400 text-sm"
                    placeholder="+91 9XXXXXXXXX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/60 text-xs mb-1.5 uppercase tracking-wide">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-400 text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-white/60 text-xs mb-1.5 uppercase tracking-wide">Target Exam *</label>
                <select
                  required
                  value={form.exam}
                  onChange={(e) => setForm({ ...form, exam: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-400 text-sm"
                >
                  <option value="" disabled className="bg-dark">Select your target exam</option>
                  {['CUET', 'CAT', 'CLAT', 'IPMAT', 'Other'].map((e) => (
                    <option key={e} value={e} className="bg-dark">{e}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white/60 text-xs mb-1.5 uppercase tracking-wide">Message (Optional)</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-400 text-sm resize-none"
                  placeholder="Any specific questions or requirements?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-500 text-white font-bold py-4 rounded-xl hover:bg-brand-600 transition-colors text-sm tracking-wide"
              >
                Book My Free Demo Session →
              </button>
            </form>
          )}
        </div>
      </section> */}
    </div>
  )
}
