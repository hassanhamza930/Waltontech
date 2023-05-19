"use client";


import { IBM_Plex_Sans } from "next/font/google";
import Header, { SideMenu } from "./components/header";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, MotionValue, useMotionValue, useMotionValueEvent, useScroll, useTransform, motionValue, animate, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { isBlackBackgroundAtom } from "./atoms";
import { useRecoilState } from "recoil";
import Hero from "./components/hero";
import Whatwedo from "./components/whatwedo";
import { Metadata } from "next";
import About from "./components/about";
import Work from "./components/work";
import CustomCursor from "./components/cursor";
import DesignIsCore from "./components/designIsCore";
import Whatwvedone from "./components/whatwevedone";
import Contact from "./components/contact";

const plex = IBM_Plex_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: ["100", "200", "300", '400', "500", "600", "700"]
});




function Design() {

    const [sideBarOpen, setsideBarOpen] = useState(false);
    const [isBlackBg, setisBlackBg] = useRecoilState(isBlackBackgroundAtom);

   
    return (
        <div style={{ fontFamily: plex.style.fontFamily }} className="cursor-none hover:cursor-none h-full w-full bg-tan flex flex-col justify-start items-start">
            <CustomCursor />
           

            <Header setSideBarOpen={setsideBarOpen} sideBarOpen={sideBarOpen} />

            <AnimatePresence>
                {sideBarOpen && <SideMenu setSideBarOpen={setsideBarOpen} sideBarOpen={sideBarOpen} />}
            </AnimatePresence>

            <Hero />
            <Whatwedo />
            <About />
            <DesignIsCore/>
            <Whatwvedone />
            <Contact />

    

        </div>
    );
}

export default Design;