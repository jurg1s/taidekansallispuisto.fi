import "./App.css";
import { Route, Routes } from "react-router-dom";
import Base from "./components/Base";
import Home from "./components/pages/Home";
import Uutiset from "./components/pages/Uutiset";



function App() {
  return (
    <div className="App">
      <Base />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Uutiset" element={<Uutiset />} />
      </Routes>
    </div>
  );
}



export default App;
