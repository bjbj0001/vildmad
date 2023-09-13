document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".overlay");
  const closeButton = document.getElementById("closePopup");

  closeButton.addEventListener("click", function () {
    overlay.style.display = "none";
  });

  // Vis popup-vinduet ved indlæsning af siden
  overlay.style.display = "flex";
});
