import React, { useState, useEffect } from 'react';
import { ArrowUp, Lightbulb, X } from 'lucide-react';

const NotifyAndScroll = ({
  notificationDuration = 6900,
  scrollThreshold = window.innerHeight,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      setIsVisible(offset > scrollThreshold);
      if (offset > 0) setShowNotification(false);
    };

    const notificationTimer = setTimeout(() => {
      setShowNotification(false);
    }, notificationDuration);

    // Use a debounced scroll listener for performance
    let scrollTimeout: ReturnType<typeof setTimeout>;;
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", debouncedScroll);

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      clearTimeout(notificationTimer);
    };
  }, [scrollThreshold, notificationDuration]);

  useEffect(() => {
    const handleThemeChange = () => {
      const currentTheme = localStorage.getItem("theme") || "light";
      setTheme(currentTheme);
    };

    window.addEventListener("storage", handleThemeChange);

    return () => {
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showNotification && (
        <div
          className="fixed bottom-16 right-8 left-8 sm:left-auto bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-4 rounded-lg shadow-lg flex items-center gap-4 transition-transform duration-500 z-50 animate-slide-up"
          // style={{ animation: "slide-up 0.5s ease forwards" }}
          role="alert"
          aria-live="polite"
        >
          <div className="p-2 bg-blue-600 text-white rounded-full flex items-center justify-center">
            <Lightbulb className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Did you know?</p>
            <p className="text-xs">
              Toggle the Lightbulb icon at the top left corner for light/dark
              mode.
            </p>
          </div>
          <button
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            onClick={() => setShowNotification(false)}
            aria-label="Dismiss notification"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 dark:hover:bg-yellow-500"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default NotifyAndScroll;