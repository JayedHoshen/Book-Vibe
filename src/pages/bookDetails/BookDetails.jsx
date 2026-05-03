import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookProvider";

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();
  const expectedBook = books.find((book) => book.bookId === Number(id));
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  const { handleMarkAsRead, handleWishList } = useContext(BookContext);

  return (
    <div className="container mx-auto card grid grid-cols-1 md:grid-cols-2 gap-6 bg-base-100 my-8">
      <figure className="flex justify-center items-center bg-gray-100 rounded-2xl shadow">
        <img className="h-[80vh] py-4" src={image} alt={bookName} />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="card-title text-3xl">{bookName}</h2>
        <h2 className="cart-title">By: {author}</h2>
        <p className="py-2 border-y border-gray-300">{category}</p>
        <p>
          <span className="font-bold">Review:</span> {review}
        </p>
        <div className="flex gap-2 items-center">
          <span className="font-bold">Tag:</span>
          {tags.map((tag, index) => (
            <span
              className="badge font-semibold bg-green-100 text-green-600"
              key={index}
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="border-t border-gray-300 pt-3 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Number of pages: </span>{" "}
            <span className="font-semibold">{totalPages}</span>
          </div>
          <div className="flex items-center gap-15">
            <span className="text-gray-500">Publisher: </span>{" "}
            <span className="font-semibold">{publisher}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Year of Publishing: </span>{" "}
            <span className="font-semibold">{yearOfPublishing}</span>
          </div>
          <div className="flex items-center gap-20">
            <span className="text-gray-500">Rating: </span>{" "}
            <span className="font-semibold">{rating}</span>
          </div>
          <div className="card-actions">
            <button
              className="btn"
              onClick={() => handleMarkAsRead(expectedBook)}
            >
              Mark as Read
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleWishList(expectedBook)}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
