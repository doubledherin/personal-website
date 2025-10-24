import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import GenerativeArt from "./components/GenerativeArt.jsx";
import ArtModal from "./components/ArtModal.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [isArtModalOpen, setIsArtModalOpen] = useState(false);
  const [selectedArtId, setSelectedArtId] = useState(null);
  const [p5Loaded, setP5Loaded] = useState(false);

  useEffect(() => {
    if (window.p5) {
      setP5Loaded(true);
      return;
    }

    const p5Script = document.createElement("script");
    p5Script.src = "/libraries/p5.min.js";
    p5Script.onload = () => {
      setP5Loaded(true);
    };
    document.body.appendChild(p5Script);

    return () => {};
  }, []);

  const openArtModal = (artId) => {
    setSelectedArtId(artId);
    setIsArtModalOpen(true);
  };

  const closeArtModal = () => {
    setIsArtModalOpen(false);
    setSelectedArtId(null);
  };

  return (
    <>
      <Nav />
      <Hero p5Loaded={p5Loaded} />
      <About />
      <Experience />
      <GenerativeArt onArtClick={openArtModal} />
      <ArtModal
        isOpen={isArtModalOpen}
        onClose={closeArtModal}
        initialArtId={selectedArtId}
      />
      <Footer />
    </>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.getElementById("root");
  if (appContainer) {
    const root = createRoot(appContainer);
    root.render(<App />);
  }
});

// const navContainer = document.getElementById("nav-container");
// const hero = document.getElementById("home");
// const about = document.getElementById("about-section");
// const experience = document.getElementById("experience-section");
// const generativeArt = document.getElementById("generative-art");
// const artModalContainer = document.getElementById("art-modal-container");

// if (navContainer) {
//   const root = createRoot(navContainer);
//   root.render(<Nav />);
// }
// if (hero) {
//   const root = createRoot(hero);
//   root.render(<Hero />);
// }
// if (about) {
//   const root = createRoot(about);
//   root.render(<About />);
// }

// if (experience) {
//   const root = createRoot(experience);
//   root.render(<Experience />);
// }

// if (generativeArt) {
//   const root = createRoot(generativeArt);
//   root.render(<GenerativeArt />);
// }

// if (artModalContainer) {
//   const root = createRoot(artModalContainer);
//   root.render(<ArtModal />);
// }
