function Footer() {
  return (
    <footer className="py-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-center text-gray-400 border-t border-gray-900 shadow-inner">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-cyan-400 font-semibold"> Kunchala Ashwini</span>. All Rights Reserved.
      </p>
     </footer>
  );
}

export default Footer;
