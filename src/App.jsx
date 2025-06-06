import React from "react";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
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
