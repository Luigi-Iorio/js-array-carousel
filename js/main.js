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
let contImmagine = 0;

// creazione elementi item e immagine
for (let i = 0; i < immagini.length; i++) {
  // creazione elemento idem
  const item = document.createElement("div");
  // aggiungo classe item
  item.classList.add("item");
  // appendo item al contenitore items
  items.append(item);

  // assegnazione variabile active
  if (contImmagine === i) {
    item.classList.add("active");
  }

  // inserisco le immagini dell'array nel dom
  const img = document.createElement("img");
  img.src = `img/${immagini[i]}`;
  img.alt = `Paesaggio ${i + 1}`;
  // inserisco immagine in item
  item.append(img);
}

// creazione frecce
// freccia in alto
const alto = document.createElement("div");
// assegnazione classe prev
alto.classList.add("prev");
// inserimento in items
items.append(alto);
// freccia in basso
const basso = document.createElement("div");
// assegnazione classe prev
basso.classList.add("next");
// inserimento in items
items.append(basso);

// domitems - per selezzionare tutti gli elementi item nel dom
const domItems = document.querySelectorAll(".item");
console.log(domItems);

// evento per cambiare le immagini
// scorrere in dietro
alto.addEventListener("click", function () {
  if (contImmagine > 0) {
    domItems[contImmagine].classList.remove("active");
    contImmagine--;
    domItems[contImmagine].classList.add("active");
  }
});

// scorrere in avanti
basso.addEventListener("click", function () {
  if (contImmagine < domItems.length - 1) {
    domItems[contImmagine].classList.remove("active");
    contImmagine++;
    domItems[contImmagine].classList.add("active");
  }
});
