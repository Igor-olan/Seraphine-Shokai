import React from "react";
import Hero from "../components/Hero/Hero";
// import Banner from "../components/Banner/Banner.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Release from "../components/Update/Release.jsx";
// import Footer from "../components/Footer/Footer";

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
      {/* <CoverBanner /> */}
      <Release />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
