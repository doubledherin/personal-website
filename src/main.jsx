import { createRoot } from "react-dom/client";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";

const navContainer = document.getElementById("nav-container");
const hero = document.getElementById("home");

if (navContainer) {
  const root = createRoot(navContainer);
  root.render(<Nav />);
}
if (hero) {
  const root = createRoot(hero);
  root.render(<Hero />);
}
