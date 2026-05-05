import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="card bg-base-100 shadow rounded-xl p-4"
    >
      <figure className="max-h-60">
        <img src={book.image} alt={book.bookName} />
      </figure>
      <div className="card-body">
        <div className="flex gap-2 items-center">
          {" "}
          {book.tags.map((tag, index) => (
            <span
              className="badge font-semibold bg-green-100 text-green-600"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="card-title text-xl">{book.bookName}</h2>
        <p className="text-base">By: {book.author}</p>
        <div className="card-actions justify-between border-t border-dashed border-gray-300 text-lg pt-4 mt-2">
          <div className="font-semibold">{book.category}</div>
          <div className="flex gap-2 items-center">
            {book.rating}
            <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
