import React from "react";
import SBTn from '../components/Metadata/SBTn1.png';
import '../styles/SBTn.css'


export default function SBTn1(){
    return(
        <>
        <div classname="SBTnContainer">
         <div className="SBTnLegend">
         <img alt="SBTn" src={SBTn} width="200px" align-items="center" />
            <center>
                <p>SBTn #0001</p>
            </center>
            </div>
        </div>
        </>


    );
}