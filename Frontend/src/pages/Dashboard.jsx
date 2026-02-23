import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchThumbnailHistory } from "../redux/slice/thumbnailSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { history, loading } = useSelector((state) => state.thumbnail);

  useEffect(() => {
    dispatch(fetchThumbnailHistory());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 pt-28">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Your Thumbnails 📂</h2>

        {loading && <p className="text-gray-400">Loading...</p>}

        {!loading && history.length === 0 && (
          <p className="text-gray-400">
            No thumbnails generated yet.
          </p>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {history.map((item) => (
            <div
              key={item._id}
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            >
              <img
                src={item.imageUrl}
                alt="thumbnail"
                className="rounded-lg mb-3"
              />

              <p className="text-sm text-gray-300 mb-1">
                <span className="font-semibold">Prompt:</span>{" "}
                {item.prompt}
              </p>

              <p className="text-sm text-gray-400 mb-3">
                Style: {item.style}
              </p>

              <a
                href={item.imageUrl}
                download
                target="_blank"
                rel="noreferrer"
                className="block text-center py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
              >
                Download ⬇️
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;