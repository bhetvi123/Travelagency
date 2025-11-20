      // <!-- Mobile Menu Toggle Script -->
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    let isOpen = false;

  btn.addEventListener('click', () => {
      if(isOpen){
        menu.classList.add('-translate-x-full');
      } else {
        menu.classList.remove('-translate-x-full');
      }
        isOpen = !isOpen;
    });


const dots = document.querySelectorAll(".dot");
const slider = document.getElementById("testimonial-slider");
const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");

let activeIndex = 0;
const slides = slider.children;
const totalSlides = slides.length;

// Calculate slide height dynamically
function getSlideHeight(index) {
  return slides[index].offsetHeight + parseInt(getComputedStyle(slides[index]).marginBottom);
}

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.remove("bg-gray-800", "w-5", "h-5");
    dot.classList.add("bg-gray-400", "w-4", "h-4");
    if (i === activeIndex) {
      dot.classList.remove("bg-gray-400");
      dot.classList.add("bg-gray-800", "w-5", "h-5");
    }
  });
}

function showSlide(index) {
  let translateY = 0;
  for (let i = 0; i < index; i++) {
    translateY += getSlideHeight(i);
  }
  slider.style.transform = `translateY(-${translateY}px)`;
  activeIndex = index;
  updateDots();
}

// Initialize
updateDots();

upBtn.addEventListener("click", () => {
  const newIndex = Math.max(activeIndex - 1, 0);
  showSlide(newIndex);
});

downBtn.addEventListener("click", () => {
  const newIndex = Math.min(activeIndex + 1, totalSlides - 1);
  showSlide(newIndex);
});


 ///languagess


  const languageSelect = document.getElementById("languageSelect");

  languageSelect.addEventListener("change", function() {
    const selectedLang = this.value;

    // Option 1: Redirect to different language pages
    if(selectedLang === "en") {
      window.location.href = "language"; // English page
    } else if(selectedLang === "es") {
      window.location.href = "languages/Inderx-es.html"; // Spanish page
    } else if(selectedLang === "er") {
      window.location.href = ""; // French page
    }

    // Option 2: If using dynamic translation on the same page:
    // You could load translation JSON and update text dynamically
    // Example:
    // loadTranslations(selectedLang);
  });

  


 

