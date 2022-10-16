import React from "react";
import NFT from '../components/Metadata/NFT2.png';
import '../styles/Card.css'


export default function Card3(){
    return(
        <>
        <div classname="CardContainer">
         <div className="Legend">
         <img alt="NFT" src={NFT} width="250px" />
            <p>NFT Item: The Happy Duck #2</p>
            <p>Collection: The Happy Ducks</p>
            </div>
        </div>
        </>


    );
}

