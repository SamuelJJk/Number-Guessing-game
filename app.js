

let guess = 0;
let answer = 0;
let myPicks = document.querySelector('.myPicks')

//Random number generator
const randomNum = () =>{
    let num = Math.floor(Math.random()* 101);
    return num
}
answer = randomNum()
console.log(answer)

let tries = 10;
let counter = document.querySelector('.counter')
// counter.textContent = tries
counter.innerHTML = tries

//prompt for users Guesses
const userGuess = () => {
    console.log(`This was the num before ${guess}`)
    let pickNum = prompt('guess a number between 1 - 100')
    guess = pickNum
    console.log(`This is the Current num ${guess}`)
    myPicks.append(pickNum)
}

const game = () => {
    while (tries > 0){
    userGuess();
    if (guess == answer){
        alert('you have won')
        return
    }
    else{
        tries --
        counter.innerHTML = tries
        return
    }
}
}
