import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const { bookId } = useParams();
    const books = useLoaderData();

    const id = parseInt(bookId);
    const book = books.find(book => book.bookId === id);
    console.log(book)
    return (
        <div>
            <h2 className="text-3xl">Book Details: {bookId}</h2>
        </div>
    );
};

export default BookDetails;