let addbtn = document.querySelector("button");
let ul = document.querySelector("ol");
let input = document.querySelector("#inputxt");


addbtn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value;

    let dltBtn = document.createElement("button");
    dltBtn.innerText = "x";
    dltBtn.classList.add("delete");

    item.appendChild(dltBtn);
    ul.appendChild(item);
    input.value = "";
});

let deltBtns = document.querySelectorAll(".delete");

ul.addEventListener("click", function(e){
    console.log("Hyy clicked");  
    let pr = e.target;
    if(pr.nodeName == "BUTTON"){
        pr.parentElement.remove();

    }
})

// for (dtBtn of deltBtns){

//     dtBtn.addEventListener("click", function (){
//         console.log("Element Deleted");
//     });
// }
