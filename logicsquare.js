const div_1 = document.querySelector("div");
div_1.style.width = "256px";
div_1.style.margin = "100px auto";
div_1.style.display = "flex";
div_1.style.flexWrap = "wrap";

for (i = 0; i<16; i++){
    let divs = document.createElement("div");
    divs.style.width = "50px";
    divs.style.height = "50px";
    divs.style.border = "3px solid black";
    divs.style.margin = "0.5px"
    div_1.appendChild(divs);
}

