import React from "react";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import { BrowserRouter, Routes,Route } from "react-router";
import DashBoard from "./Pages/Dashboard";


function App() {
  return (
   <Signup/>
    // <BrowserRouter>
    // <Routes>
    // <Route path="/" index element={<DashBoard/>}/>
    //   <Route path="/signup" element={<Signup/>}/>
    //   <Route path="/signin" element={<Signin/>}/>
    // </Routes>
    // </BrowserRouter>
  );
}

export default App;
