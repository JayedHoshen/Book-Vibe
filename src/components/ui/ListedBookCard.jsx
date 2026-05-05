import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";

const ListedBookCard = ({ book }) => {
  const {
    bookName,
    author,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="card grid grid-cols-1 md:grid-cols-4  gap-4 bg-base-100 shadow border border-gray-100 rounded-xl p-4">
      <figure className="w-full bg-gray-100 p-6 rounded-2xl">
        <img
          className="w-[60%] rounded-xl"
          src={book.image}
          alt={book.bookName}
        />
      </figure>
      <div className="card-body col-span-3 text-left">
        <h2 className="card-title text-xl">{bookName}</h2>
        <h2 className="cart-title text-base">By: {author}</h2>
        <div className="flex flex-wrap gap-3 items-center text-base">
          <span className="font-bold">Tag </span>
          {tags.map((tag, index) => (
            <span
              className="badge font-semibold bg-green-100 text-green-600"
              key={index}
            >
              #{tag}
            </span>
          ))}
          <span className="flex gap-1 items-center">
            <IoLocationOutline /> Year of Publishing: {yearOfPublishing}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 items-center text-base">
          <RiGroupLine />
          <span className="mr-3">Publisher: {publisher}</span>
          <HiOutlineDocumentChartBar />
          <span>Page {totalPages}</span>
        </div>
        <div className="card-actions gap-4 border-t border-gray-200 text-lg pt-4 mt-2">
          <div className="btn bg-green-100 text-green-600 text-base rounded-3xl">
            Category: {category}1
          </div>
          <div className="btn bg-[#f1dbb6] text-[#FFAC33] text-base rounded-3xl">
            Rating: {rating}
          </div>
          <button className="btn bg-green-600 text-white text-base rounded-3xl">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
