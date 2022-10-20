import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Form from './components/Form';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import UserHome from './pages/UserHome';
import User from './context/UserContext'
import Pending from './components/Pending';
import Home from './pages/Home';
import NavAdmin from './components/Admin/NavAdmin';
import Usermang from './components/Admin/Usermang';
import Dashboard from './components/Admin/Dashboard';
import  Applications from './context/ApplicationContext'
import Track from './components/Admin/Track';
import Booking from './components/Admin/Booking';

function App() {
  return (
    <div className="App">
      <User>
        <Applications>
       <Router>
       
          <Routes>
            <Route path="/"  element={<Login />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/pending" element={<Pending/>} />
            <Route path="/check"  element={<Booking/>} />
            
          


          </Routes>
      
        </Router>
        </Applications>
        </User>
    </div>
  )
}

export default App;
