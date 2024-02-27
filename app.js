
const myLibrary = [{
    title: "The Alchemist",
    author: "Paulo Cohelo",
    pages: 208
},
{
    title: "Atomic Habits",
    author: "James Clear",
    pages: 320
},
{
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    pages: 224
}
];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return this.title + "by" + this.author + "," + this.pages + "pages," + this.read;
    }
}

function addBookToLibrary(){
    //Get values from input fields
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var pages = document.getElementById('pages').value;
    var read = document.getElementById('read').checked;

    // Create a new book Instance

    var newBook = new Book(title, author, pages, read);

    //add the new book to the library
    myLibrary.push(newBook);

    //clear the input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;

    //update the displayed library
    updateBookLibrary();
}
//Function to update the displayed library
function updateBookLibrary(){
    var bookList = document.getElementById('myLibrary');
    //Clear the list
    bookList.innerHTML = '';
}