const elInput = document.getElementById('todo-input');
const elContainer = document.getElementById('list-container');

function addTask (){
    if(elInput.value == ''){
        alert("write something first!")
    }else{
        let addLi = document.createElement("li");
        addLi.innerHTML = elInput.value;
        addLi.classList.add('list-item')
        elContainer.appendChild(addLi);

    }
    elInput.value = "";

}
document.addEventListener('DOMContentLoaded', function (){
    const elContainer = document.getElementById('list-container');

    elContainer.addEventListener('click', function (event){
        const clickedElement = event.target;


        if(clickedElement.classList.contains('list-item')){
            clickedElement.classList.toggle('task-done');
        }
    })
})

elContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classlist.toggle("list-done");
    }else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    };

}, false);