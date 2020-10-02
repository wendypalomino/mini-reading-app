const list = document.querySelector('#book-list ul')

//1)Delete books
function deleteHandler(event){
    if(event.target.className == 'delete'){
        const li = event.target.parentElement;
        list.removeChild(li)
    }
}

list.addEventListener( 'click', deleteHandler)

//2)Add books

const addForm = document.forms['add-book']

function addBookHandler(event){
event.preventDefault();
const value = addForm.querySelector('input[type="text"]').value

//create elements

const li  = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span')

// Append to DOM

li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li)

//Add content

deleteBtn.textContent = 'delete';
bookName.textContent = value;

//Add classes

bookName.classList.add('name');
deleteBtn.classList.add('delete');
}

addForm.addEventListener('submit', addBookHandler)

//Hide books

const hideBox = document.querySelector('#hide')

function hideBoxHandler(){
    if(hideBox.checked){
        list.style.display = 'none'
    } else {
        list.style.display = 'initial'
    }
}

hideBox.addEventListener('change', hideBoxHandler)

//Filter Books

const searchBar= document.forms['search-books'].querySelector('input');

function searchHandler(event){
    const term = event.target.value.toLowerCase();
    const books = list.querySelectorAll('li');
    books.forEach( book => {
        const title = book.firstElementChild.textContent;
        if(title.toLocaleLowerCase().indexOf(event.target.value) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none'
        }
    })

}

searchBar.addEventListener('keyup', searchHandler)

// Tabber content

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    panels.forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
});
