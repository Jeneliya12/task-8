function Header() {
  return (
    <header className="bg-pink-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/619/466/original/vector-house-home-buildings-logo-icons-template.jpg"
            alt="Sano Sansar"
            className="w-12 md:w-8 lg:w-12 xl:w-12 rounded-full transform transition-transform duration-300 hover:scale-110"
          />

          <h1 className="text-2xl font-serif font-bold">Sano Sansar</h1>
        </div>
        <nav>
          <ul className="flex space-x-4 font-serif">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
