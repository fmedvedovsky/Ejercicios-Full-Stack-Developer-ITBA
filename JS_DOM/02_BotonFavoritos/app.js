const favBtn = document.querySelector("#favorite-btn");

function toggleFavorite() {
  favBtn.classList.toggle("favorito");

  if (favBtn.className === "favorito") {
    favBtn.textContent = "⭐ Quitar de Favoritos";
  } else {
    favBtn.textContent = "❤️ Añadir a Favoritos";
  }
}

document.addEventListener("click", toggleFavorite);
