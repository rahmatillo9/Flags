import { Route, Routes } from "react-router-dom";
import Headr from "./components/Headr";
import Main2 from "./components/Main2";

export default function App() {
  return <div>
   <Routes>
    <Route path="/" element={<Headr/>}/>
    
   </Routes>
   <Main2/>
  </div>;
}
