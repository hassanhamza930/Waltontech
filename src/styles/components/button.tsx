interface ButtonInputs{
    text:string,
    onClick:Function,
    customStyles?:string
}


function Button(props:ButtonInputs) {
    return (  
        <button style={{fontFamily:"IBM Plex Sans"}} onClick={()=>{props.onClick()}} className={`${props.customStyles} px-6 rounded-sm py-[5px]  hover:scale-[1.02] hover:bg-tan hover:shadow-2xl text-tan text-md hover:text-purp hover:font-bold border-2 border-tan bg-transparent font-regular`}>
            {props.text}
        </button>
    );
}

export default Button;