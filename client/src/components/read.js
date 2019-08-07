import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios"
import RenderBoilers from './RenderBoilers';
import Create from "./create"




const Read = () => {


    const [boilers, setBoilers] = useState('')
    const url = "http://localhost:4000/boilers/read"

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setBoilers(response.data)
            })
            .catch( error => {
                console.log(error)
            })
    }, [])


    return (
        <div>
            <RenderBoilers boilers={boilers} />
            <Create />
        </div>
    )
}

export default Read;