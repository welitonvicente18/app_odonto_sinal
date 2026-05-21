import "@fontsource/inter";
import "./css/App.css";
import NavBar from "./page/NavBar";
import PageSentimento from "./page/PageSentimento";
import PageProfilaxia from "./page/PageProfilaxia";
import Footer from "./page/Footer";
import planoDeFundo from "./assets/plano_fundo.png";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${planoDeFundo})`,
          opacity: 1.0,
        }}
      />
      <div className="relative z-10">
        <NavBar />
        <Routes>
          <Route path="/" element={<PageSentimento />} />
          <Route path="/profilaxia" element={<PageProfilaxia />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
