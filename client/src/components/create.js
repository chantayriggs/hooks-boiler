import React from 'react'
import { useInput } from "./formStuff/useInput"
import axios from "axios"

const Create = () => {
    const { value:string, bind:bindString, reset:resetString } = useInput('');
    const { value:boolean, bind:bindBoolean, reset:resetBoolean } = useInput('');
    const { value:number, bind:bindNumber, reset:resetNumber } = useInput('');

    const handleSubmit = event => {
        event.preventDefault();
        let newBoiler = {
          "boiler_string": string,
          "boiler_boolean": boolean,
          "boiler_number": number
        }
        axios.post("http://localhost:4000/boilers/create", newBoiler)
          .then(response => console.log(response.data))
    
        resetString();
        resetBoolean();
        resetNumber();
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          adding string:
          <input type="text" {...bindString} />
        </label>
        <label>
          adding boolean:
          <input type="text" {...bindBoolean} />
        </label>
        <label>
          adding number:
          <input type="text" {...bindNumber} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
};

export default Create;