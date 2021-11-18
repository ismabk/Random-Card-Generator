let suit = [... document.querySelectorAll('.heart')];
let num = document.querySelector('.number')
const x = new Set();

// function generateSuit(){
//     let suits = ['♦' ,'♥', '♠', '♣'];
//     let randomNum = Math.floor(Math.random() * 4);
//     return suits[randomNum]
// }
// function generateNumber(){
//     let randomNum = Math.floor(Math.random() * 13)+1;
//     return randomNum;
// }
// function generateColorSuitRandom (randomSuit){
//     if (randomSuit ==='♠' || randomSuit === '♣'){
//         suit[0].innerHTML = randomSuit;
//         suit[1].innerHTML = randomSuit;
//         suit[0].setAttribute('class','pica')
//         suit[1].setAttribute('class','pica')
//     }else {
//         suit[0].innerHTML = randomSuit;
//         suit[1].innerHTML = randomSuit;
//         suit[0].setAttribute('class','heart')
//         suit[1].setAttribute('class','heart')
//     }
// }

//Button random card
// document.querySelector('.btn-primary').addEventListener('click', () => {
//      let randomSuit = generateSuit();
//      generateColorSuitRandom(randomSuit)
//      num.innerHTML = generateNumber();
// });

//Button random card without repetition suit
// document.querySelector('.btn-success').addEventListener('click', function noRepeatSuit() {
//     let randomSuit = generateSuit();
//     if( randomSuit !== suit[0].textContent){
//         generateColorSuitRandom(randomSuit)
//         num.innerHTML = generateNumber();
//     } else noRepeatSuit ();
// });

//Button random card without repetition
// document.querySelector('.btn-danger').addEventListener('click', function noRepeat(){
//     let randomSuit = generateSuit();
//     let newNum = generateNumber()
//     let numSuit= newNum + randomSuit
//     console.log(x.size)
//     if (x.size === 52) alert('has completado el ciclo')
//     else if(!x.has(numSuit)){
//         generateColorSuitRandom(randomSuit)
//         num.innerHTML = newNum
//         x.add (numSuit);
//     }else return noRepeat();
// });


function Card (numero,palo, used,n){
    this.numero = numero;
    this.palo = palo;
    this.used = used;
    this.n=n
}
function createCard (){
    let cards = [];
    let n=0
    let suits = ['♦' ,'♥', '♠', '♣'];
    for (let i = 1; i < 14; i++) {
        for(let j in suits){
            var newCards = new Card(i,suits[j],'false',n);
            cards.push(newCards);
            n++;
        }
    }
    return cards
}
function generateColorSuitRandom (deckColor,randomNumColor){
    if (deckColor[randomNumColor].palo ==='♠' || deckColor[randomNumColor].palo === '♣'){
        suit[0].innerHTML = deckColor[randomNumColor].palo;
        suit[1].innerHTML = deckColor[randomNumColor].palo;
        suit[0].setAttribute('class','pica')
        suit[1].setAttribute('class','pica')
    }else {
        suit[0].innerHTML = deckColor[randomNumColor].palo;
        suit[1].innerHTML = deckColor[randomNumColor].palo;
        suit[0].setAttribute('class','heart')
        suit[1].setAttribute('class','heart')
    }
}
let deck = createCard();
//Button random card without repetition
document.querySelector('.btn-danger').addEventListener('click', () => {
    let notUsedDeck = deck.filter(deckUsed => deckUsed.used == 'false')
    console.log(notUsedDeck.length)
    if (notUsedDeck.length==0) {
        alert('has completado el ciclo')   
        deck = createCard();
        return deck
    }
    else {
        let randomNum = Math.floor(Math.random() * notUsedDeck.length);
        let numberCard= notUsedDeck[randomNum].n
        deck[numberCard].used = 'true';
        generateColorSuitRandom (notUsedDeck,randomNum);
        num.innerHTML = notUsedDeck[randomNum].numero;
    }
    return deck
});
//Button random card
document.querySelector('.btn-primary').addEventListener('click', () => {
    let randomNum = Math.floor(Math.random() * deck.length);
    generateColorSuitRandom (deck,randomNum);
    num.innerHTML = deck[randomNum].numero;
});
//Button random card without repetition suit
document.querySelector('.btn-success').addEventListener('click', function noRepeatSuit() {
    let randomNum = Math.floor(Math.random() * deck.length);
    if( deck[randomNum].palo !== suit[0].textContent){
        generateColorSuitRandom (deck,randomNum);
        num.innerHTML = deck[randomNum].numero;
    } else noRepeatSuit ();
});
