import './App.css';
import { Routes, Route } from "react-router-dom"
import Auth from './routes/auth/auth.component';
import Navbar from './components/navbar/navbar.component';
import Home from './routes/home/home.component';
import Dashboard from './routes/dashboard/dashboard.component';
import Profile from "./routes/profile/profile.component";
import PrivateRoute from "./routes/privateRoute";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.user.currentUser)
 
  console.log(user)
  return (
    <div className="App">
      <Navbar user={user}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/auth" element={<Auth user={user}/>} />
        <Route path="/dashboard" element={<PrivateRoute user={user}><Dashboard user={user}/></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute user={user}> <Profile /></PrivateRoute>} />
      </Routes>     
    </div>
  )
}

export default App;
