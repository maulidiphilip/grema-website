import { Button } from "@/components/ui/button";
import { AlignJustify, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/aboutus",
    display: "About Us",
    submenu: [
      { path: "/aboutus/mission", display: "Mission" },
      { path: "/aboutus/headteacher", display: "Headteacher" },
      { path: "/aboutus/team", display: "Our Team" },
    ],
  },
  {
    path: "/joinus",
    display: "Join Us",
    submenu: [
      { path: "/joinus/mission", display: "Admission" },
      { path: "/joinus/vacancy", display: "Vacancies" },
    ],
  },
  {
    path: "/services",
    display: "Services",
    submenu: [
      { path: "/services/courses", display: "Courses" },
      { path: "/services/events", display: "Events" },
      { path: "/services/scholarships", display: "Scholarships" },
    ],
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleStickHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList.add("sticky__header");
      } else {
        headerRef.current?.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickHeader();

    return () => window.removeEventListener("scroll", handleStickHeader);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (menuRef.current) {
      menuRef.current.classList.toggle("show__menu");
      if (menuRef.current.classList.contains("show__menu")) {
        menuRef.current.style.maxHeight = menuRef.current.scrollHeight + "px";
      } else {
        menuRef.current.style.maxHeight = "0px";
      }
    }
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header
      ref={headerRef}
      className="bg-white shadow-md fixed top-0 left-0 w-full z-50"
    >
      <div className="bg-blue-600 py-2 px-4 text-lg text-gray-100">
        <div className="container mx-auto flex items-center justify-start gap-4">
          <span>
            Email:{" "}
            <a
              href="mailto:info@grema.mw"
              className="text-primaryColor hover:underline"
            >
              info@grema.mw
            </a>
          </span>
          <span>|</span>
          <span>
            Phone:{" "}
            <a
              href="tel:+26512345678"
              className="text-primaryColor hover:underline"
            >
              +265 991 103 578
            </a>
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-headingColor">
          <Link to="/" className="hover:text-primaryColor">
            Grema Pvt Secondary School
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 justify-center">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primaryColor font-semibold"
                      : "text-textColor hover:text-primaryColor"
                  }
                >
                  {link.display}
                </NavLink>
                {link.submenu && (
                  <ul className="hidden absolute left-0 top-full mt-2 bg-white shadow-md rounded-md py-2 group-hover:block">
                    {link.submenu.map((sublink, subIndex) => (
                      <li key={subIndex}>
                        <NavLink
                          to={sublink.path}
                          className={({ isActive }) =>
                            isActive
                              ? "block px-4 py-2 text-primaryColor font-semibold"
                              : "block px-4 py-2 text-textColor hover:text-primaryColor"
                          }
                        >
                          {sublink.display}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link to="/login">
            <Button className="ml-auto px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600">
              Login
            </Button>
          </Link>
        </div>

        <div className="md:hidden">
          {isMenuOpen ? (
            <X className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
          ) : (
            <AlignJustify
              className="w-6 h-6 cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>

        <div
          ref={menuRef}
          className="absolute top-16 left-0 bg-white w-full shadow-md p-4 max-h-0 overflow-hidden transition-all duration-300 ease-in-out md:hidden"
        >
          <div className="flex justify-end mb-4">
            <X className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
          </div>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <div className="flex justify-between items-center">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primaryColor font-semibold"
                        : "text-textColor hover:text-primaryColor"
                    }
                    onClick={toggleMenu}
                  >
                    {link.display}
                  </NavLink>
                  {link.submenu && (
                    <button
                      className="text-textColor hover:text-primaryColor"
                      onClick={() => handleDropdownToggle(index)}
                    >
                      ▼
                    </button>
                  )}
                </div>
                {link.submenu && activeDropdown === index && (
                  <ul className="ml-4 mt-2">
                    {link.submenu.map((sublink, subIndex) => (
                      <li key={subIndex}>
                        <NavLink
                          to={sublink.path}
                          className={({ isActive }) =>
                            isActive
                              ? "block px-4 py-2 text-primaryColor font-semibold"
                              : "block px-4 py-2 text-textColor hover:text-primaryColor"
                          }
                          onClick={toggleMenu}
                        >
                          {sublink.display}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
