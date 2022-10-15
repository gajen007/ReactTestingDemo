import { useState } from "react";

function InputComponent() {
    const [typedStuff,setInputValue]=useState("");
    const handleChange=(event)=>{
        setInputValue(event.target.value);
    }

    return (<>
                <input type="text" onChange={handleChange} title="myInput"/>
                <div>{typedStuff}</div>
            </>
    );
}
export default InputComponent;