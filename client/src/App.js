import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Form from './pages/Form';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import UserHome from './pages/UserHome';
import User from './context/UserContext'


function App() {
  return (
    <div className="App">
      <User>
       <Router>
       
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/home" element={<Form/>} />
            
          


          </Routes>
      
        </Router>
        </User>
    </div>
  )
}

export default App;
