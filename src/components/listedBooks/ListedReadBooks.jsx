import { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import ListedBookCard from "../ui/ListedBookCard";

const ListedReadBooks = ({ sortingType }) => {
  const { readList } = useContext(BookContext);

  if (readList.length === 0) {
    return (
      <div className="h-[40vh] bg-gray-100 flex justify-center items-center rounded-xl shadow my-6">
        <h2 className="font-bold text-3xl">No Read list data found</h2>
      </div>
    );
  }

  return (
    <div className="space-y-4 my-8">
      {readList.map((book, indx) => (
        <ListedBookCard key={indx} book={book}></ListedBookCard>
      ))}
    </div>
  );
};

export default ListedReadBooks;
