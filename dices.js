let contentBox = document.getElementById("content-box")
let counter = document.getElementById("counter")
let sumResult = document.getElementById("sum")
let sumDice = 0 
let sum = Array()
let i = 0
window.onload = Clear()
    function Rolld20(){
        let d20 = Math.floor(Math.random()* 20) + 1
        console.log(d20)
        contentBox.innerHTML = 'd20 = ' + d20
    }
    function Rolld12(){
        let d12 = Math.floor(Math.random()* 12) + 1
        console.log(d12)
        contentBox.innerHTML = 'd12 = ' + d12
    }
    function Rolld8(){
        let d8 = Math.floor(Math.random()* 8) + 1
        console.log(d8)
        contentBox.innerHTML = 'd8 = ' + d8
    }
    function Rolld6(){
        sumDice = sumDice + 1
        counter.innerHTML =  sumDice
        document.getElementById("counter").style.display="inline"    
    }

    function Rolld4(){
        let d4 = Math.floor(Math.random()* 4) + 1
        console.log(d4)
        contentBox.innerHTML = 'd4 = ' + d4
    }

    function Roll(){
        i = 0
        sum = []
        while (i < sumDice){
            d6 = (Math.floor(Math.random()* 6) + 1)
            sum.push(d6)
            i++
        }

        sumResult.innerHTML = ''
        
        let res = 0
        console.log('novo teste')
        for (let i = 0; i < sum.length; i++){
            
                sumResult.innerHTML += ' + ' + sum[i] 
                
            console.log('legth = ' + sum.length)
            console.log('i = '+ i)
            console.log(sum[i])
            res += sum[i];
        }
       
        
        contentBox.innerHTML = res
    }
    function Clear(){
        sumDice =0
        document.getElementById("counter").style.display="none"
    }
   
    
        
    
  
    
