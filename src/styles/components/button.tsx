interface ButtonInputs{
    text:string,
    onClick:Function,
    customStyles?:string
}


function Button(props:ButtonInputs) {
    return (  
        <button onClick={()=>{props.onClick()}} className={`${props.customStyles} px-6 rounded-sm py-[5px] hover:text-tan hover:bg-black/90 text-blue bg-white font-medium`}>
            {props.text}
        </button>
    );
}

export default Button;