function makeGrid(a){
    for(let x=0; x<a; x++){
        var div = document.createElement("div")
        div.setAttribute('id', 'line'+x);        
        var grid = document.getElementById("grid")
        grid.appendChild(div);

        for(let i=0; i<a; i++){
            var div = document.createElement("div")
            div.setAttribute('class', 'square');
            div.classList.add("square");
            var line = document.getElementById("line"+x)
            line.appendChild(div);
        }
    }
    y=600/a
    
    squares = document.querySelectorAll('.square')

    squares.forEach(square => {
        square.style.width=y+"px"
        square.style.height=y+"px"
        })
    squares=document.querySelectorAll('.square')

    let mouseoverExecuted = false;
    let onclickExecuted = false;

    squares.forEach(square => {
        square.addEventListener("mouseover", function bgc(){
            square.style.backgroundColor="black";
        })        
    })
}

makeGrid(2)

function makeWhite(){
    squares = document.querySelectorAll('.square')

    squares.forEach(square => {
        square.style.backgroundColor="white"
    })
}

function removeGrid() {
    const grid=document.querySelector('#grid')
    grid.innerHTML=''
}


var submit = document.getElementById("submit")

submit.addEventListener("click", function click(){
    const val = document.getElementById('number').value;   
    if (val<2 || val>100){
        alert("error")
    }
    else{
        removeGrid()
        makeGrid(val)
    }
    
})

