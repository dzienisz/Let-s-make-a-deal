const readline = require('readline');
var colors = require('colors/safe');

// deklaracja tablicy
let nagroda = new Array(3).fill(false);

// readline config
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const losuj = function(numb) {
    return Math.ceil((Math.random() * numb)); //
}

// ukryj nagrode
const random = losuj(3);
nagroda[random-1] = true;

// Intro
 
console.log(colors.inverse('                     ')); 
console.log(colors.inverse('    Witaj w grze!    ')); 
console.log(colors.inverse('                     ')); 
console.log(colors.inverse('    Idź na całość    ')); 
console.log(colors.inverse('                     ')); 
console.log('                     '); 
console.log(colors.inverse('                     ')); 
console.log(colors.inverse('    Przed sobą       ')); 
console.log(colors.inverse('    widzisz 3 drzwi  ')); 
console.log(colors.inverse('                     ')); 
console.log('                     '); 
console.log(colors.inverse('                     ')); 
console.log(colors.inverse('    Za jednymi       '));
console.log(colors.inverse('    z nich           '));
console.log(colors.inverse('    czeka...         '));
console.log(colors.inverse('                     ')); 
console.log(colors.inverse(colors.rainbow('    Nagroda!!!       ')));
console.log(colors.inverse('                     ')); 
console.log('                     '); 
console.log('Które drzwi wybierasz?'); 
console.log('1, 2 a może 3?'); 
console.log('                     '); 


// rl.question('Please enter the first number : ', (answer1) => {
//     rl.question('Please enter the second number : ', (answer2) => {
//         var result = (+answer1) + (+answer2);
//         console.log(`The sum of above two numbers is ${result}`);
//         rl.close();
//     });
// });

//losowanie
rl.question('--> ', (answer) => {
    if (nagroda[(answer-1)] === true) {
        let newEmptyDoor = losuj(3);
        while (newEmptyDoor === parseInt(answer) || nagroda[newEmptyDoor-1] === true) {
            newEmptyDoor = losuj(3);
        };
        console.log(colors.inverse('                              ')); 
        console.log(colors.inverse(colors.rainbow('    Zobacz                    ')));
        console.log(colors.inverse('                              ')); 
        console.log(colors.inverse(colors.rainbow('    bramka: ' + newEmptyDoor + ' jest pusta!     ')));
        console.log(colors.inverse('                              ')); 
        console.log(colors.inverse(colors.rainbow('    Zmieniasz decyzjes?       ')));
        console.log(colors.inverse('                              ')); 
        console.log(colors.inverse(colors.rainbow('    czy zostajes?             ')));
        console.log(colors.inverse('                              ')); 
        rl.question('--> ', (answer2) => {
            if (nagroda[(answer2-1)] === true) {
                console.log(colors.inverse('                     ')); 
                console.log(colors.inverse(colors.rainbow('    Wygrałeś!!!      ')));
                console.log(colors.inverse('                     ')); 
                rl.close();
            } else {
                console.log("Nie wygrałeś");
                rl.close();
            }
        });    
    } else {
        var newEmptyDoor = losuj(3);
        while (newEmptyDoor === parseInt(answer) || nagroda[newEmptyDoor-1] === true) {
            newEmptyDoor = losuj(3);
            if (nagroda[(newEmptyDoor-1)] === true) {
                newEmptyDoor = losuj(3);
            }
        };
        console.log(colors.inverse('                              ')); 
        console.log(colors.inverse(colors.rainbow('    Zobacz                    ')));
        console.log(colors.inverse('                              ')); 
        console.log(colors.inverse(colors.rainbow('    bramka: ' + newEmptyDoor + ' jest pusta!     ')));
        console.log(colors.inverse('                              ')); 
        console.log(colors.inverse(colors.rainbow('    Zmieniasz decyzjes?       ')));
        console.log(colors.inverse('                              ')); 
        console.log(colors.inverse(colors.rainbow('    czy zostajes?             ')));
        console.log(colors.inverse('                              ')); 
        rl.question('--> ', (answer2) => {
            if (nagroda[(answer2-1)] === true) {
                console.log(colors.inverse('                     ')); 
                console.log(colors.inverse(colors.rainbow('    Wygrałeś!!!      ')));
                console.log(colors.inverse('                     ')); 
                rl.close();
            } else {
                console.log("Nie wygrałeś");
                rl.close();
            }
        });  
    }
});

