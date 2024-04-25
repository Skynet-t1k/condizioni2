// Scrivi un programma che converta una temperatura inserita dall’utente con una delle seguenti descrizioni, stampate in console:
// se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
// se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”
// se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
// se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
// se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi”
// Cerca di risolvere questo esercizio utilizzando prima if else e poi con switch case.

let degrees = -11;

if (degrees < 20 && degrees >=0 ) {
    console.log('non ci sono piu’ le mezze stagioni');
}
else if (degrees >= 30) {
    console.log('lu mare, lu sole, lu ientu');
}
else if (degrees < 30 && degrees >= 20) {
    console.log('mi dia una peroni sudata');
}
else if (degrees < 0 && degrees >= -10) {
    console.log('non e’ tanto il freddo quanto l’umidità’');
}
else if (degrees < -10){
    console.log('copriti…ancora ti raffreddi');
}
else {
    console.log('Temperatura non riconosciuta');
}

switch (true) {
    case degrees < 20 && degrees >=0:
        console.log('non ci sono piu’ le mezze stagioni');
        break;
    case degrees >= 30:
        console.log('lu mare, lu sole, lu ientu');
        break;
    case degrees < 30 && degrees >= 20:
        console.log('mi dia una peroni sudata');
        break;
    case degrees < 0 && degrees >= -10:
        console.log('non e’ tanto il freddo quanto l’umidità’');
        break;
    case degrees < -10:
        console.log('copriti…ancora ti raffreddi');
        break;
    default:
        console.log('Temperatura non riconosciuta');
}