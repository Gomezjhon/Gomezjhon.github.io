const todoObjectlist=[];
class todo_Class{
  constructor(item){
    this.ulElement=item;
}
     add() {
     }

    done_undone(x) {
     }

    deleteElement(Z){
     }

    display() {
     }
}
const listSection=document.document.querySelector("myUL");
mytodolist= new todo_Class(listSection);

document.querySelector(".addBtn").addEventListener("click" , function (){
   mytodolist.add()
})

add(){
  const todoInput= document.querySelector("#myInput").value;
if (todoInput==""){
  alert("¡No ingresaste ningun articulo!")
} else {
    const todoObject = {
      id : todoObjectlist.length,
      todoText : todoInput,
      isDone : false,
}

todoObjectlist.unshift(todoObject);
this.display();
document.querySelector("#myInput").value = ʺ;

  }

}

this.ulElement.innerHTML = “”;
const liElement = document.createElement(“li”);
const delBtn = document.createElement(“i”);
liElement.innerText = object_item.todoText;
liElement.setAttribute(“data-id”, object_item.id);
delBtn.setAttribute(“data-id”, object_item.id);
delBtn.classList.add(“far”, “fa-trash-alt”);
liElement.appendChild(delBtn);
delBtn.addEventListener(“click”, function(e) {
  const deleteId = e.target.getAttribute(“data-id”);
  myTodoList.deleteElement(deleteId);
  })
  
  liElement.addEventListener(“click”, function(e) {
    const selectedId = e.target.getAttribute(“data-id”);
    myTodoList.done_undone(selectedId);
    })
    if (object_item.isDone) {
      liElement.classList.add(“checked”);
      }
      this.ulElement.appendChild(liElement);
  display(){
    this.ulElement.innerHTML= "";
      todoObjectlist.forEach((object_item)=> {
          const liElement = document.createElement("li");
          const delBtn = document.createElement("i");

          liElement.innerText= object_item.todoText;
          liElement.setAttribute("data-id" , object_item.id);
