import {useNavigate} from "react-router-dom";
import '../styles/Result.css';
import Header from "./Header";
import Footer from "./Footer";
import Card2 from "./Card2";
import SBTn4 from "./SBTn4";

function Result2() {
    
const history = useNavigate(); 
  return (
    <div className="ResultContainer">
    <Header />
    <div className="NFT">
    <Card2 />
    </div>
    <div className="SBTn">
    <SBTn4 />
    </div>
      <Footer />
    </div>
  );
}

export default Result2;