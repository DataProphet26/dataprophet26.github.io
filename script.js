const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => observer.observe(item));

const copyBtn = document.getElementById("copyBibBtn");
const bib = document.getElementById("bibtex");

if (copyBtn && bib) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(bib.innerText.trim());
      copyBtn.textContent = "Copied";
      setTimeout(() => {
        copyBtn.textContent = "Copy BibTeX";
      }, 1200);
    } catch (error) {
      copyBtn.textContent = "Copy failed";
      setTimeout(() => {
        copyBtn.textContent = "Copy BibTeX";
      }, 1200);
    }
  });
}
