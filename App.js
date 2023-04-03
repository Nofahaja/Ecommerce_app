import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Viewproduct from './Viewproduct';
import Categories from './Categories';
import Loginpage from './Loginpage';
import Cart from './Cart';


function App() {
  return (
    <BrowserRouter>
    <Routes>
   
  
      <Route path="/" element={<Homepage/>}></Route>
      <Route path ="/viewProduct/:id" element={<Viewproduct/>}> </Route>
      <Route path ="/Categories/:value" element={<Categories/>}> </Route>
      <Route path ="/Categories/:value" element={<Categories/>}> </Route>
      <Route path ="/Loginpage" element={<Loginpage/>}> </Route>
      <Route path ="/Cart/:id" element={<Cart/>}> </Route>




      
    </Routes>
    </BrowserRouter>
  
   
   
  
  );
}

export default App;
