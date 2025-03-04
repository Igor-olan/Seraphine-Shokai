import DarkMode from "./DarkMode";
import pfp from "../../assets/profile/pfpp.png";
import { Link } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Updates",
    link: "updates",
  },
  {
    id: 3,
    name: "History",
    link: "history",
  },
  {
    id: 4,
    name: "Favorites",
    link: "favorites",
  },
  {
    id: 5,
    name: "Settings",
    link: "settings"
  }
];

const profile = [
  {
    id: 1,
    name: "Username",
    link: "profile",
    photo: pfp,
  }
]

const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <Link to ="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                Sheraphine Shokai
              </Link>
            </div>
            <div className="flex items-center flex-1 justify-end w-full gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex items-center gap-4 mr-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <Link
                      to ={menu.link}
                      className="inline-block py-4 px-4 hover:text-primary duration-200"
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
                <div className="hover:opacity-80 hover:text-primary duration-200">
              {profile.map((profile) => (
                <Link to ={profile.link} key={profile.id} className="flex justify-between items-center gap-4">
                  {profile.name}
                  <img
                    src={profile.photo}
                    alt=""
                    className="h-10 w-11 rounded-full object-cover"
                    />
                </Link>
              ))}
              </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
