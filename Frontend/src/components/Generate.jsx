import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateThumbnail } from "../redux/slice/thumbnailSlice";


const Generate = () => {
 
  const dispatch = useDispatch();

  const {image, error, loading} = useSelector((state) => state.thumbnail);  

  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("YouTube");

  const handleGenerate = () => {
    dispatch(generateThumbnail({ prompt, style }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 pt-28">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">

        {/* LEFT PANEL */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">

          <h2 className="text-3xl font-bold mb-6">
            Generate Thumbnail ✨
          </h2>

          {/* Prompt */}
          <div className="mb-5">
            <label className="text-gray-300 text-sm">Prompt</label>
            <textarea
              rows="4"
              
              placeholder="YouTube thumbnail for travel vlog in Paris..."
              className="w-full mt-2 px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none text-white"
            />
          </div>

          {/* Style */}
          <div className="mb-6">
            <label className="text-gray-300 text-sm">Style</label>
            <select
              
              className="w-full mt-2 px-4 py-2 rounded-lg bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none"
            >
              <option>YouTube</option>
              <option>Instagram</option>
              
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-semibold disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate Thumbnail"}
          </button>

          {error && (
            <p className="text-red-400 text-sm mt-4">{error}</p>
          )}
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center justify-center">

          {!image && (
            <p className="text-gray-400 text-center">
              Your generated thumbnail will appear here
            </p>
          )}

          {image && (
            <div className="w-full">
              <img
                src={image}
                alt="Generated Thumbnail"
                className="rounded-xl mb-4 w-full"
              />

              <a
                href={image}
                download
                target="_blank"
                rel="noreferrer"
                className="block text-center py-2 rounded-lg bg-green-600 hover:bg-green-700 transition font-semibold"
              >
                Download Image ⬇️
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Generate;
