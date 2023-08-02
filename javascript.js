let libraryArray = [];


function makeBook(Author, title, pages) {
    this.Author = Author;
    this.title = title;
    this.pages =pages;

}

function addBook(Author, title, pages){
    let newBook = new makeBook(Author, title, pages);
    libraryArray.push(newBook);
}

function displayBooks() {
    const libraryDiv = document.getElementById('library');

    // Clear out any old content
    libraryDiv.innerHTML = '';

    // Loop through each book in the array
    for (let i = 0; i < libraryArray.length; i++) {
        // Create a new div for the book, and set its content
        let bookDiv = document.createElement('div');
        bookDiv.className = 'bookCard'; // Set a class for CSS styling
        bookDiv.innerHTML = `
            <h2>${libraryArray[i].title}</h2>
            <p>Author: ${libraryArray[i].Author}</p>
            <p>Pages: ${libraryArray[i].pages}</p>
        `;

        // Add the new div to the library
        libraryDiv.appendChild(bookDiv);
    }
}







document.getElementById('bookForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the values from the form
    let author = document.getElementById('author').value;
    let title = document.getElementById('title').value;
    let pages = document.getElementById('pages').value;

    // Call the addBook function with the form values
    addBook(author, title, pages);
    displayBooks()

    // Clear the form fields after adding the book
    document.getElementById('author').value = '';
    document.getElementById('title').value = '';
    document.getElementById('pages').value = '';
});