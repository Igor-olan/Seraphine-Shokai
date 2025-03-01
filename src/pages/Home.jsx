import React from "react";
import Hero from "../components/Hero/Hero";
// import Banner from "../components/Banner/Banner.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Release from "../components/Update/Release.jsx";
import Trending from "../components/Trending/Trending.jsx";
import Genre from "../components/Genre/Genre.jsx";

const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200"> 
      <Hero />
      {/* <Banner /> */}
      <Release />
      <Trending />
      <Genre />
    </div>
  );
};

export default App;
