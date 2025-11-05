function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-pink-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Subtle Background Blur Shape */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-3xl absolute -top-24 right-0 animate-pulse"></div>
        <div className="w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl absolute bottom-0 left-0"></div>
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
        Hi, I'm <span className="text-cyan-400">Ashwini 👋</span>
      </h1>

      <p className="text-lg md:text-xl max-w-3xl text-gray-300 leading-relaxed">
        React Developer | Python | Django | Full Stack Enthusiast <br />
        💡 I enjoy building innovative, clean, and efficient code for impactful products.
      </p>

      <a
        href="#projects"
        className="mt-10 inline-block px-8 py-3 border border-cyan-400 text-cyan-400 rounded-xl text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 shadow-md"
      >
        View My Work
      </a>
    </section>
  );
}

export default Home;
