import Heading, { SubHeading } from "../../styles/components/heading";
import BluePage from "../../styles/layouts/bluePage";
import { motion } from "framer-motion";




function LandingPage() {


    return (
        <BluePage>

            <div className="flex flex-row justify-between items-center w-full -mt-16">
                <div className=" flex flex-col justify-start items-start">
                    <div className="h-20 overflow-y-hidden">
                        <div className="flex flex-row justify-center items-center">
                            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3 }} ><Heading text="We create value through software."></Heading></motion.div>
                            {/* Need to add a rolling text here called Design/ Develop/AI */}
                        </div>
                    </div>
                    <div className="h-10 overflow-y-hidden">
                        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.6 }} ><SubHeading text="A Software Development Agency"></SubHeading></motion.div>
                    </div>
                </div>

                <div className="relative h-[400px] w-[400px] flex justify-start items-end">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 50
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.4
                        }}
                        className="absolute z-30 rounded-full h-[400px] w-[400px] bg-tan shadow-xl"></motion.div>
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
                            duration: 0.6,
                            delay: 0.2
                        }}
                        className="absolute z-20 rounded-full h-[350px] w-[350px] bg-tan/80 -ml-6 -mb-6 shadow-xl"></motion.div>
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
                            duration: 0.6,
                        }}
                        className="absolute z-10 rounded-full h-[300px] w-[300px] bg-tan/70 -ml-8 -mb-8 shadow-xl"></motion.div>

                </div>

            </div>

        </BluePage>
    );
}

export default LandingPage;