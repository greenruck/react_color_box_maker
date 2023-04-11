import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import "./NewBoxForm.css"

function NewBoxForm({ createBox }) {
    const [formData, setFormData] = 
        useState({
            height: "",
            width: "",
            color: ""
        });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const gatherInput = evt => {
        evt.preventDefault();
        createBox({...formData, id: uuid() });
        setFormData({ 
            height: "", 
            width: "", 
            color: ""});
    };

    return (
        <div>
            <form onSubmit={gatherInput}>
                <div className="height">
                    <label htmlFor="height">Height</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="height"
                        value={formData.height}
                        id="height"
                    />
                </div>
                <div className="width">
                    <label htmlFor="width">Width</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="width"
                        value={formData.width}
                        id="width"
                    />
                </div>
                <div className="color">
                    <label htmlFor='color'>Color</label>
                    <input 
                        onChange={handleChange}
                        type="text"
                        name="color"
                        value={formData.color}
                        id="color"
                    />
                </div>
                <button id="newBoxButton">Add a box</button>
            </form>
        </div>
    );
}

export default NewBoxForm;