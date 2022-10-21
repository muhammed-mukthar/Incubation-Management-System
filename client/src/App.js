import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'

import Login from './pages/Login';
import Signup from "./pages/Signup";

import User from './context/UserContext'
import Pending from './components/Pending';
import Home from './pages/Home';

import  Applications from './context/ApplicationContext'

import LoginAdmin from './pages/LoginAdmin';
import AdminDash from './pages/AdminDash';
import AdminTrack from './pages/AdminTrack';
import UserBlock from './pages/UserBlock';
import AdminBooking from './pages/AdminBooking';

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
           
            <Route path="/admin"  element={<LoginAdmin/>} />
            <Route path="/admin/dashboard"  element={<AdminDash/>} />
            <Route path="/admin/track"  element={<AdminTrack/>} />
            <Route path="/admin/userblock"  element={<UserBlock/>} />
            <Route path="/admin/booking"  element={<AdminBooking/>} />
    
          </Routes>
      
        </Router>
        </Applications>
        </User>
    </div>
  )
}

export default App;
