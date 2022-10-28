function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = ''
}

function addBookToLibrary(book, bookList){
    bookList.push(book)
}




function deleteBook(bookIndex, bookList){
    bookList.splice(bookList[bookIndex], 1)
}


Book.prototype.read = function(){
    this.status = 'read'



}

Book.prototype.unread = function(){
    this.status = 'unread'

}
function clearList(){
    const bookList = document.getElementById('list-content-wrapper')
    bookList.textContent = ''
}
function buildBookCard(bookIndex, bookTitle, bookAuthor, bookPages, bookStatus){
    const bookCard = document.createElement('div')
        bookCard.classList.add('book-card')

    const bookContentWrapper = document.createElement('div')
        bookContentWrapper.classList.add('book-content-wrapper')

    const bookTitleContent = document.createElement('p')
        bookTitleContent.classList.add('content')
        bookTitleContent.textContent = bookTitle

    const bookAuthorContent = document.createElement('p')
        bookAuthorContent.classList.add('content')
        bookAuthorContent.textContent = bookAuthor

    const bookPagesContent = document.createElement('p')
        bookPagesContent.classList.add('content')
        bookPagesContent.textContent = bookPages

    const bookButtonWrapper = document.createElement('div')
        bookButtonWrapper.classList.add('book-button-wrapper')

    const bookUnreadButton = document.createElement('INPUT')
        bookUnreadButton.setAttribute('type', 'button')
        bookUnreadButton.classList.add('unread')
        bookUnreadButton.setAttribute('data-index', bookIndex)

    const bookReadButton = document.createElement('INPUT')
        bookReadButton.setAttribute('type', 'button')
        bookReadButton.classList.add('read')
        bookReadButton.setAttribute('data-index', bookIndex)

    const bookDeleteButton = document.createElement('INPUT')
        bookDeleteButton.setAttribute('type', 'button')
        bookDeleteButton.classList.add('delete')
        bookDeleteButton.setAttribute('data-index', bookIndex)

    if(bookStatus == 'read'){
        bookContentWrapper.classList.add('read-book')
    }else{
        bookContentWrapper.classList.add('unread-book')
    }

    bookCard.appendChild(bookContentWrapper)
    bookContentWrapper.appendChild(bookTitleContent)
    bookContentWrapper.appendChild(bookAuthorContent)
    bookContentWrapper.appendChild(bookPagesContent)
    bookCard.appendChild(bookButtonWrapper)
    bookButtonWrapper.appendChild(bookUnreadButton)
    bookButtonWrapper.appendChild(bookReadButton)
    bookButtonWrapper.appendChild(bookDeleteButton)

    let listContentWrapper = document.getElementById('list-content-wrapper')
    listContentWrapper.appendChild(bookCard)

}

function displayBooks(bookList){

    for(let book in bookList){
        let bookIndex = book
        let bookTitle = bookList[book].title
        let bookAuthor = bookList[book].author
        let bookPages = bookList[book].pages
        let bookStatus = bookList[book].status
        buildBookCard(bookIndex, bookTitle, bookAuthor, bookPages, bookStatus)
    }

    const readButtons = document.querySelectorAll('.read')
    const unreadButtons = document.querySelectorAll('.unread')
    const deleteButtons = document.querySelectorAll('.delete')

    readButtons.forEach(readButton =>{
        readButton.onclick = function(){
            let index = this.getAttribute('data-index')
            let bookToChange = bookList[index]
            bookToChange.read()
            console.log(bookList[index])
            clearList()
            displayBooks(bookList)
        }})

    unreadButtons.forEach(unreadButton =>{
        unreadButton.onclick = function(){
            let index = this.getAttribute('data-index')
            let bookToChange = bookList[index]
            bookToChange.unread()
            clearList()
            displayBooks(bookList)
        }
    })
    deleteButtons.forEach(deleteButton =>{
        deleteButton.onclick = function(){
            let index = this.getAttribute('data-index')
            deleteBook(index, bookList)
            clearList()
            displayBooks(bookList)
        }
    })


}


let bookList = []
let thehobbit = new Book('The Hobbit', 'Tolkien', '295')
let theHobbit2 = new Book('the hobbit 2', 'Tolkien', '296')


const bookSubmit = document.getElementById('submit-button')
bookSubmit.onclick = function (){
    const bookTitleInput = document.getElementById('book-title').value
    const bookAuthorInput = document.getElementById('book-author').value
    const bookPagesInput = document.getElementById('book-pages').value
    if(bookTitleInput.length === 0 || bookAuthorInput.length === 0 || bookPagesInput === 0){
        alert('Your book information is incomplete. Please make sure to add a Title, Author, and number of Pages.')
    }else{
        let bookToAdd = new Book(bookTitleInput, bookAuthorInput, bookPagesInput)
        addBookToLibrary(bookToAdd, bookList)
        clearList()
        displayBooks(bookList)
    }
}
addBookToLibrary(thehobbit, bookList)
addBookToLibrary(theHobbit2, bookList)
displayBooks(bookList)








