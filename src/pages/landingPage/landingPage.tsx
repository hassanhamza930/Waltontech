import Heading, { SubHeading } from "../../styles/components/heading";
import BluePage from "../../styles/layouts/bluepage";
import { motion } from "framer-motion";




function LandingPage() {


    return (
        <BluePage>

            <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full -mt-24 md:-mt-16">
                <div className=" flex flex-col w-full justify-start items-start">
                    <div className="h-auto py-2 overflow-y-hidden">
                        <div className="flex flex-row w-full justify-center items-center">
                            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} >
                                <div className="text-4xl md:text-6xl font-bold">
                                        We create value<br/>through software.
                                </div>
                            </motion.div>
                            {/* Need to add a rolling text here called Design/ Develop/AI */}
                        </div>
                    </div>
                    <div className="h-auto md:h-10 mt-2 overflow-y-hidden">
                        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.6 }} ><SubHeading text="A Software Development Agency"></SubHeading></motion.div>
                    </div>
                </div>

                <div className="hidden xl:flex relative h-[250px] w-[250px] md:h-[400px] md:w-[400px] justify-start items-end mr-20">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 100
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1
                        }}
                        className="absolute z-30 rounded-full h-[250px] w-[250px] md:h-[400px] md:w-[400px] bg-tan shadow-xl"></motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 70
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.2
                        }}
                        className="absolute z-20 rounded-full h-[200px] w-[200px] md:h-[350px] md:w-[350px] bg-tan/80 -ml-4 -mb-4 shadow-xl"></motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 90
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 1.2,
                            delay: 0.3
                        }}
                        className="absolute z-10 rounded-full h-[150px] w-[150px] md:h-[300px] md:w-[300px] bg-tan/70 -ml-6 -mb-6 shadow-xl"></motion.div>

                </div>

            </div>

        </BluePage>
    );
}

export default LandingPage;