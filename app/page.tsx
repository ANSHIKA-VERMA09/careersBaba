import Crausel from '@/components/Crausel';
import ListAllCourse from '@/components/ListAllCourse';
import Image from 'next/image'
import Link from 'next/link'

const stats = [
  { value: '5000+', label: 'Students Enrolled' },
  { value: '95%', label: 'Success Rate' },
  { value: '50+', label: 'Expert Mentors' },
  { value: '10+', label: 'Years Experience' },
]


const services = [
  {
    title: 'Exam Preparation',
    desc: 'Focused, structured classes designed to help you ace competitive exams—CUET, CAT, CLAT, IPMAT and more.',
    img: 'https://images.unsplash.com/photo-1655337690727-5224680c8c07?auto=format&fit=crop&w=600&q=80',
    icon: '📚',
  },
  {
    title: 'Expert Tutors',
    desc: 'Learn from experienced mentors who guide you step by step, clarify doubts, and build your confidence.',
    img: 'https://images.unsplash.com/photo-1581090124321-d19ad6d7cd5a?auto=format&fit=crop&w=600&q=80',
    icon: '🎓',
  },
  {
    title: 'Flexible Scheduling',
    desc: 'Choose batch timings that fit your lifestyle. Morning, evening, and weekend batches available.',
    img: 'https://images.unsplash.com/photo-1493794076453-02c6800c70a2?auto=format&fit=crop&w=600&q=80',
    icon: '🕐',
  },
]





const testimonials = [
  { name: 'Ravi Sharma', exam: 'CAT 2024', text: 'CareersBaba helped me crack CAT with confidence. The structured approach and mock tests made all the difference!', score: '99.2%ile' },
  { name: 'Priya Singh', exam: 'CUET 2024', text: 'Joined just 3 months before my exam—got into my dream college thanks to the focused coaching here.', score: 'Top 500' },
  { name: 'Arjun Mehta', exam: 'CLAT 2024', text: 'The expert tutors are phenomenal. They know exactly what questions will come and prepare you accordingly.', score: 'NLU Delhi' },
]

export default function Home() {
  return (
    <div className='mt-16'>
  
      {/* <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1557989048-03456d01a26e?auto=format&fit=crop&w=1920&q=80"
            alt="Students studying"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/10 via-dark/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl ">
         

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Dream of{' '}
              <span className="text-brand-400 relative">
               Our Success
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" fill="none">
                  <path d="M0 4 Q150 0 300 4" stroke="#f97316" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl">
              Expert coaching for CUET, CAT, CLAT, and IPMAT. Join thousands of successful students who cracked their exams with CareersBaba.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/career#apply"
                className="bg-brand-500 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-brand-600 transition-all hover:shadow-lg hover:shadow-brand-500/30 hover:-translate-y-0.5"
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
        </div>

      
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section> */}

      <Crausel/>

      {/* Stats
      <section className="bg-brand-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center text-white">
                <div className="font-display text-3xl sm:text-4xl font-bold mb-1">{s.value}</div>
                <div className="text-brand-100 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* list all courses */}
  <ListAllCourse/>


      {/* Services */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-widest uppercase">What We Offer</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark mt-2 mb-4">Our Services</h2>
            <p className="text-dark/30 max-w-xl mx-auto">Personalized coaching for exams like CUET, CAT, CLAT, and more—designed for every kind of learner.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">{s.desc}</p>
                  <Link href="/career" className="mt-4 inline-flex items-center gap-1 text-brand-500 text-sm font-medium hover:gap-2 transition-all">
                    Learn more <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-400 text-sm font-semibold tracking-widest uppercase">Why CareersBaba</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2 mb-6">
                Transforming Students into Top Rankers
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                We don't just teach—we mentor. Our approach combines rigorous academics with personalized attention, ensuring every student gets the guidance they need to succeed.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Personalized Study Plans', desc: 'Tailored to your strengths and weaknesses' },
                  { title: 'Daily Mock Tests', desc: 'Build speed, accuracy, and exam temperament' },
                  { title: 'Doubt-Clearing Sessions', desc: 'One-on-one support whenever you need it' },
                  { title: 'Result-Oriented Approach', desc: 'Consistent track record of top selections' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-white">{item.title}</div>
                      <div className="text-white/50 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                  alt="Coaching classroom"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-brand-500 text-white rounded-2xl p-5 shadow-xl">
                <div className="font-display text-2xl font-bold">5000+</div>
                <div className="text-brand-100 text-sm">Happy Students</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white text-dark rounded-2xl p-4 shadow-xl">
                <div className="font-display text-xl font-bold text-brand-500">95%</div>
                <div className="text-dark/60 text-xs">Selection Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-widest uppercase">Success Stories</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">What Our Students Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-brand-500 text-3xl font-display font-bold mb-4">"</div>
                <p className="text-dark/70 text-sm leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-dark">{t.name}</div>
                    <div className="text-dark/40 text-xs">{t.exam}</div>
                  </div>
                  <div className="bg-brand-50 text-brand-600 text-xs font-bold px-3 py-1.5 rounded-full border border-brand-200">
                    {t.score}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-brand-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white blur-2xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Ready to Crack Your Dream Exam?</h2>
          <p className="text-brand-100 mb-8 text-lg">Join CareersBaba today and start your journey to success with expert mentors by your side.</p>
          <Link
            href="/career#apply"
            className="bg-white text-brand-600 font-bold px-10 py-4 rounded-full hover:bg-brand-50 transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all inline-block"
          >
            Start Your Free Demo →
          </Link>
        </div>
      </section>
    </div>
  )
}
