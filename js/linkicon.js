const iconWraps = document.querySelectorAll(".icon-wrap");
const iconHoverClass = "mouseover-icon";

function mouseenterIcon() {
  this.classList.add(iconHoverClass);
  const iconDescription = this.querySelectorAll("div")
  iconDescription[0].style.display = "flex"
}

function mouseleaveIcon() {
  this.classList.remove(iconHoverClass);
  const iconDescription = this.querySelectorAll("div")
  iconDescription[0].style.display = "none"
}

iconWraps.forEach((iconWrap) => {
  iconWrap.addEventListener("mouseenter", mouseenterIcon);
  iconWrap.addEventListener("mouseleave", mouseleaveIcon);
});
