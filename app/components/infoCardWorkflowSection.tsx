interface InfoCardWorkflowSectionProps {
    title: string,
    description: string,
    last?:boolean,
    logo?:any
}

function InfoCardWorkflowSection(props: InfoCardWorkflowSectionProps) {
    return (
        <div className="transition-all duration-300 h-[350px] md:h-96 w-full md:w-2/5 p-5 backdrop-blur-md overflow-hidden rounded-md bg-tan/70 hover:bg-tan/90  hover:shadow-2xl flex flex-col justify-start items-start gap-2">
            {props.logo}
            <div className="text-2xl md:text-3xl font-medium text-black mt-2">{props.title}</div>
            <div className="text-sm md:text-md font-regular text-black -mt-[3px]">{props.description}</div>
        </div>
        // <div className="relative flex-1 h-full justify-start items-start flex-col gap-5">
        //     <div className="flex h-full w-full flex-row justify-start items-start gap-4 mt-10">
        //         <div className="flex h-full flex-col justify-start items-center py-[12px]">
        //             <div className="backdrop-blur-md z-20 h-3 w-3 rounded-full bg-tan/60"></div>
        //             {props.last!=true&&<div className="absolute z-10 h-full w-[2px] bg-tan/60 "></div>}
        //         </div>
        //         <div className="flex flex-col justify-start items-start gap-4">
        //             <div className="text-3xl md:text-4xl font-bold text-tan/90 -mt-[3px]">{props.title}</div>
        //             <div className="text-md font-regular text-tan/90">
        //                 {props.description}
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default InfoCardWorkflowSection;