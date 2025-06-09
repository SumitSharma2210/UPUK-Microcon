import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Committee from "../pages/Committee";
import Abstract from "../pages/Abstract";
import Contact from "../pages/Contact";
import Venue from "../pages/Venue";
import Workshop from "../pages/Workshop";
import Program from "../pages/Program";
import Faculty from "../pages/Faculty";
import Membership from "../pages/Membership";
import VideoTest from "../pages/VideoTest";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/committee" element={<Committee />} />
      <Route path="/abstract" element={<Abstract />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/venue" element={<Venue />} />
      <Route path="/workshop" element={<Workshop />} />
      <Route path="/program" element={<Program />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/test-video" element={<VideoTest />} />
    </Routes>
  );
};

export default AppRoutes;
