var bouton = document.getElementsByTagName("button");
var listeDessertsElt = document.getElementById("desserts");

bouton[0].addEventListener("click", ajoutDessert);

function ajoutDessert(){
  var nvDessert = prompt("Quel dessert souhaitez-vous ajouter?");

  var ajoutNvDessert = document.createElement ("li");
  ajoutNvDessert.textContent = nvDessert;
  ajoutNvDessert.id = nvDessert;

  listeDessertsElt.appendChild(ajoutNvDessert);
}
