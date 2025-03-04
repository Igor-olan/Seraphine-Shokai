import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Book4 from "../../assets/books/book4.jpg";
import Book5 from "../../assets/books/book5.jpg";
import { FaStar } from "react-icons/fa6";


const monday = [
  {
    id: 1,
    img: Book1,
    title: "Academy's Undercover Professor",
    rating: 5.0,
    author: "Sayren",
  },
  
  {
    id: 2,
    img: Book4,
    title: "Reformation of The Deadbeat Noble",
    rating: 4.4,
    author: "Idengbyeol",
  },
  
];

const tuesday = [{
    id: 1,
    img: Book2,
    title: "The Archmage Restaurant",
    rating: 4.5,
    author: "Bad Boys",
  },
  {
    id: 2,
    img: Book3,
    title: "Omniscient Readers Viewpoint",
    rating: 4.7,
    author: "Sing Shong",
  }];
const wednesday = [{
    id: 1,
    img: Book5,
    title: "Absolute Sword Sense",
    rating: 4.5,
    author: "Hanjung Wolya",
  },];

const Books = () => {
  return (
    <>
      <div className="mt-14 mb-12 ">
        <div className="container">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 className="text-4xl font-bold" data-aos="zoom-out" data-aos-once="true" data-aos-delay="400">On Going</h1>
          </div>

          {/* Body section */}
          
          <div className="mb-10 grid grid-col" data-aos="fade-up" data-aos-once="true" data-aos-delay="500">
            <h1 className="text-3xl font-bold mb-3">Monday</h1>
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              {/* Card */}
              {monday.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3 transition-transform duration-300 hover:scale-105 ">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold w-60">{title}</h3>
                    <p className="text-sm text-gray-700 dark:text-white">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 grid grid-col" data-aos="fade-up" data-aos-once="true">
          <h1 className="text-3xl font-bold mb-5">Tuesday</h1>
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              {/* Card */}
              {tuesday.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3 transition-transform duration-200 hover:scale-105">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold w-60">{title}</h3>
                    <p className="text-sm text-gray-700 dark:text-white">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 grid grid-col" data-aos="fade-up" data-aos-once="true">
          <h1 className="text-3xl font-bold mb-5">Wednesday</h1>
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              {/* Card */}
              {wednesday.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3 transition-transform duration-200 hover:scale-105">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold w-60">{title}</h3>
                    <p className="text-sm text-gray-700 dark:text-white">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
