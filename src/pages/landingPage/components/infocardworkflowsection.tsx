interface InfoCardWorkflowSectionProps {
    title: string,
    description: string,
    last?:boolean
}

function InfoCardWorkflowSection(props: InfoCardWorkflowSectionProps) {
    return (
        <div className="h-96 w-2/5 p-3 overflow-hidden rounded-md border-tan/40 hover:border-tan border-2 shadow-xl flex flex-col justify-start items-start gap-2">
            <div className="text-3xl md:text-4xl font-bold text-tan/90 -mt-[3px]">{props.title}</div>
            <div className="text-sm md:text-md font-regular text-tan/90 -mt-[3px]">{props.description}</div>
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