import './App.css';
import Form from './Components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home.jsx'


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/form' element={<Form/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
