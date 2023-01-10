class Book {
  title: string
  author: string
  isbn: string
  constructor(title: string, author: string, isbn: string) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

const bookList = []
const bookMap = new Map<string, Book>()

function createBook(title: string, author: string, isbn: string) {
  const existingBook = bookMap.get(isbn)
  if (existingBook) return existingBook
  const book = new Book(title, author, isbn)
  bookMap.set(isbn, book)
  return book
}

function addBook(
  title: string,
  author: string,
  isbn: string,
  availability: boolean,
  sales: number
) {
  const book = {
    ...createBook(title, author, isbn),
    sales,
    availability
  }

  bookList.push(book)
  return book
}

addBook('Harry Potter', 'JK Rowling', 'AB123', false, 100)
addBook('Harry Potter', 'JK Rowling', 'AB123', true, 50)
addBook('To Kill a Mockingbird', 'Harper Lee', 'CD345', true, 10)
addBook('To Kill a Mockingbird', 'Harper Lee', 'CD345', false, 20)
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 'EF567', false, 20)

console.log('Total amount of copies: ', bookList.length)
console.log('Total amount of books: ', bookMap.size)

export default Book
