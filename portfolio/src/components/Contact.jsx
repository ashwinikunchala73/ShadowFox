function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 py-20 px-8 text-center bg-gradient-to-b from-gray-900 via-pink-900 to-black text-gray-300"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold mb-8 text-cyan-400 tracking-wide">
        Contact Me
      </h2>

      {/* Subtitle */}
      <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-400">
        Let’s connect! I’m always open to new opportunities, collaborations, and ideas.
      </p>

      {/* Contact Info Box */}
      <div className="max-w-md mx-auto bg-gray-800/60 p-8 rounded-2xl shadow-xl border border-gray-700 hover:shadow-cyan-500/20 transition-all duration-300 space-y-5">
        <p>
          📧{" "}
          <span className="font-medium text-white">Email:</span>{" "}
          <a
            href="mailto:kunchalaashwini5@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 hover:underline transition"
          >
            kunchalaashwini5@gmail.com
          </a>
        </p>

        <p>
          💼{" "}
          <span className="font-medium text-white">LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/kunchala-ashwini-37114b370"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-300 hover:underline transition"
          >
            linkedin.com/in/kunchala-ashwini
          </a>
        </p>

        <p>
          💻{" "}
          <span className="font-medium text-white">GitHub:</span>{" "}
          <a
            href="https://github.com/ashwinikunchala73"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-300 hover:underline transition"
          >
            github.com/ashwinikunchala73
          </a>
        </p>
      </div>

      {/* Footer Note */}
      <p className="mt-12 text-gray-500 text-sm">
        💬 Let’s build something amazing together!
      </p>
    </section>
  );
}

export default Contact;
