import Link from 'next/link'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaTwitter,FaYoutube, FaInstagram,FaWhatsapp }   from "react-icons/fa";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
                      <Image src="/1.jpeg" alt='kimds' width={50} height={50} className='rounded-full'/>
              
              <span className="font-display font-bold text-xl text-white">Careers<span className="text-brand-400">Baba</span></span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Helping thousands of students crack competitive exams like CUET, CAT, CLAT, and IPMAT with expert guidance.
            </p>


            <div className="mt-6 flex gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/17ktc9MmSD/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-colors shadow-md"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-700 text-white flex items-center justify-center transition-colors shadow-md"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-sky-400 text-white flex items-center justify-center transition-colors shadow-md"
                aria-label="Twitter"
              >
                <FaTwitter size={16} />
              </a>

              {/* Instagram */}
               <a
                href="https://www.instagram.com/careersbaba?igsh=MThvZGRrbDBnaHRmeQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#feda75] hover:via-[#fa7e1e] hover:to-[#d62976] text-white flex items-center justify-center transition-colors shadow-md"
                aria-label="Twitter"
              >
                <FaInstagram size={16} />
              </a>

              {/* YouTube */}
               <a
                href="https://youtube.com/@careersbaba?si=oB8DJawgThwXFeD2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors shadow-md"
                aria-label="Twitter"
              >
                <FaYoutube size={16} />
              </a>
               <a
                href="https://whatsapp.com/channel/0029VbBqzrF1CYoKQLmBFn3g"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 text-white flex items-center justify-center transition-colors shadow-md"
                aria-label="Twitter"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[['Home', '/'], ['Career', '/career'], ['About', '/about']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-lg text-white/60 hover:text-brand-400 transition-colors flex items-center gap-2">
                    <span className=" rounded-full bg-brand-500 inline-block" />
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
                <a href='mailto:Info@careersbaba.in' className='flex items-center justify-center gap-1'>

                  <MdEmail size={20} color='#F59E0B' />
                  <span className='ml-1 text-xl'> Info@careersbaba.in</span>
                </a>
              </p>
              <p className="flex items-start gap-3">
                <a href='tel:++91 98977 53555' className='flex items-center justify-center gap-1'>

                  <FaPhone size={20} color='#22D3EE' />
                  <span className='text-xl'> +91 98977 53555</span>
                </a>
              </p>
               <p className="flex items-start gap-3">
                <a href='tel:++91 79069 98255' className='flex items-center justify-center gap-1'>

                  <FaPhone size={20} color='#22D3EE' />
                  <span className='text-xl'> +91 79069 98255</span>
                </a>
              </p>
              <p className="flex items-start gap-3">
                <a href='https://wa.me/919897753555' className='flex items-center justify-center gap-1'>

                  <IoLogoWhatsapp size={20} color='#25D366' />
                  <span className='text-xl'> +91 98977 53555</span>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© 2025 CareersBaba. All rights reserved.</p>
       
        </div>
      </div>
    </footer>
  )
}
