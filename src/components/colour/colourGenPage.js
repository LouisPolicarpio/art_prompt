import React, { useState, useRef } from "react"
import Gen from "./colourGen"


export default function ColourGenPage() {

    const [newHue, setHue] = useState(false);
    const colourType = useRef("5");

    const setColourType = e => {
        // console.log(e.target.value);
        colourType.current = e.target.value;
        console.log(colourType.current);
    }


    function handleClick(e) {
        e.preventDefault();
        setHue(Math.floor(Math.random() * 255) + 1);
    }
    return (
        <div className="colour--body">
            <button onClick={handleClick} className="colour--gen_btn"  > generate </button>
            <div onChange={setColourType} className="colour--radio_div">

                <input className="colour--radio" type="radio" value="0" name="type" id="mode0" />
                <label className="colour--container" for="mode0">complementary</label>

                <input className="colour--radio" type="radio" value="1" name="type" id="mode1" />
                <label className="colour--container" for="mode1">analogous</label>


                <input className="colour--radio" type="radio" value="2" name="type" id="mode2" />
                <label className="colour--container" for="mode2">Tetradic</label>

                <input className="colour--radio" type="radio" value="3" name="type" id="mode3" />
                <label className="colour--container" for="mode3">Triadic</label>

                <input className="colour--radio" type="radio" value="4" name="type" id="mode4" />
                <label className="colour--container" for="mode4">random</label>

            </div>
            <div className="colour--colour">
                <Gen hue={newHue} mode={colourType.current} />

            </div>
        </div>
    )
}