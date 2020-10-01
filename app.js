const list = document.querySelector('#book-list ul')

//Delete books
function deleteHandler(event){
    if(event.target.className == 'delete'){
        const li = event.target.parentElement;
        list.removeChild(li)
    }
}

list.addEventListener( 'click', deleteHandler)