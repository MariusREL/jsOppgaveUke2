/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her

//  funksjonen bruker modulo for å se om det er gjenværende etter å ha delt et tall på 2,
//  hvis gjenværende er 0 så er tallet partall, hvis ikke er det oddetall
function returnOddorEven(num){
    if (num % 2 === 0) {
        return "Partall"
    } else {
        return "Oddetall"
    }
}
// tester om funksjonen funker
console.log(returnOddorEven(122));
console.log(returnOddorEven(123));

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

function capitalizeStringWithExclamationMarkBehind(string){
    if (typeof string === "string"){
    return string.toUpperCase()+"!"
} else {
    alert("You've not written a string laddie")
}

}

console.log(capitalizeStringWithExclamationMarkBehind("Yeaaah buddy"))
// Skriv koden for oppgave 2 her

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her
function dognGreeting(name, time){
    // Returnerer en feilmelding i form av en alert hvis time ikke er et gyldig tall
    if (typeof time !=="number"){
        alert("You must define a time")
    }
    // kjører bare hvis alle parameterne stemmer
    if (typeof name === "string" && typeof time === "number" && time !==""){
        // logikk for at 
        if (time < 0 || time > 23){
            return "Ugyldig tid"
        } else if (time <= 5){
            return (`god natt ${name}`)
        } else if (time <= 11){
            return (`god morgen ${name}`)
        } else if (time <= 17){
            return (`god dag ${name}`)
        } else {
            return (`god kveld ${name}`)
        } 
    }
}
// tester for meg selv at det funker
console.log(dognGreeting("Birger", 15))

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/
// definere et array for testing 
let arrayOne = [1, 2, 3, 4, 5, 6, 7]
console.log(arrayOne);

const removeFirstAndLast = (testArray) => {
    testArray.pop();
    testArray.shift();
    return testArray;
};
// teste at det funker
console.log(removeFirstAndLast(arrayOne));
// Skriv koden for oppgave 4 her

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/
// bruker replaceAll her for a erstatte hvert eneste vanskelig med gøy, så trim for å fjerne whitespace før og etter setningen.
// whitespace mellom ordene forblir.
const funNotHard = (string) => {
    if (typeof string === "string"){
       return string.replaceAll("vanskelig", "gøy").trim();
    }
}

console.log(funNotHard(" Det er vanskelig å bruke metoder vanskelig   vanskelig   vanskelig"));
// Skriv koden for oppgave 5 her

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/
// Remove first item
const removeFirstItemInArray = (array) => {
    return array.shift()
}
removeFirstItemInArray(items)
console.log(items);

// Erstatt viskelaer med linjal
    // easiest method if I know that [2] is viskelær 
    // items[2] = "Linjal"

   
    // Better method that checks if Viskelær is in the array and subsequently replaces it with linjal
items.includes("Viskelær") && (items[items.indexOf("Viskelær")] = "Linjal"); 
console.log(items);

// replace 2 items
items.splice(0, 2, "Markeringspenn")
console.log(items);

// Concatenate all elements into one string

const oneStringItems = items.join("|")
console.log(oneStringItems);

// calling a function on items.filter that goes through every string and only includes it in the updated variable if it contains the letter "e" this isn't case sensitive so "E" wouldn't get excluded
const itemsWithoutE = items.filter(string => string.includes("e"))
console.log(itemsWithoutE);


// Skriv koden for oppgave 6 her

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her