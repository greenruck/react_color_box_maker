import React from "react";
import "./Box.css";

const Box = ({id,
             color = "green", 
             width = 4, 
             height = 4, 
             handleRemove
            }) => {
    const remove = () => handleRemove(id);
    return (
        <div>
            <div className="Box" 
                style={{
                    height: `${height}em`, 
                    width:  `${width}em`,
                    backgroundColor: `${color}`
                }}
            />
            <button className="btn" onClick={remove}>Remove Box</button>    
        </div>
    );
}

export default Box;