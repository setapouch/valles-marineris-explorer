function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-orange-500 mb-6">O projektu</h1>
      
      <div className="bg-gray-800 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold text-orange-400 mb-4">Valles Marineris Explorer</h2>
        <p className="text-gray-300 mb-4">
          Tento projekt slouží jako interaktivní průvodce největším kaňonovým systémem 
          ve sluneční soustavě - Valles Marineris na planetě Mars.
        </p>
        <p className="text-gray-300 mb-4">
          Cílem je poskytnout detailní informace o jednotlivých oblastech tohoto 
          fascinujícího geologického útvaru a zpřístupnit vědecká data široké veřejnosti.
        </p>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-orange-400 mb-4">Použité technologie</h2>
        <ul className="text-gray-300 space-y-2">
          <li>⚛️ React - UI framework</li>
          <li>⚡ Vite - build tool</li>
          <li>🎨 Tailwind CSS - styling</li>
          <li>🗺️ React Router - navigace</li>
          <li>☁️ Azure Static Web Apps - hosting</li>
        </ul>
      </div>
    </div>
  )
}

export default About