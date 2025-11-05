function About() {
  return (
    <section
      id="about"
      className="py-20 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-pink-900 text-center text-gray-200"
    >
      <h2 className="text-4xl font-bold mb-8 text-cyan-400">About Me</h2>

      <p className="max-w-3xl mx-auto leading-relaxed text-lg text-gray-300">
        I'm a passionate developer learning <span className="text-cyan-300">React</span>,{" "}
        <span className="text-cyan-300">Python</span>, and{" "}
        <span className="text-cyan-300">Django</span>. I love building interactive web
        applications and exploring full-stack development — blending powerful backends with modern frontends.
        <br /><br />
        💡 I enjoy transforming ideas into functional digital solutions, solving
        complex problems, optimizing performance, and continuously learning new technologies.
      </p>

      <div className="mt-10 text-left max-w-3xl mx-auto bg-gray-800/40 p-6 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 text-cyan-400 text-center">Core Skills</h3>
        <ul className="space-y-2 text-gray-300">
          <li>🔹 <b>Backend:</b> Python, Django, Django REST Framework</li>
          <li>🔹 <b>Frontend:</b> React.js, JavaScript, HTML, CSS</li>
          <li>🔹 <b>Databases:</b> MySQL</li>
          <li>🔹 <b>Tools:</b> Git, GitHub, REST APIs</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
