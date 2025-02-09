"use client";
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* --- HEADER (Fixed Navbar) --- */}
      <header className="navBar px-4 py-4 flex justify-between items-center">
        {/* Logo or Name */}
        <a href="mailto:szymonburton@gmail.com">
        <div className="text-white text-xl font-bold glowOnHoverName">
          szymonburton@gmail.com
        </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a href="#header" className="hover:underline glowOnHoverNav">Home</a>
          <a href="#about" className="hover:underline glowOnHoverNav">About Me</a>
          <a href="#projects" className="hover:underline glowOnHoverNav">Projects</a>
          <a href="#skills" className="hover:underline glowOnHoverNav">Skills</a>
          <a href="#contact" className="hover:underline glowOnHoverNav">Contact</a>
        </nav>

        {/* Hamburger Button for Mobile */}
        <button onClick={() => setNavOpen(true)} className="md:hidden text-white text-3xl">
          <FaBars />
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      {navOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-40 md:hidden">
          <button onClick={() => setNavOpen(false)} className="absolute top-4 right-4 text-white text-3xl">
            <FaTimes />
          </button>
          <nav className="flex flex-col gap-8 text-2xl">
            <a href="#header" onClick={() => setNavOpen(false)} className="hover:underline glowOnHoverNav">
              Home
            </a>
            <a href="#about" onClick={() => setNavOpen(false)} className="hover:underline glowOnHoverNav">
              About Me
            </a>
            <a href="#projects" onClick={() => setNavOpen(false)} className="hover:underline glowOnHoverNav">
              Projects
            </a>
            <a href="#skills" onClick={() => setNavOpen(false)} className="hover:underline glowOnHoverNav">
              Skills
            </a>
            <a href="#contact" onClick={() => setNavOpen(false)} className="hover:underline glowOnHoverNav">
              Contact
            </a>
          </nav>
        </div>
      )}

      {/* --- MAIN CONTENT with Scroll Snap --- */}
      <main className="pt-[80px] snap-y snap-mandatory">
        {/* HERO / HEADER SECTION */}
        <section
          id="header"
          className="min-h-screen snap-start w-full bg-theme text-center flex flex-col items-center justify-center py-20 px-4 md:px-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 tracking-tighter text-white glowOnHoverName">
            Szymon Kretowski
          </h1>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl sm:text-4xl text-white hover:text-gray-300 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl sm:text-4xl text-white hover:text-gray-300 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:szymonburton@gmail.com"
              className="text-3xl sm:text-4xl text-white hover:text-gray-300 transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="min-h-screen snap-start w-full bg-theme text-center flex flex-col items-center justify-center py-16 md:py-20 px-4 md:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-4xl font-medium text-white">
              I&apos;m a critical thinker and an aspiring programmer from Warsaw, currently studying Computer Science &amp; Engineering at TU Delft.
              Focused on becoming a highly skilled Web Developer, I&apos;m a fast learner and a very determined individual who gets things done.
            </p>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="min-h-screen snap-start w-full bg-theme text-center flex flex-col items-center justify-center py-16 md:py-20 px-4 md:px-8"
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Project Details */}
            <div className="flex-1 text-center flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                Note-Taking Desktop Application
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white">
                Enabling users to create notes, organize collections, filter by collections,
                preview notes, upload multiple files, and even change the app language.
                Keyboard shortcuts let you use the app without a mouse.
              </p>
              <div className="flex gap-4 mt-4 justify-center">
                <button className="px-4 py-2 bg-theme border border-white text-white text-base hover:bg-gray-800 transition">
                  Git
                </button>
                <button className="px-4 py-2 bg-theme border border-white text-white text-base hover:bg-gray-800 transition">
                  Spring
                </button>
                <button className="px-4 py-2 bg-theme border border-white text-white text-base hover:bg-gray-800 transition">
                  JavaFX
                </button>
              </div>
            </div>
            {/* Screenshot */}
            <div className="flex-1 flex justify-center">
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/app.screen.png"
                  alt="Screenshot of the application"
                  className="max-w-xs sm:max-w-md md:max-w-lg h-auto object-contain rounded-lg"
                />
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section
          id="skills"
          className="min-h-screen snap-start w-full bg-theme text-center flex flex-col items-center justify-center py-16 md:py-20 px-4 md:px-8"
        >
          {/* HARD SKILLS */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 text-white">
            HARD SKILLS
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 place-items-center mb-12">
            {["Java", "HTML", "CSS", "JavaScript", "React.js", "Node.js + Express", "PostgreSQL", "Git", "Tailwind"].map(skill => (
              <div key={skill} className="border-2 border-white text-white px-2 py-2 text-sm sm:text-base uppercase flex items-center justify-center w-64 sm:w-72 min-h-[40px] text-center break-words">
                {skill}
              </div>
            ))}
          </div>

          {/* SOFT SKILLS */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 text-white">
            SOFT SKILLS
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 place-items-center">
            {["Adaptability", "Communication Skills", "Organizational Skills", "Leadership", "Problem-Solving", "Critical Thinking"].map(skill => (
              <div key={skill} className="border-2 border-white text-white px-2 py-2 text-sm sm:text-base uppercase flex items-center justify-center w-64 sm:w-72 min-h-[40px] text-center break-words">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="min-h-screen snap-start w-full bg-theme text-center flex flex-col items-center justify-center py-16 md:py-20 px-4 md:px-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white">Contact</h1>
          <form className="w-full max-w-2xl">
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-theme border border-white text-white placeholder-white text-base focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 bg-theme border border-white text-white placeholder-white text-base focus:outline-none focus:ring-2 focus:ring-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-theme border border-white text-white text-base hover:bg-gray-800 transition"
            >
              Send
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
