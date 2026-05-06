import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import ListedBookCard from "../ui/ListedBookCard";

const ListedReadBooks = ({ sortingType }) => {
  const { readList } = useContext(BookContext);
  const [filteredReadList, setFilteredReadList] = useState(readList);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...readList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilteredReadList(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...readList].sort((a, b) => a.rating - b.rating);
        setFilteredReadList(sortedData);
      } else if (sortingType === "publishingYear") {
        const sortedData = [...readList].sort(
          (a, b) => a.yearOfPublishing - b.yearOfPublishing,
        );
        setFilteredReadList(sortedData);
      }
    }
  }, [sortingType, readList]);

  if (filteredReadList.length === 0) {
    return (
      <div className="h-[40vh] bg-gray-100 flex justify-center items-center rounded-xl shadow my-6">
        <h2 className="font-bold text-3xl">No Read list data found</h2>
      </div>
    );
  }

  return (
    <div className="space-y-4 my-8">
      {filteredReadList.map((book, indx) => (
        <ListedBookCard key={indx} book={book}></ListedBookCard>
      ))}
    </div>
  );
};

export default ListedReadBooks;
