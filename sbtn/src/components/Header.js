import React from "react";
import styled from "styled-components";
import ButtonConnect from "./ConnectWallet/ButtonConnect.tsx";
import {useNavigate} from "react-router-dom";
import logo from '../imgs/logo.svg';

export default function Header(){

    const history = useNavigate();
    return(
        
        <HeaderStyle>
            <Button onClick={() => history("/")}>
                <LogoImg src={logo} alt=""/>
            </Button>
            <Button>
            <ButtonConnect height={50} width={200} />
            </Button>
        </HeaderStyle>
    );
}

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: row;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    padding-top: 10px;
    padding-left: 25%;
    padding-right: 25%;
    align-items: center;
    justify-content: space-between;
    background: black;
`;

const LogoImg = styled.img`
    width: 100px;
    height: 90px;
`;

const ButtonList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 10%;
    h1,h2{
        font-size: 15px;
        margin-right: 50px;
        :hover{
            text-decoration: underline;
            cursor: pointer;
        }
        color: #7C7C7C;
    }
`;

const Button = styled.div`
    display: flex;
    flex-direction: row;
    align-items: right;
    margin-right: 40px;
`;