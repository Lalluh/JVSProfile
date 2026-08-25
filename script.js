// Modal de Contato
const modalContato = document.getElementById("modal-contato");
const btnsConversar = document.querySelectorAll(".btn-primary");
const btnFecharContato = document.getElementById("btn-close");
const formContato = document.getElementById("form-contato");

if (modalContato) {
  btnsConversar.forEach((botao) => {
    botao.addEventListener("click", (e) => {
      e.preventDefault();
      modalContato.classList.add("modal-active");
    });
  });

  if (btnFecharContato) {
    btnFecharContato.addEventListener("click", () => {
      modalContato.classList.remove("modal-active");
    });
  }
}

// Lógica do Formspree
if (formContato) {
  formContato.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btnEnviar = formContato.querySelector(".btn-enviar");
    btnEnviar.innerText = "ENVIANDO...";

    const response = await fetch(formContato.action, {
      method: "POST",
      body: new FormData(formContato),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
      formContato.reset();
      modalContato.classList.remove("modal-active");
    } else {
      alert("Erro ao enviar a mensagem. Tente novamente!");
    }
    btnEnviar.innerText = "ENVIAR";
  });
}

// Modal da Galeria
const modalVideo = document.getElementById("modal-video");
const btnFecharVideo = document.getElementById("btn-fechar-video");
const videoDestaque = document.getElementById("video-destaque");
const cardsVideo = document.querySelectorAll(".card-video");

if (modalVideo && videoDestaque) {
  cardsVideo.forEach((card) => {
    card.addEventListener("click", () => {
      const videoOriginal = card.querySelector("video source");
      const imgOriginal = card.querySelector("img");

      if (videoOriginal) {
        videoDestaque.src = videoOriginal.getAttribute("src");
      } else if (imgOriginal) {
        videoDestaque.src = imgOriginal.getAttribute("src");
      }

      modalVideo.classList.add("modal-active");
      videoDestaque.play();
    });
  });

  function fecharModalVideo() {
    modalVideo.classList.remove("modal-active");
    videoDestaque.pause();
    videoDestaque.src = "";
  }

  if (btnFecharVideo) {
    btnFecharVideo.addEventListener("click", fecharModalVideo);
  }
}

// Fechar os Modais
window.addEventListener("click", (event) => {
  if (modalContato && event.target === modalContato) {
    modalContato.classList.remove("modal-active");
  }
  if (modalVideo && event.target === modalVideo) {
    modalVideo.classList.remove("modal-active");
    if (videoDestaque) {
      videoDestaque.pause();
      videoDestaque.src = "";
    }
  }
});
