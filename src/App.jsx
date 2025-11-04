import MarsInfo from "./MarsInfo.jsx";
import { marsData } from "./data/marsData.js"; 
import "./App.css";

function App() {

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
        {marsData.map((item) => (
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
