import React from "react";
import styled from "styled-components";
import local from '../imgs/local.svg';
import phone from '../imgs/phone.svg';
import chat from '../imgs/chat.svg';
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';

import '../styles/Footer.css'
import { Button } from "@mui/material";


export default function Footer(){
    return(
        <div>
        <FooterContainer1>
           <div className="TextFieldContainer">
          <TextField
            className='NameField'
            variant='outlined'
            placeholder='Name'
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              ),
            }} />
        </div>
        <div className="TextFieldContainer">
          <TextField
            className='EmailField'
            variant='outlined'
            placeholder='E-mail'
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              ),
            }} />
        </div>
        <div className="TextFieldContainer">
          <TextField
            className='MessageField'
            variant='outlined'
            placeholder='Message'
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              ),
            }} />
        </div>
        <div>
            <Button variant="contained" className="SearchButton" size="large">
              Enviar
            </Button>
        </div>
        </FooterContainer1>
        
        <FooterContainer2>
        <div className="ImageField">
        <img alt="local" src={local} width="25px"/>
        </div>
        <div className="ImageField">
        <img alt="phone" src={local} width="25px" />
        </div>
        <div className="ImageField">
        <img alt="chat" src={chat} width="25px" />
        </div>
        </FooterContainer2>

        <FooterContainer3>
        <div className="InformationField">
        <h5>Adress</h5>
        <p>Ac. 24 #38-47, Bogotá</p>
        </div>
        <div className="InformationField">
        <h5>Phone</h5>
        <p>+1 13810000</p>
        </div>
        <div className="InformationField">
        <h5>Telegram</h5>
        <p>@SBTn</p>
        </div>
        </FooterContainer3>

        <FooterContainer4>
        <h5>@2022 - Copyright SBTn</h5>
        </FooterContainer4>
        </div>


    );
}

const FooterContainer1 = styled.div`
display: inline;
background: #253E93;
width: 50%;
height: 350px;
position: absolute;
padding-top: 30px;
bottom: 0;
left: 0;
padding-left: 25%;
`;
const FooterContainer2 = styled.div`
display: inline;
background: #253E93;
width: 60px;;
height: 340px;
position: absolute;
padding-top: 30px;
bottom: 0;
right: 0;
padding-right: 42%;
`;

const FooterContainer3 = styled.div`
display: inline;
background: #253E93;
width: 22%;
height: 350px;
position: absolute;
padding-top: 30px;
bottom: 0;
right: 0;
padding-right: 20%;
`;
const FooterContainer4 = styled.div`
display: flex;
background: white;
justify-content: center;
align-items: center;
width: 100%;
height: 40px;
font-size: 15px;
color: black;
position: absolute;
bottom: 0;
right: 0;
`;

