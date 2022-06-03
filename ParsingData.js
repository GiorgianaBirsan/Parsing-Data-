// utilizam o librarie care parseaza fisierul csv
const { parse } = require('csv-parse')
    // realizam importul modului fs pentru citire si interactiune cu sistemul de fisiere
const fs = require('fs')
    // cream un obiect in care vor fi stocate valorile din fisierul csv
var results = []
    // functie pentru realizarea conversiei monetare
function formatMoney(n) {
    // se adauga semnul $ si se pune virgula o data la 3 zecimale
    return "$ " + (Math.round(n * 100) / 100).toLocaleString();
}
//utilizam modulul fs pentru a realiza citirea fisierului 
fs.createReadStream('parsingData.csv')
    .pipe(
        parse({
            comment: '#',
            columns: true,
        })
    )
    //importam datele din fisier
    .on('data', (data) => {
        results.push(data)
    })
    //afisare eroare in caz de existenta a acesteia
    .on('error', (err) => {
        console.log(err)
    })
    //prelucrarea informatiilor din fisierul csv
    .on('end', () => {
        //initializarea unor variabile pentru aflarea lungimii elementului de lungime maxima de pe fiecare coloana
        var maxlast = 0
        var maxfirst = 0
        var maxsalary = 0
            //realizam sortarea vectorului de obiecte in ordine descrescatoare a salariilor si aflam elementul de lungime maxima din fiecare coloana si stocam valoarea lungimii in variabilele initializate anterior
        for (i in results) {
            results = results.sort(function(object1, object2) {
                return object1.salary - object2.salary
            })
            if (results[i].last.length > maxlast) maxlast = results[i].last.length
            if (results[i].first.length > maxfirst) maxfirst = results[i].first.length
            if (results[i].salary.length > maxsalary) maxsalary = results[i].salary.length
        }
        //cream capul de tabel prin importarea spatiilor cerute intre coloane
        var str = " "
            //calculam pentru fiecare cap de coloana numarul maxim de spatii ce trebuie adaugate
        var lastSpace = maxlast - 4 + 1;
        var firstSpace = maxfirst - 5 + 1;
        var salarySpace = maxsalary - 6 + 1;
        //afisam capul de tabel cu o linie sub acesta
        var result = console.log('Last' + str.repeat(lastSpace) + 'First' + str.repeat(firstSpace) + 'Salary' + str.repeat(salarySpace))
        result += console.log('_____________________________')
            //parcurgem vectorul de obiecte iar pentru fiecare valoare din coloana calculam numarul de spatii ce trebuie adaugate in afisare si afisam
        for (i in results) {
            var spaceNrLast = maxlast - results[i].last.length + 1
            var spaceNrFirst = maxfirst - results[i].first.length + 1
            var spaceNrSalary = maxsalary - results[i].salary.length + 1
            result += console.log(
                results[i].last + str.repeat(spaceNrLast) + results[i].first + str.repeat(spaceNrFirst) + formatMoney(results[i].salary + str.repeat(spaceNrSalary)))
        }
    })