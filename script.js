const list = document.getElementById('list');
const addDataDialogBtn = document.getElementById('addDataDialogBtn');        
const closeAddDataBtn = document.getElementById('closeAddDataBtn');
const dialogContainer = document.querySelector('.dialog-container');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const addDataBtn = document.getElementById('addDataBtn');
const info = document.getElementById('info');

        

addDataDialogBtn.addEventListener('click', function(){
    dialogContainer.style.display = 'flex';   
    setTimeout(function(){
        dialogContainer.style.opacity = 1;
    }, 100);         
});

closeAddDataBtn.addEventListener('click', closeDialog);
function closeDialog(){
    dialogContainer.style.opacity = 0;
    setTimeout(function(){
        dialogContainer.style.display = 'none';
    }, 100);
}