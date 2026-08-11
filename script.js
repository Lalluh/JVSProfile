const modal = document.getElementById("modal-contato");
const btnAbrir = document.querySelector(".btn-primary");
const btnFechar = document.getElementById("btn-close");

btnAbrir.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal-active");
});

btnFechar.addEventListener("click", () => {
  modal.classList.remove("modal-active");
});
