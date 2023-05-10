"use client";

import { useState } from "react";
import {useScroll,useMotionValueEvent} from "framer-motion";
import HeroSection from "./components/herosection";
import WhatWeDo from "./components/whatwedo";
import WhoWeAre from "./components/whoweare";
import OurWorkflow from "./components/ourworkflow";
import Contact from "./components/contact";

export default function LandingPage() {


  const { scrollY } = useScroll({smooth: 0.7})
    const [y, setY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest:any) => {
      setY(latest);
    })

    return (
        <div className="tracking-normal flex flex-col justify-center items-center">
            <HeroSection y={y}/>
            <WhatWeDo/>
            <WhoWeAre/>
            <OurWorkflow/>
            <Contact/>
        </div>
    );
}
