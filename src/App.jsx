import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./assets/Components/Footer";
import Landing from "./assets/Pages/Landing";
import Criticalcare from "./assets/Pages/Specialities/Criticalcare";
import Diabetology from "./assets/Pages/Specialities/Diabetology";
import Oncology from "./assets/Pages/Specialities/Oncology";
import Neurology from "./assets/Pages/Specialities/Neurology";
import Ent from "./assets/Pages/Specialities/Ent";
import Caardiology from "./assets/Pages/Specialities/Caardiology";
import Endoscopy from "./assets/Pages/Excellence/Endoscopy";
import Laproscopy from "./assets/Pages/Excellence/Laproscopy";
import Openheart from "./assets/Pages/Excellence/Openheart";
import OurExperts from "./assets/Pages/Doctors/OurExperts";
import Navbar from "./assets/Components/Navbar";
import Aboutus from "./assets/Pages/Aboutus";
import Careers from "./assets/Pages/Careers";
import Application from "./assets/Pages/Contact/Application";

function App() {
  return (
    <>
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="" element={<Landing />} />
            <Route path="Critical Care" element={<Criticalcare />} />
            <Route path="diabetology" element={<Diabetology />} />
            <Route path="oncology" element={<Oncology />} />
            <Route path="neurology" element={<Neurology />} />
            <Route path="ent" element={<Ent />} />
            <Route path="cardiology" element={<Caardiology />} />
            <Route path="endoscopy" element={<Endoscopy />} />
            <Route path="laproscopy" element={<Laproscopy />} />
            <Route path="openheart" element={<Openheart />} />
            <Route path="ourexperts" element={<OurExperts />} />
            <Route path="aboutus" element={<Aboutus />}/>
            <Route path="careers" element = {<Careers />}/>
            <Route path="application" element={<Application />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
