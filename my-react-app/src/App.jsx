import { Routes, Route } from "react-router-dom";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import Slide from "./Slide.jsx";
import Services from "./Services.jsx";
import MissionSection from "./MissionSection.jsx";
import PricingPage from "./PricingPage.jsx";

function Home() {
  return (
    <>
      <Slide />
      <Services />
      <MissionSection />
    </>
  );
}

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;