const form = document.getElementById('addForm')
const items = document.getElementById('items')
const filter = document.getElementById('filter')

form.addEventListener('submit', addItem)
//ADD EVENT
function addItem(e){
    e.preventDefault();

    const newItem = document.getElementById('item').value
    const li = document.createElement('li')
    li.className = 'list-group-item'
    

    // create delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.className = ' btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('X'))
    li.appendChild(document.createTextNode(newItem))
    li.appendChild(deleteBtn)
    items.appendChild(li);
}
//DELETE EVENT
items.addEventListener('click',removeItem)
function removeItem(e){
 if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
        const li = e.target.parentElement
        items.removeChild(li);
    }
 }
}
//Filter
filter.addEventListener('keyup',filterItems)
function filterItems(e){
    //convert to lowerCase
    const text = e.target.value.toLowerCase()
    //
    const itemsList = items.getElementsByTagName('li')
    //
    Array.from(itemsList).forEach(function(item){
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block"
        }else{
            item.style.display = "none"
        }
    })
}
