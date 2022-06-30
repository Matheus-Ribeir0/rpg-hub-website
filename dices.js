let contentBox = document.getElementById("content-box")
let sumResult = document.getElementById("sum")
let sumD6 = 0 
let sumD4 = 0
let sum = Array()
let i = 0
sum = []
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
        sumD6 = sumD6 + 1
        document.getElementById("counter-d6").innerHTML =  sumD6
        document.getElementById("border-d6").style.display="inline"
        document.getElementById("counter-d6").style.display="inline"
    }

    function Rolld4(){
        sumD4 = sumD4 + 1
        console.log('soma d4 = ' + sumD4)
        document.getElementById("counter-d4").innerHTML =  sumD4    
        document.getElementById("counter-d4").style.display="inline"
        document.getElementById("border-d4").style.display="inline"
        
        
    }

    function Roll(){
        sum = []
        i= 0
        if(sumD6 != 0){ //se tiver d6 faça
            while (i < sumD6){ //enquanto i menor que totalD6
                d6 = (Math.floor(Math.random()* 6) + 1)
                sum.push(d6)
                i++
            }
        }

        i=0
        if(sumD4 != 0){
            while (i < sumD4){
                d4 = (Math.floor(Math.random()* 4) + 1)
                sum.push(d4)
                i++
            }
        }

        sumResult.innerHTML = ''
        
        let res = 0
        console.log('novo teste')
        for (let i = 0; i < sum.length; i++){
            
                sumResult.innerHTML += ' + ' + sum[i] 
                
           
            res += sum[i];
        }
       
        
        contentBox.innerHTML = res
    }
    function Clear(){
        sumD6 = 0
        sumD4 = 0
        sumResult.innerHTM = 'null'
        document.getElementById("border-d6").style.display="none"
        document.getElementById("counter-d6").style.display="none"
        document.getElementById("border-d4").style.display="none"
        document.getElementById("counter-d4").style.display="none"
    }
   
    
        
    
  
    
