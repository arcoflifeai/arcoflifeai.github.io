const enBtn = document.getElementById("enBtn");
const hrBtn = document.getElementById("hrBtn");
const elements = document.querySelectorAll("[data-en]");

function setLang(lang) {
  elements.forEach(el => {
    el.textContent = el.dataset[lang];
  });

  enBtn.classList.toggle("active", lang === "en");
  hrBtn.classList.toggle("active", lang === "hr");
}

enBtn.onclick = () => setLang("en");
hrBtn.onclick = () => setLang("hr");

// default language
setLang("en");
