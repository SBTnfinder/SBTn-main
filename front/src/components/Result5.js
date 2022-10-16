import {useNavigate} from "react-router-dom";
import '../styles/Result.css';
import Header from "./Header";
import Footer from "./Footer";
import Card5 from "./Card5";
import SBTn3 from "./SBTn3";

function Result5() {
    
const history = useNavigate(); 
  return (
    <div className="ResultContainer">
    <Header />
    <div className="NFT">
    <Card5 />
    </div>
    <div className="SBTn">
    <SBTn3 />
    </div>
      <Footer />
    </div>
  );
}

export default Result5;