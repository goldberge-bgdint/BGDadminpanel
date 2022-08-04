import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


// --------------  Importing pages


// Main layout
import Mainlayout from "./modules/Mainlayout";

// Dashboard
import Dashboard from "./modules/dashboard/Dashboard"; 

// Contact 
import Contact from "./modules/Contact/Contact";

// Careers
import Newjob from "./modules/Careers/Newjob";

function App() {
  return (
    <div>

      
 <Router>

<Routes>

  <Route path="/" element={<Mainlayout/>} >
     <Route index element={<Dashboard/>} />
     <Route path="/dashboard" element={<Dashboard/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path="/newjob" element={<Newjob/>} />
  </Route>

</Routes>

</Router>


    </div>
  );
}

export default App;
