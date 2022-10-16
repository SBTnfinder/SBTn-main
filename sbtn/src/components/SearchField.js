import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import React from "react";
import '../styles/SearchField.css'
import { Button } from "@mui/material";
import lupa from '../imgs/lupa.png'
import {useNavigate} from "react-router-dom";

function search(){

  if(document.getElementById('sid').value == 'The Happy Duck #1'){

    window.location.href = "./Result";
  }else if(document.getElementById('sid').value == 'The Time Passed #1'){

    window.location.href = "./Result2";
  }else if(document.getElementById('sid').value == 'The Happy Duck #2'){

    window.location.href = "./Result3";
  }else if(document.getElementById('sid').value == 'The Happy Duck #3'){

    window.location.href = "./Result4";
  }else if(document.getElementById('sid').value == 'The Time Passed #2'){

    window.location.href = "./Result5";
  }else{
    return alert('No Results');
  }
}

const SearchField = () => {
  const history = useNavigate();  
  return(
        <>
          <div className="TextFieldContainer">
          <TextField
            id="sid"
            className='SearchField'
            variant='outlined'
            placeholder='Search by NFT Collection + #ID'
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img alt="lupa" src={lupa} width="25px" />
                </InputAdornment>
              ),
            }} />
        </div>
        <div>
            <Button onClick={() => search()}  variant="contained" className="SearchButton">
              Search
            </Button>
        </div>
      </>
    );
};

export default SearchField;
