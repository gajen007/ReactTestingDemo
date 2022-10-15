import { useState } from "react";

function ButtonComponent() {
    const [buttonText,setButtonText]=useState("Click Here");
    const clickFunction=()=>{
        setButtonText("It's Clicked");
    }

    return (<button onClick={clickFunction} title="myButton">{buttonText}</button>);
}
export default ButtonComponent;