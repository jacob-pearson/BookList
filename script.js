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

function deleteBook(bookIndex, bookList){
    bookList.splice(bookList[bookIndex], 1)
}


Book.prototype.read = function(){
    this.status = 'read'



}

Book.prototype.unread = function(){
    this.status = 'unread'

}

function displayBooks(bookList){
    for(let book in bookList){
        let bookIndex = book
        let bookTitle = bookList[book].title
        let bookAuthor = bookList[book].author
        let bookPages = bookList[book].pages
        bookList[book].unread()
        let bookStatus = bookList[book].status
        console.log(bookIndex + ' ' + bookTitle + ' ' + bookAuthor + ' ' +bookPages + ' ' +bookStatus)
    }


}
displayBooks(bookList)
deleteBook(0, bookList)
displayBooks(bookList)
deleteBook(0, bookList)
displayBooks(bookList)



