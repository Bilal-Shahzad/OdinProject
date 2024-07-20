const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log('Book added:', newBook);
    displayBooks();
}

function displayBooks() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';

    myLibrary.forEach((book, index) => {
        console.log('Displaying book:', book);

        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        
        const bookInfo = document.createElement('p');
        bookInfo.innerText = `Title: ${book.title}\nAuthor: ${book.author}\nPages: ${book.pages}\nRead: ${book.read ? 'Yes' : 'No'}`;
        bookCard.appendChild(bookInfo);
        
        const toggleReadBtn = document.createElement('button');
        toggleReadBtn.innerText = 'Toggle Read Status';
        toggleReadBtn.addEventListener('click', () => {
            console.log('Toggling read status for:', book.title);
            book.read = !book.read;
            displayBooks();
        });
        bookCard.appendChild(toggleReadBtn);
    })
}