import { motion } from "framer-motion";
import { SubHeading } from "../../../styles/components/heading";
import argoggles from "../../../images/argoggles.svg";
import argoggles2 from "../../../images/argoggles2.svg";
import dotgrid from "../../../images/dotgrid.gif";
import RollingText from "./rollingtext";
import BluePage from "../../../styles/layouts/bluepage";
import Button from "../../../styles/components/button";
import { useSpring } from "framer-motion";
import { useEffect } from "react";


interface ScrollInformation{
    y:number
}

function HeroSection(props:ScrollInformation) {


    return (
        <BluePage>
            <div
                style={{ backgroundImage: `url('${dotgrid}')`, opacity: 0.05, backgroundBlendMode: "difference" }}
                className={`absolute z-20 h-full w-full bg-center`}></div>

            <div className="relative z-30 flex w-full flex-col-reverse md:flex-row justify-center gap-24 items-center -mt-24 md:-mt-16">

                <motion.div transition={{ease:"easeInOut",duration:0.1}} className=" flex flex-col justify-start items-start">
                    <div className="overflow-y-hidden">
                        <div className="relative flex py-2 flex-row w-full justify-center items-center overflow-hidden">
                            <motion.div initial={{ opacity: 0, y: 300 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} >
                                <div className="relative w-full text-4xl md:text-5xl font-bold flex flex-wrap gap-2">
                                    <div>We create value </div>
                                    <div className="relative w-full flex flex-col md:flex-row gap-3 justify-start items-start"> through <RollingText /></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="h-auto md:h-10 mt-2 overflow-y-hidden">
                        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.6 }} ><SubHeading text="A Software Development Agency"></SubHeading></motion.div>
                    </div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}}>
                        <Button customStyles="mt-10" text="Talk to us" onClick={() => {
                            var el = document.getElementById("contact");
                            el?.scrollIntoView({ behavior: "smooth" });
                        }}></Button>
                    </motion.div>
                </motion.div>

                <div className="hidden xl:flex relative h-[250px] w-[250px] md:h-[450px] md:w-[450px] justify-start items-end ">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 100
                        }}
                        animate={{
                            opacity:1,
                            x:(props.y*0.2),
                            y: 0,
                            // duration:4
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        style={{ backgroundImage: `url('${argoggles}')` }}
                        className="absolute bg-center bg-cover z-30 rounded-full h-[250px] w-[250px] md:h-[450px] md:w-[450px] bg-tan shadow-2xl"></motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 100
                        }}
                        animate={{
                            opacity: 1,
                            x:(props.y*0.15),
                            y: 0
                        }}
                        transition={{
                            duration: 1.2,
                        }}
                        style={{ backgroundImage: `url('${argoggles2}')` }}
                        className="absolute bg-center bg-cover z-20 rounded-full h-[200px] w-[200px] md:h-[400px] md:w-[400px] bg-tan/20 -ml-4 -mb-4 shadow-2xl"></motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 100
                        }}
                        animate={{
                            opacity: 1,
                            x:(props.y*0.1),
                            y: 0
                        }}
                        transition={{
                            duration: 1.6,
                        }}
                        className="absolute z-10 rounded-full h-[150px] w-[150px] md:h-[350px] md:w-[350px] bg-tan/70 -ml-8 -mb-8 shadow-2xl"></motion.div>

                </div>

            </div>
        </BluePage>
    );
}

export default HeroSection;