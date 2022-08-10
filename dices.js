let contentBox = document.getElementById("content-box")
let sumResult = document.getElementById("sum")
let cal = document.getElementById("calculation")
let diceAmount = []
let diceArray = [4, 6, 8, 10, 12, 20, 100]
let counterNum = document.getElementById("show-qtd")
let counterBonus = document.getElementById("bonus-qtd")
counterNum.value = 1
counterBonus.value = 0
let dicesSum = 0
let dicesPlayed = [0,0,0,0,0,0,0,0]


//--------------
// GERAR OS DADOS PARA VISUALIZAÇÃO

function sortResult(diceType){ //sortear dado
    return Math.floor(Math.random()* diceType) + 1 
}

function generateDices(diceArray){ //gerar os dados na hotbar
    let dicesComponent = ""
    for (let index = 0; index < diceArray.length; index++) {

        dicesComponent +=
        `<button class="roll-button d${diceArray[index]}" onclick="showDicesResult(${diceArray[index]})" data-role="hint" data-hint-text="button"/>
        <img class="dices" src="images/d${diceArray[index]}.png"/>
        </button>`
    }
    return dicesComponent
}

function showDices(htmlComponent){
    var dicesBarComponent = document.getElementById("dices-bar")
    dicesBarComponent.innerHTML = htmlComponent
}

showDices(generateDices(diceArray))
// REALIZAR AS ROLAGENS

function rollDice(dice, diceQnt){
    var dicesSum = 0
    var value 
    let diceType = dice
    diceAmount = []
    for (let index = 0; index < diceQnt; index++) {
        value = sortResult(dice)
        diceAmount.push(value)
        dicesSum += value
    }
    verifyNumber()
    dicesSum = dicesSum + parseInt(counterBonus.value)
    return dicesSum
}


function showDicesResult(diceType){
    clearCounterDiceStrings()
    animateResult()
    var value = rollDice(diceType,counterNum.value)
    
    putResultOnScreen(value)
    showAllDices()
    showCount(diceType)
}

// MOSTRAR RESULTADO DE TODAS ROLAGENS
function showAllDices(){
    sumResult.innerHTML = ''
    sumResult.innerHTML += diceAmount.sort(function(a, b){return a - b})
}

function putResultOnScreen(diceResult){
    var contentBox = document.getElementById("content-box")
    contentBox.innerHTML = diceResult
}


//---------------------------------
//fazer funçao para retornar counterBonus ja em int

function showCount(diceType){
    if (counterBonus.value != 0){
        cal.innerHTML = counterNum.value + diceType +  counterBonus.value 
    }else{
        cal.innerHTML = counterNum.value + diceType
    }
    
}

function selectCounterDices(){
    counterNum.value = counterNum.value.slice(0,counterNum.value.length-1)
}
function addSuffixCounterDices(){
    counterNum.value += "d" 
}
function clearCounterDiceStrings(){
    counterNum.value = counterNum.value.replace(/[^0-9\.]+/g, "");
}

function verifyNumber(){
    
    if(/[a-zA-Z]/.test(counterNum.value)) {
        counterNum.value = 1    
    }
    if (counterNum.value < 1){
        counterNum.value = 1
    }
    if (counterNum.value > 999){
        counterNum.value = 999
    }
    addSuffixCounterDices()
}
function sumDices(){
    clearCounterDiceStrings()
    parseInt(counterNum.value)
    counterNum.value ++
    verifyNumber()
}

function subDices(){
    clearCounterDiceStrings()
    parseInt(counterNum.value)
    counterNum.value --
    verifyNumber()
}

//------------------------------------------------

function verifyBonus(){
    if (counterBonus.value >= 0){
        x = counterBonus.value
        counterBonus.value = ''
        counterBonus.value += '+' + x
    }
    if(/[a-zA-Z]/.test(counterBonus.value)) {
        counterBonus.value = '+' + 1    
    }
}
function sumBonus(){
    parseInt(counterBonus.value)
    counterBonus.value ++
    console.log(counterBonus.value)
    verifyBonus()
}

function subBonus(){
    parseInt(counterBonus.value)
    counterBonus.value --
    verifyBonus()
}





function animateResult(){
    var x = 10
    var y = 20
    console.log(x)
    contentBox.classList.add('active')
    setTimeout(animateE,2000)
    
}
function animateE(){
    contentBox.classList.remove('active')
}


