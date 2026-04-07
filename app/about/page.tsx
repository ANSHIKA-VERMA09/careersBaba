import AboutCareersBaba from '@/components/AboutCareersBaba';
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
      <section className="relative h-[300px] sm:h-[450px] lg:h-[70vh] overflow-hidden text-white">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/4.jpeg"
            fill
            alt="about_image"
            className="object-cover object-center"
            priority
          />
          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content - vertically & horizontally centered */}
        

      </section>

      {/* Mission / Vision */}
      <section className="py-4 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">

          <span className="text-brand-500 text- sm:text-xl font-semibold tracking-widest uppercase">
            Who We Are
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mt-3 mb-6">
            Faculty
          </h2> 

          <p className="text-dark leading-relaxed mb-4 text-sm sm:text-base md:text-xl">
            Ankur Sir is the founder and mentor behind Careers Baba. He holds a B.Tech degree from MNNIT Allahabad and has also appeared for the Civil Services Interview. With a strong command over Polity and General Studies, he is known as a dedicated mentor who guides students with clarity, strategy, and confidence
          </p>

          <p className="text-dark leading-relaxed mb-8 text-sm sm:text-base md:text-xl">
            Nitika Ma’am is an inspiring mentor at Careers Baba, combining academic excellence, competitive exam experience, and a learner-first approach. She holds a B.Tech in Computer Science, has qualified UGC NET in Sociology, and has also appeared for the Civil Services Interview. Her diverse academic background and practical understanding of the aspirant journey make her a trusted guide for students seeking focused preparation, confidence, and clarity. Through Careers Baba, she is committed to empowering learners with the right direction, knowledge, and motivation to achieve success.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {[
              { icon: '🎯', label: 'Result-Focused' },
              { icon: '🤝', label: 'Mentor-Driven' },
              { icon: '💡', label: 'Innovation-Led' },
              { icon: '🌍', label: 'Accessible to All' },
            ].map((v) => (
              <div
                key={v.label}
                className="flex flex-col items-center justify-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <span className="text-2xl mb-1">{v.icon}</span>
                <span className="font-medium text-xs sm:text-sm">{v.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Content */}
      <AboutCareersBaba />

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
