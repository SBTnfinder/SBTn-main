import {useNavigate} from "react-router-dom";
import '../styles/Result.css';
import Header from "./Header";
import Footer from "./Footer";
import Card3 from "./Card3";
import SBTn2 from "./SBTn2";

function Result3() {
    
const history = useNavigate(); 
  return (
    <div className="ResultContainer">
    <Header />
    <div className="NFT">
    <Card3 />
    </div>
    <div className="SBTn">
    <SBTn2 />
    </div>
      <Footer />
    </div>
  );
}

export default Result3;