import './globals.css'
import Header from '@/components/header'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from "react-hot-toast";
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daniel | Personal Portfolio',
  description: 'Daniel is a Software Engineer Student',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} 
      bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}> 
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[1rem] 
      h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] 
      sm:w-[68.75rem]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] 
      h-[50rem] w-[31.25rem] rounded-full blur-[10rem] 
      sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]
      xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      
      <ActiveSectionContextProvider>
        <Header />

        {children}

        <Toaster position="top-right" />
        <Footer />
      </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
