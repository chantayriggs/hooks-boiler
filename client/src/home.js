import React, { useEffect, useState } from 'react';
import axios from "axios"

import Update from "./update"
import Delete from "./delete"
import Create from "./create"

import "./styles.css"

const Home = () => {

    const [allBoilers, setAllBoilers] = useState(null)
    const [needUpdate, setNeedUpdate] = useState(false)

    const update = () => {
        setNeedUpdate(!needUpdate)
    }

    useEffect( () => {
        axios
            .get("http://localhost:4000/boilers/read")
            .then( response => setAllBoilers(response.data))
            .catch( error => console.log(error))
    }, [needUpdate])

    return (
        <div>
            { allBoilers === null ? 
            
                <div>loading...</div> 
                
                : 
                
                <div className="home-wrapper" >
                    <Create update={update} />
                    <div className="card-wrapper" >
                        {allBoilers.map( boiler => (
                            <div key={boiler._id} className="card" >
                                {boiler.boiler_string}
                                {boiler.boiler_number}
                                {boiler.boiler_boolean}
                                <Update update={update} boiler={boiler} />
                                <Delete update={update} id={boiler._id} />
                            </div>
                        ))}
                    </div>

                </div>
            
            }

        </div>
    );
};

export default Home;