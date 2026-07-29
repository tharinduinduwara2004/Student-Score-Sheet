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

const studenta = [];

function addData(){
    let name = nameInput.value;
    let score = score = scoreInput.value;
    if(nmae != '' && score != ''){
        students.push(
            {
                name: name,
                score: score,
            }
        );
        nameInput.value = '';
        scoreInput.value = '';
    }else{
        alert("Please fill all the fields.");
    }
}

addDataBtn.onclick = addData;

//display list
function displayList(){
    students.forEach(function(student){
        let record = document.createElement('tr');
        let td0 = document.createElement('td');
        td0.innerHTML = students.indexOf(student);
        let td1 = document.createElement('td');
        td1.innerHTML = student.name;
        let td2 = document.createElement('td');
        td2.innerHTML = student.score;
        let td3 = document.createElement('td');

        record.appendChild(td0);
        rocord.appendChild(td1);
        record.appendChild(td2);
        record.appendChild(td3);
        list.appendChild(record);
    })
}