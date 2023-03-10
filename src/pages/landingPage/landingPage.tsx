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

function LandingPage() {


    return (
        <div className="flex flex-col justify-center items-center">
            <HeroSection />
            <WhatWeDo />
            <WhoWeAre />
            {/* <OurTechStack /> */}
            <OurWorkflow/>
        </div>
    );
}

export default LandingPage;