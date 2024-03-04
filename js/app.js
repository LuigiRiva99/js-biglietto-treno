// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// oppure applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.


// età utente prompt
const età= parseInt(prompt("Inserisci età"));

// numero chilometri prompt
const chilometri= parseInt(prompt("Inserisci numero Km")); 

// prezzo biglietto in base ai chilometri
const bigliettoBase= 0.21 * chilometri;

// biglietto sconto minorenni
const ScontoMinori= bigliettoBase * 0.2;
// biglietto sconto anziani
const ScontoAnziani= bigliettoBase * 0.4;

// biglietto scontato
const bigliettoMinori= bigliettoBase - ScontoMinori;
const bigliettoAnziani= bigliettoBase - ScontoAnziani; 

//prezzi finali max 2 decimali
const bigliettoBaseFinale = bigliettoBase.toFixed(2);
const bigliettoMinoriFinale = bigliettoMinori.toFixed(2);
const bigliettoAnzianiFinale = bigliettoAnziani.toFixed(2);

// output 
if (età < 18) {
    console.log(bigliettoMinoriFinale);
} else if (età > 65){
    console.log(bigliettoAnzianiFinale);
} else {
    console.log(bigliettoBaseFinale);
}
