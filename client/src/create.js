import React, { useState } from 'react';
import axios from "axios"

const Create = props => {

    const [string, setString] = useState("")
    const [number, setNumber] = useState("")
    const [boolean, setBoolean] = useState("")

    const handleStringChange = event => {
        setString(event.target.value)
    }

    const handleBooleanChange = event => {
        setBoolean(event.target.value)
    }

    const handleNumberChange = event => {
        setNumber(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        let newBoiler = {
            "boiler_string": string,
            "boiler_number": number,
            "boiler_boolean": boolean
        }
        axios
            .post("http://localhost:4000/boilers/create", newBoiler )
            .then(response => console.log(response))
            .catch(error => console.log(error))
        setString("")
        setNumber("")
        setBoolean("")
        props.update()
    }

    return (
        <div>
            <div>Add Item:</div>
            <form onSubmit={handleSubmit} >
                <input placeholder="add a string" type="text" value={string} onChange={handleStringChange} />
                <input placeholder="add a number" type="text" value={number} onChange={handleNumberChange} />
                <input placeholder="add a boolean" type="text" value={boolean} onChange={handleBooleanChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Create;