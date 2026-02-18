import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* HERO SECTION */}
      <section className="pt-32 pb-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Create Stunning <span className="text-purple-500">AI Thumbnails</span>
          <br /> in Seconds 🚀
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg">
          Generate eye-catching thumbnails for YouTube, Instagram, and more
          using AI. No design skills needed.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/generate"
            className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition font-semibold"
          >
            Generate Now
          </Link>

          
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-14">
          Why Choose <span className="text-purple-500">AIThumb</span>?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500 transition">
            <h3 className="text-xl font-semibold mb-3">⚡ Fast Generation</h3>
            <p className="text-gray-400">
              Generate thumbnails in seconds using powerful AI models.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500 transition">
            <h3 className="text-xl font-semibold mb-3">🎨 Multiple Styles</h3>
            <p className="text-gray-400">
              Choose styles for YouTube, Instagram, ads, and more.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500 transition">
            <h3 className="text-xl font-semibold mb-3">📂 Save History</h3>
            <p className="text-gray-400">
              Access and download all your previously generated thumbnails.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-black/40">
        <h2 className="text-3xl font-bold text-center mb-14">
          How It Works 🧠
        </h2>

        <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-3 text-center">
          <div>
            <div className="text-purple-500 text-4xl font-bold mb-3">1</div>
            <p className="text-gray-300">
              Enter a prompt describing your thumbnail idea.
            </p>
          </div>

          <div>
            <div className="text-purple-500 text-4xl font-bold mb-3">2</div>
            <p className="text-gray-300">
              AI generates a high-quality thumbnail instantly.
            </p>
          </div>

          <div>
            <div className="text-purple-500 text-4xl font-bold mb-3">3</div>
            <p className="text-gray-300">
              Download or save it to your dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Boost Your Clicks? 🔥
        </h2>
        <p className="text-gray-400 mt-4">
          Start creating thumbnails that actually get clicks.
        </p>

        <Link
          to="/signup"
          className="inline-block mt-8 px-10 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition font-semibold"
        >
          Start for Free
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AIThumb. All rights reserved.
      </footer>

    </div>
  );
};

export default Home;
