import { Link } from "react-router-dom";
import { Ibook } from "../../interfaces/common";

interface IBookCardProps {
  book: Ibook;
}
const BookCard = ({book}:IBookCardProps) => {
  
  return (
      <div >
          {/* Book Cards */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnznmQH1WBbL3peMEcioA1zuX9SBoola9wCIdN6FW0ABYUNTD9N9hWPzJC-jNLxs-Df7E&usqp=CAU" alt="Book 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{book.Title}</h3>
              <p className="text-gray-600">Author: {book.Author}</p>
              <p className="text-gray-600">Published: {book.Publication_date}</p>
              <Link to={`/book-details/${book._id}`}  className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Learn More...</Link>
            </div>
          </div>
          {/* Repeat this card structure for other books */}
        </div>
  );
};

export default BookCard;