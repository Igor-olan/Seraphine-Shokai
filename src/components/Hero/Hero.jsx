import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Vector from "../../assets/website/blue-pattern.png";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "Academy's Undercover Professor",
    description:
      "Machiavelli and Gerrard are just one of the many names the new professor of Ceoren Academy uses to disguise his identity, and now he can add one more to his list, Professor Ludger Cherish. The real Ludger Cherish dies on board a train during a terrorist attack, making him the perfect target for a new identity. Little does the new professor know, Ludger Cherish was involved in something deep and secret. The new Professor Ludger has to be careful to not get caught by the school and the dangerous secret society.",
  },
  {
    id: 2,
    img: Book2,
    title: "The Archmage Restaurant",
    description:
      "A man who was reincarnated in another world as a 9th class wizard and retired after saving the continent from a dragon war. He decides to open a small restaurant in the countryside, but his routine is anything but ordinary. On the second floor of his restaurant, there lives a black dragon who has transformed into a woman, named Rurin. She is greedy, cute and loyal to him, but also ignorant and clueless about the human world. They live a fun and warm life, serving customers, solving problems and growing violets in the garden.",
  },
  {
    id: 3,
    img: Book3,
    title: "Omniscient Readers Viewpoint",
    description:
      "Kim Dokja is a young man leading a simple life, who has been a sole reader of a novel \"Three Ways to Survive in a Ruined World\" for 13 years of his life. As Kim Dokja was reading the novel’s final chapter, reality and the world of fiction started to merge, allowing him to appear at the beginning point of the story. Being the only person who knew how the world could end, Kim Dokja is determined to create a different ending by solving and conquering various challenges, known as scenarios, which are operated by dokkaebi.",
  },
];

const Hero = () => {
  const [imageId, setImageId] = React.useState(Book1);
  const [title, setTitle] = React.useState("Academy's Undercover Professor");
  const [description, setDescription] = React.useState(
    "Machiavelli and Gerrard are just one of the many names the new professor of Ceoren Academy uses to disguise his identity, and now he can add one more to his list, Professor Ludger Cherish. The real Ludger Cherish dies on board a train during a terrorist attack, making him the perfect target for a new identity. Little does the new professor know, Ludger Cherish was involved in something deep and secret. The new Professor Ludger has to be careful to not get caught by the school and the dangerous secret society."
  );

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // height: "100%",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 transition-all duration-300 ease-in-out animate-fade-in"
            >
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                {title}
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm "
              >
                {description}
              </p>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 transition-all duration-300 ease-in-out animate-fade-in">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1">
                {ImageList.map((item) => (
                  <div key={item.id} className="transition-transform hover:scale-105 duration-200">
                  <img
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={item.img}
                    className="max-w-[100px] h-[100px] object-contain inline-block "
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? Book1 : item.id === 2 ? Book2 : Book3
                      );
                      setTitle(item.title);
                      setDescription(item.description);
                    }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
