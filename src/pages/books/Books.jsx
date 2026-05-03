import { useContext } from "react";
import { BookContext } from "../../context/BookProvider";

const Books = () => {
  const { storedBooks, wishList } = useContext(BookContext);
  console.log("storedBooks", storedBooks);
  console.log("wishList", wishList);

  return (
    <div className="container mx-auto">
      <h3>Wish list: {wishList.length}</h3>
      <h3>book list: {storedBooks.length}</h3>
    </div>
  );
};

export default Books;
