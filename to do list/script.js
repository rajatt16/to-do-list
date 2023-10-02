const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask() {
    if(inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);   //to show the written content in list container
        let pan=document.createElement("pan");
        pan.innerHTML="\u00d7"
        li.appendChild(pan);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="PAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();