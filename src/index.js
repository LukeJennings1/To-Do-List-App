
const details = document.getElementById('info');
const dueDate = document.getElementById('dateInput');
const title = document.getElementById('titleInput');
const getInfo = document.getElementById('submit-button');
const createProject = document.getElementById('create-project');
const toDoNotesGlobal = document.getElementById('toDoNotes');
const tabHome = document.getElementById('Home');
const sideMenu = document.getElementById('left-side-menu');
const textInput = document.getElementById('textInput');
const addButton = document.getElementById('add-Button')
const popUpBox = document.getElementById('popUpBox')
const buttonBox = document.getElementById('buttonBox')
const projectInput = document.getElementById('projectInput')
const projectInputButton = document.getElementById('create')
const projectInputTitle = document.getElementById('projectTitle')
const projectPlacement = document.getElementById('projectHome')
const projectClassGrabber = document.getElementsByClassName('projectButton');

const divCreate = document.createElement('button');
divCreate.textContent += 'Add To Do';
buttonBox.prepend(divCreate);

divCreate.addEventListener('click', () => {addToDo()}); // add to do button on popup
createProject.addEventListener('click', () => {projectTab()});
tabHome.addEventListener('click', () => {homeTab()});



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
let id = 0; 
// the below function runs when the add to do button is pressed in the popup. 
// this function is responcible for adding the sticky note to the screen div from 
// the popup. 



function addToDo() { 
const noteObject = new ToDo(title.value, details.value, dueDate.value);
// ^ this creates the new object to store the value of the inbox box on the textbox
const toDoNoteLocation = document.getElementById('toDoNotes')
const divCreate = document.createElement('div');
divCreate.classList = 'note'
toDoNoteLocation.append(divCreate);
// this creates the to do sticky note div when the add to do has been pressed on 
// the add popup 

//the below section takes the object value that has been taken by the value of the 
// form text boxes and adds it to the sticky note div created above^ 
const divTitle = document.createElement('div');
divTitle.classList = 'divTitle'
divTitle.textContent += noteObject.title;
const divDetails = document.createElement('div');
divDetails.classList = 'divDetails'
divDetails.textContent += noteObject.details;
const divDueDate = document.createElement('div');
divDueDate.classList = 'divDueDate'
divDueDate.textContent += noteObject.dueDate;
divCreate.append(divTitle, divDetails, divDueDate);

//delete button creation + id assignment to link the button to each created stickynote
const delCreate = document.createElement('button');
divCreate.appendChild(delCreate); //creates a button with every note
delCreate.id = 'button' + id
divCreate.id = 'div' + id++ //assign the delete button to this
delCreate.addEventListener('click', () => { divCreate.remove()})

popUpBox.classList.remove('show') // removes the remove class from the popupbox closing it. 
};

let projectID = 0;
function projectTab() {
    textInput.style.opacity = 0;
    projectInput.style.opacity = 1;
    divCreate.style.opacity = 0;
    createProject.style.opacity = 0;
    }
    
    projectInputButton.addEventListener('click', () => {  
        const createProjectTab = document.createElement('button')
        projectPlacement.appendChild(createProjectTab) // appends the home button 
        // to the project home div on the left hand side
        createProjectTab.textContent += projectInputTitle.value 
        createProjectTab.classList = 'projectButton' // adds a class to the created element
        popUpBox.classList.remove('show')        
        createProjectTab.id = projectID++;

        divCreate.style.opacity = 1;
        createProject.style.opacity = 1; 
        textInput.style.opacity = 1; 
        toDoNotesGlobal.style.opacity = 0;
        projectInputTitle.innerHTML += ''
        createProjectTab.addEventListener('click', () => {
            addButton.style.opacity = 0,
            addButton.style.pointerEvents = "none", newAddButton(), divCreate.style.opacity = 0,     divCreate.style.pointerEvents = 'none';
            ;})
});
        // ^^ this event listener creates the project tab
        // projectID

function newAddButton() {
    const noteLocation = document.getElementById('content');
    const AddButton = document.createElement('button');
    AddButton.textContent += '+';
    AddButton.style.backgroundColor = 'blue';
    AddButton.classList = 'add-Button';
    const divContainer = document.createElement('div');
    divContainer.appendChild(AddButton);
    divContainer.classList = 'projectButton';
    noteLocation.append(divContainer);

    const addNote = document.createElement('button');
    buttonBox.prepend(addNote);
    addNote.textContent += 'Add To Do';
    addNote.id = 'addToDoButton'
    addNote.addEventListener('click', () => {addToDoProject()});

    AddButton.addEventListener('click', () => {  popUpBox.classList.add('show'),
    projectInput.style.opacity = 0; } );
    const delButton = document.getElementById('del-button');
    delButton.addEventListener('click', () => {  popUpBox.classList.remove('show')});

    tabHome.addEventListener('click', () => {AddButton.remove(), divContainer.remove()
    });
    // divCreate.remove()

}
function homeTab() {
    toDoNotesGlobal.style.opacity = 1;
    addButton.style.opacity = 1;
    addButton.style.pointerEvents = "auto";
    divCreate.style.opacity = 1;
    divCreate.style.pointerEvents = 'auto';

}
function addToDoProject() {
const noteObject = new ToDo(title.value, details.value, dueDate.value);
// ^ this creates the new object to store the value of the inbox box on the textbox
const noteLocation = document.getElementById('content');
const noteLocationCreate = document.createElement('div');
const divCreate = document.createElement('div');
divCreate.classList = 'note'
noteLocation.append(noteLocationCreate);
noteLocationCreate.append(divCreate);


//the below section takes the object value that has been taken by the value of the 
// form text boxes and adds it to the sticky note div created above^ 
const divTitle = document.createElement('div');
divTitle.classList = 'divTitle'
divTitle.textContent += noteObject.title;
const divDetails = document.createElement('div');
divDetails.classList = 'divDetails'
divDetails.textContent += noteObject.details;
const divDueDate = document.createElement('div');
divDueDate.classList = 'divDueDate'
divDueDate.textContent += noteObject.dueDate;
divCreate.append(divTitle, divDetails, divDueDate);

//delete button creation + id assignment to link the button to each created stickynote
const delCreate = document.createElement('button');
divCreate.appendChild(delCreate); //creates a button with every note
delCreate.id = 'button' + id
divCreate.id = 'div' + id++ //assign the delete button to this
delCreate.addEventListener('click', () => { divCreate.remove()})

popUpBox.classList.remove('show') // removes the remove class from the popupbox closing it. 

};



projectPlacement.addEventListener('click', () => {      toDoNotesGlobal.style.opacity = 0;
}); // this adds the ability to tab between the home button and other projects. 


// add button animation popup
addButton.addEventListener('click', () => {  popUpBox.classList.add('show'),
projectInput.style.opacity = 0; } );
const delButton = document.getElementById('del-button')
delButton.addEventListener('click', () => {  popUpBox.classList.remove('show')});




/* 1. Create and test constructor logic - TICK 
   2. Create basic website front in HTML and CSS - TICK 
   3. Enable plus button to add a toDO note in seperate module -  TICK
   4. Enable projects with different sets of toDo notes -   
   ^ need to add a create Project button or create toDo buttonwhen + is pressed. 
   now that I have made the project buttons I need to play around with opacity settings 
   so that the toDo notes that are assigned to each project are only shown when the project 
   is selected. note that the home button should show all.

   I think I can dynamically assign sticky notes by changing the plus button so that
   it allocates it to the div once the project tab has been pressed. Also, a div can be created
   when then project is made that takes the place of the list contents

   */

