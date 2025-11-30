function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/70 backdrop-blur-md text-white shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold tracking-wide text-cyan-400"> Kunchala Ashwini</h1>
        <ul className="flex gap-6 text-gray-300">
          <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
