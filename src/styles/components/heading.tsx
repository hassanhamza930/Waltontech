interface TextInputs{
    text:string,
    customStyles?:string
}

function Heading(props:TextInputs) {
    return (  
        <div className={`${props.customStyles} text-2xl md:text-6xl font-bold`}>
            {props.text}
        </div>
    );
}

export function SubHeading(props:TextInputs) {
    return (  
        <div className={`${props.customStyles} text-tan/90 text-sm md:text-xl font-regular`}>
            {props.text}
        </div>
    );
}

export default Heading;