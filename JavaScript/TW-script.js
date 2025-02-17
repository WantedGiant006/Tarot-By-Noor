// Function to move the common switch to the active section's placeholder
function moveSwitchToActiveSection() {
    const activeSection = document.querySelector('.both-content.active');
    if (activeSection) {
      const placeholder = activeSection.querySelector('.switch-placeholder');
      if (placeholder) {
        placeholder.appendChild(document.getElementById('common-switch'));
      }
    }
  }
  
  // On initial load, place the switch in the active section
  moveSwitchToActiveSection();
  
  // Attach event listeners to the switch buttons within the common switch
  document.querySelectorAll("#common-switch .switch-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      // Remove active class from all switch buttons
      document.querySelectorAll("#common-switch .switch-btn").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
  
      // Get the selected product (cards or reading)
      let selectedProduct = this.getAttribute("data-product");
  
      // Hide all sections
      document.querySelectorAll(".both-content").forEach(section => {
        section.classList.remove("active");
      });
  
      // Show the selected section
      document.getElementById(`tarot-${selectedProduct}`).classList.add("active");
  
      // Move the common switch into the newly active section's placeholder
      moveSwitchToActiveSection();
    });
  });
  


const carousel = document.querySelector('#carouselExampleIndicators');
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeDistance = touchStartX - touchEndX;
    if (swipeDistance > 50) {
        // Swipe Left → Next Slide
        const nextButton = carousel.querySelector('.carousel-control-next');
        nextButton.click();
    } else if (swipeDistance < -50) {
        // Swipe Right → Previous Slide
        const prevButton = carousel.querySelector('.carousel-control-prev');
        prevButton.click();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const title = document.getElementById("feature-title");
    const text = document.getElementById("feature-text");

    const features = {
        clarity: {
            title: "Clarity",
            text: "Gain a fresh perspective on situations, helping you make informed and confident decisions. This deck allows for deeper reflection, reducing doubt and uncertainty."
        },
        growth: {
            title: "Growth",
            text: "A great companion for personal development, encouraging self-awareness and mindfulness. It helps you recognize patterns and make positive changes in life."
        },
        healing: {
            title: "Healing",
            text: "Offers a way to process emotions and gain insight into personal struggles. By reflecting on the messages, you can find comfort, balance, and inner peace."
        },
        discovery: {
            title: "Discovery",
            text: "Sparks curiosity and encourages exploration of thoughts, emotions, and possibilities. Whether you're new to tarot or experienced, it opens doors to deeper understanding."
        }
    };
    
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            // Add active class to clicked tab
            this.classList.add("active");

            // Get the feature key
            const featureKey = this.getAttribute("data-feature");

            // Update the title and text
            title.textContent = features[featureKey].title;
            text.textContent = features[featureKey].text;
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const title = document.getElementById("read-feature-title");
    const text = document.getElementById("read-feature-text");

    const features = {
        clarity: {
            title: "Clarity",
            text: "Gain a fresh perspective on situations, helping you make informed and confident decisions. This deck allows for deeper reflection, reducing doubt and uncertainty."
        },
        growth: {
            title: "Growth",
            text: "A great companion for personal development, encouraging self-awareness and mindfulness. It helps you recognize patterns and make positive changes in life."
        },
        healing: {
            title: "Healing",
            text: "Offers a way to process emotions and gain insight into personal struggles. By reflecting on the messages, you can find comfort, balance, and inner peace."
        },
        discovery: {
            title: "Discovery",
            text: "Sparks curiosity and encourages exploration of thoughts, emotions, and possibilities. Whether you're new to tarot or experienced, it opens doors to deeper understanding."
        }
    };
    
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            // Add active class to clicked tab
            this.classList.add("active");

            // Get the feature key
            const featureKey = this.getAttribute("data-feature");

            // Update the title and text
            title.textContent = features[featureKey].title;
            text.textContent = features[featureKey].text;
        });
    });
});

const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
    accordion.addEventListener('click', function () {
        accordions.forEach((item) => {
            if (item !== this) {
                item.classList.remove('active');
                item.nextElementSibling.style.maxHeight = null;
            }
        });

        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});
window.onscroll = function() {
    let btn = document.getElementById("to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
