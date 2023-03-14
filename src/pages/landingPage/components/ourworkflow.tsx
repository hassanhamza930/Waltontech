import InfoCardWorkflowSection from "./infocardworkflowsection";
import howweworkbg from "../../../images/howweworkbg.gif";


function OurWorkflow() {
    return (
        <div style={{ backgroundImage: `url('${howweworkbg}')` }} id="whoweare" className="relative z-20 bg-blue/90  flex flex-col h-full justify-center items-center w-full">
            <div className="relative bg-blue/[95%] bg-contain bg-blend-lighten bg-right-top flex bg-no-repeat flex-col h-full justify-center items-center w-full py-0 md:py-10">
                <div className="relative w-full xl:w-[80%] rounded-sm flex flex-col justify-start items-start p-6 md:p-10">



                    <div className="flex flex-row justify-center items-center gap-4">
                        <div className="w-12 h-[3px] rounded-full bg-tan/90"></div>
                        <div className="text-sm font-regular text-tan/90">How we work</div>
                    </div>

                    <div className="text-4xl md:text-5xl font-bold text-tan/90 mt-4">Our Workflow for End to End Success</div>

                    <div className="flex flex-1 flex-wrap gap-4 mt-10 w-full">

                        <InfoCardWorkflowSection
                            title="Discussion"
                            description="At our company, communication is considered essential for successful projects. During the initial consultation, the team listens to clients, asks questions, and gathers all necessary details about the project requirements. This information is then used to create a customized development plan that meets clients' specific needs. The team also offers professional expertise and insights, including advice and recommendations on the best technologies and approaches based on their experience and industry best practices."
                        />


                        <InfoCardWorkflowSection
                            title="Onboarding"
                            description="The client will be onboarded onto project management and design tools such as Jira and Figma to enable real-time collaboration, progress tracking and information sharing. Figma will be used to share designs, gather feedback and make revisions in real-time, ensuring the client's involvement in the design process and meeting their expectations for the final product."
                        />


                        <InfoCardWorkflowSection
                            title="Design"
                            description="Our software services company offers a range of design services, including UX/UI design, graphic design, and branding. We work closely with clients to understand their needs and deliver designs that align with their brand identity and business goals. The company takes a user-centric approach to design, creating intuitive and user-friendly interfaces to enhance the user experience."
                        />


                        <InfoCardWorkflowSection
                            title="Development & Delivery"
                            description="Our web development agency follows a structured approach to managing projects, which involves gathering requirements, creating a detailed project plan and using agile development methodologies. We prioritize tasks and regularly communicate with clients to ensure their needs are being met. The development team places a strong emphasis on collaboration and knowledge sharing to ensure everyone is on the same page. The overall process is designed to ensure efficient, effective, and high-quality delivery of projects."
                            last={true}
                        />


                    </div>


                </div>
            </div>
        </div>
    );
}

export default OurWorkflow;