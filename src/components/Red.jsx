import React, { useState } from 'react'

const Red = () => {

    const [redcolor, setRedColor] = useState(0);
    let slider = document.getElementById("myRange");
    console.log(slider);

    // slider.oninput = function () {
    //     this.style.backgroundColor = `rgba(${this.value},0,0)`;
    //     setRedColor(slider.value);
    // }

    console.log(redcolor);

    return (
        <>
            <label for="">Red</label>
            <input type="range" min="0" max="255" value="0" className="slider" id="myRange" />
        </>
    )
}

export default Red