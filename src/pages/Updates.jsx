import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Books from '../components/BooksSlider/Books'

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
    <>
        <Books />
    </>
  )
}

export default Updates