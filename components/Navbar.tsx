'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import TopBar from './TopBar'


const links = [
  { label: 'Home', href: '/' },
  { label: 'Career', href: '/career' },
  { label: 'About', href: '/about' },

  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname();

  const TOP_BAR_HEIGHT = 50;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <div
        className="fixed left-0 right-0 z-50 transition-transform duration-300"
         style={{
          top: "0px",
          display:scrolled ? "none":"flex",
        }}
      >
        <TopBar />
      </div>

      {/* ── Main Header: slides up as TopBar disappears ── */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300
          bg-cream/95 backdrop-blur-md shadow-sm border-b border-orange-100
        `}
        style={{
          top: scrolled ? "0px" : `${TOP_BAR_HEIGHT}px`,
        }}
      >
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group ">
            <Image src="/1.jpeg" alt='kimds' width={50} height={50} className='rounded-sm' />
            <span className="font-display font-extrabold text-xl text-indigo-950 uppercase ">Careers<span className="text-brand-400">Baba</span></span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-md font-medium tracking-wide transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:bg-brand-500 after:transition-all after:duration-300 ${pathname === l.href
                    ? 'text-brand-500 after:w-full'
                    : 'text-dark/70 hover:text-brand-500 after:w-0 hover:after:w-full'
                  }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/career#apply"
              className="bg-brand-500 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-brand-600 transition-colors shadow-sm hover:shadow-md"
            >
              Enroll Now
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-dark transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-dark transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-dark transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-64 bg-cream border-b border-orange-100' : 'max-h-0'}`}>
          <nav className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium py-1 border-b border-orange-100 ${pathname === l.href ? 'text-brand-500' : 'text-dark/70'}`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/career#apply"
              onClick={() => setOpen(false)}
              className="mt-2 bg-brand-500 text-white font-semibold px-5 py-2.5 rounded-full text-center"
            >
              Enroll Now
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}
