function calculer(nb1, operateur, nb2){
var x=Number(nb1)+operateur+Number(nb2);
return x;
}

// TODO : écrire la fonction calculer()

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity
