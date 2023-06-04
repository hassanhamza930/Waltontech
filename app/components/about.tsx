"use client";


import { motion } from "framer-motion";


function About() {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div id="about" className="flex flex-col md:flex-row justify-center items-center w-[80%] md:gap-0 gap-12 md:w-[60%] h-full bg-tan text-black/90 py-48">

                <div className="flex justify-start items-center w-full h-full ">
                    <motion.div
                        initial="hidden"
                        variants={{
                            "visible": { opacity: 1, y: 0 },
                            "hidden": { opacity: 0, y: 20 },
                        }}
                        transition={{ duration: 1, delay: 0.5 }}
                        whileInView={"visible"}
                        className="text-xl md:text-2xl font-regular w-full">
                        As a full-stack design agency , we work closely with our clients to define, design and develop transformative user experiences across all platforms and brand’s touchpoints.
                    </motion.div>
                </div>



                <div className="flex flex-col w-full h-full justify-start md:justify-center  items-center font-regular md:font-light">

                    <div className="flex flex-col justify-start items-start gap-6 w-full md:w-3/5 ">

                        <motion.div 
                         initial="hidden"
                         variants={{
                             "visible": { opacity: 1, y: 0 },
                             "hidden": { opacity: 0, y: 30 },
                         }}
                         transition={{ duration: 1, delay: 0.3 }}
                         whileInView={"visible"}
                        className="flex flex-row justify-center items-end gap-3">
                            <div className="text-6xl font-bold">7</div>
                            <div className="text-xl font-regular flex-none">Developers & Designers</div>
                        </motion.div>

                        <motion.div
                        initial="hidden"
                        variants={{
                            "visible": { opacity: 1, y: 0 },
                            "hidden": { opacity: 0, y: 50 },
                        }}
                        transition={{ duration: 1, delay: 0.5 }}
                        whileInView={"visible"}
                        className="flex flex-row justify-center items-end gap-3">
                            <div className="text-6xl font-bold">3</div>
                            <div className="text-xl font-regular flex-none">Years in business</div>
                        </motion.div>

                    </div>

                </div>




            </div>
        </div>
    );
}

export default About;