var divElts = document.getElementsByTagName("div");
var couleurDeFond = "";

function valeurKeyPress(e) {
  var valeurTouche = String.fromCharCode(e.charCode);
  switch (valeurTouche) {
    case "r"||"R":
      couleurDeFond = "red";
      break;
    case "j"||"J":
      couleurDeFond = "yellow";
      break;
    case "v"||"V":
      couleurDeFond = "green";
      break;
    case "b"||"B":
      couleurDeFond = "blue";
      break;
    default:
      couleurDeFond = "none";
      break;
    }
    for (  i = 0 ; i < divElts.length ; i++){
      divElts[i].style.backgroundColor = couleurDeFond;
    }
}


document.addEventListener("keypress", valeurKeyPress);
