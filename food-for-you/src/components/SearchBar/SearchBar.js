import { useEffect, useState } from "react";
import Search from '@mui/icons-material/Search';
import { FormControl, IconButton, Input } from "@mui/material";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import axios from "axios";
import Typography from '@mui/material/Typography'


// import Input from '@mui/material/Input';
import "./SearchBar.scss";


function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentSearchTerm, setCurrentSearchTerm] = useState(null);

    // var currentSearchTerm = '';

    const handleSubmit = (event) => {
        // event.preventDefault();
        handleSearch();
    }

    // Call search function with the searchTerm state variable
    const handleSearch = async () => {
        onSearch(searchTerm);               // pass search term to onSearch function in RecipePage.js
        // currentSearchTerm = searchTerm;
        setCurrentSearchTerm(searchTerm);
        console.log("Current: ", currentSearchTerm);
        setSearchTerm('');
        console.log("Current after setting: ", currentSearchTerm);
    }

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <>
            <div className="search-field">
                    <FormControl 
                        sx={{ m: 1, width: '30ch' }}
                        variant="outlined"
                        type="input"
                        onKeyPress={event => {
                            console.log(event.key);
                            if (event.key === "Enter") {
                                handleSubmit();
                            }
                        }}>
                        <InputLabel htmlFor="outlined-adornment-search">Find Your Recipe</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-search"
                            value={searchTerm}
                            onChange={handleInputChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton 
                                        aria-label="search"
                                        size="medium"
                                        onClick={handleSubmit}
                                    >
                                        <Search/>  
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
            </div>
            <div className="show-search-term">
                <Typography component="div" variant="body1" style={{ display: !currentSearchTerm  ? "none" : ""}}>
                    Showing search results for: "{currentSearchTerm}"
                </Typography>
            </div>
        </>

    )
}

export default SearchBar;


