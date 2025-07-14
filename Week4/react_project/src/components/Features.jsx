function Features() {
    return (
      <div className="bg-gray-900 text-white py-20 px-6 space-y-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-4">
            <h2 className="text-4xl font-bold">Enjoy on your TV.</h2>
            <p className="text-xl text-gray-300">Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="TV" className="w-80" />
        </div>
  
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="Mobile" className="w-72" />
          <div className="flex-1 space-y-4">
            <h2 className="text-4xl font-bold">Download your shows to watch offline.</h2>
            <p className="text-xl text-gray-300">Save your favourites easily and always have something to watch.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Features;
  
