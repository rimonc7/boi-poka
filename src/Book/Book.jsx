import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookName, image, category, tags, author, rating,bookId } = book
    return (
        <Link to={`book/${bookId}`}>
            <div className="card shadow-xl w-96 p-6 border-2">
                <figure className="bg-gray-200 rounded-2xl">
                    <img
                        className="h-40 py-8"
                        src={image}
                        alt="" />
                </figure>
                <div className="card-body p-0">
                    <div className="card-actions justify-start my-4">
                        {
                            tags.map(tag => <div className="badge badge-outline p-3 text-green-600">{tag}</div>
                            )
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p>By: {author}</p>
                </div>
                <div className="border-t-2 border-dashed mt-3"></div>
                <div className="card-actions justify-between my-4">
                    <p>{category}</p>
                    <div className="flex gap-2">
                        <p>{rating}</p>
                        <p className="mt-1"><CiStar /></p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;