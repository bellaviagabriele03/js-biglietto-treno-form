// console.log("hello World");



// obbiettivi: prendere i dati che inserisce l'utente dagli input appena schiaccia il bottone "scommetti"
//      scopo gioco: se il numero dei kilometri che inserirà l'utente sara uguale a quelli generati dal computer
//                      allora l'utente vince e quindi visualizzerà il numero dei soldi che ha inserito ma doppi
// ( appena schiaccia scommetti verrà mostrata la finestra della gara con i vari dati che ha inserito e l'esito della scommessa)
// implementare anche un controllo dell'età: se viene selezionata la voce minorenne allora apparirà la finestra non puoi giocare mi dispiace ritorna quando sarai maggiorenne  


//dati da raccogliere : 
//nome e cognome, numero km, soglia d'età, soldi scommessi, form, pulsanti del form, finestra di risultato.



const formElem = document.querySelector("form");
const userElem = document.querySelector("#name");
const kmElem = document.querySelector("#km");
const ageElem = document.querySelector("#age");
const moneyElem = document.querySelector("#money");
const btnSubmitElem = document.querySelector("#submit");
const btnResetElem = document.querySelector("#reset");

const resultElem = document.querySelector("#result");
const resultUser = document.querySelector("#resultuser");
const resultKM = document.querySelector("#resultkm");
const resultAge = document.querySelector("#resultage");
const resultMoney = document.querySelector("#resultmoney");
const resultComputer = document.querySelector("#kmpc");
const resultDecreto = document.querySelector("#decret")





formElem.addEventListener("submit", function (event) {
    event.preventDefault();




    const user = userElem.value;
    const km = parseInt(kmElem.value);
    const age = ageElem.value;
    const money = parseInt(moneyElem.value)

    resultElem.classList.remove("d-none")

    //Visualizzazione in pagina 
    resultUser.innerHTML = user;
    resultKM.innerHTML = `BET: ${km} km`;
    resultAge.innerHTML = age;
    resultMoney.innerHTML = `Soldi scommessi: ${money} €`;
    let kmComputer = getRandomNumber();
    resultComputer.innerHTML = `Il Cavallo Booleano ha corso per:  ${kmComputer} Kilometri`

    
    if(km === kmComputer) {
        resultDecreto.innerHTML = "Hai Vinto : D"
    }else {
        resultDecreto.innerHTML = "Hai perso : ("
    }






})



formElem.addEventListener("reset", function () {
    resultElem.classList.add("d-none")
})



//funzione per generare un numero casuale da 1 a 10 
function getRandomNumber() {
    let randomNumber = parseInt(Math.floor(Math.random() * 10) + 1);
    return randomNumber;
}


