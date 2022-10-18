import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Login from './pages/Login';
import Signup from "./pages/Signup";
import UserHome from './pages/UserHome';



function App() {
  return (
    <div className="App">
       <Router>
       
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/home" element={<UserHome/>} />
            
          


          </Routes>
      
        </Router>

    </div>
  )
}

export default App;
