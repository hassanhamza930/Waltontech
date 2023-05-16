"use client";

import { useState } from 'react';
import Header from './components/header';
import './globals.css'
import { IBM_Plex_Sans } from 'next/font/google';
import Footer from './components/footer';
import { motion } from 'framer-motion';
import { RecoilRoot } from 'recoil';
import { Metadata } from 'next';

// If loading a variable font, you don't need to specify the font weight
const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100", "200", "300", '400', "500", "600", "700"]
});


export const metadata: Metadata = {
  title: 'Walton',
  description: 'A fullstack UI/UX design and development studio.',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {

  const [sideBarOpen, setsideBarOpen] = useState(false);

  return (
    <html style={{ fontFamily: plex.style.fontFamily }} className={"bg-black/90 h-screen w-full"}>
      <link rel="icon" href="/logo.svg" />
      <head>
        <title>Walton</title>
      </head>
      <RecoilRoot>

        <motion.body
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header sideBarOpen={sideBarOpen} setSideBarOpen={setsideBarOpen} />
          {children}
          <Footer />
        </motion.body>
        
      </RecoilRoot>

    </html>
  )
}
