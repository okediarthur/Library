
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

}