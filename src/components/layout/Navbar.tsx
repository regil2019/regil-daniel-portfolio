import { FaGlobe, FaGithub, FaLinkedin, FaBars, FaTimes, FaWhatsapp, FaSun, FaMoon } from 'react-icons/fa';

import { useState, useEffect } from 'react';
import type { Language, NavContent } from '@/types';

interface NavbarProps {
  content: NavContent;
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ content, currentLanguage, setLanguage, darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Close menu on window resize if greater than md breakpoint
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-black/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative group">
            <button
              className="text-gray-700 dark:text-gray-400 hover:text-indigo-400 transition text-xl flex items-center gap-1"
              aria-label="Switch Language"
            >
              <FaGlobe />
              <span className="text-sm font-medium">{currentLanguage.toUpperCase()}</span>
            </button>
            {/* Language options dropdown */}
            <div className="absolute top-full left-0 mt-2 w-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <button
                onClick={() => setLanguage('pt')}
                className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition ${currentLanguage === 'pt' ? 'bg-indigo-100 dark:bg-indigo-900 font-semibold' : ''}`}
              >
                <span>🇵🇹</span>
                <span>Português</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition ${currentLanguage === 'en' ? 'bg-indigo-100 dark:bg-indigo-900 font-semibold' : ''}`}
              >
                <span>🇺🇸</span>
                <span>English</span>
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition ${currentLanguage === 'ru' ? 'bg-indigo-100 dark:bg-indigo-900 font-semibold' : ''}`}
              >
                <span>🇷🇺</span>
                <span>Русский</span>
              </button>
            </div>
          </div>
         
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 dark:text-gray-400 hover:text-indigo-400 transition text-xl"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        {/* Menu for medium and larger screens */}
        <ul className={`md:flex gap-8 items-center font-medium text-gray-900 dark:text-gray-200 ${menuOpen ? 'flex flex-col absolute top-16 left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 md:static md:bg-transparent md:backdrop-blur-0 md:border-0' : 'hidden'}`}>
          <li><a href="#home" className="block px-4 py-2 hover:text-indigo-400 transition">{content.home}</a></li>
          <li><a href="#about" className="block px-4 py-2 hover:text-indigo-400 transition">{content.about}</a></li>
          <li><a href="#projects" className="block px-4 py-2 hover:text-indigo-400 transition">{content.projects}</a></li>
          <li><a href="#skills" className="block px-4 py-2 hover:text-indigo-400 transition">{content.skills}</a></li>
          <li><a href="#contact" className="block px-4 py-2 hover:text-indigo-400 transition">{content.contact}</a></li>
          {menuOpen && (
            <li className="px-4 py-2">
              <button
                onClick={toggleDarkMode}
                className="text-gray-700 dark:text-gray-400 hover:text-indigo-400 transition text-base flex items-center gap-2"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
                <span>Dark Mode</span>
              </button>
            </li>
          )}
        </ul>
        <div className="flex gap-4 items-center">
          {/* Social Icons */}
          <a
            href="https://github.com/regil2019"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-400 hover:text-indigo-400 transition text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/regil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-400 hover:text-indigo-400 transition text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/+79197250946"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-400 hover:text-indigo-400 transition text-xl"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          {/* Hamburger menu button for small screens */}
          <button
            className="text-gray-700 dark:text-gray-400 hover:text-indigo-400 transition duration-300 ease-in-out text-2xl md:hidden bg-white/30 dark:bg-black/30 backdrop-blur-sm rounded-md p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
