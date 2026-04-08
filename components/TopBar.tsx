"use client";

import Link from "next/link";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const contactInfo = [
    {
        id: "email",
        href: "mailto:Info@careersbaba.in",
        icon: <MdEmail size={15} />,
        label: "Info@careersbaba.in",
        external: false,
    },
    {
        id: "address",
        href: "https://maps.google.com/?q=BLK-03+Sector+121+Noida+Uttar+Pradesh+201307",
        icon: <MdLocationOn size={15} />,
        label: "BLK-03, Sector 121, Noida, UP 201307",
        external: true,
    },
];

const socialLinks = [
    {
        id: "facebook",
        href: "https://facebook.com/careersbaba",
        icon: <FaFacebookF size={12} />,
        label: "Facebook",
    },
    {
        id: "twitter",
        href: "https://twitter.com/careersbaba",
        icon: <FaXTwitter size={12} />,
        label: "Twitter / X",
    },
    {
        id: "instagram",
        href: "https://instagram.com/careersbaba",
        icon: <FaInstagram size={12} />,
        label: "Instagram",
    },
    {
        id: "youtube",
        href: "https://youtube.com/@careersbaba",
        icon: <FaYoutube size={12} />,
        label: "YouTube",
    },
    {
        id: "linkedin",
        href: "https://linkedin.com/company/careersbaba",
        icon: <FaLinkedinIn size={12} />,
        label: "LinkedIn",
    },
];

export default function TopBar() {
    return (
        <div className="w-full bg-[#0b1a35] py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Single row on sm+, two rows on mobile ── */}
                <div className="flex  sm:flex-row sm:items-center items-center justify-between sm:justify-between py-2 sm:py-0 sm:h-10 gap-2 sm:gap-0">

                    {/* ── Left: Email + Address ── */}
                    <div className="flex  items-center gap-x-5 gap-y-1.5">

                        {/* Email */}
                        <Link
                            href="mailto:Info@careersbaba.in"
                            className="group flex items-center gap-1.5 text-white/65 hover:text-amber-400 transition-colors duration-200 no-underline"
                        >
                            <span className="text-white group-hover:text-amber-400 transition-colors duration-200 flex items-center">
                                <MdEmail size={20} />
                            </span>
                            <span className="text-[11.5px] hidden sm:flex text-white sm:text-[16px] font-normal tracking-wide whitespace-nowrap">
                                Info@careersbaba.in
                            </span>
                        </Link>

                        {/* Divider — hidden on mobile */}
                        <span className="hidden sm:block w-px h-3.5 bg-white/15 mx-3" />

                        {/* Address */}
                        <Link
                            href="https://maps.google.com/?q=BLK-03+Sector+121+Noida+UP+201307"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-1.5 text-white/65 hover:text-amber-400 transition-colors duration-200 no-underline"
                        >
                            <span className="text-white group-hover:text-amber-400 transition-colors duration-200 flex items-center">
                                <MdLocationOn size={20} />
                            </span>
                            <span className="text-[11.5px] text-white sm:text-[16px] font-normal tracking-wide whitespace-nowrap">
                                {/* Short on mobile, full on sm+ */}
                                <span className="hidden sm:inline">BLK-03, Sector 121, Noida, UP 201307</span>
                            </span>
                        </Link>
                    </div>



                    <div className=" flex gap-4">
                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/share/17ktc9MmSD/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-colors shadow-md"
                            aria-label="Facebook"
                        >
                            <FaFacebookF size={16}  />
                        </a>

                       
                       
                        <a
                            href="https://www.instagram.com/careersbaba?igsh=MThvZGRrbDBnaHRmeQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#feda75] hover:via-[#fa7e1e] hover:to-[#d62976] text-white flex items-center justify-center transition-colors shadow-md"
                            aria-label="Twitter"
                        >
                            <FaInstagram size={16} />
                        </a>

                        {/* YouTube */}
                        <a
                            href="https://youtube.com/@careersbaba?si=oB8DJawgThwXFeD2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors shadow-md"
                            aria-label="Twitter"
                        >
                            <FaYoutube size={16} />
                        </a>
                        <a
                            href="https://whatsapp.com/channel/0029VbBqzrF1CYoKQLmBFn3g"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-green-600 text-white flex items-center justify-center transition-colors shadow-md"
                            aria-label="Twitter"
                        >
                            <FaWhatsapp size={16} />
                        </a>
                    </div>



                </div>
            </div>
        </div>
    );
}