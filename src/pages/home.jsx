import React from "react";
import Landing from "../components/landing";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content Section */}
      <main className="flex-1 shadow-lg p-8">
        <div className="container mx-auto px-4">
          <Landing />
        </div>
      </main>
    </div>
  );
}

export default Home;
