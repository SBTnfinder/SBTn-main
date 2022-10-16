import React from "react";
import SBTn from '../components/Metadata/SBTn4.png';
import '../styles/SBTn.css'


export default function SBTn4(){
    return(
        <>
        <div classname="SBTnContainer">
         <div className="SBTnLegend">
         <img alt="SBTn" src={SBTn} width="200px" />
            <center>
            <p>SBTn #0001</p>
            </center>
            </div>
        </div>
        </>


    );
}