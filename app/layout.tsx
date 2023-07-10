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




export default function RootLayout({ children }: { children: React.ReactNode }) {

  const [sideBarOpen, setsideBarOpen] = useState(false);

  return (
    <html style={{ fontFamily: plex.style.fontFamily }} className={"bg-black/90 h-screen w-full"}>
      <link rel="icon" href="/logo.svg" />
      <head>
        <title>Walton</title>
        <meta name="description" content="A fullstack UI/UX design and development studio." />
        <meta name="keywords" content="UI/UX Design,Fullstack,Web Development,Agency,Walton."/>
          <meta name="author" content="John Doe" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <RecoilRoot>

        <motion.body
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header sideBarOpen={sideBarOpen} setSideBarOpen={setsideBarOpen} />
          {children}
          {/* <Footer /> */}
        </motion.body>

      </RecoilRoot>

    </html>
  )
}
