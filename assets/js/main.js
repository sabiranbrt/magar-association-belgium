//Breakfast-Lunch-Dinner Tab Function
function openCitys(evt, cityName) {
  var j, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (j = 0; j < tabcontent.length; j++) {
    tabcontent[j].style.display = "none";
  }

  // Remove the "active" class from all tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (j = 0; j < tablinks.length; j++) {
    tablinks[j].className = tablinks[j].className.replace(" active", "");
  }

  // Display the selected tab content
  document.getElementById(cityName).style.display = "block";

  // Add the "active" class to the clicked tab
  evt.currentTarget.className += " active";
}

// Initialize the first tab as active on page load
document.addEventListener("DOMContentLoaded", () => {
  const tablinks = document.getElementsByClassName("tablinks");
  const tabcontent = document.getElementsByClassName("tabcontent");

  // Ensure there are tabs and content to initialize
  if (tablinks.length > 0 && tabcontent.length > 0) {
    // Display the first tab content and mark the first tab link as active
    tabcontent[0].style.display = "block";
    tablinks[0].className += " active";
  }
});



//Drinks Tab Function
function openCity(evt, cityName) {
  var i, tabcontentb, tablinksb;

  // Hide all tab content
  tabcontentb = document.getElementsByClassName("tabcontentb");
  for (i = 0; i < tabcontentb.length; i++) {
    tabcontentb[i].style.display = "none";
  }

  // Remove the "active" class from all tab links
  tablinksb = document.getElementsByClassName("tablinksb");
  for (i = 0; i < tablinksb.length; i++) {
    tablinksb[i].className = tablinksb[i].className.replace(" active", "");
  }

  // Display the selected tab content
  document.getElementById(cityName).style.display = "block";

  // Add the "active" class to the clicked tab
  evt.currentTarget.className += " active";
}

// Initialize the first tab as active on page load
document.addEventListener("DOMContentLoaded", () => {
  const tablinksb = document.getElementsByClassName("tablinksb");
  const tabcontentb = document.getElementsByClassName("tabcontentb");

  // Ensure there are tabs and content to initialize
  if (tablinksb.length > 0 && tabcontentb.length > 0) {
    // Display the first tab content and mark the first tab link as active
    tabcontentb[0].style.display = "block";
    tablinksb[0].className += " active";
  }
});



const swiper = document.querySelector('.swiper');
const track = swiper.querySelector('.swiper-track');
const slides = swiper.querySelectorAll('.swiper-slide');
let currentIndex = 0; // Keeps track of the current slide

// Updates the position of the track to show the current slide
const update = () => track.style.transform = `translateX(-${currentIndex * 100}%)`;

// Moves to the previous slide
swiper.querySelector('.prev').onclick = () => {
  if (currentIndex > 0) currentIndex--; // Decrease index if not on the first slide
  update();
};

// Moves to the next slide
swiper.querySelector('.next').onclick = () => {
  if (currentIndex < slides.length - 1) currentIndex++; // Increase index if not on the last slide
  update();
};



