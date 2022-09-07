import React, {  useState } from "react"
import Gen from "./colourGen"
 
export default function Main(){

    const [newHue, setHue] = useState(Math.floor(Math.random() * 255) + 1);


    function handleClick(e) {
        // e.preventDefault();
        setHue(Math.floor(Math.random() * 255) + 1);
        setLS(Math.floor(Math.floor(Math.random() * 90) + 60));

        // console.log("click");
    }
    return(
        <main>
            <button onClick={handleClick} className="main--gen_btn"  > generate </button>
            <Gen hue={newHue}  />
        </main>
    )
}