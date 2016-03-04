var moneyLeft = 1000001;
var lottoCost = 100000;
var lottoWins = 10000;


document.getElementById("money-left").innerHTML = moneyLeft;

function lotteryNumberPicker() {
    var randNum = Math.random();
    randNum = randNum * 10;
    randNum = randNum + 1;
    randNum = Math.floor(randNum);
    document.getElementById("lotto-number").innerHTML = randNum ;
    
    return randNum;
}

function userNumberPicker() {
    var userNum = prompt("What number would you like?");
    document.getElementById("user-number").innerHTML = userNum;
    return userNum;
}

function didUserWin(userNum, lottoNum) {
    return userNum == lottoNum;
}

function payForTicket() {
    moneyLeft = moneyLeft - lottoCost;
    document.getElementById("money-left").innerHTML = moneyLeft;
}

function winner(){
    moneyLeft = moneyLeft + lottoWins;
    document.getElementById("money-left").innerHTML = moneyLeft;
   
}

function lotteryGo() {
    payForTicket();
    var userNum = userNumberPicker();
    var lottoNum = lotteryNumberPicker();
    if (didUserWin(userNum, lottoNum ));
    winner(); {
        
    }


}
document.getElementById("buybutton").addEventListener("click" , lotteryGo);

 