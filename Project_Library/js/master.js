const myLibrary = [];

function Book(author, title, number, read) {
    this.author = author;
    this.title = title;
    this.number = number;
    this.read = read;
}



function toggleReadStatus(index){
    const bo = myLibrary[index]
    bo.read = !bo.read;
    creatCartBook();
}

function removeBook(index){
    myLibrary.splice(index, 1);
    creatCartBook();
}

function addBookToLibrary(author, title, number, read){
    const books = new Book(author, title, number, read);
    myLibrary.push(books);
    creatCartBook();
}

function creatCartBook() {

    let newBook = document.querySelector("#booksGrid");
    newBook.innerHTML= "";

    myLibrary.forEach((book, index) =>{
        console.log(index)
    let cartBook = document.createElement("div");
    cartBook.className = 'book-card';
    cartBook.setAttribute('data-index', index);
    cartBook.innerHTML = `
        <h3>Name the Book : ${book.title}</h3>
        <ul>
            <li>by : ${book.author}</li>
            <li>Pages : ${book.number}</li>
            <li>Status : ${book.read ? "Already reading" :"wait reading"}</li>
        </ul>
        <div class="book-actions">
            <button onclick="toggleReadStatus(${index})" class="btn btn-toggle">
                Toggle Read
            </button>
            <button onclick="removeBook(${index})" class="btn btn-remove">
                Remove
            </button>
        </div>
        `;
        newBook.appendChild(cartBook);
    
    });
}

document.querySelector("#bookForm").addEventListener("submit", (event)=>{
    
    event.preventDefault();

    const Title = document.getElementById("title").value;
    const Aut = document.getElementById("author").value;
    const Num = parseInt(document.getElementById("pages").value);
    const Read = document.querySelector('input[name="readStatus"]:checked').value === "yes";

    addBookToLibrary(Aut, Title, Num, Read); 
    event.target.reset();
});
