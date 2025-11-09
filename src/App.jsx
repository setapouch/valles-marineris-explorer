import MarsInfo from "./MarsInfo.jsx";
import { useState } from "react";
import { marsData } from "./data/marsData.js";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");

  const filteredData = marsData.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-red-950 to-black text-white">
      <header className="py-8 px-4">
        <h1 className="text-5xl font-bold text-center text-orange-500 mb-2">
          Valles Marineris Explorer
        </h1>
        <p className="text-center text-gray-400 text-lg">
          Objevte největší kaňonový systém ve sluneční soustavě
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Vyhledávací pole */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Vyhledat oblast..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-orange-500 focus:outline-none"
          />
          {searchText && (
            <p className="text-gray-400 text-sm mt-2">
              Nalezeno: {filteredData.length}{" "}
              {filteredData.length === 1
                ? "oblast"
                : filteredData.length >= 2 && filteredData.length <= 4
                ? "oblasti"
                : "oblastí"}
            </p>
          )}
        </div>

        {filteredData.map((item) => (
          <MarsInfo
            key={item.id}
            title={item.title}
            description={item.description}
            length={item.length}
            width={item.width}
            depth={item.depth}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
