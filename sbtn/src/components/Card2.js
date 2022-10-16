import React from "react";
import NFT from '../components/Metadata/NFT1-1.png';
import '../styles/Card.css'


export default function Card2(){
    return(
        <>
        <div classname="CardContainer">
         <div className="Legend">
         <img alt="NFT" src={NFT} width="250px" />
            <p>DNFT Item: The Time Passed #1</p>
            <p>Collection: The Time Passed</p>
            </div>
        </div>
        </>


    );
}

