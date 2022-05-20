//Things to the DOM
const toDoInput = document.querySelector('input')
const toDoList = document.querySelector('#toDoList')
const addToDoBtn = document.querySelector('#toDoBtn')
const deleteAllBtn = document.querySelector('#deleteAllBtn')


//Date
let currentTime = new Date();

// The input and a clear command.
toDoInput.addEventListener('keydown', (e) =>{
   if (e.key !== 'Enter' || toDoInput.value.match(/^ *$/)) return
   console.log("Adding ", toDoInput.value.toUpperCase(), " to the list")
   addToDo()
   toDoInput.value = ""
})


//The add-to-do button which adds to the list and clears the input.
addToDoBtn.addEventListener('click', () =>{
   if(toDoInput.value.match(/^ *$/))return
   console.log("Adding ", toDoInput.value.toUpperCase(), " to the list")
   addToDo()
   toDoInput.value = ""
   toDoInput.focus()
})



//Finding and deleting each list elements.
deleteAllBtn.addEventListener('click', () =>{
   const deleteThemAll = document.querySelectorAll('li')
   deleteThemAll.forEach(toDo => toDo.remove())   
})



// Where to magic happens, adds a list, and a delete button and class to style them in css.
function addToDo(){
   const toDo = document.createElement('li')
   const toDoText = document.createElement('p')
   const deleteBtn = document.createElement('button')
   toDoText.textContent = toDoInput.value
   deleteBtn.textContent = "Delete"
   deleteBtn.addEventListener('click', () => toDo.remove())
   deleteBtn.classList.add('deleteBtn', 'p')
   toDoList.append(toDo)
   toDo.append(toDoText, deleteBtn)
}