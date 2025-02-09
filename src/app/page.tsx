import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Fixed Header */}
      <header className="navBar fixed top-0 left-0 right-0 z-50 bg-white shadow">
        <nav className="flex justify-center gap-6 py-4">
          <a href="#header" className="hover:underline glowOnHoverNav">
            Home
          </a>
          <a href="#about" className="hover:underline glowOnHoverNav">
            About Me
          </a>
          <a href="#projects" className="hover:underline glowOnHoverNav">
            Projects
          </a>
          <a href="#skills" className="hover:underline glowOnHoverNav">
            Skills
          </a>
          <a href="#contact" className="hover:underline glowOnHoverNav">
            Contact
          </a>
        </nav>
      </header>

      {/* Main Container (NO snap-y snap-mandatory) */}
      <main className="pt-[80px]">

        {/* HEADER (Hero) SECTION */}
        {/* 
          - Removed scroll-snap, 
          - Added bg-theme, 
          - Added py-20 for vertical space,
          - Container for centered max width.
        */}
        <section
          id="header"
          className="w-full bg-theme text-center flex flex-col items-center justify-center py-20 px-8"
        >
          {/* Name with responsive text sizes and glow */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-white glowOnHoverName">
            Szymon Kretowski
          </h1>

          {/* Icon Links, bigger icons */}
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-white hover:text-gray-300 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-white hover:text-gray-300 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-4xl text-white hover:text-gray-300 transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </section>

        {/* ABOUT SECTION (No min-h-screen, added bg-theme to match, and py-20 for spacing) */}
        <section
          id="about"
          className="w-full bg-theme text-center flex flex-col items-center justify-center py-20 px-8"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl sm:text-3xl md:text-5xl font-medium text-white">
              I&apos;m a critical thinker and an aspiring programmer from Warsaw, currently studying Computer Science &amp; Engineering at TU Delft.
              Focused on becoming a highly skilled Web Developer, I&apos;m a fast learner and a very determined individual who gets things done.
            </p>
          </div>
        </section>

        {/* PROJECTS SECTION (No min-h-screen, same approach) */}
        <section
          id="projects"
          className="w-full bg-theme text-center flex flex-col items-center justify-center py-20 px-8"
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Left: Project Details */}
            <div className="flex-1 text-center flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Note-Taking Desktop Application
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl text-white">
                Enabling Users to create Notes, Collections of Notes, Filtering by Collections,
                using preview Window, uploading numerous files, as well as changing the language of the App.
                Shortcuts allow to use the app without the need of mouse.
              </p>
              <div className="flex gap-4 mt-4 justify-center">
                <button className="px-4 py-2 bg-theme border border-white text-white text-lg hover:bg-gray-800 transition">
                  Git
                </button>
                <button className="px-4 py-2 bg-theme border border-white text-white text-lg hover:bg-gray-800 transition">
                  Spring
                </button>
                <button className="px-4 py-2 bg-theme border border-white text-white text-lg hover:bg-gray-800 transition">
                  JavaFX
                </button>
              </div>
            </div>
            {/* Right: Screenshot (Link to GitHub) */}
            <div className="flex-1 flex justify-center">
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/app.screen.png"
                  alt="Screenshot of the application"
                  className="max-w-lg h-auto object-contain rounded-lg"
                />
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section
          id="skills"
          className="w-full bg-theme text-center flex flex-col items-center justify-center py-20 px-8"
        >
          {/* HARD SKILLS */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
            HARD SKILLS
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center mb-12">
            <div className="border-2 border-white text-white px-2 py-2 text-base uppercase flex items-center justify-center w-72 min-h-[40px] text-center break-words">
              Java
            </div>
            <div className="border-2 border-white text-white px-2 py-2 text-base uppercase flex items-center justify-center w-72 min-h-[40px] text-center break-words">
              HTML
            </div>
            <div className="border-2 border-white text-white px-2 py-2 text-base uppercase flex items-center justify-center w-72 min-h-[40px] text-center break-words">
              CSS
            </div>
            <div className="border-2 border-white text-white px-2 py-2 text-base uppercase flex items-center justify-center w-72 min-h-[40px] text-center break-words">
              JavaScript
            </div>
            <div className="border-2 border-white text-white px-2 py-2 text-base uppercase flex items-center justify-center w-72 min-h-[40px] text-center break-words">
              React.js
            </div>
            <div className="border-2 border-white text-white px-2 py-2 text-base uppercase flex items-center justify-center w-72 min-h-[40px] text-center break-words">
              Node.js + Express
            </div>
            <div className="border-2 border-white text-white px-2 py-2 text-base uppercase flex items-center justify-center w-72 min-h-[40px] text-center break-words">
              PostgreSQL
            </div>
            <div className="border-2 border-white text-white px-2 py-2 text-base uppercase flex items-center justify-center w-72 min-h-[40px] text-center break-words">
              Git
            </div>
            <div className="border-2 border-white text-white px-2 py-2 text-base uppercase flex items-center justify-center w-72 min-h-[40px] text-center break-words">
              Tailwind
            </div>
          </div>

          {/* SOFT SKILLS */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
            SOFT SKILLS
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
            <div className="border-2 border-white text-white px-2 py-2 text-base uppercase flex items-center justify-center w-72 min-h-[40px] text-center break-words">
              Adaptability
            </div>
            <div className="border-2 border-white text-white px-2 py-2 text-base uppercase flex items-center justify-center w-72 min-h-[40px] text-center break-words">
              Communication Skills
            </div>
            <div className="border-2 border-white text-white px-2 py-2 text-base uppercase flex items-center justify-center w-72 min-h-[40px] text-center break-words">
              Organizational Skills
            </div>
            <div className="border-2 border-white text-white px-2 py-2 text-base uppercase flex items-center justify-center w-72 min-h-[40px] text-center break-words">
              Leadership
            </div>
            <div className="border-2 border-white text-white px-2 py-2 text-base uppercase flex items-center justify-center w-72 min-h-[40px] text-center break-words">
              Problem-Solving
            </div>
            <div className="border-2 border-white text-white px-2 py-2 text-base uppercase flex items-center justify-center w-72 min-h-[40px] text-center break-words">
              Critical Thinking
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="w-full bg-theme text-center flex flex-col items-center justify-center py-20 px-8"
        >
          <h1 className="text-4xl font-bold mb-8 text-white">Contact</h1>
          <form className="w-full max-w-2xl">
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-theme border border-white text-white placeholder-white text-xl focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-6 py-4 bg-theme border border-white text-white placeholder-white text-xl focus:outline-none focus:ring-2 focus:ring-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-4 bg-theme border border-white text-white text-xl hover:bg-gray-800 transition"
            >
              Send
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
