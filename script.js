const screen = document.querySelector("#screen");
const square = document.createElement("div");
const inputLabel = document.querySelector("input")
const enterButton = document.querySelector("#enterButton")
const clearButton = document.querySelector("#clearButton")
let pixels = 8
square.setAttribute("class", "square")
function createRow(){
    const row = document.createElement("div");

    function createHoverEffect(element){ // creates affect for hovering over squares
        function mouseOver(){
            element.style.backgroundColor = "gray"; // turns square grey upon hover
        }
        function mouseOut(){
            element.style.backgroundColor = "white";// reverts color
        }

        // adds these events to the element passed into the function
        element.addEventListener("mouseover", mouseOver);
        element.addEventListener("mouseout",  mouseOut);

        return {mouseOver, mouseOut};
    }

    for (let i = 0; i < pixels; i++){
        square.style.backgroundColor = "White";
        square.style.border = "2px solid black";
        const cloneS = square.cloneNode(true);

        row.setAttribute("id", "row");
        row.appendChild(cloneS);

        const {mouseOver, mouseOut} = createHoverEffect(cloneS); // adds events to the cloned squares

        cloneS.addEventListener("click", function(e){ // when a square is clicked...
            e.target.setAttribute("class", "filled");
            e.target.style.backgroundColor = "gray";

            // remove these event listeners
            cloneS.removeEventListener("mouseover", mouseOver);
            cloneS.removeEventListener("mouseout", mouseOut);
        })
    }
    screen.appendChild(row);
} 

function createGrid(pixels){
    for (let i = 0; i < pixels; i++){
        createRow();
    }
}

createGrid(4)

enterButton.addEventListener("click", function(){
    if (!inputLabel.value || isNaN(inputLabel.value)){
        alert("Enter a valid response!");
    }
    else {
        pixels = inputLabel.value;
        rows = screen.querySelectorAll("div#row");
        rows.forEach(element => {
            screen.removeChild(element)
        });
        createGrid(pixels);
    }
})

clearButton.addEventListener("click", function(){
    location.reload()
})