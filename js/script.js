/* Il programma dovrà consentire di 
calcolare il prezzo del panino selezionando
 o deselezionando gli ingredienti proposti.
Consigli del giorno:
Create inizialmente un html base con gli elementi 
minimi necessari al funzionamento, passate poi alla 
parte JS ragionando come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
 console.log() è nostro amico!!!!.
Quando tutto funziona passate alla parte visiva lavorando al css.
Buon lavoro! */

let prezzoPanino;
//prendo il nome del burger che metto nella inputbox
let listaSconti = ['hofame27','pastaefaggioli21'];
let burgerName = document.getElementById('burger-name');
//collego il bottone dell'html alla variabile bottone
let bottone = document.getElementById('bottone');
//qunado clicco il bottone deve accadere tutto
bottone.addEventListener('click',
function() {
    if(burgerName.value.length === 0){
        alert('inserisci il nome del panino');
    }else{
        //do il prezzo al panino
        prezzoPanino = 9;
        let aggiunte = document.getElementsByClassName('form-check-input'); // e vuoto? allora inserisci, ce qualcosa? allora prendi tutti le checkbox, fai una lista
        for (let i=0; i < aggiunte.length; i++){
            //scorro la lsita
            if(aggiunte[i].checked == true && aggiunte[i] == document.getElementById('formaggio')){
                prezzoPanino += 5;
            }else if(aggiunte[i].checked == true && aggiunte[i] == document.getElementById('uova')){
                prezzoPanino += 1000;
            }else if(aggiunte[i].checked == true && aggiunte[i] == document.getElementById('pomodoro')){
                prezzoPanino += 3;
            }else if(aggiunte[i].checked == true && aggiunte[i] == document.getElementById('lattuga')){
                prezzoPanino += 50;
            }else if(aggiunte[i].checked == true && aggiunte[i] == document.getElementById('mostarda')){
                prezzoPanino += 1;
            }else if(aggiunte[i].checked == true && aggiunte[i] == document.getElementById('ketchup')){
                prezzoPanino += 500000;
            }
        }
        let sconto = document.getElementById('form-control');
        if (sconto.value.lenght > 0){
            if(listaSconti.includes(sconto.value)){
                prezzoPanino = prezzoPanino * 0.8; //cosi calcoliamo lo sconto
            }else{
                alert('il coupon inserito non esiste');
            }
        }
        let totale = document.getElementById('risultato');
        totale.innerHTML = '&#36; ' + prezzoPanino;
    }
});