# Library Book Management

## Overview
This project is a simple **Library Book Management System** built using **HTML, CSS, and JavaScript**. It allows users to add, display, remove, and update the read status of books in a virtual library.

## Features
- **Add a new book**: Users can input book details via a form.
- **Unique Book IDs**: Each book gets a unique identifier using `crypto.randomUUID()`.
- **Display Books**: Books are displayed dynamically in a table or card format.
- **Remove Books**: Users can delete books from the library.
- **Toggle Read Status**: A button allows users to mark a book as read/unread.

## Technologies Used
- HTML
- CSS
- JavaScript (Vanilla JS)

## Installation & Usage
### 1. Clone the Repository
```bash
git clone https://github.com/mkatfi/projects-JavaScript/tree/main/Project_Library

cd Project_Library
```

### 2. Open the Project
Simply open the `index.html` file in a browser.

### 3. Adding a New Book
- Click the **New Book** button.
- Fill in the book details (Title, Author, Pages, Read Status).
- Click **Submit** to add the book to the library.

### 4. Removing a Book
- Click the **Remove** button next to a book entry to delete it.

### 5. Toggling Read Status
- Click the **Read/Unread** button to update a book’s read status.

## Code Structure
```plaintext
📂 Project_Library
├── 📄 index.html   # Main HTML file   
├── 📂 js
│   ├── 📄 master.js
├── 📂 css
│   ├── 📄 master.css
├── 📂 image
├── 📄 README.md    # Project Documentation
```

## Event Handling & Preventing Form Submission Issue
The form submission is handled using JavaScript, and we prevent the default behavior using:
```javascript
document.getElementById('book-form').addEventListener('submit', function(event) {
  event.preventDefault();
  addBookToLibrary();
});
```

## Future Enhancements
- Add **Local Storage** to save books between sessions.
- Implement a **Search & Filter** feature.
- Improve UI with animations and themes.


---
**Happy Coding! 🚀**

