// esercizio 1

let numGatti = parseInt(prompt("Inserisci il numero totale dei gatti")) ;
let rowGatti = parseInt(prompt("Inserisci il numero dei gatti in fila"));
  
// num file
let numfile= Math.floor( numGatti /rowGatti );  
// num gatti rimanenti
let gattiRimanenti= numGatti % rowGatti;
// num gatti mancanti
let gattimancanti= rowGatti - gattiRimanenti;
// stampa
console.log(`Ci sono ${numfile} file di gatti e ne mancano ${gattiRimanenti} per una nuova fila, con un avanzo di ${gattimancanti}`);


// Traccia 2


let Voto = parseInt(prompt("Inserisci un giudizio in una scala da 0 a 30"));
// costrutto concatenato
if(Voto >= 0 && Voto <= 30){
    if(Voto == 30){
        console.log("Eccellente");
    }else if(Voto >= 27 && Voto <= 29){
        console.log("Ottimo");
    }else if(Voto >= 24 && Voto < 27){
        console.log("Distinto");
    }else if(Voto >= 21 && Voto < 24){
        console.log("Buono");
    }else if(Voto >= 18 && Voto < 21){
        console.log("Sufficiente")
    }else if(Voto < 18){
        console.log("Insufficiente")
    }
}else{
    console.log("Voto non compreso ");
}


// esercizio 3

let temperatura = parseInt(prompt("Inserisci una temperatura"));

if( temperatura < -10){
    console.log(" copriti...ancora ti raffreddi")
}else if(temperatura <0 ){
    console.log(" non e’ tanto il freddo quanto l’umidità")      
} else if(temperatura <= 20){
    console.log("non ci sono più le mezze stagioni")
}else if(temperatura <30 ){
    console.log( " mi dia una peroni sudata")
}else if (temperatura >=30){
    console.log("lu mare, lu sole, lu ientu ")
}






