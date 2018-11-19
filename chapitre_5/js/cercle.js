pi=Math.PI;
function perimetre(r){
  perimetre=Math.round(2*pi*r);
  return perimetre;
}
function aire(r){
  aire=Math.round(pi*(r*r));
  return aire;
}
var r=prompt("Donner un rayon");
alert("Pour un rayon de "+r+" le périmètre sera de "+perimetre(r)+" et l'aire sera de "+aire(r));
