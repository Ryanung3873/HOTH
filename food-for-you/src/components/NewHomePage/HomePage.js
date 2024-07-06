import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar"
import Container from '@mui/material/Container';
import "./HomePage.scss"

function HomePage() {
    const [data, setData] = useState();

    return (
        <div className="App">
            <Navbar/>
            <Container maxWidth="lg">
            {/* <div className="main-container"> */}
            <h2 className="main-heading">
                Finding the right recipes, for you.
            </h2>
            {/* </div> */}
            </Container>

        </div>
    );    
}

export default HomePage;