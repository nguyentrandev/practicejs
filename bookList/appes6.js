class Book{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI{
  addBookToList(book){
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

  deleteBook(target){
    if(target.classList.contains('delete')){
      target.parentElement.parentElement.remove();
    }
  }

  showAlert(message, className){
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

  clearField(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

//Event listener for delete book
document.getElementById('book-list').addEventListener('click', function(e){
  
  const ui = new UI();

  ui.deleteBook(e.target);

  //Remove book from ls
  Store.removeBookFromLS(e.target.parentElement.previousElementSibling.textContent);


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

    //Add book to Local Storage
    Store.addBookToLS(book);

    //Show scuess
    ui.showAlert('success', 'success');

    //Clear field
    ui.clearField();
  }

  

  e.preventDefault();
}
);


//Local Storage class
class Store {
  //fetching data
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }
  
  static displayBooks(){
    const books = Store.getBooks();

    books.forEach(function(book){
      const ui = new UI;
      //Add book to list
      ui.addBookToList(book);
    });

  };

  static addBookToLS(book){
    //Get book from storage
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  };

  static removeBookFromLS(isbn){
    const books = Store.getBooks();

    //re move
    books.forEach(function(book, index){
      if(book.isbn === isbn){
        books.splice(index, 1);
      }
    });

    //set item to local storage
    localStorage.setItem('books', JSON.stringify(books));
  }
}

//DOM load event
document.addEventListener('DOMContentLoaded', Store.displayBooks);
