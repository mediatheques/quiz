$('.carousel').carousel({
  touch: false
});

$(".rate").on("click", function() {
  $("h3").text("Perdu !")
})
$(".rate").on("click", function() {
  new Audio("sons/wrong.mp3").play();
})


$(".gagne").on("click", function() {
  $("h3").text("Bien joué !")
})

$(".gagne").on("click", function() {
  new Audio("sons/right.mp3").play();
})


var score = 0
$(".scoreFinal").text("Mais en fait vous avez zéro pointé. Votre abonnement à la médiathèque est résilié (pour de faux).")

$(".gagne").on("click", function() {
  score++
  if (score == 5) {
    $(".scoreFinal").text("Et parce qu'en plus vous avez eu tout bon ! Bravo, le Dr Knox aurait eu beaucoup à apprendre de vous.")
  } else if (score == 4) {
    $(".scoreFinal").text("En fait vous avez eu 4/5 mais on est pas à ça près.")
  } else if (score == 3) {
    $(".scoreFinal").text("Mais en fait vous avez eu 3/5. C'est quand même au-dessus de la moyenne, bien joué.")
  } else if (score == 2) {
    $(".scoreFinal").text("En fait vous avez eu 2/5 mais on le dira à personne")
  } else if (score == 1) {
    $(".scoreFinal").text("Mais en fait vous avez eu 1/5. Qu'auriez-vous fait de ce pauvre ornithorynque ?")
  }
})

$(".restart").on("click", score = 0)


var thatone = Math.floor(Math.random() * 5)
var livres = ["https://catalogue-mediatheques.sudestavenir.fr/recherche/viewnotice/clef/QUANDESTCEQUONBIAISE--DURANDTHOMASC--HUMENSCIENCES-2019-1/id/10172878/expressionRecherche/quand+est-ce+qu%27on+biaise/tri/annee+desc?id_profil=1", "https://catalogue-mediatheques.sudestavenir.fr/recherche/viewnotice/clef/EUREKA-PETITEHISTOIREDESSCI-ROSENBAUMALEXIS--EDITIONSLEPOMMIER-2018-1/id/10167522/expressionRecherche/science/tri/annee+desc/facette/M589?id_profil=1", "https://catalogue-mediatheques.sudestavenir.fr/recherche/viewnotice/clef/LHISTOIREDESSCIENCESPOURLESNULS--JULLIENVINCENT--FIRSTED-2009-1/id/10025846/expressionRecherche/science/tri/annee+desc/facette/M589?id_profil=1", "https://catalogue-mediatheques.sudestavenir.fr/recherche/viewnotice/clef/PASSEURDESCIENCES-LEDICODESNOUVELLESDE-BARTHELEMYPIERRE--HUGODOC-2014-1/id/10103334/tri/annee+desc/expressionRecherche/science+%C3%A9tonnante?id_profil=1", "https://catalogue-mediatheques.sudestavenir.fr/recherche/viewnotice/clef/LAPHILOSOPHIEDESSCIENCESENIMAGES--SARDARZIAUDDIN--EDPSCIENCES-2017-1/id/10279523/tri/annee+desc/expressionRecherche/science+philosophy?id_profil=1"]
$(".hasard").attr("href", livres[thatone])
