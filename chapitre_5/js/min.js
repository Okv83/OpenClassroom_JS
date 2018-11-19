function min(nb1, nb2){
  if (nb1<nb2){
    return nb1;
  }

  else if (nb2<nb1) {
    return nb2;
  }
  else {
    return "il y a égalité"
  }
}

console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1
