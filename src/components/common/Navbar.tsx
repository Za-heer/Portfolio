"use client";

import type React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { NAVIGATION_ITEMS } from "../../utils/constants";
import { useTheme } from "../../hooks/useTheme";
import { useScrollSpy } from "../../hooks/use-scroll-spy";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const sectionIds = useMemo(
    () => NAVIGATION_ITEMS.map((i) => i.href.replace("#", "")),
    []
  );
  const activeId = useScrollSpy(sectionIds, 120); // offset for fixed navbar

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsOpen(false);
      }
    },
    []
  );

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container-max section-padding">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-xl font-bold text-primary-600"
          >
            Zaheer's Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAVIGATION_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-primary-600"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary-600"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-200"
              aria-label="Toggle theme"
              type="button"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-200"
              aria-label="Toggle theme"
              type="button"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen((s) => !s)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-200"
              aria-label="Toggle menu"
              type="button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-3 border-t border-gray-200 dark:border-gray-700">
            {NAVIGATION_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`block py-2 font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-primary-600"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary-600"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
