import { useContext, useState } from "react";
import userContext from "../utils/userContext";
import { GiHamburgerMenu } from "react-icons/gi";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaXmark } from "react-icons/fa6";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { name } = useContext(userContext);
  const menuItems = ["home", "about", "certification", "projects", "contact"];
  return (
    <div className="fixed right-0 left-0 z-10 flex justify-between bg-white shadow-lg py-6 px-14 text-zinc-700 items-center">
      <div>
        <AnchorLink href="#home">
          <h1 className="font-bold text-xl">{name}</h1>
        </AnchorLink>
      </div>
      <div>
        <div
          className={
            isMenuOpen ? "rotate-90 duration-500" : "-rotate-180 duration-500"
          }
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? (
            <GiHamburgerMenu className="text-3xl hover:text-blue-600 lg:hidden cursor-pointer" />
          ) : (
            <FaXmark className="text-3xl hover:text-blue-600 lg:hidden cursor-pointer" />
          )}
        </div>

        <ul
          className={
            "absolute -left-full top-[77px] duration-200 select-none ease-linear bg-white border lg:bg-none shadow-xl lg:static lg:shadow-none border-t-gray-300 lg:border-none items-center font-medium text-lg p-5 lg:p-0 flex flex-col lg:flex-row gap-5 w-full lg:w-fit " +
            (isMenuOpen && " left-0 ")
          }
        >
          {menuItems.map((item, i) => (
            <li
              key={i}
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-cyan-600"
            >
              <AnchorLink href={"#" + item}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
