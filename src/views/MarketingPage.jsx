import React, { useState } from "react";

function MarketingPage() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };
    return (
        <div className="font-sans text-center bg-gray-50 min-h-screen">
            <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                        Simplify Learning with AI
                    </h1>
                    <p className="mt-6 text-lg lg:text-2xl">
                        Your ultimate tool to make complex learning materials accessible to everyone, 
                        anywhere.
                    </p>
                    <button className="mt-8 px-8 py-4 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
                        Add to Browser
                    </button>
                </div>
                        {/* Login/Signup Button */}
                <section className="py-16">
                <button
                    className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
                    onClick={togglePopup}
                >
                    Login/Signup
                </button>
            </section>
            </header>
            <section className="py-16 bg-gray-100">
                <h2 className="text-4xl font-bold">Why Choose Our Extension?</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Text Simplification</h3>
                        <p className="text-gray-600">
                            Turn complex documents into beginner-friendly language in seconds.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Image Transcription</h3>
                        <p className="text-gray-600">
                            Extract and simplify text from images for enhanced understanding.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Video Captioning</h3>
                        <p className="text-gray-600">
                            Generate simplified captions from videos for better comprehension.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Personalized Learning</h3>
                        <p className="text-gray-600">
                            Get tailored suggestions to match your unique learning needs.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
                        <p className="text-gray-600">
                            Easily integrates with your favorite web browsers and tools.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Accessible for All</h3>
                        <p className="text-gray-600">
                            Designed for students with diverse language proficiencies.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <h2 className="text-4xl font-bold">What Our Users Say</h2>
                <div className="mt-8 max-w-4xl mx-auto px-4">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8 rounded-lg shadow-lg">
                        <blockquote className="italic text-lg lg:text-xl">
                            "This extension transformed the way I study. Now I can understand even the most
                            challenging materials with ease!"
                        </blockquote>
                        <cite className="block mt-4 text-right">- A Satisfied Student</cite>
                    </div>
                </div>
           </section>

            {/* Popup Modal */}
            {isLoginVisible && (
            <div className="p-4 rounded-lg">
              <Login
                onSignUp={() => {
                  setIsRegisterVisible(true);
                  setIsLoginVisible(false);
                }}
                onClose={() => setIsLoginVisible(false)}
              />
            </div>
          )}
          {isRegisterVisible && (
            <div>
              <Register
                onSignIn={() => {
                  setIsLoginVisible(true);
                  setIsRegisterVisible(false);
                }}
                onClose={() => setIsRegisterVisible(false)}
              />
            </div>
          )}

            <section className="py-16 bg-gray-100">
                <h2 className="text-4xl font-bold">Get Started in 3 Simple Steps</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">1. Install the Extension</h3>
                        <p className="text-gray-600">
                            Add our extension to your browser in just one click.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">2. Choose Your Material</h3>
                        <p className="text-gray-600">
                            Select the text, image, or video you want to simplify.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">3. Learn Better</h3>
                        <p className="text-gray-600">
                            Sit back and let our AI make learning easier for you.
                        </p>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-6xl mx-auto px-4">
                    <p className="text-sm">&copy; 2024 SimplifyEd. All rights reserved.</p>
                    <nav className="mt-4 text-sm">
                        <a href="#" className="hover:underline mx-2">Privacy Policy</a>
                        <a href="#" className="hover:underline mx-2">Terms of Service</a>
                        <a href="#" className="hover:underline mx-2">Contact Us</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
}

export default MarketingPage;
