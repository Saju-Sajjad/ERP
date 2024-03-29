// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./content/CustomerManagement/Dashboard/Dashboard";
import Portal from "./components/Pages/Portal";
import EditProfile from "./content/CustomerManagement/Dashboard/Profile";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portal/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/profile-management" element={<EditProfile/>} />
      </Routes>

    </Router>
  );
};

export default App;