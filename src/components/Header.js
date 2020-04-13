import React from "react";
import { URL_HEADER } from "../constants/urls/urls";

function Header() 
{
    return (
        <header>
            <img 
                src={ URL_HEADER } 
                alt="feed meeeyawk?"
            />
            <p>Memeee Gnrtr</p>
        </header>
    )
}

export default Header;