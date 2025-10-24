import { createRoot } from "react-dom/client";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import GenerativeArt from "./components/GenerativeArt.jsx";

const navContainer = document.getElementById("nav-container");
const hero = document.getElementById("home");
const about = document.getElementById("about-section");
const experience = document.getElementById("experience-section");
const generativeArt = document.getElementById("generative-art");

if (navContainer) {
  const root = createRoot(navContainer);
  root.render(<Nav />);
}
if (hero) {
  const root = createRoot(hero);
  root.render(<Hero />);
}
if (about) {
  const root = createRoot(about);
  root.render(<About />);
}

if (experience) {
  const root = createRoot(experience);
  root.render(<Experience />);
}

if (generativeArt) {
  const root = createRoot(generativeArt);
  root.render(<GenerativeArt />);
}
