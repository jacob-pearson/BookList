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
let theHobbit2 = new Book('the hobbit 2', 'Tolkien', '296')
addBookToLibrary(thehobbit, bookList)
addBookToLibrary(theHobbit2, bookList)
function displayBooks(){


}

function deleteBook(bookIndex, bookList){
    bookList.splice(bookList[bookIndex], 1)
}


Book.prototype.read = function(){
    this.status = 'read'
    return this.status


}

Book.prototype.unread = function(){
    this.status = 'unread'
    return this.status
}
theHobbit2.unread()
thehobbit.read()
console.log(bookList)


