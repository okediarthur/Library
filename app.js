
class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'Read' : 'Not Read'}`;
    }
}

class Library {
    constructor(){
        this.books = [];
    }

    addBook(title, author, pages, read){
        const newBook = new Book(title, author, pages, read);
        this.books.push(newBook)
    }
    removeBook(index){
        this.books.splice(index, 1);
    }

    toggleReadStatus(index){
        this.books[index].read = !this.books[index].read;
    }

    displayLibrary(){
        const bookTable = document.getElementById('bookLibrary');
        bookTable.innerHTML = '';

        const headerRow = document.createElement('tr');
        headerRow.innerHTML = '<th>Tile</th><th>Author</th><th>Pages</th><th>Read</th><th>Action</th>';
        bookTable.appendChild(headerRow);

        this.books.forEach((book, index) => {
            const row = document.createElement('tr');

            const cells = ['title', 'author', 'pages'].map(property => {
                const cell = document.createElement('td');
                cell.textContent = book[property];
                return cell;
            });

            const readCell = document.createElement('td');
            readCell.textContent = book.read ? 'Read' : 'Not Read';
            readCell.addEventListener('click', () => {
                this.toggleReadStatus(index);
                this.displayLibrary();
            });

            const removeCell = document.createElement('td');
            const removeButton = document.createElement('button');
            removeButton.addEventListener('click', () => {
                this.removeBook(index);
                this.displayLibrary();
            });
            removeCell.appendChild(removeButton);

            row.append(...cells, readCell, removeCell);
            bookTable.appendChild(row);
        });
    }
}

const myLibrary = new Library();

// function Book(title, author, pages, read){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function(){
//         return this.title + "by" + this.author + "," + this.pages + "pages," + this.read;
//     }
// }

// function to open form
// function openForm(){
//     var bookForm = document.getElementById('bookForm');
//     bookForm.style.display = 'block';
// }

function openForm(){
    document.getElementById('bookForm').style.display = 'block';
}

function addBookToLibrary(){
    //Get values from input fields
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    // Create a new book Instance

    // var newBook = new Book(title, author, pages, read);

    //add the new book to the library
    // myLibrary.push(newBook);
    myLibrary.addBook(title, author, pages, read);

    //clear the input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;

    //update the displayed library
    // updateBookLibrary();
    myLibrary.displayLibrary();
}
//Function to update the displayed library
// function updateBookLibrary(){

//     var bookTable = document.getElementById('bookLibrary');

//     //clear the table
//     bookTable.innerHTML = '';

//     //create the table header
//     var headerRow = document.createElement('tr');
//     headerRow.innerHTML = '<th>Title</th><th>Author</th><th>Pages</th><th>Read</th>';
//     bookTable.appendChild(headerRow);

//     //Populate the table with book instances
//     for(var i = 0; i < myLibrary.length; i++){
//         var book = myLibrary[i];

//         var row = document.createElement('tr');

//         var titleCell = document.createElement('td');
//         titleCell.textContent = book.title;
//         row.appendChild(titleCell);

//         var authorCell = document.createElement('td');
//         authorCell.textContent = book.author;
//         row.appendChild(authorCell);

//         var pagesCell = document.createElement('td');
//         pagesCell.textContent = book.pages;
//         row.appendChild(pagesCell);

//         var readCell = document.createElement('td');
//         readCell.textContent = book.read ? 'Read' : 'Not Read';
//         readCell.addEventListener('click', function(){
//             book.read = !book.read;
//             updateBookLibrary();
//         });
//         row.appendChild(readCell);

//         var removeCell = document.createElement('td');
//         var removeButton = document.createElement('button');
//         removeButton.textContent = 'Remove';
//         removeButton.addEventListener('click', function() {
//             removeBook(i); //Pass the index of the book to remove
//         });
//         (function (index){
//             removeButton.addEventListener('click', function(){
//                 removeBook(index);
//             });
//         })(i);

//         removeCell.appendChild(removeButton);
//         row.appendChild(removeCell);

//         row.addEventListener('click', function(){
//             openDialog(book);
//         });

//         bookTable.appendChild(row);
//     }
    // var bookList = document.getElementById('bookLibrary');
    //Clear the list
    // bookList.innerHTML = '';

    // //Populate the list with book Instances
    // for(var i = 0; i < myLibrary.length; i++){
    //     var listItem = document.createElement('li');
    //     listItem.appendChild(document.createTextNode(myLibrary[i].info()));
    //     bookList.appendChild(listItem);
    // }

// }

// //Function to open the dialog with the book details
// function openDialog(book){
//     var dialogContent = document.getElementById('dialogContent');
//     dialogContent.innerHTML = '';

//     //Add the book details to the dialog content
//     var detailsParagraph = document.createElement('p');
//     detailsParagraph.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages},
//     Read: ${book.read ? 'Yes' : 'No'}`;
//     dialogContent.appendChild(detailsParagraph);

//     //  show the dialog
//     var bookDialog = document.getElementById('bookDialog');
//     bookDialog.showModal();
// }

function openDialog(book){
    const dialogContent = document.getElementById('dialogContent');
    dialogContent.innerHTML = `<p>Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages},Read: ${book.read ? 'Yes' : 'No'}</p>`;

    document.getElementById('bookDialog').showModal();
}

function closeDialog(){
    document.getElementById('bookdialog').closest();
}

document.getElementById('startButton').addEventListener('click', openForm);

// //function to close the dialog
// function closeDialog(){
//     var bookDialog = document.getElementById('bookDialog');
//     bookDialog.close();
// }

// function removeBook(index){
//     myLibrary.splice(index, 1);
//     updateBookLibrary();
// }