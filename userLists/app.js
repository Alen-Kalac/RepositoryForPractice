const usersContainer = document.querySelector('.users')
const submitBtn = document.querySelector('#submit')
let users = [];
const createuserFactory=(name,lastName,occupation)=>{
    return {name,lastName,occupation}
}
submitBtn.addEventListener('click', () => {
    let userName = document.querySelector("#name").value;
    let lastName = document.querySelector("#lastName").value;
    let occupation = document.querySelector("#occupation").value;
    
   const user = createuserFactory(userName,lastName,occupation)
 users.push(user);
 console.log(users);

 renderUsers()

 document.querySelector("#name").value = "";
 document.querySelector("#lastName").value = "";
 document.querySelector("#occupation").value = "";
})
const renderUsers = ()=>{
    users.forEach(user => {
        const userContainer = document.createElement("div")
        const userNameSpan = document.createElement("span")
        const lastNameSpan = document.createElement("span")
        const occupationSpan = document.createElement("span")
        //
        userContainer.appendChild(userNameSpan)
        userContainer.appendChild(lastNameSpan)
        userContainer.appendChild(occupationSpan)
        //
        userNameSpan.textContent = user.name
        lastNameSpan.textContent = user.lastName
        occupationSpan.textContent = user.occupation
        usersContainer.appendChild(userContainer)
    })
}
//Ocisti input
//da se ne duplira ovo
//Stilizovanje