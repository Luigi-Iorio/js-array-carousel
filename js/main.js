"use strict";


// assegnazione / dichiarazione variabile per il container
const container = document.querySelector(".container");
// creazione elemento items
const items = document.createElement("div");
// aggiungo classe items
items.classList.add("items");
// appendo al container
container.append(items);

// creazione array di immagini
const immagini = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
// contatore immagini
let currImage = 0;

// creazione thumbnails nel dom
const miniature = document.createElement("div");
// aggiungo la classe thumbnails
miniature.classList.add("thumbnails");
// aggiungo nel dom
container.append(miniature);

// creazione elementi item e immagine
for (let i = 0; i < immagini.length; i++) {
  // creazione elemento idem
  const item = document.createElement("div");
  // aggiungo classe item
  item.classList.add("item");
  // appendo item al contenitore items
  items.append(item);

  // assegnazione variabile active

  // creazione thumbnail
  const miniatura = document.createElement("div");
  // aggiungo classe thumbnail
  miniatura.classList.add("thumbnail");
  // inserisco in thumbnails
  miniature.append(miniatura);

  // creazione layer
  const layer = document.createElement("div");
  // classe layer
  layer.classList.add("layer");
  // inserito in miniatura
  miniatura.append(layer);

  if (currImage === i) {
    item.classList.add("active");
    layer.classList.add("selected");
  }

  // inserisco le immagini dell'array nel dom
  const img = document.createElement("img");
  img.src = `img/${immagini[i]}`;
  img.alt = `Paesaggio ${i + 1}`;
  // inserisco immagine in item
  item.append(img);

  // inserisco immagini nelle miniature
  const imgMiniature = document.createElement("img");
  imgMiniature.src = `img/${immagini[i]}`;
  imgMiniature.alt = `Paesaggio ${i + 1}`;
  // inserisco immagine in miniatura
  miniatura.append(imgMiniature);

  // click miniature
  miniatura.addEventListener("click", function() {
    if (layer !== document.querySelector(".selected")) {
      change_image(i)
    }
  });
}

// creazione frecce
// freccia in alto
const alto = document.createElement("div");
// assegnazione classe prev
alto.classList.add("prev");
// inserimento in items
miniature.append(alto);
// freccia in basso
const basso = document.createElement("div");
// assegnazione classe prev
basso.classList.add("next");
// inserimento in items
miniature.append(basso);



function change_image(new_ind) {
  const domItems = document.querySelectorAll(".item");
  const domThumbnails = document.querySelectorAll(".layer");

  domItems[currImage].classList.remove("active");
  domThumbnails[currImage].classList.remove("selected");

  domItems[new_ind].classList.add("active");
  domThumbnails[new_ind].classList.add("selected");
  currImage = new_ind
}

// evento per cambiare le immagini
// scorrere indietro
alto.addEventListener("click", function() {
  let next = currImage - 1 < 0 ? immagini.length - 1 : currImage - 1;
  change_image(next)
});

// scorrere in avanti
basso.addEventListener("click", function() {
  let next = currImage + 1 >= immagini.length ? 0 : currImage + 1;
  change_image(next)
});
