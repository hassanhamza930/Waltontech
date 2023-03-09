import Heading, { SubHeading } from "../../styles/components/heading";
import BluePage from "../../styles/layouts/bluepage";
import { motion } from "framer-motion";
import RollingText from "./components/rollingtext";
import argoggles from "../../images/argoggles.svg";
import argoggles2 from "../../images/argoggles2.svg";
import dotgrid from "../../images/dotgrid.gif";
import HeroSection from "./components/herosection";
import laptop from "../../images/laptop.svg";
import mobile from "../../images/mobile.svg";


function LandingPage() {


    return (
        <div className="flex flex-col justify-center items-center">
            <HeroSection />

            <div className="flex flex-col h-full justify-center items-center w-full bg-blue py-20">
                <div id="whatwedo" className="w-[50%] bg-tan/90 backdrop-blur-md rounded-sm flex flex-col justify-start items-start p-10 gap-4">

                    <div className="flex flex-row justify-center items-center gap-4">
                        <div className="w-12 h-[3px] rounded-full bg-blue/90"></div>
                        <div className="text-sm font-regular text-blue/90">What we do</div>
                    </div>

                    <div className="flex justify-start items-start flex-col gap-5">
                        <div className="text-6xl font-bold text-black/90">We build experiences <br />for the web.</div>
                        <div className="text-md font-regular text-black/90">
                            We offer a wide range of services, including web development and custom software development. Whether you need a simple website or a complex software application, we have the skills and expertise to deliver high-quality solutions that meet your specific needs.<br /><br />

                            At our company, we take a collaborative approach to development. We work closely with you to understand your goals, identify your pain points, and create a solution that addresses your unique challenges. We pride ourselves on our ability to deliver projects on time and on budget, without compromising on quality.<br /><br />

                            We understand the importance of staying up-to-date with the latest trends and technologies in web and mobile development. That's why we invest heavily in training and professional development for our team members. This ensures that we can provide you with the most innovative and cutting-edge solutions that will give you a competitive edge in your industry.<br /><br />
                        </div>
                    </div>

                    <div className="flex flex-row justify-center items-center -mt-12">
                        <div style={{ backgroundImage: `url('${laptop}')` }} className="h-96 w-96 bg-contain bg-center bg-no-repeat">
                        </div>

                        <div style={{ backgroundImage: `url('${mobile}')` }} className="h-52 w-52 bg-contain bg-center bg-no-repeat">
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default LandingPage;