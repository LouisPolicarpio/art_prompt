import React from "react"
import Logo from "../images/dice.png"

export default function Navbar() {
    return(
        <nav className="navbar">
            
            
            <img className="nav--logo"
                src={Logo}
                alt="logo"
            />

            <h3 className="nav--app_name">Art Prompts</h3>

            <h1 className="nav--page_name">Colour Scheme Generator</h1>
        </nav>
    )
}