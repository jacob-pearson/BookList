let bookList = []

function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = ''
}

function addBookToLibrary(book, bookList){
    bookList.push(book)
}

let thehobbit = new Book('The Hobbit', 'Tolkien', '295')

console.log(thehobbit)
addBookToLibrary(thehobbit, bookList)
console.log(bookList)

function displayBooks(){


}

function deleteBook(){


}

Book.prototype.read = function(){


}

Book.prototype.unread = function(){


}