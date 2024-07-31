import "../style/main.css";
function MainSection() {
  return (
    <div className="space-y-12">
      {/* Welcome Section */}
      <section id="home" className="relative text-center mb-12">
        {/* Enlarged Cover Image */}
        <img
          src="https://wallpapers.com/images/hd/classic-restaurant-bar-s5nx6gufauyvhhy0.jpg"
          alt="Restaurant Dish"
          className="w-full h-[600px] object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 p-6 animate-fadeIn">
          <h2 className="text-5xl font-serif font-bold text-white mb-4 animate-slideIn">
            Welcome to The Gourmet Bistro
          </h2>
          <p className="text-xl font-serif text-white animate-slideFromLeft">
            Experience the finest dining with a touch of elegance. Our chefs
            create masterpieces with fresh ingredients, bringing you a memorable
            culinary experience.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="mb-12 font-serif">
        <h2 className="text-4xl text-center font-semibold text-gray-800 mb-6">
          Menu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Menu Item */}
          <div className="bg-brown-200 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 animate-fadeIn">
            <h3 className="text-2xl font-semibold mb-2">Spaghetti Carbonara</h3>
            <p className="text-gray-700 mb-2">
              Creamy pasta with pancetta and Parmesan cheese.
            </p>
            <p className="text-lg font-bold">$14.99</p>
          </div>
          {/* Menu Item */}
          <div className="bg-brown-200 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 animate-fadeIn">
            <h3 className="text-2xl font-semibold mb-2">Grilled Salmon</h3>
            <p className="text-gray-700 mb-2">
              Fresh salmon grilled to perfection, served with vegetables.
            </p>
            <p className="text-lg font-bold">$19.99</p>
          </div>
          {/* Menu Item */}
          <div className="bg-brown-200 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 animate-fadeIn">
            <h3 className="text-2xl font-semibold mb-2">Caesar Salad</h3>
            <p className="text-gray-700 mb-2">
              Crisp romaine lettuce with Caesar dressing and croutons.
            </p>
            <p className="text-lg font-bold">$9.99</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="text-center font-serif">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-600">
          At The Gourmet Bistro, we take pride in our rich history and
          dedication to culinary excellence. Our restaurant offers a warm and
          inviting atmosphere where every meal is an unforgettable experience.
          At The Gourmet Bistro, we take pride in our rich history and
          dedication to culinary excellence. Our restaurant offers a warm and
          inviting atmosphere where every meal is an unforgettable experience.
          At The Gourmet Bistro, we take pride in our rich history and
          dedication to culinary excellence. Our restaurant offers a warm and
          inviting atmosphere where every meal is an unforgettable experience.
          At The Gourmet Bistro, we take pride in our rich history and
          dedication to culinary excellence. Our restaurant offers a warm and
          inviting atmosphere where every meal is an unforgettable experience.
        </p>
      </section>
    </div>
  );
}

export default MainSection;
