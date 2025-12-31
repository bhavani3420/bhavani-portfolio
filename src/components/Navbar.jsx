import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);

  const { isDark, toggleTheme } = useTheme();

  const navItems = useMemo(
    () => [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      {
        name: "Work",
        children: [
          { name: "Projects", href: "#projects" },
          { name: "Experience", href: "#experience" },
          { name: "Education", href: "#education" },
          { name: "Certifications", href: "#certifications" },
        ],
      },
      { name: "Resume", href: "#resume" },
      { name: "Contact", href: "#contact" },
    ],
    []
  );

  /* ======================
     SCROLL ACTIVE SECTION
  ====================== */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + 200;
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "certifications",
        "resume",
        "contact",
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    setIsWorkOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? "glass-dark shadow-lg py-3" : "py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="text-2xl font-bold text-gradient-neon"
          >
            Portfolio
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 relative">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsWorkOpen(true)}
                  onMouseLeave={() => setIsWorkOpen(false)}
                >
                  <button className="flex items-center gap-1 text-gray-300 hover:text-white">
                    {item.name}
                    <FiChevronDown />
                  </button>

                  {/* DROPDOWN */}
                  <AnimatePresence>
                    {isWorkOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full mt-4 glass rounded-xl p-2 w-52"
                      >
                        {item.children.map((child) => (
                          <button
                            key={child.name}
                            onClick={() => handleNavClick(child.href)}
                            className="block w-full text-left px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-cyan-400"
                          >
                            {child.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm ${
                    activeSection === item.href.substring(1)
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              )
            )}

            {/* THEME */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full glass"
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
          </div>

          {/* MOBILE */}
          <div className="md:hidden flex gap-4">
            <button onClick={toggleTheme} className="p-2 glass rounded-full">
              {isDark ? <FiSun /> : <FiMoon />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen((p) => !p)}
              className="p-2 glass rounded-full"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass-dark border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.flatMap((i) =>
                i.children ? i.children : i
              ).map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
