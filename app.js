
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

// function to open form
function openForm(){
    var bookForm = document.getElementById('bookForm');
    bookForm.style.display = 'block';
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
        readCell.addEventListener('click', function(){
            book.read = !book.read;
            updateBookLibrary();
        });
        row.appendChild(readCell);

        var removeCell = document.createElement('td');
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            removeBook(i); //Pass the index of the book to remove
        });
        (function (index){
            removeButton.addEventListener('click', function(){
                removeBook(index);
            });
        })(i);

        removeCell.appendChild(removeButton);
        row.appendChild(removeCell);

        row.addEventListener('click', function(){
            openDialog(book);
        });

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

//Function to open the dialog with the book details
function openDialog(book){
    var dialogContent = document.getElementById('dialogContent');
    dialogContent.innerHTML = '';

    //Add the book details to the dialog content
    var detailsParagraph = document.createElement('p');
    detailsParagraph.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages},
    Read: ${book.read ? 'Yes' : 'No'}`;
    dialogContent.appendChild(detailsParagraph);

    //  show the dialog
    var bookDialog = document.getElementById('bookDialog');
    bookDialog.showModal();
}

//function to close the dialog
function closeDialog(){
    var bookDialog = document.getElementById('bookDialog');
    bookDialog.close();
}

function removeBook(index){
    myLibrary.splice(index, 1);
    updateBookLibrary();
}