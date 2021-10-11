import React from "react";

function About ({about,srcProp="https://via.placeholder.com/215"}){
    return(
    <aside>
    <img src={srcProp} alt="blog logo"></img>
    <p>{about}</p>
    </aside>

    )
}

export default About