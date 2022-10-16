import {useNavigate} from "react-router-dom";
import '../styles/Result.css';
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import SBTn1 from "./SBTn1";

function Result() {
    
const history = useNavigate(); 
  return (
    <div className="ResultContainer">
    <Header />
    <div className="NFT">
    <Card />
    </div>
    <div className="SBTn">
    <SBTn1 />
    </div>
      <Footer />
    </div>
  );
}

export default Result;