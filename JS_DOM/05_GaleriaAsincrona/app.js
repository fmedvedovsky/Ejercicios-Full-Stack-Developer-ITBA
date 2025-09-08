async function handleLoad() {
  const url = "https://jsonplaceholder.typicode.com/photos?_limit=12";
  const photosContainer = document.getElementById("photos-container");
  let photos = await fetch(url);
  photos = await photos.json();

  photos.forEach((photo) => {
    console.log(photo);
    const imagen = document.createElement("img");
    imagen.setAttribute("src", photo.thumbnailUrl);
    imagen.setAttribute("alt", photo.title);

    imagen.addEventListener("click", () => alert(photo.title));

    photosContainer.appendChild(imagen);
  });
}

document.addEventListener("DOMContentLoaded", handleLoad);
