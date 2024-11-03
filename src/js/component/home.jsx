import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
    return (
        <div> 
            <Navbar /> 
            <Jumbotron /> 
            <div className="container-fluid">
                <div className="row w-100">
                    <Card /> 
                    <Card /> 
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default Home;
