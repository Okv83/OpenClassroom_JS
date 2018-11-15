var num=Number(prompt("Taper un nombre compris entre 50 et 100"));

while (num>100 || num<50) {
  if (num>100) {
  alert("Vous avez tapé un nombre supérieur à 100! Veuillez réessayer.");
  }
  if (num<50) {
  alert("Vous avez tapé un nombre inférieur à 50! Veuillez réessayer.");
  }

  var num=Number(prompt("Taper un nombre compris entre 50 et 100"));
}
