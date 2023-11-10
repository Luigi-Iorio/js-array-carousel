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
