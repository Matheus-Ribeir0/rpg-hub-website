let contentBox = document.getElementById("content-box")

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
        let d6 = Math.floor(Math.random()* 6) + 1
        console.log(d6)
        contentBox.innerHTML = 'd6 = ' + d6
    }
    function Rolld4(){
        let d4 = Math.floor(Math.random()* 4) + 1
        console.log(d4)
        contentBox.innerHTML = 'd4 = ' + d4
    }

    


