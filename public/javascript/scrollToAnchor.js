document.addEventListener("DOMContentLoaded", () => {
  // Check if there's a hash in the URL
  const hash = window.location.hash;
  if (hash) {
    // Find the element with the matching ID
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      // Scroll to the element
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
});
