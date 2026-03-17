import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import Link from 'next/link'



const milestones = [
  {
    year: "Dec 2025",
    event:
      "CareerBaba was started with a simple goal to help students and freshers understand real-world skills and career paths in tech."
  },
  {
    year: "Jan 2026",
    event:
      "Launched the initial version of the platform with basic resources, including career roadmaps, blogs, and guidance for beginners."
  },
  {
    year: "Feb 2026",
    event:
      "Introduced practical projects and coding challenges to help learners build hands-on experience in web development."
  },
  {
    year: "Mar 2026",
    event:
      "Started building a small but active learner community and began providing mentorship and doubt-solving support."
  },
  {
    year: "Apr 2026",
    event:
      "Working on improving the platform with structured learning paths, better UI, and more real-world project content."
  },
  {
    year: "Ongoing",
    event:
      "Focused on growing CareerBaba into a trusted platform for career guidance, skill development, and job preparation."
  }
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden bg-dark text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            alt='about_image'
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-400 text-sm font-semibold tracking-widest uppercase">Our Story</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
            About CareersBaba
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Founded with a mission to make world-class exam preparation accessible to every aspiring student in India—regardless of location or background.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80"
                  alt="Students learning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-brand-500 text-white rounded-xl p-6 shadow-xl max-w-xs">
                <p className="font-display text-sm italic">"Every student deserves the best shot at their dream."</p>
                <p className="text-brand-200 text-xs mt-2">— Dr. Anand Verma, Founder</p>
              </div>
            </div>
            <div>
              <span className="text-brand-500 text-sm font-semibold tracking-widest uppercase">Who We Are</span>
              <h2 className="font-display text-3xl font-bold text-dark mt-2 mb-6">
                A Community of Achievers
              </h2>
              <p className="text-dark/60 leading-relaxed mb-4">
                CareersBaba was born out of a simple observation: brilliant students were failing competitive exams not because of ability, but because of lack of access to quality guidance. We set out to change that.
              </p>
              <p className="text-dark/60 leading-relaxed mb-8">
                Today, we're a growing community of students, educators, and mentors, all united by one goal—helping you crack your dream exam and step into the college of your choice.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🎯', label: 'Result-Focused' },
                  { icon: '🤝', label: 'Mentor-Driven' },
                  { icon: '💡', label: 'Innovation-Led' },
                  { icon: '🌍', label: 'Accessible to All' },
                ].map((v) => (
                  <div key={v.label} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                    <span className="text-2xl">{v.icon}</span>
                    <span className="font-medium text-sm">{v.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-widest uppercase">Our Journey</span>
            <h2 className="font-display text-3xl font-bold mt-2">Milestones That Define Us</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-brand-200 md:-translate-x-0.5" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-16 md:pl-0`}>
                    <div className="bg-cream rounded-xl p-5 inline-block text-left">
                      <div className="font-display text-brand-500 font-bold text-lg">{m.year}</div>
                      <p className="text-dark/70 text-sm mt-1 leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-6 md:static md:flex-none flex items-start pt-5 md:pt-0 md:items-center">
                    <div className="w-3 h-3 rounded-full bg-brand-500 ring-4 ring-brand-100 md:mx-auto" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 text-sm font-semibold tracking-widest uppercase">The Team</span>
            <h2 className="font-display text-3xl font-bold mt-2">Meet Our Mentors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                  <p className="text-brand-500 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-dark/60 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <h1 className='text-9xl font-extrabold text-center mb-8 '>Alumni of NIT</h1>
      {/* <AnimatedText/> */}
      {/* CTA */}
      <section className="py-20 bg-brand-500 text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Be Part of Our Story</h2>
          <p className="text-brand-100 mb-8">Thousands of students have trusted us to guide their journey. Are you next?</p>
          <Link href="/career#apply" className="bg-white text-brand-600 font-bold px-8 py-3.5 rounded-full hover:bg-brand-50 transition-colors inline-block">
            Join CareersBaba Today
          </Link>
        </div>
      </section>
    </div>
  )
}
