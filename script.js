// Select elements with fade-in and slide-up classes
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-up');

// Intersection Observer options
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

// Intersection Observer logic
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

// Observe all fade-in and slide-up elements
faders.forEach(fader => appearOnScroll.observe(fader));
sliders.forEach(slider => appearOnScroll.observe(slider));
