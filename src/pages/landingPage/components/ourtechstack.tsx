
import techstack from "../../../images/techstack.svg";


function OurTechStack() {
    return (
        <div id="whoweare" className=" bg-blue/90  flex flex-col h-full justify-center items-center w-full">
            <div className="bg-blue bg-contain bg-blend-lighten bg-right-top flex bg-no-repeat flex-col h-full justify-center items-center w-full py-0 md:py-10">
                <div className="w-full xl:w-[50%] bg-blue/70 md:bg-transparent rounded-sm flex flex-col justify-start items-start p-6 md:p-10 gap-4">

                    <div className="flex flex-row justify-center items-center gap-4">
                        <div className="w-12 h-[3px] rounded-full bg-tan/90"></div>
                        <div className="text-sm font-regular text-tan/90">Our Technology Stack</div>
                    </div>

                    <div className="flex justify-start items-start flex-col gap-5">
                        <div className="text-4xl md:text-5xl font-bold text-tan/90">With more than half a decade of experience, We have perfected our technology stack</div>
                        <div className="text-md font-regular text-tan/90">
                        Our company is committed to delivering high-quality software solutions using efficient technologies such as React.js and Tailwind CSS. React.js is a powerful JavaScript library that allows for building dynamic and reusable user interfaces, while Tailwind CSS is a utility-first CSS framework that helps create custom designs quickly. The company's team of experts works closely with clients to understand their needs and recommend the best technologies for each project, ensuring they deliver software solutions that meet and exceed their clients' expectations.
                        </div>

                        <div style={{ backgroundImage: `url('${techstack}')` }} className="h-12 w-48 bg-no-repeat bg-left bg-contain mt-3">
                        </div>

                    </div>




                </div>
            </div>
        </div>
    );
}

export default OurTechStack;