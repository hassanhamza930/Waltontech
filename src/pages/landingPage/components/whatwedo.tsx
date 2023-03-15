import laptop from "../../../images/laptop.svg";
import mobile from "../../../images/mobile.svg";
import whatwedobg from "../../../images/whatwedobg.svg";

function WhatWeDo() {
    return ( 
        <div style={{backgroundImage:(`url('${whatwedobg}')`)}} id="whatwedo" className="relative z-20 bg-cover bg-center flex flex-col h-full justify-center items-center w-full">
                <div className="flex  bg-blue/50 flex-col h-full justify-center items-center w-full py-0 md:py-20">
                    <div className="w-full xl:w-[60%] bg-tan/90 backdrop-blur-md rounded-sm flex flex-col justify-start items-start p-6 md:p-10 gap-4">

                        <div className="flex flex-row justify-center items-center gap-4">
                            <div className="w-12 h-[3px] rounded-full bg-blue/90"></div>
                            <div className="text-sm font-regular text-blue/90">What we do</div>
                        </div>

                        <div className="flex justify-start items-start flex-col gap-5">
                            <div className="text-4xl md:text-5xl font-bold text-black/90">We build SaaS products <br />for the web.</div>
                            <div className="text-md font-regular text-black/90">
                                We offer a wide range of services, including web development and custom software development. Whether you need a simple website or a complex software application, we have the skills and expertise to deliver high-quality solutions that meet your specific needs.<br /><br />

                                At our company, we take a collaborative approach to development. We work closely with you to understand your goals, identify your pain points, and create a solution that addresses your unique challenges. We pride ourselves on our ability to deliver projects on time and on budget, without compromising on quality.<br /><br />

                                We understand the importance of staying up-to-date with the latest trends and technologies in web and mobile development. That's why we invest heavily in training and professional development for our team members. This ensures that we can provide you with the most innovative and cutting-edge solutions that will give you a competitive edge in your industry.<br /><br />
                            </div>
                        </div>

                        <div className="flex flex-row justify-center items-center -mt-6 md:-mt-12">
                            <div style={{ backgroundImage: `url('${laptop}')` }} className="w-52 h-52 md:h-72 md:w-72 bg-contain bg-center bg-no-repeat">
                            </div>

                            <div style={{ backgroundImage: `url('${mobile}')` }} className="w-28 h-28 md:h-40 md:w-40 bg-contain bg-center bg-no-repeat">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
     );
}

export default WhatWeDo;