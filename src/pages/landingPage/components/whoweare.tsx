import WhoWeAreBg from "../../../images/whowearebg.svg";


function WhoWeAre() {
    return ( 
        
        <div id="whoweare" className=" bg-blue/90  flex flex-col h-full justify-center items-center w-full">
            <div style={{ backgroundImage: (`url('${WhoWeAreBg}')`), backgroundSize: "400px" }} className="bg-blue bg-contain bg-blend-lighten bg-right-top flex bg-no-repeat flex-col h-full justify-center items-center w-full py-0 md:py-10">
                <div className="w-full xl:w-[50%] bg-blue/70 md:bg-transparent rounded-sm flex flex-col justify-start items-start p-6 md:p-10 gap-4">

                    <div className="flex flex-row justify-center items-center gap-4">
                        <div className="w-12 h-[3px] rounded-full bg-tan/90"></div>
                        <div className="text-sm font-regular text-tan/90">Who we are</div>
                    </div>

                    <div className="flex justify-start items-start flex-col gap-5">
                        <div className="text-4xl md:text-5xl font-bold text-tan/90">We are a team of passionate developers and designers from Pakistan.</div>
                        <div className="text-md font-regular text-tan/90">
                            We offer a wide range of services, including web development and custom software development. Whether you need a simple website or a complex software application, we have the skills and expertise to deliver high-quality solutions that meet your specific needs.<br /><br />

                            At our company, we take a collaborative approach to development. We work closely with you to understand your goals, identify your pain points, and create a solution that addresses your unique challenges. We pride ourselves on our ability to deliver projects on time and on budget, without compromising on quality.<br /><br />

                            We understand the importance of staying up-to-date with the latest trends and technologies in web and mobile development. That's why we invest heavily in training and professional development for our team members. This ensures that we can provide you with the most innovative and cutting-edge solutions that will give you a competitive edge in your industry.<br /><br />
                        </div>
                    </div>


                </div>
            </div>
        </div>
     );
}

export default WhoWeAre;