import Heading, { SubHeading } from "../../styles/components/heading";
import BluePage from "../../styles/layouts/bluepage";
import { motion } from "framer-motion";
import RollingText from "./components/rollingtext";
import argoggles from "../../images/argoggles.svg";
import argoggles2 from "../../images/argoggles2.svg";
import dotgrid from "../../images/dotgrid.gif";
import HeroSection from "./components/herosection";
import WhatWeDo from "./components/whatwedo";
import WhoWeAre from "./components/whoweare";
import OurTechStack from "./components/ourtechstack";
import OurWorkflow from "./components/ourworkflow";
import Contact from "./components/contact";
import { useScroll } from "framer-motion"
import { useMotionValueEvent } from "framer-motion";
import { useState } from "react";


function LandingPage() {

    const { scrollY } = useScroll({smooth:true})
    const [y, setY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest:any) => {
    //   console.log("Page scroll: ", latest)
      setY(latest);
    })

    return (
        <div className="flex flex-col justify-center items-center">
            <HeroSection y={y}  />
            <WhatWeDo />
            <WhoWeAre />
            {/* <OurTechStack /> */}
            <OurWorkflow/>
            <Contact/>
        </div>
    );
}

export default LandingPage;