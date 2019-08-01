import React, { useState } from 'react';
import { useInput } from "./formStuff/useInput"
import axios from "axios"

const Update = props => {


    let boiler = props.boiler
    const [updateClickedStatus, setUpdateClickedStatus] = useState(false)

    const { value:string, bind:bindString, reset:resetString } = useInput(boiler.boiler_string);
    const { value:boolean, bind:bindBoolean, reset:resetBoolean } = useInput(boiler.boiler_boolean);
    const { value:number, bind:bindNumber, reset:resetNumber } = useInput(boiler.boiler_number);

    const handleUpdate = () => {
        console.log(boiler)
        setUpdateClickedStatus(true)
    }

    const handleSubmit = event => {
        event.preventDefault();
        let updatedBoiler = {
          "boiler_string": `${string}`,
          "boiler_boolean": boolean,
          "boiler_number": number
        }
        axios.post(`http://localhost:4000/boilers/update/${boiler._id}`, updatedBoiler)
          .then(response => console.log(response.data))

        setUpdateClickedStatus(false)
    }

    return (
        <div>
            <button onClick={handleUpdate} > Update </button>
            {updateClickedStatus ? 
                <form onSubmit={handleSubmit}>
                    <label>
                    updating string:
                    <input type="text" {...bindString} />
                    </label>
                    <label>
                    updating boolean:
                    <input type="text" {...bindBoolean} />
                    </label>
                    <label>
                    updating number:
                    <input type="text" {...bindNumber} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                

                : null}
        </div>

    );
};

export default Update;