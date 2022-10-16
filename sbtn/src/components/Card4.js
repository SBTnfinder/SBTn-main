import React from "react";
import NFT from '../components/Metadata/NFT3.png';
import '../styles/Card.css'


export default function Card4(){
    return(
        <>
        <div classname="CardContainer">
         <div className="Legend">
         <img alt="NFT" src={NFT} width="250px" />
            <p>NFT Item: The Happy Duck #3</p>
            <p>Collection: The Happy Ducks</p>
            </div>
        </div>
        </>


    );
}

