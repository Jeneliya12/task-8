import React from "react";
import "../style/global.css";

function Landing() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="card w-100 bg-blue-100 shadow-lg rounded-lg p-6 flex flex-col items-center">
        <figure className="mb-6">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&P=0&h=180"
            alt="Profile"
            className="rounded-full w-30 h-50 object-cover border-4 border-primary"
          />
        </figure>
        <div className="card-body flex flex-col items-center text-center">
          <h2 className="card-title text-2xl font-bold mb-2 fade-in-up">
            Jeneliya Gurung
          </h2>
          <p className="text-gray-600 mb-4 fade-in-up">
            Web Developer with a passion for building beautiful and functional
            web applications. Web Developer with a passion for building
            beautiful and functional web applications. Web Developer with a
            passion for building beautiful and functional web applications. Web
            Developer with a passion for building beautiful and functional web
            applications. Web Developer with a passion for building beautiful
            and functional web applications. Web Developer with a passion for
            building beautiful and functional web applications.
          </p>
          <div className="card-actions flex justify-center space-x-4">
            <a href="#follow-message" className="btn btn-primary">
              Follow
            </a>
            <a href="#message" className="btn btn-outline">
              Message
            </a>
          </div>

          <div
            id="follow-message"
            className="hidden mt-4 p-4 bg-green-100 text-green-800 rounded-md shadow-md target:block"
          >
            <p className="fade-in-up">Thank you for following!</p>
          </div>
          <div
            id="message"
            className="hidden mt-4 p-4 bg-gray-200 text-gray-800 rounded-md shadow-md target:block"
          >
            <p className="fade-in-up">This is your message!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
