import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center text-white font-bold text-lg">C</span>
              <span className="font-display font-bold text-xl text-white">Careers<span className="text-brand-400">Baba</span></span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Helping thousands of students crack competitive exams like CUET, CAT, CLAT, and IPMAT with expert guidance.
            </p>
            <div className="mt-6 flex gap-3">
              {['f', 'in', 'tw'].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-500 flex items-center justify-center text-xs font-bold transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[['Home', '/'], ['Career', '/career'], ['About', '/about']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/60 hover:text-brand-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-brand-500 inline-block" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-white/60">
              <p className="flex items-start gap-3">
                <span className="text-brand-400 mt-0.5">✉</span>
                <span>Info@careersbaba.in</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-brand-400 mt-0.5">📞</span>
                <span>+91 98977 53555</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-brand-400 mt-0.5">📍</span>
                <span>India</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© 2025 CareersBaba. All rights reserved.</p>
          <p>Built with ❤ for ambitious students</p>
        </div>
      </div>
    </footer>
  )
}
