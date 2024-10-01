const testimonials = document.querySelectorAll(".testimonial");
let currentIndex = 0;

document.getElementById("next").addEventListener("click", () => {
  testimonials[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % testimonials.length;
  testimonials[currentIndex].classList.add("active");
});

document.getElementById("prev").addEventListener("click", () => {
  testimonials[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  testimonials[currentIndex].classList.add("active");
});
