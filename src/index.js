
const details = document.getElementById('info');
const dueDate = document.getElementById('dateInput');
const title = document.getElementById('titleInput');
const getInfo = document.getElementById('submit-button')
getInfo.addEventListener('click', () => {addToDo(), console.log(getInfo.value)});
// ^this takes the value of the title text field and adds console logs it
// ^ this dates the value of the date text field
// ^ this dates the value of the date text field

 // ^^ needs to be changed so that its called when the addbutton in the popup is used. 

 class ToDo {
    constructor(title,details,dueDate) {
        this.title = title;
        this.details = details;
        this.dueDate = dueDate;

        return (this.title + this.details + this.dueDate) }
};

// const note1 = new ToDo('EAT', 'EAT FUD', '25th');
// console.log(note1.displayValue())
let id = 0;
// const note1 = new ToDo(titleInput.value, detailsInput.value, dateInput.value);
// console.log(note1.title)
function addToDo() {
    const note1 = new ToDo(title.value, details.value, dueDate.value);
    console.log(note1.titleInput)
const toDoNoteLocation = document.getElementById('toDoNotes')
const divCreate = document.createElement('div');
divCreate.classList = 'note'
toDoNoteLocation.append(divCreate);
divCreate.textContent += note1.title; // this should be changed to 



//delete button creation + id assignment to link the button to each created stickynote
const delCreate = document.createElement('button');
divCreate.appendChild(delCreate); //creates a button with every note
let delid = delCreate.id = 'button' + id
let idAssignment = divCreate.id = 'div' + id++ //assign the delete button to this
delCreate.addEventListener('click', () => { divCreate.remove()})
};


// add button animation popup
const addButton = document.getElementById('add-Button')
const popUpBox = document.getElementById('popUpBox')
addButton.addEventListener('click', () => {  popUpBox.classList.add('show')});
const delButton = document.getElementById('del-button')
delButton.addEventListener('click', () => {  popUpBox.classList.remove('show')});




/* 1. Create and test constructor logic - TICK 
   2. Create basic website front in HTML and CSS - TICK 
   3. Enable plus button to add a toDO note in seperate module -    
   
   */

