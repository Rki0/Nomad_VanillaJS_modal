const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal_overlay");
/*.querySelector 앞에 쓰는 것이 baseElement가 되고, 그의 자식 요소를 가져올 수 있다.*/
const closeBtn = modal.querySelector("button");

const openModal = () => {
  modal.classList.remove("hidden");
}

const closeModal = () => {
  modal.classList.add("hidden");
}

overlay.addEventListener("click",closeModal);
/*배경을 클릭해도 hidden이 되도록 설정.*/
closeBtn.addEventListener("click",closeModal);
openButton.addEventListener("click", openModal);