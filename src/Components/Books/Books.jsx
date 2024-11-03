import { useEffect, useState } from "react";
import Book from "../../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("./booksData.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h2 className="font-bold text-4xl text-center mb-7 mt-28">Books</h2>
            <div className="grid grid-cols-1 mx-auto lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    books.map(book => <Book key={book.bookId} book={book} ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;