const div_0 = document.querySelector("div");
const div_1 = document.querySelector(".squares");
let grid_width = 500;
let num_squares;

div_0.style.textAlign = "center";

div_1.style.width = grid_width + "px";
div_1.style.margin = "20px auto";
div_1.style.display = "flex";
div_1.style.flexWrap = "wrap";

const button = document.createElement("button");
button.textContent = "Num of squares";
button.style.padding = "10px";
button.style.margin = "10px";
div_0.appendChild(button);
button.addEventListener("click", ()=>{
    num_squares = prompt("Number of squares per side");
    num_squares = parseInt(num_squares);
    if (div_1.hasChildNodes()) {
        // The div has at least one child node
        div_1.innerHTML="";}
    for (i = 0; i<(num_squares*num_squares); i++){
        let divs = document.createElement("div");
        divs.style.width = ((grid_width/num_squares)-4) + "px";
        divs.style.height = ((grid_width/num_squares)-4) + "px";
        divs.style.border = "1px solid black";
        divs.style.margin = "1px"
        div_1.appendChild(divs);
        divs.addEventListener("mouseover", () => {
            divs.style.backgroundColor = "red";
        })
        divs.addEventListener("mouseout", () => {
            divs.style.backgroundColor = "white";
        })
    }
})
div_0.appendChild(button);


