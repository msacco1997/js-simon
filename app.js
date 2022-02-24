
let randomNumbers = [];
let seconds = 3;
let right = [];
let wrong = [];
const timer = document.getElementById('timer');
timer.innerHTML = seconds;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// creazione numeri random in array se non dono doppioni
do{
    const num = getRandomInt(1,100);
    console.log(num);

    if (!randomNumbers.includes(num)) {
        randomNumbers.push(num);
    }

} while(randomNumbers.length < 5)

console.log(randomNumbers);

alert(`Cerca di ricordati questi 5 numeri: ${randomNumbers.join(', ')}`);

//timer di 30 secondi
const clock = setInterval( () => {

    seconds--;
    timer.innerHTML = seconds;
    
    if (seconds === 0){
        clearInterval(clock);

        //conclusi i trenta secondi, ricordare i 5 numeri
        for (let i = 0; i < randomNumbers.length; i++){
        
            const userNumber = parseInt( prompt(`Inserisci il ${i+1}° numero`) );
            console.log(userNumber);
            
            // se il numero inserito e' gia stato inserito
            if( randomNumbers.includes(userNumber) && !right.includes(userNumber)){
                right.push(userNumber);
        
            } else { 
                // numeri sbagliati o doppioni
                wrong.push(userNumber);
            }
        }
        alert(`Hai indovinato ${right.length} numeri --> ${right.join(', ')}`);
        console.log('Sbagliati oppure doppi', wrong.join(', '));
    } 
    
},1000); // la function deve partire ogni secondo 