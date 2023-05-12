import Image from "next/image";
import laptop from "../../images/laptop.svg";
import mobile from "../../images/mobile.svg";
import whatwedobg from "../../images/whatwedobg.svg";

function WhatWeDo() {
    return ( 
        <div style={{backgroundImage:(`url('${whatwedobg.src}')`)}} id="whatwedo" className="relative z-20 bg-cover bg-center flex flex-col h-full justify-center items-center w-full">
                <div className="flex  bg-blue/50 flex-col h-full justify-center items-center w-full py-0 md:py-20">
                    <div className="w-full xl:w-[50%] bg-tan/90 backdrop-blur-md rounded-sm flex flex-col justify-start items-start p-6 md:p-10 gap-4">

                        <div className="flex flex-row justify-center items-center gap-4">
                            <div className="w-12 h-[3px] rounded-full bg-blue/90"></div>
                            <div className="text-sm font-regular text-blue/90">What we do</div>
                        </div>

                        <div className="flex justify-start items-start flex-col gap-5">
                            <div className="text-4xl md:text-5xl font-bold text-black/90">We build products<br/> for the web.</div>
                            <div className="text-md font-regular text-black/90">
                                At our core we are web specialists, whether you are rebranding an old landing page or creating a fully bootstrapped SaaS app, we have you covered. <br/><br/>

                                At our company, we take a collaborative approach to development. We work closely with you to understand your goals, identify your pain points, and create a solution that addresses your unique challenges and creates a memorable experience for your customers.
                            </div>
                        </div>

                        <div className="flex flex-row justify-center items-center ">
                            <Image src={laptop} alt="laptop" className="w-52 h-52 md:h-72 md:w-72 bg-contain bg-center bg-no-repeat">
                            </Image>

                            <Image src={mobile} alt="mobile" className="w-28 h-28 md:h-40 md:w-40 bg-contain bg-center bg-no-repeat">
                            </Image>
                        </div>

                    </div>
                </div>
            </div>
     );
}

export default WhatWeDo;