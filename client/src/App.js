import { Errorpage} from "./components/Errorpage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Footer} from "./components/Footer";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Footer/>
   <Routes>
     <Route path="*" element={<Errorpage/>}/>
     <Route path="/" element={<h1>HOME</h1>}/>
   </Routes>
    </BrowserRouter>
    </>    
  );
}

export default App;
