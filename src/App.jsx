import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./routes/auth/auth.component";
import Home from "./routes/home/home.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import Profile from "./routes/profile/profile.component";
import PrivateRoute from "./routes/privateRoute";
import LayoutRoute from "./routes/layoutRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutRoute />}>
          <Route index element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
