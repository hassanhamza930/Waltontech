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
import bg from "../../../images/bg.gif"
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import backdrop from "../../../images/backdrop.png";


interface ScrollInformation {
    y: number
}

function HeroSection(props: ScrollInformation) {

    const [ticked, setTicked] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTicked(true);
        }, 1900);
    }, []);

    var line = "for the startup";

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} style={{ backgroundImage: `url('${bg}')`, fontFamily: "IBM Plex Sans" }} className="h-screen w-full bg-no-repeat bg-center bg-cover flex justify-center items-start flex-col text-tan">

            <div className={`absolute z-10 h-screen bg-gradient-to-br md:bg-gradient-to-r from-purp via-purp/80 md:via-purp/80 to-purp/0 bg-cover bg-no-repeat w-full bg-center`}></div>
            <div style={{backgroundImage:`url('${backdrop}')`}} className={`absolute opacity-50 z-20 backdrop-blur-sm h-screen bg-cover bg-no-repeat w-full bg-center`}></div>

            <div className="px-10 md:px-[20%] relative z-30 flex flex-col h-full w-full justify-center items-start">
                <div className="relative flex py-2 flex-col gap-3 w-full justify-start items-start overflow-hidden">
                    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} >
                        <div className="relative w-full text-4xl md:text-5xl font-bold flex flex-wrap gap-2">
                            <div>Software Development</div>
                        </div>
                    </motion.div>

                    <div style={{ fontFamily: "Crimson Pro" }} className="text-3xl md:text-4xl font-medium italic relative z-20 h-12 md:h-16 w-52 md:w-64 justify-center overflow-y-hidden items-center">

                        <motion.div
                            initial={{ scaleX:0,x: -50,opacity:0 }}
                            animate={{  scaleX:1,x: 0,opacity:1 }}
                            transition={{ duration: 0.7,delay:1 }}
                            className="border-b-4 border-tan h-full w-full absolute z-0"></motion.div>

                        <motion.div
                            initial={{  scaleX:0,x: -50,opacity:0 }}
                            animate={{  scaleX:1,x: 0 ,opacity:1}}
                            transition={{ duration:1,delay:1.4 }}
                            className="bg-tan h-full w-full absolute z-0"></motion.div>

                        <AnimatePresence>
                            {
                                ticked == true &&
                                <motion.div className="text-purp h-full w-full relative px-4 py-2 z-10 flex flex-row gap-2 md:gap-3 justify-center items-center">
                                    {
                                        line.split(" ").map((char, index) => {
                                            return (
                                                <motion.div
                                                    initial={{ y: 50 * (index + 1) }}
                                                    animate={{ y: 0 }}
                                                    transition={{ delay: 0.05 * (index + 1), duration: 0.4 * (index + 1) }}
                                                    className="relative z-10 flex justify-center items-center">
                                                    {char}
                                                </motion.div>
                                            )
                                        })
                                    }

                                </motion.div>
                            }
                        </AnimatePresence>

                    </div>



                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>
                    <Button customStyles="mt-10 shadow-sm" text="Explore" onClick={() => {
                        var el = document.getElementById("contact");
                        el?.scrollIntoView({ behavior: "smooth" });
                    }}></Button>
                </motion.div>
            </div>

        </motion.div>
    );
}

export default HeroSection;