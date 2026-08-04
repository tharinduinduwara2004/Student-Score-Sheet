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

const students = [];

function addData(){
    let name = nameInput.value;
    let score = scoreInput.value;
    if(name != '' && score != ''){
        students.push(
            {
                name: name,
                score: score,
            }
        );
        nameInput.value = '';
        scoreInput.value = '';
        displayList();
        closeDialog();

    }else{
        alert("Please fill all the fields.");
    }
}

addDataBtn.onclick = addData;

//display list
function displayList(){
    //sorting the array
    students.sort(function(a,b){
        return b.score - a.score;
    });

    let total = 0;
    let max = 0;
    let min = 100;

    students.forEach( student => {
        student.score = parseInt(student.score);

        if(student.score> max){
            max = student.score;
        }
        if(student.score < min){
            min = student.score;
        }
        total += student.score;
    })

    let average = total/students.length;
    info.innerHTML = `No. Students: ${students.length} <br>`;
    info.innerHTML += `Max : ${max} | Min: ${min} | Average: ${average.toFixed(2)}`;

    list.innerHTML = '';
    students.forEach(function(student){
        let record = document.createElement('tr');
        let td0 = document.createElement('td');
        td0.innerHTML = students.indexOf(student);
        let td1 = document.createElement('td');
        td1.innerHTML = student.name;
        let td2 = document.createElement('td');
        td2.innerHTML = student.score;
        let td3 = document.createElement('td');
        let btn = document.createElement('button');
        btn.innerHTML = "X";
        btn.onclick = function(){
            if(!confirm('Are You sure want to remove?')){
                return;
            }
            let index = students.indexOf(student);
            students.splice(index,1);
            //display
            displayList();
        }

        td3.appendChild(btn);

        record.appendChild(td0);
        record.appendChild(td1);
        record.appendChild(td2);
        record.appendChild(td3);
        list.appendChild(record);
    })
}