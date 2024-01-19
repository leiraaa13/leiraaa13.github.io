function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function toggleDescription(projectId) {
    var allDescriptions = document.querySelectorAll('.project-description');
    allDescriptions.forEach(function (description) {
      description.classList.remove('visible');
    });

    var clickedDescription = document.getElementById(projectId + '-description');
    clickedDescription.classList.toggle('visible');
}

  document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animated");
  
    function checkScroll() {
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (elementPosition < windowHeight * 0.8) {
          element.classList.add("show");
        } else {
          element.classList.remove("show");
        }
      });
    }
  
    checkScroll();
  

    window.addEventListener("scroll", checkScroll);
});