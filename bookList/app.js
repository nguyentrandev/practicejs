//Book Constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI constructor
function UI(){}

//Add Book to list
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  //Create element
  const row = document.createElement('tr');
  //Insert col
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X<a></td>`;
  
  list.appendChild(row);
}

//Show alert
UI.prototype.showAlert = function(message, className){
  //Create div
  const div = document.createElement('div');
  // add class
  div.className = `alert ${className}`;
  // add text
  div.appendChild(document.createTextNode(message));
  //Get parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  
  //insert alert
  container.insertBefore(div, form);

  setTimeout(function(){
    document.querySelector('.alert').remove()
  }, 3000);
}

//Clear field
UI.prototype.clearField = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

//Delete book from list
UI.prototype.deleteBook = function(target){
  if(target.classList.contains('delete')){
    target.parentElement.parentElement.remove();
  }
}


//Event listener for delete book
document.getElementById('book-list').addEventListener('click', function(e){
  
  const ui = new UI();

  ui.deleteBook(e.target);

});

//Event listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  //Instantiate book
  const book = new Book(title, author, isbn);

  //Instantitate UI
  const ui = new UI();

  //Validation
  if(title === '' || author === '' || isbn === ''){
    //Error alert
    ui.showAlert('Please fill in all firelds', 'error');
  }else{
    //Add book to list
    ui.addBookToList(book);

    //Show scuess
    ui.showAlert('success', 'success');

    //Clear field
    ui.clearField();
  }

  

  e.preventDefault();
}
);

