import React, {  useState, useRef } from "react"
import Gen from "./colourGen"

 
export default function Main(){

    const [newHue, setHue] = useState(false);
    const colourType = useRef("4");

    const setColourType = e =>{
       // console.log(e.target.value);
        colourType.current = e.target.value;
        console.log(colourType.current);
    }


    function handleClick(e) {
        e.preventDefault();
        setHue(Math.floor(Math.random() * 255) + 1);
    }
    return(
        <main>
            <button onClick={handleClick} className="main--gen_btn"  > generate </button>
            <div onChange={setColourType} className = "main--radio_div">
                
                    <input className="main--radio" type="radio" value="0" name="type" id="mode0"/> 
                <label className="main--container" for="mode0">complementary</label>

                    <input className="main--radio" type="radio" value="1" name="type" id="mode1" /> 
                <label className="main--container" for="mode1">analogous</label>

                
                    <input className="main--radio" type="radio" value="2" name="type" id="mode2" /> 
                <label className="main--container" for="mode2">Tetradic</label>

                    <input className="main--radio" type="radio" value="3" name="type" id="mode3" /> 
                <label className="main--container" for="mode3">Triadic</label>
                
                    <input className="main--radio" type="radio" value="4" name="type" id="mode4" /> 
                <label className="main--container" for="mode4">all</label>

            </div>
            <div className="main--colour">
                <Gen hue={newHue} mode={colourType.current} />

            </div>
        </main>
    )
}