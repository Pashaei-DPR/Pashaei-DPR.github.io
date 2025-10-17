const faBtn = document.getElementById("fa-btn");
const enBtn = document.getElementById("en-btn");
const faContent = document.getElementById("content-fa");
const enContent = document.getElementById("content-en");

faBtn.addEventListener("click", () => {
  faContent.style.display = "block";
  enContent.style.display = "none";
  document.body.style.direction = "rtl";
});

enBtn.addEventListener("click", () => {
  faContent.style.display = "none";
  enContent.style.display = "block";
  document.body.style.direction = "ltr";
});
