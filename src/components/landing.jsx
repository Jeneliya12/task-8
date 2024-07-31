function Landing() {
  return (
    <div className="min-h-screen flex flex-col justify-center pd-10">
      {/* Hero Section */}
      <section className="hero text-black py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif animate__animated animate__fadeIn animate__delay-1s">
            Welcome to Our Service
          </h1>
          <p className="text-lg md:text-xl mb-6 font-serif">
            We provide top-notch solutions to help you achieve your goals.
          </p>
          <a href="#contact" className="btn btn-secondary">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-pink-300 feature-card shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Feature One</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="bg-pink-300 feature-card shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Feature Two</h3>
              <p className="text-gray-600">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="bg-pink-300 feature-card shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Feature Three</h3>
              <p className="text-gray-600">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="contact" className="cta bg-pink-300 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Contact us today to learn more about how we can help you.
          </p>
          <a href="mailto:info@example.com" className="btn btn-secondary">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default Landing;
