import React from 'react';
import axios from "axios"

const Delete = props => {

    let boilerId = props.id

    const handleDelete = () => {
        axios.delete(`http://localhost:4000/boilers/delete/${boilerId}`)
             .then( response => console.log(response.data))
             .catch( error => console.log(error))
    }

    return (
        <button onClick={handleDelete} >
            Delete
        </button>
    );
};

export default Delete;