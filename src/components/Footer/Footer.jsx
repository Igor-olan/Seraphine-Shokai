import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {

  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 dark:text-white">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Seraphine Shokai
            </h1>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Bandung, Indonesia</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p><a href="http://wa.me/6283840977940">+62 838-4097-7940</a></p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/igorolan?igsh=bG03NnlzdGJmZGpo">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="https://www.facebook.com/share/1BCc6Y4yi3/">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="https://www.linkedin.com/in/igor-hasiholan-43643a339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          {/* Links belum diisi tautan*/}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 dark:text-white">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Location
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50 dark:text-white">
            @copyright 2025 All rights reserved
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
