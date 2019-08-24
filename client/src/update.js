import React, { useState }  from 'react';
import axios from 'axios';

const Update = props => {

    let boiler = props.boiler
    const [showEditor, setShowEditor] = useState(false)
    const [string, setString] = useState(boiler.boiler_string)
    const [number, setNumber] = useState(boiler.boiler_number)
    const [boolean, setBoolean] = useState(boiler.boiler_boolean)

    const handleUpdate = () => {
        setShowEditor(true)
    }

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
        let updatedBoiler = {
            "boiler_string": string,
            "boiler_number": number,
            "boiler_boolean": boolean
        }
        axios
            .post(`http://localhost:4000/boilers/update/${boiler._id}`, updatedBoiler )
            .then(response => console.log(response))
            .catch(error => console.log(error))

        setShowEditor(false)
        props.update()

    }

    return (
        <div>
            {showEditor ? 
                <div>
                    <div>Edit Item</div>
                    <form onSubmit={handleSubmit}>
                        <input type="text"  value={string} onChange={handleStringChange} />
                        <input type="text"  value={number} onChange={handleNumberChange} />
                        <input type="text"  value={boolean} onChange={handleBooleanChange} />
                        <input type="submit" value="Submit" />
                        <button  onClick={ () => setShowEditor(false)} >Cancel</button>
                    </form>
                </div> 
                
                : 
                
                <div>
                    <button onClick={ () => handleUpdate() } >update</button>
                </div>
            }

        </div>
    );
};

export default Update;