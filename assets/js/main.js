document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".hamburger-menu");
  const menu = document.querySelector(".main-nav-content");

  // Add click event listener
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
})

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("sticky_navbar");
  const navbarOffset = navbar.offsetTop;

  window.addEventListener("scroll", () => {
    if (window.scrollY > navbarOffset) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  });
})

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("mobile_sticky");
  const navbarOffset = navbar.offsetTop;

  window.addEventListener("scroll", () => {
    if (window.scrollY > navbarOffset) {
      navbar.classList.add("fixed-mobile");
    } else {
      navbar.classList.remove("fixed-mobile");
    }
  });
})

document.addEventListener("DOMContentLoaded", () => {
 const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.querySelector(".progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

/* Event Listener for Next Button. */
nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
    });
});

/* Event Listener for Back Button. */
prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressbar();
    });
});

/* Updates Form Items */
function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active")
    })
    formSteps[formStepsNum].classList.add("form-step-active");
}

/* Updates Progress Bar */
function updateProgressbar() {
    progressSteps.forEach((progressStep, index) => {
        if ( index < formStepsNum + 1 ) {
            progressStep.classList.add('progress-step-active')
            
            
        } else {
            progressStep.classList.remove('progress-step-active')
        }
    })
    progress.style.width = ((formStepsNum) / (progressSteps.length - 1)) * 100 + "%";
    
}
});

document.addEventListener("DOMContentLoaded", () => {
const faqs = document.querySelectorAll('.text-content');
faqs.forEach((faq) =>{
    faq.addEventListener("click",()=>{
      faqs.forEach((item)=>{
       if(item !== faqs){
        item.classList.remove("active");
       }
      });
      faq.classList.toggle("active");
    });
});
})


// gallery
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Add active class to clicked tab and corresponding content
      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.target);
      target.classList.add('active');
    });
  });
})

// document.addEventListener("DOMContentLoaded", function() {
//   const iframe = document.getElementsByClassName(".videoFrame");
//   let src = iframe.getAttribute("src");

//   // Ensure autoplay is disabled
//   if (src.includes("?")) {
//       src += "&autoplay=0";
//   } else {
//       src += "?autoplay=0";
//   }

//   iframe.setAttribute("src", src);
// });


// drop zone
var myDropzone = new Dropzone("#kt_dropzonejs_example_1", { 
  url: "",
  paramName: "file",
  uploadMultiple: false,
  maxFiles: 1,
  maxFilesize: 10,
  addRemoveLinks: true,
  acceptedFiles: "image/*",
  init: function() {
      this.on("addedfile", function(file) {
          if (this.files.length > 1) {
              this.removeFile(this.files[0]); // Remove previous file when a new one is added
          }
      });

      this.on("removedfile", function(file) {
          console.log("File removed:", file.name);
      });

      // Manually remove file on click
      document.addEventListener("click", function(event) {
          if (event.target.matches(".dz-remove")) {
              var fileToRemove = myDropzone.files.find(f => f.name === event.target.closest(".dz-preview").querySelector("[data-dz-name]").textContent);
              if (fileToRemove) {
                  myDropzone.removeFile(fileToRemove);
              }
          }
      });
  }
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}