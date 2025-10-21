import { createRoot } from "react-dom/client";
import Nav from "./components/Nav.jsx";

const navContainer = document.getElementById("nav-container");

if (navContainer) {
  const root = createRoot(navContainer);
  root.render(<Nav />);
}
