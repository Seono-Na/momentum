const iconWraps = document.querySelectorAll(".icon-wrap");
const iconHoverClass = "mouseover-icon";

function mouseenterIcon() {
  this.classList.add(iconHoverClass);
}

function mouseleaveIcon() {
  this.classList.remove(iconHoverClass);
}

iconWraps.forEach((iconWrap) => {
  iconWrap.addEventListener("mouseenter", mouseenterIcon);
  iconWrap.addEventListener("mouseleave", mouseleaveIcon);
});
