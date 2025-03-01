import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Book4 from "../../assets/books/book4.jpg";
import Book5 from "../../assets/books/book5.jpg";
import { FaStar } from "react-icons/fa6";

const booksData = [
  { id: 1, img: Book1, 
    title: "Academy's Undercover Professor", 
    rating: 5.0, 
    author: "Sayren" 
},
  { 
    id: 2, img: Book2, 
    title: "The Archmage Restaurant", 
    rating: 4.5, 
    author: "Bad Boys" 
},
  { 
    id: 3, img: Book3, 
    title: "Omniscient Readers Viewpoint", 
    rating: 4.7, 
    author: "Sing Shong" 
},
  { 
    id: 4, img: Book4, 
    title: "Reformation of The Deadbeat Noble", 
    rating: 4.4, 
    author: "Idengbyeol" 
},
  { 
    id: 5, img: Book5, 
    title: "Absolute Sword Sense", 
    rating: 4.5, 
    author: "Hanjung Wolya" 
},
];

const Trending = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 className="text-4xl font-bold" data-aos="zoom-out">Trending</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          {booksData.length > 0 && (
            <div className="md:col-span-1 flex flex-col items-center transition-transform duration-300 hover:scale-105">
              <img
                src={booksData[0].img}
                alt={booksData[0].title}
                className="h-[400px] w-[280px] object-cover rounded-md"
              />
              <h3 className="font-semibold mt-3 text-lg text-center">{booksData[0].title}</h3>
              <p className="text-sm text-gray-700 dark:text-white">{booksData[0].author}</p>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                <span>{booksData[0].rating}</span>
              </div>
            </div>
          )}

          <div className="md:col-span-2 flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              {booksData.slice(1, 3).map(({ id, img, title, rating, author }) => (
                <div key={id} className="flex flex-col items-center space-y-3 transition-transform duration-300 hover:scale-105">
                  <img src={img} alt={title} className="h-[200px] w-[140px] object-cover rounded-md" />
                  <h3 className="font-semibold text-center">{title}</h3>
                  <p className="text-sm text-gray-700 dark:text-white">{author}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{rating}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-5">
              {booksData.slice(3).map(({ id, img, title, rating, author }) => (
                <div key={id} className="flex flex-col items-center space-y-3 transition-transform duration-300 hover:scale-105">
                  <img src={img} alt={title} className="h-[200px] w-[140px] object-cover rounded-md" />
                  <h3 className="font-semibold text-center">{title}</h3>
                  <p className="text-sm text-gray-700 dark:text-white">{author}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
