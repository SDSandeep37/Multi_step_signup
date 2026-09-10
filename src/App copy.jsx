const App = () => {
  return (
    <div>
      {/* Dark Theme Party Finder Landing Page */}
      <div class="min-h-screen bg-linear-to-br from-purple-900 via-blue-900 to-black text-white flex flex-col items-center justify-center px-6 py-12">
        {/* Header */}
        <header class="w-full flex justify-between items-center mb-10">
          <h1 class="text-3xl font-bold">
            E<span class="text-purple-400">•</span>
          </h1>
          <button class="text-white focus:outline-none">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </header>

        {/* <!-- Hero Section --> */}
        <div class="text-center max-w-xl">
          <h2 class="text-4xl font-extrabold mb-4">
            Find The Hottest Parties Near You
          </h2>
          <p class="text-gray-300 mb-6">
            Uncover the best party places nearby. Start the fun and never miss
            out on the action.
          </p>

          <div class="flex items-center justify-center gap-2 mb-10">
            <input
              type="text"
              placeholder="Enter your location..."
              class="w-64 px-4 py-2 rounded-md text-black focus:outline-none"
            />
            <button class="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-2 rounded-md">
              SEARCH
            </button>
          </div>
        </div>

        {/* <!-- Features --> */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
          <div class="bg-purple-800/30 p-6 rounded-lg">
            <div class="text-4xl mb-3">📍</div>
            <h3 class="font-bold mb-2">Discover Local Parties</h3>
            <p class="text-gray-300">
              Easily locate the hottest party spots around your area.
            </p>
          </div>
          <div class="bg-purple-800/30 p-6 rounded-lg">
            <div class="text-4xl mb-3">🎶</div>
            <h3 class="font-bold mb-2">Party All Night</h3>
            <p class="text-gray-300">
              Enjoy unforgettable nights out with epic parties and lively
              crowds.
            </p>
          </div>
          <div class="bg-purple-800/30 p-6 rounded-lg">
            <div class="text-4xl mb-3">🔔</div>
            <h3 class="font-bold mb-2">Get Instant Alerts</h3>
            <p class="text-gray-300">
              Receive notifications about popular events happening nearby.
            </p>
          </div>
        </div>

        {/* <!-- CTA --> */}
        <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-full">
          KEEP THE PARTY GOING!
        </button>
      </div>
    </div>
  );
};

export default App;
