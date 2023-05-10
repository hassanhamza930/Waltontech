"use client";

import { useState } from "react";
import {useScroll,useMotionValueEvent} from "framer-motion";
import HeroSection from "./components/herosection";

export default function LandingPage() {


  const { scrollY } = useScroll({smooth: 0.5})
    const [y, setY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest:any) => {
      setY(latest);
    })

    return (
        <div className="tracking-normal flex flex-col justify-center items-center">
            <HeroSection y={y}/>
            {/* <HeroSection y={y}  />
            <WhatWeDo />
            <WhoWeAre />
            <OurTechStack />
            <OurWorkflow/>
            <Contact/>  */}
        </div>
    );
}
