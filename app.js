
let guess = 0;
let answer = 0;
let tries = 10;
let myPicks = document.querySelector('.myPicks')
let counter = document.querySelector('.counter')

//Random number generator
const randomNum = () =>{
    let num = Math.floor(Math.random()* 101);
    return num
}
answer = randomNum()
console.log(answer)

// counter.textContent = tries
counter.innerHTML = tries

//prompt for users Guesses
const userGuess = () => {
    let pickNum = prompt('guess a number between 1 - 100')
    guess = pickNum
    while (myPicks.firstChild) {
        myPicks.removeChild(myPicks.firstChild); 
    }
}
const scoreCheck = () => {
    let image = document.querySelector('.image')
    switch(true) {
        case(tries >= 6 && tries < 10):
            image.setAttribute('src','https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGI1YzAxOWdhNGRobDFpeW1yZWFxeWs4MWR1aTZhdjRtazAzbGE1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o75269cVD7heeSOgE/giphy.gif');
            break;
        case( tries < 6 && tries > 2):
            image.setAttribute('src', 'https://i.gifer.com/SBrf.gif')
            break;
        case (tries <= 2):
            image.setAttribute('src', 'https://media1.tenor.com/m/mWFelILO6L8AAAAC/spongebob-squarepants-spongebob.gif')
            default:
                // image.setAttribute('src','https://66.media.tumblr.com/ce3a0f588060677739d4c1dc3c9f04a3/tumblr_nvqr429lvX1tq4of6o1_500.gif')

    }
}
// start for the game
const game = () => {
    userGuess()
    guess == answer ? alert('You have won the game'):
    guess > answer? (tries--, counter.innerHTML = tries, myPicks.append(`You're guess was too high ${guess}`),scoreCheck()):
    guess < answer? (tries--, counter.innerHTML = tries, myPicks.append(`You're guess was too low ${guess}`),scoreCheck()):
    'please enter a number';
}

