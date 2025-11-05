const projects = [
  {
    name: "Demo App",
    link: "https://github.com/ashwinikunchala73/Django_template",
    demo: "https://todo-demo.vercel.app",
  },
  {
    name: "Weather App",
    link: "https://github.com/yourname/weather",
    demo: "https://weather-demo.vercel.app",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 py-20 px-6 text-center bg-gradient-to-b from-gray-900 via-gray-700 to-black text-white"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-cyan-400 mb-12 tracking-wide">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, index) => (
          <div
            key={index}
            className="bg-gray-800/70 border border-gray-700 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 p-8"
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
              {p.name}
            </h3>
            <div className="flex justify-center gap-6 text-lg">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                GitHub
              </a>
              <span className="text-gray-500">•</span>
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
