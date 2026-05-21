import { useEffect, useState } from "react";
import "@fontsource/inter";
import "./css/App.css";
import NavBar from "./page/NavBar";
import PageSentimento from "./page/PageSentimento";
import PageProfilaxia from "./page/PageProfilaxia";
import Footer from "./page/Footer";
import planoDeFundo from "./assets/plano_fundo.png";
import { Routes, Route } from "react-router-dom";
function App() {
  const [name, setName] = useState("Paciente");

  useEffect(() => {
    setName;
  }, []);

  return (
    <div class="relative min-h-screen">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${planoDeFundo})`,
          opacity: 1.0,
        }}
      />
      <div className="relative z-10">
        <NavBar name={name} setName={setName} />
        <Routes>
          <Route path="/" element={<PageSentimento name={name} />} />
          <Route path="/profilaxia" element={<PageProfilaxia name={name} />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
