import React from "react";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      easing: "ease-in-out", // smooth easing
      once: true, // animate only once on scroll
    });
  }, []);

  return (
    <>
      <main style={{ minHeight: "80vh" }}>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
};

export default App;
