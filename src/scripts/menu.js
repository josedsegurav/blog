document.querySelector(".hamburger")?.addEventListener("click", () => {
  document.querySelector("nav")?.classList.toggle("nav-column");
  document.querySelector(".internal-links")?.classList.toggle("expanded");
  document.querySelector(".close-icon")?.classList.toggle("show-icon");
  document.querySelectorAll(".menu-line")?.forEach(line => {
    line.classList.toggle("close");
  });
});
