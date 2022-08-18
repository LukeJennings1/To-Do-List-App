
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
const content = document.getElementById('content')
const projectNoteContent = document.getElementById('projectNoteContent')
const projectClassGrabber = document.getElementsByClassName('projectButton');

const noteTitle = document.getElementById('noteTitle')
const home = document.getElementById('Home')
let homeTabPressed = false; 



const divCreate = document.createElement('button');
divCreate.textContent += 'Add To Do';
buttonBox.prepend(divCreate);

divCreate.addEventListener('click', () => {addToDo()}); // add to do button on popup
createProject.addEventListener('click', () => {projectTab()});
tabHome.addEventListener('click', () => {homeTab()});

 class ToDo { // sticky note constructor function 
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
divTitle.textContent += ' Title // '
divTitle.textContent += noteObject.title;
const divDetails = document.createElement('div');
divDetails.classList = 'divDetails'
divDetails.textContent += 'Info //' + noteObject.details;
const divDueDate = document.createElement('div');
divDueDate.classList = 'divDueDate'
divDueDate.textContent += noteObject.dueDate;
divCreate.append(divTitle, divDetails, divDueDate);

//delete button creation + id assignment to link the button to each created stickynote
const delCreate = document.createElement('button');
divCreate.appendChild(delCreate); //creates a button with every note
delCreate.id = 'button' + id
divCreate.id = 'div' + id++ //assign the delete button to this
delCreate.classList = 'stickyDeleteButton'
delCreate.textContent = '- Delete Note -'
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

        function addToDoOnProject() { 
            const noteObject = new ToDo(title.value, details.value, dueDate.value);
            // ^ this creates the new object to store the value of the inbox box on the textbox
            const divCreate = document.createElement('div');
            divCreate.id = id;
            divCreate.classList = 'note';
            divSelector.append(divCreate);
            
            // this creates the to do sticky note div when the add to do has been pressed on 
            // the add popup 
            
            //the below section takes the object value that has been taken by the value of the 
            // form text boxes and adds it to the sticky note div created above^ 
            const divTitle = document.createElement('div');
            divTitle.classList = 'divTitle'
            divTitle.textContent += ' Title // '
            divTitle.textContent += noteObject.title;
            const divDetails = document.createElement('div');
            divDetails.classList = 'divDetails';
            divDetails.textContent += 'Info //' + noteObject.details;
            const divDueDate = document.createElement('div');
            divDueDate.classList = 'divDueDate';
            divDueDate.textContent += noteObject.dueDate;
            divCreate.append(divTitle, divDetails, divDueDate);
            
            //delete button creation + id assignment to link the button to each created stickynote
            const delCreate = document.createElement('button');
            divCreate.appendChild(delCreate); //creates a button with every note
            delCreate.id = 'button' + id
            divCreate.id = 'div' + id++ //assign the delete button to this
            delCreate.classList = 'stickyDeleteButton'
            delCreate.textContent = '- Delete Note -'
            delCreate.addEventListener('click', () => { divCreate.remove()})
            
            popUpBox.classList.remove('show') // removes the remove class from the popupbox closing it. 
            };
        

        const createProjectTab = document.createElement('button')

        projectPlacement.appendChild(createProjectTab) // appends the home button 
        // to the project home div on the left hand side
        createProjectTab.textContent += projectInputTitle.value 
        createProjectTab.classList = 'projectButton' // adds a class to the created element
        
        popUpBox.classList.remove('show')
        createProjectTab.id = projectID++;

        
        createProjectTab.addEventListener('click', () => { // press on a project tab
            projectNoteContent.style.pointerEvents = 'auto';
            toDoNotesGlobal.style.pointerEvents = 'none';
            homeTabPressed = false; 
            projectPagetitle.style.opacity = 1;
            noteTitle.style.opacity = 0;



        });
        divCreate.addEventListener('click', () => {
            if (homeTabPressed == false) {
            return addToDoOnProject()

        } 
         });    
// this creates the project content tab space where the stickies go
        const projectPagetitle = document.createElement('div');
        projectPagetitle.id = projectID;
        projectPagetitle.classList = 'projectSpace'
        projectPagetitle.textContent = '- ' + projectInputTitle.value + ' -';
        projectNoteContent.append(projectPagetitle);
        projectPagetitle.style.position = 'absolute';
        const divSelector = document.getElementById(projectID)

        home.addEventListener('click', () => {
            projectPagetitle.style.opacity = 0;
            homeTabPressed = true; 

        });

        divCreate.style.opacity = 1;
        createProject.style.opacity = 1; 
        textInput.style.opacity = 1; 
        toDoNotesGlobal.style.opacity = 0;
        projectInputTitle.innerHTML += '';

});
function homeTab() {
    toDoNotesGlobal.style.opacity = 1;
    addButton.style.opacity = 1;
    addButton.style.pointerEvents = "auto";
    divCreate.style.opacity = 1;
    divCreate.style.pointerEvents = 'auto';
    toDoNotesGlobal.style.pointerEvents = 'auto';
    noteTitle.style.opacity = 1;
    projectNoteContent.style.pointerEvents = 'none';
}



projectPlacement.addEventListener('click', () => {      toDoNotesGlobal.style.opacity = 0;
}); // this adds the ability to tab between the home button and other projects. 


// add button animation popup
addButton.addEventListener('click', () => {  popUpBox.classList.add('show'),
projectInput.style.opacity = 0; } );
const delButton = document.getElementById('del-button')
delButton.addEventListener('click', () => {  popUpBox.classList.remove('show')});




/* I just need to change it so that when a new project tab is pressed the previous tabs 
opactiy and click event is changed so that it does not show up on the new one
   */

