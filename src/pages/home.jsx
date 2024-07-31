import React from "react";
import Header from "../components/header";
// import MainSection from "../components/mainsection";
import Landing from "../components/landing";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Main Content Section */}
      <main className="flex-1 shadow-lg p-2">
        <div className="container mx-auto px-4">
          <Landing />
        </div>
      </main>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Home;
