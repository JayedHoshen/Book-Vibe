import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import ListedBookCard from "../ui/ListedBookCard";

const ListedWishlistBooks = ({ sortingType }) => {
  const { wishList } = useContext(BookContext);
  const [filteredWishList, setFilteredWishList] = useState(wishList);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...wishList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilteredWishList(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
        setFilteredWishList(sortedData);
      } else if (sortingType === "publishingYear") {
        const sortedData = [...wishList].sort(
          (a, b) => a.yearOfPublishing - b.yearOfPublishing,
        );
        setFilteredWishList(sortedData);
      }
    }
  }, [sortingType, wishList]);

  if (filteredWishList.length === 0) {
    return (
      <div className="h-[40vh] bg-gray-100 flex justify-center items-center rounded-xl shadow my-6">
        <h2 className="font-bold text-3xl p-2">No Wish list data found</h2>
      </div>
    );
  }

  return (
    <div className="space-y-4 my-8">
      {filteredWishList.map((book, indx) => (
        <ListedBookCard key={indx} book={book}></ListedBookCard>
      ))}
    </div>
  );
};

export default ListedWishlistBooks;
