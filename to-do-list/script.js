let inputBox = document.getElementById("input-box");
let text = document.querySelector(".text");

function addTask(){
    if(inputBox.value == ""){
        alert("you must write a note first!");
    }
    else{
        let newEle = document.createElement("li");
        newEle.innerHTML = `${inputBox.value} <span> &#128465; </span>`;
        text.appendChild(newEle);
        inputBox.value="";
        saveData();
    }
}
text.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", text.innerHTML);
}

function showTask(){
    text.innerHTML = localStorage.getItem("data");
}

showTask();