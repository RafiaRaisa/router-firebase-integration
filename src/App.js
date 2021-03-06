import { Route, Routes } from 'react-router';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       </Routes> 
    </div>
  );
}

export default App;
