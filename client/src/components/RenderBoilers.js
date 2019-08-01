import React, {useEffect } from 'react';
import Delete from "./delete"
import Update from "./update"
import axios from "axios"

const RenderBoilers = props => {

    let boilers = props.boilers

    useEffect( () => {
        console.log(boilers)
    })

    return (
        <div>
            {Object.values(boilers).map(boiler => (
                <div className="boiler-wrapper" >
                    <div>{boiler.boiler_string}</div>
                    <div>{boiler.boiler_number}</div>
                    <div>{boiler.boiler_boolean}</div>
                    <div>{boiler._id}</div>
                    <Update boiler={boiler} />
                    <Delete id={boiler._id} />
                </div>
            ))}
        </div>
    );
}

export default RenderBoilers