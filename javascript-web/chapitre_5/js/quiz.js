// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

questions.forEach(function(value, index){
  var paragrapheElt = document.createElement("p");
  paragrapheElt.id = "question_" +  (+index+1);
  document.getElementById("contenu").appendChild(paragrapheElt);

  var questionElt = document.createElement("span");
  questionElt.textContent = "Question " +  (+index+1) + " : ";
  questionElt.style.fontWeight = "bold";
  document.getElementById("question_" +  (+index+1)).appendChild(questionElt);

  var enonceElt = document.createElement("span");
  enonceElt.textContent = value.enonce;
  enonceElt.style.fontStyle = "italic";
  document.getElementById("question_" +  (+index+1)).appendChild(enonceElt);

  var retourALaLigneElt = document.createElement("br");
  document.getElementById("question_" +  (+index+1)).appendChild(retourALaLigneElt);

  var boutonReponseElt = document.createElement("button");
  boutonReponseElt.textContent = "Afficher la réponse";
  boutonReponseElt.id = "reponse_" +  (+index+1);
  boutonReponseElt.onclick = afficherReponse;
  document.getElementById("question_" +  (+index+1)).appendChild(boutonReponseElt);

  var reponseElt = document.createElement("span");
  reponseElt.textContent = value.reponse;

  function afficherReponse (){
    document.getElementById("question_" +  (+index+1)).appendChild(reponseElt);
    document.getElementById("question_" +  (+index+1)).removeChild(boutonReponseElt)
  }
});
