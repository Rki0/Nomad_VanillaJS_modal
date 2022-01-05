const modal = document.querySelector(".modal");

const openBtn = document.querySelector(".modalBtn");

const closeBtn = document.querySelector(".closeBtn");

const background = document.querySelector(".back");

function openModal() {
  modal.classList.remove("hidden");
}

function clsoeModal() {
  modal.classList.add("hidden");
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", clsoeModal);
background.addEventListener("click", clsoeModal);