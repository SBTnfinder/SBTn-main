import React from "react";
import SearchField from "./SearchField";
import '../styles/Home.css'
import Header from "./Header";
import logo from '../imgs/logo.svg';
import {useNavigate} from "react-router-dom";

const Home = () => {
  
  const history = useNavigate();
  return(
      <div className="HomeConatiner1">
        <Header />
    <div className="HomeContainer2">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchField />
    </div>
    </div>
    );
};

export default Home;
