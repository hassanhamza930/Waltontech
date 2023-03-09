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

function LandingPage() {


    return (
        <div className="flex flex-col justify-center items-center">
            <HeroSection />
            <WhatWeDo />
            <WhoWeAre />
            <OurTechStack />


            <div id="whoweare" className=" bg-blue/90  flex flex-col h-full justify-center items-center w-full">
                <div className="bg-blue bg-contain bg-blend-lighten bg-right-top flex bg-no-repeat flex-col h-full justify-center items-center w-full py-0 md:py-10">
                    <div className="w-full xl:w-[50%] bg-blue/70 md:bg-transparent rounded-sm flex flex-col justify-start items-start p-6 md:p-10 gap-4">

                        <div className="flex flex-row justify-center items-center gap-4">
                            <div className="w-12 h-[3px] rounded-full bg-tan/90"></div>
                            <div className="text-sm font-regular text-tan/90">How we work</div>
                        </div>

                        <div className="flex justify-start items-start flex-col gap-5">
                            <div className="text-4xl md:text-5xl font-bold text-tan/90">Our Workflow for End to End Success</div>

                            <div className="flex h-auto w-full flex-row justify-start items-start gap-2 mt-10">
                                <div className="flex-1 flex-col justify-start items-center py-3">
                                    <div className="h-3 w-3 rounded-full bg-tan"></div>
                                    <div className="h-full w-2 bg-tan/90 "></div>
                                </div>
                                <div className="flex flex-col justify-start items-start gap-4">
                                    <div className="text-3xl md:text-4xl font-bold text-tan/90 -mt-[3px]">Design</div>
                                    <div className="text-md font-regular text-tan/90">
                                    At the company, communication is considered essential for successful projects. During the initial consultation, the team listens to clients, asks questions, and gathers all necessary details about the project requirements. This information is then used to create a customized development plan that meets clients' specific needs. The team also offers professional expertise and insights, including advice and recommendations on the best technologies and approaches based on their experience and industry best practices.
                                    </div>
                                </div>
                            </div>


                        </div>




                    </div>
                </div>
            </div>



        </div>
    );
}

export default LandingPage;