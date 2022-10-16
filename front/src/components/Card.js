import React from "react";
import NFT from '../components/Metadata/NFT1.png';
import '../styles/Card.css'


export default function Card(){
    return(
        <>
        <div classname="CardContainer">
         <div className="Legend">
         <img alt="NFT" src={NFT} width="250px" />
            <p>NFT Item: The Happy Duck #1</p>
            <p>Collection: The Happy Ducks</p>
            </div>
        </div>
        </>


    );
}

