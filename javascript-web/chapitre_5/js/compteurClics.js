var compteurElt = document.getElementById("compteurClics");
var boutonDesactiver = document.getElementById("desactiver");
var boutonCompteur = document.getElementById("clic")

function clic () {
    compteurElt.textContent = +compteurElt.textContent + 1;
};

function desactiverCompteur(){
  boutonCompteur.removeEventListener("click", clic);
}
// Ajout d'un gestionnaire qui affiche le type et la cible de l'événement
boutonCompteur.addEventListener("click", clic);
boutonDesactiver.addEventListener("click", desactiverCompteur);
