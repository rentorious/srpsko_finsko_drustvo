const toggle = document.querySelector(".toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", toggleNav);

function toggleNav() {
  var links = document.querySelectorAll(".navigation a.navItem");

  for (let link of links) {
    let style = window.getComputedStyle(link);
    let displayProp = style.getPropertyValue("display");

    link.style.display = displayProp == "none" ? "block" : "none";
  }

  let flexDirProp = window
    .getComputedStyle(nav)
    .getPropertyValue("flex-direction");
  nav.style.flexDirection = flexDirProp == "column" ? "row" : "column";
}
