import "./App.css";
import 'animate.css'
import Form from "./Components/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Navbaar from "./Components/Navbaar.jsx";
import BirthdyPage from "./Components/BirthdyPage.jsx";

function App() {

  return (
    <BrowserRouter >
        <Navbaar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/wish' element={<BirthdyPage />} />
        </Routes>
    
      </BrowserRouter>
  );
}

export default App;
