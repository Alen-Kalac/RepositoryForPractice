const usersTable = document.querySelector('.usersTable')
const submitBtn = document.querySelector("#submit");
let redniBroj = 0;
let users = [];


const createuserFactory = (name, lastName, occupation) => {
    return { name, lastName, occupation };
};
function dugmeFunction(){
     let userName = document.querySelector("#name").value;
    let lastName = document.querySelector("#lastName").value;
    let occupation = document.querySelector("#occupation").value;

    if(userName!=="" && lastName !=="" && occupation!==""){
        const user = createuserFactory(userName, lastName, occupation);
    users.push(user);
    renderUsers();
    console.log(users);

    document.querySelector("#name").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#occupation").value = "";
    }
}
submitBtn.addEventListener("click", dugmeFunction)
submitBtn.addEventListener("")
const renderUsers = () => {
    const currentUser = users[users.length - 1]; 
    //Creating new Row and Cells
    redniBroj ++
    const currentRow = document.createElement('tr')
    const redniBrojCell = document.createElement("td");
    const userNameCell = document.createElement("td");
    const lastNameCell = document.createElement("td");
    const occupationCell = document.createElement("td");

    // Appending Cells to created row
    currentRow.appendChild(redniBrojCell);
    currentRow.appendChild(userNameCell);
    currentRow.appendChild(lastNameCell);
    currentRow.appendChild(occupationCell);
    
    // Assinging text to created cells.
    redniBrojCell.textContent = redniBroj + ".";
    userNameCell.textContent = currentUser.name;
    lastNameCell.textContent = currentUser.lastName;
    occupationCell.textContent = currentUser.occupation;
    // Appending new row to table element in HTML
    usersTable.appendChild(currentRow);
};
//Ocisti input
//da se ne duplira ovo
//Stilizovanje
