

class Library{

    constructor()
{
this.books = [];
this.cart = [];
}
}

class Author{

    constructor(FirstName, lastName){
        this.firstName = FirstName;
        this.lastName = lastName;
    }
}

class Book{
    /* we have a book and we want this book to be set of books or array in library so 
    we add i
    */
    constructor(isbn, title, author, numberOfPages){

        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
    }

}

isbn, title, author, numberOfPages

const books = new Book();

/* this is same as above code but seperated 
const books = new Book("1111-0090-2222", "the alchemist", "Paulo Hama", 120);
*/

