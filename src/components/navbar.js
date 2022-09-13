import React, {useState} from "react"
import Logo from "../images/dice.png"
import ColourGenPage from "./colour/colourGenPage"
import DescPage from "./desctiption/discPage"

export default function Navbar() {
    const [colourToggle, setColourToggle] = useState(false);
    const [charToggle, setCharToggle] = useState(false)

    const handleColour = () => {

        setColourToggle(!colourToggle);
        console.log(colourToggle)
    }; 


    const handleChar = () => {

        setCharToggle(!charToggle);
        console.log(charToggle)
    }; 

    return(
        <div>
            <nav className="navbar">
                <img className="nav--logo"
                    src={Logo}
                    alt="logo"
                />

                <h3 className="nav--app_name">Art Prompts</h3>

                <ul>


                    <li>
                        <input className="nav--checkbox" type="checkbox" id="colour_box_id" onChange={handleColour}></input>
                        <label className="container" for="colour_box_id">Colour</label>
                    </li>

                    <li>
                        <input className="nav--checkbox" type="checkbox" id="char_box_id" onChange={handleChar}></input>
                        <label className="container" for="char_box_id">Character</label>
                    </li>
                </ul>





                <h1 className="nav--page_name">Promt Generator</h1>
            </nav>

            <main>
                {colourToggle && <ColourGenPage/>}
                {charToggle && <DescPage />}
            </main>
        </div>

    )
}