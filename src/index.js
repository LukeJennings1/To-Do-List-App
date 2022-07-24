class toDo {
    constructor(title,description,dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
     displayValue () {

        return (this.title + this.description + 'HULLO ITS SCON MANLEY')
    }
};
const note1 = new toDo('EAT', 'EAT FUD', '25th');

console.log(note1.displayValue())

// add button animation popup
const addButton = document.getElementById('add-Button')
addButton.addEventListener('click', () => { addToDo() });

let id = 0;

function addToDo() {
const toDoNoteLocation = document.getElementById('toDoNotes')
const divCreate = document.createElement('div');
divCreate.classList = 'note'
toDoNoteLocation.append(divCreate);
divCreate.textContent += 'User title input'; // this should be changed to 



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