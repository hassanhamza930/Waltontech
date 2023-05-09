import storiesbg from "../../images/storiesbg.svg";
import Button from "../../styles/components/button";
import cncardbg from "../../images/cncardbg.svg";
import wavecardbg from "../../images/wavecardbg.svg";
import colonstechcardbg from "../../images/colonstechcardbg.svg";
import stardomcardbg from "../../images/stardomcardbg.svg";
import teldacardbg from "../../images/teldacardbg.svg";
import { useNavigate } from "react-router-dom";


function Stories() {

    const navigate=useNavigate();

    return (
        <div style={{ fontFamily: "IBM Plex Sans" }} className="tracking-normal bg-blue h-full w-full flex flex-col justify-center items-center bg-right-top bg-contain bg-no-repeat">

            <div style={{ backgroundImage: `url('${storiesbg}')`, fontFamily: "IBM Plex Sans" }} className="tracking-wide bg-black h-full w-full flex flex-col justify-center items-center bg-right-top bg-contain bg-no-repeat">

                <div className="p-10 bg-gradient-to-br from-blue via-blue to-blue/70 backdrop-blur-sm md:backdrop-blur-none h-screen md:h-[700px] w-full flex justify-center items-center">

                    <div className="w-full md:w-[60%] flex justify-start items-start flex-col gap-4">

                        <div className="text-4xl md:text-5xl font-bold text-tan w-full">
                            Customer Success Stories
                        </div>

                        <div className="text-sm md:text-xl font-light text-tan w-full">
                            See how we delivered value to our clients.
                        </div>

                        <Button text="Explore" customStyles="mt-5" onClick={() => {
                             var el = document.getElementById("ourclients");
                             el?.scrollIntoView({ behavior: "smooth" })
                         }} />

                    </div>

                </div>
            </div>




            <div className="flex flex-col justify-center items-center h-full w-full bg-black/80 ">

                <div className="w-full xl:w-[70%] backdrop-blur-md rounded-sm flex flex-col justify-start items-start p-6 md:p-10 gap-4 my-10">

                    <div className="flex flex-row justify-center items-center gap-4">
                        <div className="w-12 h-[3px] rounded-full bg-tan/90"></div>
                        <div className="text-sm font-regular text-tan/90">Our Clients</div>
                    </div>


                    <div className="flex flex-wrap w-full gap-4 mt-10 tracking-tight">

                        <button id="ourclients" onClick={()=>{window.open("https://careernetwork.co")}} style={{ backgroundImage: `url('${cncardbg}')` }} className="hover:scale-[1.02] hover:shadow-2xl h-72 w-full md:h-72 md:w-72 bg-cover bg-center bg-no-repeat bg-black rounded-md flex flex-col justify-center items-start">
                            <div className="bg-blue/[70%] backdrop-blur-sm h-full w-full flex flex-col justify-center items-center p-5">
                                <div className="text-tan w-full rounded-sm font-semibold tracking-normal text-2xl md:text-4xl flex item-center justify-center">CareerNetwork.co</div>
                                <div className="text-tan w-full rounded-sm font-light tracking-normal text-sm md:text-md flex item-center justify-center">A Career Focused Social Media App</div>
                            </div>
                        </button>

                        <button onClick={()=>{window.open("https://wavehr.vercel.app")}} style={{ backgroundImage: `url('${wavecardbg}')` }} className="hover:scale-[1.02] hover:shadow-2xl h-72 w-full md:h-96 md:w-96 bg-cover bg-center bg-no-repeat bg-black/90 rounded-md flex flex-col justify-center items-start">
                            <div className="bg-blue/[70%] backdrop-blur-sm h-full w-full flex flex-col justify-center items-center p-5">
                                <div className="text-tan w-full rounded-sm font-semibold tracking-normal text-2xl md:text-4xl flex item-center justify-center">WaveHR</div>
                                <div className="text-tan w-full rounded-sm font-light tracking-normal text-sm md:text-md flex item-center justify-center">Interal HR Tool</div>
                            </div>
                        </button>

                        <button onClick={()=>{window.open("https://colonstech.com/")}}   style={{ backgroundImage: `url('${colonstechcardbg}')` }} className="hover:scale-[1.02] hover:shadow-2xl h-72 w-full md:h-96 md:w-96 bg-cover bg-center bg-no-repeat bg-black/90 rounded-md flex flex-col justify-center items-start">
                            <div className="bg-blue/[70%] backdrop-blur-sm h-full w-full flex flex-col justify-center items-center p-5">
                                <div className="text-tan w-full rounded-sm font-semibold tracking-normal text-2xl md:text-4xl flex item-center justify-center">:dev</div>
                                <div className="text-tan w-full rounded-sm font-light tracking-normal text-sm md:text-md flex item-center justify-center">A professional landing page for a software services agency</div>
                            </div>
                        </button>

                        <button onClick={()=>{window.open("https://stardomlanding.vercel.app/annuralkhalid")}} style={{ backgroundImage: `url('${stardomcardbg}')` }} className="hover:scale-[1.02] hover:shadow-2xl h-72 w-full md:h-96 md:w-96 bg-cover  bg-center bg-no-repeat bg-black/90 rounded-md flex flex-col justify-center items-start">
                            <div className="bg-blue/[70%] backdrop-blur-sm h-full w-full flex flex-col justify-center items-center p-5">
                                <div className="text-tan w-full rounded-sm font-semibold tracking-normal text-2xl md:text-4xl flex item-center justify-center">Stardom</div>
                                <div className="text-tan w-full rounded-sm font-light tracking-normal text-sm md:text-md flex item-center justify-center">A market research landing page for analytics and customer profiling</div>
                            </div>
                        </button>

                        <button onClick={()=>{window.open("https://telda.vercel.app")}} style={{ backgroundImage: `url('${teldacardbg}')` }} className="hover:scale-[1.02] hover:shadow-2xl h-72 w-full md:h-96 md:w-96 bg-cover bg-center bg-no-repeat bg-black/90 rounded-md flex flex-col justify-center items-start">
                            <div className="bg-blue/[70%] backdrop-blur-sm h-full w-full flex flex-col justify-center items-center p-5">
                                <div className="text-tan w-full rounded-sm font-semibold tracking-normal text-2xl md:text-4xl flex item-center justify-center">Telda</div>
                                <div className="text-tan w-full rounded-sm font-light tracking-normal text-sm md:text-md flex item-center justify-center">Landing page for a financial services company.</div>
                            </div>
                        </button>

                    </div>



                </div>


            </div>


        </div>
    );
}

export default Stories;