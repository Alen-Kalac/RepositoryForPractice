const usersTable = document.querySelector('.usersTable')
const submitBtn = document.querySelector("#submit");
let users = [];


const createuserFactory = (name, lastName, occupation) => {
    return {
        id: Math.random().toString(36).substring(2, 10 + 2),
        name, lastName, occupation
    };
};
const deleteUser = (userId)=>{
    const newUsers = users.filter((user)=> user.id !== userId)
    users = [... newUsers]
   
    console.log(users)
}
function dugmeFunction() {
    let userName = document.querySelector("#name").value;
    let lastName = document.querySelector("#lastName").value;
    let occupation = document.querySelector("#occupation").value;

    if (userName !== "" && lastName !== "" && occupation !== "") {
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
const renderUsers = () => {
    const currentUser = users[users.length - 1];
    
        //Creating new Row and Cells
    const currentRow = document.createElement('tr')
    currentRow.classList.add("addedRow")
    const userNameCell = document.createElement("td");
    const lastNameCell = document.createElement("td");
    const occupationCell = document.createElement("td");
    const actionCell = document.createElement('td')
    actionCell.addEventListener("click",()=> {
        deleteUser(currentUser.id),usersTable.removeChild(currentRow)
    })

    // Appending Cells to created row
    currentRow.appendChild(userNameCell);
    currentRow.appendChild(lastNameCell);
    currentRow.appendChild(occupationCell);
    currentRow.appendChild(actionCell)

    // Assinging text to created cells.

    userNameCell.textContent = currentUser.name;
    lastNameCell.textContent = currentUser.lastName;
    occupationCell.textContent = currentUser.occupation;
    actionCell.textContent = "X"
    // Appending new row to table element in HTML
    usersTable.appendChild(currentRow);
    }
;
//Ocisti input
//da se ne duplira ovo
//Stilizovanje
