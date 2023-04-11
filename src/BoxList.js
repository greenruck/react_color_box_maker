import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const [boxes, setboxes] = useState([]);
    const add = boxObj => {
        setboxes(boxes => [...boxes, boxObj]);
    };
    const remove = id => {
        setboxes(boxes => boxes.filter(box => box.id !== id));
    };
    const boxComponents = boxes.map(box => (
        <Box
            key = {box.id}
            id = {box.id}
            color={box.color}
            width = {box.width}
            height = {box.height}
            handleRemove = {remove}
        />
    ));

    return (
        <div>
            <NewBoxForm createBox = {add} />
            {boxComponents}
        </div>
    );
}

export default BoxList;