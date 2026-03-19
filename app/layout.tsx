import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CareersBaba – CUET, CAT, CLAT, IPMAT Coaching | Expert Exam Preparation',
  description: 'CareersBaba offers focused coaching for CUET, CAT, CLAT, IPMAT and government exams. 5000+ students, 95% success rate. Join now for free demo class.',
  keywords: 'CUET coaching, CAT preparation, CLAT coaching, IPMAT coaching, competitive exam coaching India',
  authors: [{ name: 'CareersBaba' }],
  metadataBase: new URL('https://yourwebsite.com'), // apna domain dalo
  openGraph: {
    title: 'CareersBaba – Expert Exam Preparation',
    description: 'Join 5000+ students. Expert coaching for CUET, CAT, CLAT, IPMAT.',
    url: 'https://careersbaba.in/',
    siteName: 'CareersBaba',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CareersBaba – Expert Exam Preparation',
    description: 'Join 5000+ students. Expert coaching for CUET, CAT, CLAT, IPMAT.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-cream text-dark">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
