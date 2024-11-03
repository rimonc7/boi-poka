import book from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 py-9 my-5 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse gap-24 mx-20">
                <img
                    src={book}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold mb-4">Books to Freshen Up Your Bookshelf</h1>
                    <button className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;