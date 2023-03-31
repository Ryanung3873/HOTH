import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar"

function HomePage() {
    const [data, setData] = useState();

    return (
        <div className="App">
            <Navbar/>

        </div>
    );    
}

export default HomePage;