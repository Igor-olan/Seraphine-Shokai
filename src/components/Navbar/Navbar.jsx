import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Updates",
    link: "/updates",
  },
  {
    id: 3,
    name: "History",
    link: "/history",
  },
  {
    id: 4,
    name: "Subscription",
    link: "/subscription",
  },
  {
    id: 5,
    name: "Settings",
    link: "/settings"
  }
];

const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                Sheraphine Shokai
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-primary duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
