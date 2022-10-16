import {useNavigate} from "react-router-dom";
import '../styles/Result.css';
import Header from "./Header";
import Footer from "./Footer";
import Card4 from "./Card4";
import SBTn5 from "./SBTn5";

function Result4() {
    
const history = useNavigate(); 
  return (
    <div className="ResultContainer">
    <Header />
    <div className="NFT">
    <Card4 />
    </div>
    <div className="SBTn">
    <SBTn5 />
    </div>
      <Footer />
    </div>
  );
}

export default Result4;