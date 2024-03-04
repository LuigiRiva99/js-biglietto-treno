// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// oppure applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.


// età utente prompt
const eta= parseInt(prompt("Inserisci eta")); //string

// numero chilometri prompt
const chilometri= parseInt(prompt("Inserisci numero Km")); //string

// prezzo biglietto in base ai chilometri
const bigliettoBase= 0.21 * chilometri; //number

// sconto minorenni del 20%
const ScontoMinori= bigliettoBase * 0.2; //number
// sconto anziani del 40%
const ScontoAnziani= bigliettoBase * 0.4; //number

// calcolo biglietto scontato
const bigliettoMinori= bigliettoBase - ScontoMinori; //number
const bigliettoAnziani= bigliettoBase - ScontoAnziani;  //number

// Conversione da numero a stringa
String(bigliettoBase, bigliettoMinori, bigliettoAnziani); //string

//prezzi finali max 2 decimali
const bigliettoBaseFinale = bigliettoBase.toFixed(2); //number
const bigliettoMinoriFinale = bigliettoMinori.toFixed(2); //number
const bigliettoAnzianiFinale = bigliettoAnziani.toFixed(2); //number

// output 
if (eta < 18) {
    console.log(bigliettoMinoriFinale);
} else if (eta > 65){
    console.log(bigliettoAnzianiFinale);
} else {
    console.log(bigliettoBaseFinale);
}
