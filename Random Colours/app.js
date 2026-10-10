// button veriable
let btn = document.querySelector("button");

// event listener for button click
btn.addEventListener("click", function (){
    let colour = getRandomColor();
    document.querySelector("div").setAttribute("Style", `background-color: ${colour}`);
});

// function to generate random color
function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;

}