import React, {useState,useContext} from "react";
import styled from "styled-components";
import EthersContext from "./EthersContext.tsx";
import { connectMetamask } from "./connect.tsx";
 import { ethers} from "ethers";


interface propsButton {
    height: Number,
    width: Number
}


export default function ButtonConnect(  props:propsButton ){
    const [address, setAddress] = useState("");
    const {signer, provider, setSigner, setProvider, setBlock} = useContext (EthersContext);

    async function connect(){
        const [signerMeta, providerMeta] =  await connectMetamask();
        setSigner && setSigner(signerMeta);
        setProvider && setProvider(providerMeta);
        setAddress(await signerMeta.getAddress());
        providerMeta.on("block", (blockNumber:Number) => {
            setBlock(blockNumber);
            console.log(blockNumber);
        });
    }
    function showAddress(add:string){
        const str1 = add[0]+add[1]+add[2]+add[3]+add[4]+add[5];
        const str2 = add[add.length -3]+add[add.length-2]+add[add.length-1];
        return str1 + "..." + str2;
    }
    return (
        <ConnectStyle onClick={connect}
        height={props.height} width={props.width}>
            <h3>{address == "" ? "WALLET" : showAddress(address)}</h3>
        </ConnectStyle>
    );
}

const ConnectStyle = styled.div<{height: Number; width: Number;}>`
    background: #5E44C4;
    border-radius: 30px;
    box-shadow: 0px 0px 12px 4px rgba(207,207,207,1);
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.width/15}px;
    cursor: pointer;
    color: white;
    overflow: hidden;
    h3{
        color: WHITE;
        font-size: ${props => props.width*0.070}px;
        :hover{
            text-decoration: none;
            color: black;
        }
    }
`;
