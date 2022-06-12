const ans = Math.floor(Math.random() * 10 + 1)   //here Math.random() * 10 will take only from 0-99 so we added +1 for 1-100
let gue = 0;                                      // Math.floor() added for getting only integers.

document.getElementById("submit").onclick=function(){
    let guess = document.getElementById("guessfield").value;
    gue+=1;

    if(guess == ans){
        alert(`"${ans} is the correct and it took ${gue} chances for correct guessing"`);

    }

    if(guess < ans){
        alert("Too small");
    }

    if(guess > ans){
        alert("Too large");
    }
}
