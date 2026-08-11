const modal = document.getElementById("modal-contato");
const btnAbrir = document.querySelectorAll(".btn-primary");
const btnFechar = document.getElementById("btn-close");

btnAbrir.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("modal-active");
  });
});

btnFechar.addEventListener("click", () => {
  modal.classList.remove("modal-active");
});
