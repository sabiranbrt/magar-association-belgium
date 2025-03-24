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