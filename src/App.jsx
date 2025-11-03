import MarsInfo from "./MarsInfo.jsx";
import "./App.css";

function App() {
  // Data o oblastech Valles Marineris
  const marsData = [
    {
      id: 1,
      title: "Valles Marineris",
      description:
        "Největší kaňonový systém ve sluneční soustavě, nacházející se na Marsu. Rozkládá se na délce přes 4000 km a dosahuje hloubky až 7 km.",
    },
    {
      id: 2,
      title: "Ius Chasma",
      description:
        "Západní část Valles Marineris, dlouhá přes 900 km. Oblast je známá svými strmými svahy a složitou geologií.",
    },
    {
      id: 3,
      title: "Melas Chasma",
      description:
        "Nejširší a nejhlubší část celého systému. Nachází se zde vrstvené usazeniny, které mohou obsahovat vodní led.",
    },
  ];

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
            description={item.description} />
        ))}
      </main>
    </div>
  );
}

export default App;
