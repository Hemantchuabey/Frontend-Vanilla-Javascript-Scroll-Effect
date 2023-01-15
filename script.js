const revealElements = document.querySelectorAll("[data-reveal]");
console.log(revealElements);

const scrollReveal = function () {
  for (let i = 0; i < revealElements.length; i++) {
    // console.log(revealElements[i].getBoundingClientRect().top);
    const isElementOnScreem =
      revealElements[i].getBoundingClientRect().top < innerHeight;
    console.log(isElementOnScreem);
    if (isElementOnScreem) {
      revealElements[i].classList.add("reveal");
    } else {
      revealElements[i].classList.remove("reveal");
    }
  }
};

window.addEventListener("scroll", scrollReveal);
