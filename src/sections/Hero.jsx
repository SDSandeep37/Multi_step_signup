const Hero = () => {
  return (
    <div className="text-center w-full max-w-xl mx-auto mt-4">
      <h2 className="text-4xl font-extrabold mb-4 text-(--color-text)">
        Find The Hottest Parties Near You
      </h2>
      <p className="text-[aliceblue] mb-6">
        Uncover the best party places nearby. Start the fun and never miss out
        on the action.
      </p>

      <div className="search w-[90%] m-auto bg-(--color-bg) flex items-center justify-center md:justify-between mb-10 p-2.5 rounded-lg">
        <input
          type="text"
          placeholder="Enter your location..."
          className="flex-2 text-[12px] sm:text-[16px] placeholder:text-(--color-subtext) px-2 py-1 sm:px-5 sm:py-2 outline-none rounded-lg bg-(--color-bg) text-(--color-text) transition-all duration-300 ease-in-out"
        />
        <button className="flex-1 text-[12px] sm:text-[16px] bg-(--color-primary) hover:bg-(--color-secondary) text-white font-semibold px-2 py-1 sm:px-5 sm:py-2  rounded-2xl transition-all duration-300 ease-in-out">
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default Hero;
