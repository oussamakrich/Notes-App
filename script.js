const notesContainer = document.querySelector(".notes-container");
const creatBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function update() {
    localStorage.setItem("Notes", notesContainer.innerHTML);
}

function get_item() {
    notesContainer.innerHTML = localStorage.getItem("Notes");
}

get_item();

creatBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", true);
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    // update();
});

notesContainer.addEventListener("click", function(e){
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        update();
    } else if (e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box"); 
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                update();   
            }
        })
    }
});

document.addEventListener("keydown", event =>{
    if (event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }  
})