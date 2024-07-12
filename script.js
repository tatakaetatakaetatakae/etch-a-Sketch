const body = document.body;
const start = document.createElement('button');
start.textContent = "START";
body.appendChild(start);

function changeit(square){
    let x = parseInt(Math.random() * 255);
    let y = parseInt(Math.random() * 255);
    let z = parseInt(Math.random() * 255);
    square.style.backgroundColor = `rgb(${x},${y},${z})`;
}

let container = null;
start.addEventListener("click"  , () =>{
    if (container) {
        body.removeChild(container);
    }

    container = document.createElement('div');
    container.setAttribute("id" , "container");
    const n = parseInt(prompt("enter the number of squares for each side of the grid"));

const squaresize = parseFloat(33/n);
for(let i = 0 ; i < n ; i++){
    for(let j = 0 ; j < n  ; j++){
        let square = document.createElement('div');
        square.setAttribute("class" , "square");
        square.style.width = `${squaresize}rem`;
        square.style.height = `${squaresize}rem`;
        container.appendChild(square);
    }
}


container.style.width = "33rem";
container.style.height = "33rem";
// container.style.gap = `${gap}rem`;
body.appendChild(container);
container.addEventListener("mouseover", function(event) {
    if (event.target.classList.contains("square")) {
        changeit(event.target);
    }
});
});

const tools = document.createElement('div');
const reset = document.createElement('button');

reset.textContent = "RESET";
tools.appendChild(reset);
body.appendChild(tools);
reset.addEventListener("click" , () =>{
    const squares = document.querySelectorAll('div[class="square"]');
    squares.forEach(sq => {
        sq.style.backgroundColor = "white";
    });
});
//conslog.log(container);