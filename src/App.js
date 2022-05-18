import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import Frontpage from './component/Frontpage';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>

      <Route  element={<Frontpage/>} path="/frontpage" />
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
