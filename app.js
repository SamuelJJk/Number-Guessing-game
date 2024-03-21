

let guess = 0;
let answer = 0;
let myPicks = document.querySelector('.myPicks')

const randomNum = () =>{
    let num = Math.floor(Math.random()* 101);
    return num
}
answer = randomNum()
console.log(answer)

const userGuess = () => {
    console.log(`This was the num before ${guess}`)
    let pickNum = prompt('guess a number between 1 - 100')
    guess = pickNum
    console.log(`This is the Current num ${guess}`)
    myPicks.append(pickNum)
}
