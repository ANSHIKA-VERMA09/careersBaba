'use client'
import emailjs from "@emailjs/browser";
import { useState, ChangeEvent, FormEvent } from 'react'
import { MdEmail, MdLocationOn, MdSend } from 'react-icons/md'
import { FaPhone, FaWhatsapp, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'

type FormData = {
    name: string
    email: string
    phone: string
    subject: string
    message: string
}
  
export default function ContactPage() {
    const [form, setForm] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })

    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
        await emailjs.send(
           process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            {
                name: form.name,
                email: form.email,
                phone: form.phone,
                subject: form.subject,
                message: form.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!   
        )


        setSent(true)

        setForm({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        })
    console.log("Message sent successfully")
    } catch (error) {
        console.error(error)
        alert("❌ Failed to send message")
    }

    setLoading(false)
}

    const contactCards = [
        {
            icon: <MdEmail className="text-xl" />,
            label: 'Email Us',
            value: 'info@careersbaba.in',
            href: 'mailto:info@careersbaba.in',
        },
        {
            icon: <FaPhone className="text-lg" />,
            label: 'Call Us',
            value: '+91 98977 53555',
            href: 'tel:+919897753555',
        },
        {
            icon: <IoLogoWhatsapp className="text-xl" />,
            label: 'WhatsApp',
            value: '+91 98977 53555',
            href: 'https://wa.me/919897753555',
        },
        {
            icon: <MdLocationOn className="text-xl" />,
            label: 'Location',
            value: 'New Delhi, India',
            href: '#map',
        },
    ]



    return (
        <div className="min-h-screen ">
            {/* Hero */}
            <section className="border-b border-white/10">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">


                    <div className="mt-6 max-w-3xl">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Get in touch with CareersBaba
                        </h1>
                        <p className="mt-4 text-xl leading-7 text-slate-700 sm:text-base">
                            Have questions about CUET, CAT, CLAT, or IPMAT preparation? Reach out to our team and we will help you with the right guidance.
                        </p>
                    </div>
                </div>
            </section>

          

            {/* Form + info */}
            <section className="pb-14">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                    {/* Form */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                        <p className="text-md font-semibold text-amber-400">Send Message</p>
                        <h2 className="mt-2 text-2xl font-bold">We’d love to hear from you</h2>
                        <p className="mt-2 text-xl leading-6 text-slate-900">
                            Fill out the form and our team will get back to you soon.
                        </p>

                        {sent ? (
                            <div className="mt-6 rounded-xl border border-green-500/20 bg-green-500/10 p-5 text-green-400">
                                <p className="text-lg font-semibold">Message sent successfully</p>
                                <p className="mt-1 text-sm text-slate-300">
                                    We’ll get back to you as soon as possible.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-md font-medium text-slate-900">
                                            Full Name
                                        </label>
                                        <input
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Rahul Sharma"
                                            className="w-full rounded-xl border border-slate-200  px-4 py-3 text-xl  outline-none placeholder:text-slate-500 focus:border-state-400"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-lg font-medium text-slate-900">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="you@email.com"
                                            className="w-full rounded-xl border border-slate-200
                                              px-4 py-3 text-xl  outline-none placeholder:text-slate-500 focus:border-slate-400"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-lg font-medium text-slate-900">
                                            Phone
                                        </label>
                                        <input
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+91 9XXXXXXXX"
                                            className="w-full rounded-xl border border-slate-200  px-4 py-3 text-xl  outline-none placeholder:text-slate-500 focus:border-slate-400"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-lg font-medium text-slate-900">
                                            Subject
                                        </label>
                                        <select
                                            name="subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-xl border  px-4 py-3 text-xl  outline-none focus:border-slate-400"
                                        >
                                            <option value="">Select exam</option>
                                            <option value="CUET">CUET</option>
                                            <option value="CAT">CAT</option>
                                            <option value="CLAT">CLAT</option>
                                            <option value="IPMAT">IPMAT</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-lg font-medium  text-slate-900">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        placeholder="Tell us how we can help..."
                                        className="w-full rounded-xl border border-slate-200  px-4 py-3 text-xl  outline-none placeholder:text-slate-500 focus:border-slate-400"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {loading ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            <MdSend className="text-base" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right side */}
                    <div className="space-y-6">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                            <p className="text-lg font-semibold text-black ">Connect With Us</p>
                            <h2 className="mt-2 text-2xl font-bold">Stay connected</h2>
                            <p className="mt-3 text-md leading-6 text-slate-000">
                                Follow CareersBaba for exam updates, preparation tips, mock tests, and student guidance.
                            </p>

                          
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                            <h3 className="text-lg font-semibold">Office Hours</h3>
                            <div className="mt-4 space-y-3 text-sm">
                                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                    <span className="text-slate-900 text-lg">Mon - Sat</span>
                                    <span className="font-medium text-black  text-xl">08:00 AM - 7:00 PM</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-slate-900 text-lg">Sunday</span>
                                    <span className="font-medium text-black text-xl">Closed</span>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>

            {/* Map */}
            <section id="map" className="pb-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <p className="text-xl font-semibold text-amber-400">Our Location</p>
                    <h2 className="mt-2 text-2xl font-bold">Find us here</h2>
                    <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                        <iframe
                            title="CareersBaba Location"
                            src="https://maps.google.com/maps?q=CAREERS%20BABA%20Noida%20Uttar%20Pradesh&z=17&output=embed"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-[320px] w-full"
                        />
                    </div>

                    <p className="mt-3 flex items-center gap-2 text-sm ">
                        <MdLocationOn className="text-red-400" />
                        <span className='text-xl '>BLK -03, Sector 121, Noida, Uttar Pradesh 201307</span>
                    </p>
                </div>
            </section>

           

        </div>
    )
}