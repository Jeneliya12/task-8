function Header() {
  return (
    <header className="bg-brown-200 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img
            src="https://img.freepik.com/premium-vector/gourmet-bistro-elegant-restaurant-logo_661182-428.jpg"
            alt="The Gourmet Bistro Logo"
            className="w-12 md:w-8 lg:w-12 xl:w-12 rounded-full transform transition-transform duration-300 hover:scale-110"
          />
          {/* Restaurant Name */}
          <h1 className="text-2xl font-serif font-bold">The Gourmet Bistro</h1>
        </div>
        <nav>
          <ul className="flex space-x-4 font-serif">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:underline">
                Menu
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
