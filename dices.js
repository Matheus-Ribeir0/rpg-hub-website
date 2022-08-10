let contentBox = document.getElementById("content-box")
let sumResult = document.getElementById("sum")
let cal = document.getElementById("calculation")
let diceAmount = []
let diceArray = [2, 4, 6, 8, 10, 12, 20, 100]
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
        `<div class="border d${diceArray[index]}" id="border-d${diceArray[index]}">
            <p class="counter d${diceArray[index]}" id="counter-d${diceArray[index]}"></p>
        </div>
        <button class="roll-button d${diceArray[index]}" onclick="showDicesResult(${diceArray[index]})">
           <p>${diceArray[index]}</p>
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
    var value = rollDice(diceType,counterNum.value )
    
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









//---------------------------------
    function Acrescing(){
        if(diceAmount > 1){
            
        }    
    }

    function Rolling(){
        i=0
        if(sumD6 != 0){ //se tiver d6 faça
            while (i < sumD6){ //enquanto i menor que totalD6
                d6 = (Math.floor(Math.random()* 6) + 1)
                sum.push(d6)
                i++
            }
            console.log(i)
            calculation += i + 'd6 '
        }

        i=0
        if(sumD4 != 0){
            Acrescing()
            while (i < sumD4){
                
                d4 = (Math.floor(Math.random()* 4) + 1)
                sum.push(d4)
                i++
            }
            calculation += i + 'd4 '
        }
        i=0
        if(sumD2 != 0){
            Acrescing()
            while (i < sumD2){
                
                d2 = (Math.floor(Math.random()* 2) + 1)
                sum.push(d2)
                i++
            }
            calculation += i + 'd2 '
        }
    }

    function Clear(){
        sumD6 = 0
        sumD4 = 0
        sumD2 = 0
        sumResult.innerHTM = 'null'
        
        document.getElementById("border-d6").style.display="none"
        document.getElementById("counter-d6").style.display="none"
        document.getElementById("border-d4").style.display="none"
        document.getElementById("counter-d4").style.display="none"
        document.getElementById("border-d2").style.display="none"
        document.getElementById("counter-d2").style.display="none"
    }

