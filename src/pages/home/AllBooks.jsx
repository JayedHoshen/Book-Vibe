import { use } from "react";
import BookCard from "../../components/shared/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  return (
    <div className="my-12 container mx-auto shadow p-4 rounded-2xl">
      <h3 className="font-bold text-3xl text-center">Books</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, indx) => (
          <BookCard key={indx} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
