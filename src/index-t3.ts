export {}; // hack to ignore Book from task 4  
// TODO: Define a type alias named 'Book' with appropriate properties

type Book = {
    title: string
    author: string
    publicationYear: number

}


// TODO: Implement the promptForBook function
function promptForBook() {
  // TODO: Prompt user for book details (title, author, publication year)
  const bookTitle: string = (prompt("Enter the title:") || "");
  const bookAuthor: string = (prompt("Enter the author:") || "");
  // Parse the input as a number, default to 0 if not provided or invalid
  const bookPublicationYear: number = parseInt(prompt("Enter the publication year:") || "0"); 
  

  // TODO: Create an object of type 'Book' with the entered values

  const book: Book = {
    title: bookTitle,
    author: bookAuthor,
    publicationYear: bookPublicationYear,
  };
  return book;
}

// TODO: Call the promptForBook function to get the book details
const bookDetails = promptForBook();

// TODO: Display the details of the book object to the user
console.log("Book Details:");
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);
console.log(`Publication Year: ${bookDetails.publicationYear}`);
