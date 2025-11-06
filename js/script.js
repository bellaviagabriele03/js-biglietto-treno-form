// console.log("hello World");



// obbiettivi: prendere i dati che inserisce l'utente dagli input appena schiaccia il bottone "scommetti"
//      scopo gioco: se il numero dei kilometri che inserirà l'utente sara uguale a quelli generati dal computer
//                      allora l'utente vince e quindi visualizzerà il numero dei soldi che ha inserito ma doppi
// ( appena schiaccia scommetti verrà mostrata la finestra della gara con i vari dati che ha inserito e l'esito della scommessa)
// implementare anche un controllo dell'età: se viene selezionata la voce minorenne allora apparirà la finestra non puoi giocare mi dispiace ritorna quando sarai maggiorenne  


//dati da raccogliere : 
//nome e cognome, numero km, soglia d'età, soldi scommessi, form, pulsanti del form, finestra di risultato.



const formElem = document.querySelector("form")
const userElem = document.querySelector("#name")
const kmElem = document.querySelector("#km")
const ageElem = document.querySelector("#age")
const moneyElem = document.querySelector("#money")
const btnSubmitElem = document.querySelector("#submit")
const btnResetElem = document.querySelector("#reset")
const resultElem = document.querySelector("#result")


formElem.addEventListener("submit", function (event) {
    event.preventDefault();

    const user = userElem.value; 
    const km = parseInt(kmElem.value);
    const age = ageElem.value;
    const money = parseInt(moneyElem.value)

    
    resultElem.classList.remove("d-none")

    






})

formElem.addEventListener("reset", function() {
    resultElem.classList.add("d-none")    
})


function getRandomNumber() {
    let randomNumber = Math.floor
}