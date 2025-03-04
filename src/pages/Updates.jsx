import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Release from '../components/Update/Release'
import Schedule from '../components/Update/Schedule'

const Updates = () => {

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
    <div className="bg-white dark:bg-gray-800 dark:text-white duration-200 overflow">
        <Release />
        <Schedule />
    </div>
  )
}

export default Updates