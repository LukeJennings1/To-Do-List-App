
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
const projectInput = document.getElementById('projectInput')
const projectInputButton = document.getElementById('create')
const projectInputTitle = document.getElementById('projectTitle')


getInfo.addEventListener('click', () => {addToDo()});
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
function addToDo() {
    
const noteObject = new ToDo(title.value, details.value, dueDate.value);
const toDoNoteLocation = document.getElementById('toDoNotes')
const divCreate = document.createElement('div');
divCreate.classList = 'note'
toDoNoteLocation.append(divCreate);

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
let delid = delCreate.id = 'button' + id
let idAssignment = divCreate.id = 'div' + id++ //assign the delete button to this
delCreate.addEventListener('click', () => { divCreate.remove()})

popUpBox.classList.remove('show')
};

let projectID = 0;    



function projectTab() {
    textInput.style.opacity = 0;
    projectInput.style.opacity = 1;
    
    projectInputButton.addEventListener('click', () => {  
        const createProjectTab = document.createElement('button')
        sideMenu.appendChild(createProjectTab)
        createProjectTab.textContent += projectInputTitle.value 
        popUpBox.classList.remove('show')        

    } );

};

// function addProject() {
//     // popUpBox.classList.remove('show')
//     const createProjectDiv = document.createElement('div')
//     sideMenu.appendChild(createProjectDiv)
//     const createButton = document.createElement('button');
//     sideMenu.appendChild(createButton)

//     createProjectDiv.id = projectID++; // dynamic id assigned to each project div to allow deletion

// }
function homeTab() {
    toDoNotesGlobal.style.opacity = 1;
}

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
   If the project one is created we must be able to tab into it and create Todos. 
   create a tab with the new project (this involves deleting the page and adding the new one
    when the project is selected once created.)

   */

