
const myLibrary = [];

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

    var bookTable = document.getElementById('bookLibrary');

    //clear the table
    bookTable.innerHTML = '';

    //create the table header
    var headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>Title</th><th>Author</th><th>Pages</th><th>Read</th>';
    bookTable.appendChild(headerRow);

    //Populate the table with book instances
    for(var i = 0; i < myLibrary.length; i++){
        var book = myLibrary[i];

        var row = document.createElement('tr');

        var titleCell = document.createElement('td');
        titleCell.textContent = book.title;
        row.appendChild(titleCell);

        var authorCell = document.createElement('td');
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        var pagesCell = document.createElement('td');
        pagesCell.textContent = book.pages;
        row.appendChild(pagesCell);

        var readCell = document.createElement('td');
        readCell.textContent = book.read ? 'Read' : 'Not Read';
        row.appendChild(readCell);

        bookTable.appendChild(row);
    }
    // var bookList = document.getElementById('bookLibrary');
    //Clear the list
    // bookList.innerHTML = '';

    // //Populate the list with book Instances
    // for(var i = 0; i < myLibrary.length; i++){
    //     var listItem = document.createElement('li');
    //     listItem.appendChild(document.createTextNode(myLibrary[i].info()));
    //     bookList.appendChild(listItem);
    // }

}