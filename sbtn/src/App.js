import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from './components/Result';
import Result2 from './components/Result2';
import Result3 from './components/Result3';
import Result4 from './components/Result4';
import Result5 from './components/Result5';
import Home from "./components/Home";



function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/result2" element={<Result2/>}/>
        <Route path="/result3" element={<Result3/>}/>
        <Route path="/result4" element={<Result4/>}/>
        <Route path="/result5" element={<Result5/>}/>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;