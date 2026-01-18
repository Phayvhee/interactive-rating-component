import "./style.css";
import illustrationImg from "./assets/illustration-thank-you.svg";

const rates = document.querySelectorAll(".rate");
const submitBtn = document.getElementById("submit-btn");
const ratingCard = document.getElementById("rating-card");
const thankYouCard = document.getElementById("thank-you-card");
const selectedText = document.getElementById("selected-text");

let selectedRating = null;

rates.forEach(rate => {
  rate.addEventListener("click", () => {
    rates.forEach(r => r.classList.remove("active"));
    rate.classList.add("active");
    selectedRating = rate.textContent;
    submitBtn.disabled = false;
  });
});

submitBtn.addEventListener("click", () => {
  ratingCard.classList.add("hidden");
  thankYouCard.classList.remove("hidden");
  selectedText.textContent = `You selected ${selectedRating} out of 5`;
});

const illustration = document.querySelector(".illustration");

if (illustration) {
  const img = document.createElement("img");
  img.src = illustrationImg;
  img.alt = "Thank you illustration";
  illustration.appendChild(img);
}
