import React from 'react'
import './Box.css';

const Box = ({ x, y, blur, spread, color, inset }) => {
    let shadow;
    if (inset === true) {
        shadow = `${x}px ${y}px ${blur}px ${spread}px ${color} inset`
    }
    else {
        shadow = `${x}px ${y}px ${blur}px ${spread}px ${color}`;
    }
    return (
        <div className="box">
            <div className="box__box" style={{ boxShadow: shadow }}>
                <div>
                    box-shadow: {shadow}
                </div>
                <div>
                    -webkit-box-shadow: {shadow}
                </div>
                <div>
                    -moz-box-shadow: {shadow}
                </div>
            </div>
        </div>
    )
}

export default Box