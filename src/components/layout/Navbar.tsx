import React, { useState, useEffect } from 'react';
import { Menu, X, Lightbulb } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPhoneBar, setShowPhoneBar] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Set initial state for showPhoneBar based on the current pathname
  const showPhoneBarPaths = ["/services", "/schedule", "/clients", "/rules", "/prohibited-items"];

  // Scroll detection for sticky navbar and phone bar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20 || location.pathname !== "/");
      setShowPhoneBar(window.scrollY > 400 || showPhoneBarPaths.includes(location.pathname));
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call handleScroll initially to set the correct state based on the current path
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    const shouldShowPhoneBar = showPhoneBarPaths.includes(location.pathname);
    setShowPhoneBar(shouldShowPhoneBar);
  
    if (shouldShowPhoneBar) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  // Scroll to section and close the mobile menu
  const handleLinkClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault(); // Prevent default link behavior
    if (isOpen) setIsOpen(false); // Close mobile menu on link click

    if (target === "/") {
      // If the target is the homepage, scroll to the top
      navigate(target);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (target.startsWith("#")) {
      // If the link is for an anchor (starts with '#'), perform smooth scroll
      if (location.pathname !== "/") {
        // If not on the homepage, navigate to the homepage first
        navigate(`/${target}`);
      } else {
        const element = document.getElementById(target.substring(1));
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust the offset to prevent navbar from covering the section
            behavior: "smooth",
          });
        }
      }
    } else {
      // For full page links, navigate directly
      navigate(target);

      // Ensure we scroll to the top when navigating to a new page
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100); // Delay to ensure the page has fully loaded
    }
  };

  // Detect location changes (hash in URL)
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Scroll to the section after a slight delay to ensure the page has loaded
      setTimeout(() => {
        scrollToSection(hash.substring(1)); // Remove the '#' symbol
      }, 100); // Delay to ensure the page has fully loaded
    } else if (showPhoneBarPaths.includes(location.pathname)) {
      // Scroll to the top (just below the navbar) when navigating to a full-page route
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll just below the navbar height
    }
  }, [location]); // Runs when the location changes

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "#contact" },
    { name: "Rules", href: "/rules" },
    { name: "Staff", href: "#staff" },
    { name: "Schedule", href: "/schedule" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white shadow-md dark:bg-gray-900" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Lightbulb
                onClick={toggleTheme}
                className={`h-8 w-8 cursor-pointer ${
                  location.pathname === "/" && !isScrolled
                    ? theme === "light"
                      ? "text-white"
                      : "text-yellow-300"
                    : isScrolled
                    ? "text-blue-600 dark:text-yellow-300"
                    : "text-white"
                }`}
              />
              <span
                className={`ml-2 text-xl font-semibold ${
                  isScrolled ? "text-gray-900 dark:text-gray-100" : "text-white"
                }`}
              >
                <a href="/" onClick={(e) => handleLinkClick(e, "/")}>
                  Lighthouse Lekki
                </a>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative group px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isScrolled
                        ? "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-yellow-300"
                        : "text-white hover:text-blue-200"
                    }`}
                  >
                    {link.name}
                    <span
                      className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 dark:bg-yellow-300 transition-all duration-300 group-hover:w-full"
                    ></span>
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md transition-transform duration-500 ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-yellow-300"
                    : "text-white hover:text-blue-200"
                } focus:outline-none transform ${isOpen ? "rotate-90" : "rotate-0"}`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile dropdown menu */}
        <div
          className={`md:hidden fixed top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg overflow-hidden transform transition-all duration-700 ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative group block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-yellow-300"
                    : "text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-yellow-300"
                }`}
              >
                {link.name}
                <span
                  className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 dark:bg-yellow-300 transition-all duration-300 group-hover:w-full"
                ></span>
              </a>
            ))}
          </div>
        </div>
      </nav>
      {/* Call-to-action phone bar */}
      {showPhoneBar && (
        <div className="fixed top-16 w-full z-40 bg-blue-600 text-white text-center py-1 text-sm shadow-lg">
          <p>
            Call us:{" "}
            <a href="tel:+2349048434776" className="underline">
              +234 904 843 4776
            </a>
          </p>
        </div>
      )}
      <div
        className={`${
          showPhoneBarPaths.includes(location.pathname)
            ? "pt-24"
            : ""
        }`}
      >
        {/* Main content goes here */}
      </div>
    </>
  );
  
  
};

export default Navbar;