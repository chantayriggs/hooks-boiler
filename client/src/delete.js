import React from 'react';
import axios from "axios"

const Delete = props => {

    let id = props.id

    const handleDelete = () => {
        axios
            .delete(`http://localhost:4000/boilers/delete/${id}`)
            .then( response => console.log(response))
            .catch(error => console.log(error))

        props.update()
    }

    return (
        <div>
            <button onClick={ () => handleDelete()} >delete</button>
        </div>
    );
};

export default Delete;