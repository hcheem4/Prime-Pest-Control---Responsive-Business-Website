const slides = document.querySelectorAll(".slide");
const heading = document.getElementById("hero-heading");
const subheading = document.getElementById("hero-subheading");

const texts = [
  {
    title: "Serving the Brampton Area",
    subtitle:
      "Reliable pest control solutions to protect your home and business.",
  },
  {
    title: "Safe & Effective Pest Control",
    subtitle: "Protecting families with environmentally-friendly treatments.",
  },
  {
    title: "Your Trusted Pest Experts",
    subtitle: "Residential & Commercial solutions tailored for you.",
  },
];

let currentSlide = 0;

function changeSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");

  heading.textContent = texts[currentSlide].title;
  subheading.textContent = texts[currentSlide].subtitle;
}

setInterval(changeSlide, 5000);
