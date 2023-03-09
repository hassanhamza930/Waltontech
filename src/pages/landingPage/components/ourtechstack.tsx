
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
                            At our core, we are committed to delivering high-quality software solutions that meet the needs of our clients. That's why we use the most efficient technologies for web development, including React.js and Tailwind CSS.
                            React.js is a powerful JavaScript library that allows us to build dynamic user interfaces with ease. It enables us to create reusable components that can be used across multiple projects, saving time and resources.
                            With React.js, we can build fast, responsive, and scalable web applications that meet the needs of our clients. <br /><br />

                            Tailwind CSS is a utility-first CSS framework that allows us to create custom designs quickly and efficiently. It provides a set of pre-defined classes that can be used to style HTML elements, making it easy to create visually appealing user interfaces. With Tailwind CSS, we can deliver custom designs that are both functional and aesthetically pleasing.<br /><br />

                            We understand that choosing the right technologies for a project can be a daunting task, which is why we work closely with our clients to understand their needs and requirements. Our team of experts has years of experience in web development and can recommend the best technologies for each project, ensuring that we deliver software solutions that meet our clients' needs and exceed their expectations.<br /><br />
                        </div>

                        <div style={{ backgroundImage: `url('${techstack}')` }} className="h-12 w-48 bg-no-repeat bg-left bg-contain -mt-3">
                        </div>

                    </div>




                </div>
            </div>
        </div>
    );
}

export default OurTechStack;