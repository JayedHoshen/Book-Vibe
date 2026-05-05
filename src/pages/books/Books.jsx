import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadBooks from "../../components/listedBooks/ListedReadBooks";
import ListedWishlistBooks from "../../components/listedBooks/ListedWishlistBooks";
import { useState } from "react";

const Books = () => {
  const [sortingType, setSortingType] = useState("");
  console.log(sortingType, "sorting type");
  return (
    <div className="container mx-auto mb-16 p-4">
      <h2 className="p-6 bg-gray-100 rounded-xl text-2xl font-bold my-8 text-center">
        Books
      </h2>
      <div className="flex justify-center mb-8">
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort by ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortingType("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortingType("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ListedReadBooks></ListedReadBooks>
        </TabPanel>
        <TabPanel>
          <ListedWishlistBooks></ListedWishlistBooks>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
