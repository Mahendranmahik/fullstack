
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Addusers from './Users/Addusers';
import Editusers from './Users/Editusers';
import Viewuser from './Users/Viewuser';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/adduser" element={<Addusers/>}></Route>
            <Route exact path="/edituser/:id" element={<Editusers/>}></Route>
            <Route exact path="/viewuser/:id" element={<Viewuser/>}></Route>

        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
