"use client";

import { useState } from 'react';
import Header from './components/header';
import './globals.css'
import { IBM_Plex_Sans} from 'next/font/google';
 
// If loading a variable font, you don't need to specify the font weight
const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100","200","300",'400',"500","600","700"]
});
 
export default function RootLayout({children}: {children: React.ReactNode}) {

  const [sideBarOpen, setsideBarOpen] = useState(false);

  return (
    <html style={{fontFamily:plex.style.fontFamily}} className={"bg-tan h-screen w-full"}>
      <body>
        <Header sideBarOpen={sideBarOpen} setSideBarOpen={setsideBarOpen} />
        {children}
      </body>
    </html>
  )
}
