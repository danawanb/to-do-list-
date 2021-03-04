const todoObjectlist = [];
class Todo_Class {
    constructor(item){
        this.ulElement = item;
    }
    add() {
        const todoInput = document.querySelector("#myInput").value;
        if(todoInput == ""){
            alert("fuck me!")
        }else {
            const todoObject ={
                id: todoObjectlist.length,
                todoText : todoInput,
                isDone : false,
            }
        
        todoObjectlist.unshift(todoObject);
        this.display();
        document.querySelector("#myInput").value = '';
        }
    }
    done_undone(x) {
        const selectedTodoIndex = todoObjectlist.findIndex((item) => item.id == x);
        console.log(todoObjectlist[selectedTodoIndex].isDone);
        todoObjectlist[selectedTodoIndex].isDone == false ? todoObjectlist[
selectedTodoIndex].isDone = true : todoObjectlist[selectedTodoIndex].isDone = false;
        this.display();
    }
    deleteElement(z) {
        const selectedDelIndex = todoObjectlist.findIndex((item) => item.id == z);
        todoObjectlist.splice(selectedDelIndex,1);
        this.display();
    }
    display(){
        this.ulElement.innerHTML = "";
        todoObjectlist.forEach((object_item) =>{
            
            const liElement = document.createElement ("li");
            const delBtn = document.createElement("i");
    
            liElement.innerText = object_item.todoText;
            liElement.setAttribute("data-id", object_item.id);
    
            delBtn.setAttribute("data-id", object_item.id);
            delBtn.classList.add("far", "far-trash-alt");
    
            liElement.appendChild(delBtn);
    
            delBtn.addEventListener("click", function(e){
                const deleteId = e.target.getAttribute ("data-id");
                myTodoList.deleteElement(deleteId);
            })
    
            liElement.addEventListener("click", function(e){
                const selectedId = e.target.getAttribute("data-id");
                myTodoList.done_undone(selectedId);
            })
    
            if (object_item.isDone) {
                liElement.classList.add("checked");
            }
    
            this.ulElement.appendChild(liElement);
            })
        }
    
}


const listSection = document.querySelector("#myUL");
myTodoList = new Todo_Class(listSection);

document.querySelector(".addBtn").addEventListener("click", function(){
    myTodoList.add()
})