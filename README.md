# Carosello Mono Array

### Descrizione

L'obbiettivo di questa repo è quello di creare un carosello a partire da un array contenente cinque immagini.

## Risoluzione in linguaggio naturale

1. Rimuovere markup statico
2. Inserire le immagini tramite un array e ciclo for
3. Applicare una classe **active** alla prima immagine (per nascondere le altre immagini).
4. Creare due frecce (in position absolute) da posizionare in alto e in basso all'interno del carosello
5. Creare una funzione per il quale al click di una freccia venga spostata _(avanti e indietro)_ la classe **active** tra gli elementi del carosello conteneti immagini. Questo serve per cambiare la visualizzazione delle immagini tramite le frecce.
6. Rendere il ciclo del carosello infinito - (riassegnare il contatore alla fine o all'inizio dell'array in base alla posizione in cui ci troviamo)
7. Creare le thumbnails laterali delle immagini, rendere attiva solo la miniatura collegata all'immagine del carosello. Le altre avranno un layer opaco quando non verranno visualizzate. La visualizzazione della miniatura **attiva** dovrà essere gestita tramite le freccie
8. Rendere la miniatura cliccabile, una volta cliccata la miniatura visualizzare l'immagine corrispondente nel carosello
