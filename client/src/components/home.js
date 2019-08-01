import React from 'react';
import { A } from "hookrouter"

const Home = () => {
    return (
        <div>
            This is home new and improved
            <br></br>
            <A href="boilers/create">Create a boi</A>
            <br></br>
            <A href="boilers/read">Read them bois</A>
            <br></br>
            <A href="boilers/update/:id">Update a boi</A>
            <br></br>
            <A href="boilers/delete/:id">Delete a boi</A>
        </div>
    );
};

export default Home;