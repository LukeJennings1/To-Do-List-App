class ToDo {
    constructor(title,description,dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
     displayValue () {

        return (this.title + this.description + 'HULLO ITS SCON MANLEY')
    }
};
const note1 = new ToDo('EAT', 'EAT FUD', '25th');

const titleInput = document.getElementById('titleInput');
const getInfo = document.getElementById('submit-button')
getInfo.addEventListener('click', () => {  console.log(titleInput.value)});
console.log(note1.displayValue())

// ^this takes the value of the text fields and adds console logs it

// add button animation popup
const addButton = document.getElementById('add-Button')
const popUpBox = document.getElementById('popUpBox')
addButton.addEventListener('click', () => {  popUpBox.classList.add('show')});
const delButton = document.getElementById('del-button')
delButton.addEventListener('click', () => {  popUpBox.classList.remove('show')});

// addButton.addEventListener('click', () => { addToDo() });
 // ^^ needs to be changed so that its called when the addbutton in the popup is used. 

let id = 0;

function addToDo() {
const toDoNoteLocation = document.getElementById('toDoNotes')
const divCreate = document.createElement('div');
divCreate.classList = 'note'
toDoNoteLocation.append(divCreate);
divCreate.textContent += 'User title input'; // this should be changed to 


//delete button creation + id assignment to link the button to each created stickynote
const delCreate = document.createElement('button');
divCreate.appendChild(delCreate); //creates a button with every note
let delid = delCreate.id = 'button' + id
let idAssignment = divCreate.id = 'div' + id++ //assign the delete button to this
delCreate.addEventListener('click', () => { divCreate.remove()})
};



/* 1. Create and test constructor logic - TICK 
   2. Create basic website front in HTML and CSS - TICK 
   3. Enable plus button to add a toDO note in seperate module -    
   
   */