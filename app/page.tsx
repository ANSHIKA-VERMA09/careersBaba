import Crausel from '@/components/Crausel';
import ListAllCourse from '@/components/ListAllCourse';
import TextMarquee from '@/components/TextMarquee';
import Video from '@/components/Video';
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
    
  },
  {
    title: 'Expert Tutors',
    desc: 'Learn from experienced mentors who guide you step by step, clarify doubts, and build your confidence.',
    img: 'https://images.unsplash.com/photo-1581090124321-d19ad6d7cd5a?auto=format&fit=crop&w=600&q=80',
   
  },
  {
    title: 'Flexible Scheduling',
    desc: 'Choose batch timings that fit your lifestyle. Morning, evening, and weekend batches available.',
    img: 'https://images.unsplash.com/photo-1493794076453-02c6800c70a2?auto=format&fit=crop&w=600&q=80',
   
  },
]





const testimonials = [
  {
    name: 'Priyanka',
    exam: 'UPTET',
    text: 'CareerBaba helped me build strong fundamentals in data science. The projects and guidance gave me real confidence.',
    score: 'Completed 10+ Projects'
  },
  {
    name: 'Dhruv',
    exam: 'Gov Exam',
    text: 'The structured roadmap and hands-on learning made complex topics like ML and Python easy to understand.',
    score: 'Built ML Models'
  },
  {
    name: 'Shruti',
    exam: 'UPSC',
    text: 'I improved my practical skills a lot. The mentorship support really helped me clear my doubts quickly.',
    score: 'Internship Ready'
  },
  {
    name: 'Vikas',
    exam: 'Data Science Program',
    text: 'CareerBaba gave me real-world exposure with projects and datasets. It feels like industry-level learning.',
    score: 'Portfolio Ready'
  },
  {
    name: 'Mangadeep',
    exam: 'Data Science Program',
    text: 'From zero to understanding data analysis and visualization, this journey has been amazing.',
    score: 'SQL + Python'
  },
  {
    name: 'Aman',
    exam: 'Data Science Program',
    text: 'The best part is the practical approach. I can now confidently work on real datasets and problems.',
    score: 'Real-world Projects'
  },
  {
    name: 'Riya',
    exam: 'Data Science Program',
    text: 'The learning environment is very supportive. It helped me stay consistent and improve every day.',
    score: 'Job Preparation'
  }
];

export default function Home() {
  return (
    <div className='mt-16'>
  
     

      <Crausel/>
      <TextMarquee/>
      <ListAllCourse/>


      {/* Services */}
      {/* <section className="py-24 bg-cream">
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
      </section> */}

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
                  src="/2.jpeg"
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
      
      {/* <Video/> */}

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
                <p className="text-dark/70 text-md leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-dark text-xl">{t.name}</div>
                    <div className="text-dark/40 text-lg">{t.exam}</div>
                  </div>
                  {/* <div className="bg-brand-50 text-brand-600 text-xs font-bold px-3 py-1.5 rounded-full border border-brand-200">
                    {t.score}
                  </div> */}
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
            className="bg-white text-brand-600 font-bold px-10 py-4 rounded-full hover:bg-brand-50 transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5  inline-block"
          >
            Start Your Free Demo →
          </Link>
        </div>
      </section>
    </div>
  )
}
