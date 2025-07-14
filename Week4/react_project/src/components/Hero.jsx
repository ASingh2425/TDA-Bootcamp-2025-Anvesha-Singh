import logo from "../assets/netflix-logo-icon.png";

function Hero() {
  return (
    <div className="relative h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/121cb7e7-209b-4f7e-b917-d8a6dabc7d56/f3f34d31-0e00-48a3-87b8-b6a1afd37dca/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center opacity-50"></div>
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <img src={logo} alt="Netflix Logo" className="w-48 mx-auto mb-8" />
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">Unlimited movies, TV shows and more.</h1>
        <h2 className="text-2xl sm:text-3xl mb-8">Watch anywhere. Cancel anytime.</h2>
        <p className="text-lg mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Email address"
            className="px-6 py-4 rounded w-72 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded text-white font-semibold text-lg transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
