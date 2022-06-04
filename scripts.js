// SECTOR //
// Declaring Variables //
const userItemBtns = document.querySelectorAll(".sub-container-left--bot-item");
const userContainers = document.querySelectorAll(".user-container");
const userContainerZero = document.querySelector(".user-container--zero");

// SECTOR //
// DOMs //

for (let j = 0; j < userItemBtns.length; j++) {
  userItemBtns[j].classList.remove("active");
}

for (let j = 0; j < userContainers.length; j++) {
  userContainers[j].classList.add("hide");
}

for (let i = 0; i < userItemBtns.length; i++) {
  userItemBtns[i].addEventListener("click", function () {
    for (let j = 0; j < userItemBtns.length; j++) {
      userItemBtns[j].classList.remove("active");
    }

    this.classList.add("active");
    userContainerZero.style.display = "none";

    let dataText = this.getAttribute("data-section");

    for (let k = 0; k < userContainers.length; k++) {
      userContainers[k].classList.add("hide");

      if (userContainers[k].getAttribute("data-text") === dataText) {
        userContainers[k].classList.remove("hide");
      }
    }
  });
}
