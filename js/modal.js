//Відкрити модальне вікно
document
  .getElementById("open-modal-btn")
  .addEventListener("click", function () {
    document.getElementById("modal-window").classList.add("open");
  });

//Закрити модальне вікно
document
  .getElementById("close-modal-btn")
  .addEventListener("click", function () {
    document.getElementById("modal-window").classList.remove("open");
  });

//Закрити модальне вікно при натискані Esc
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal-window").classList.remove("open");
  }
});

// Закрити модальне вікно при натискані зовні модального вікна
document
  .querySelector("#modal-window .modal__box")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });
document.getElementById("modal-window").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});
