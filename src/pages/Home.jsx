import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { marsData } from '../data/marsData.js'
import MarsInfo from '../MarsInfo.jsx'

function Home() {
  const [searchText, setSearchText] = useState('')

  const filteredData = marsData.filter(item => 
    item.title.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div>
      <header className="py-8 px-4">
        <h1 className="text-5xl font-bold text-center text-orange-500 mb-2">
          Valles Marineris Explorer
        </h1>
        <p className="text-center text-gray-400 text-lg">
          Objevte největší kaňonový systém ve sluneční soustavě
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Vyhledávání */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Vyhledat oblast podle názvu..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full pl-12 pr-12 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors"
            />
            {searchText && (
              <button
                onClick={() => setSearchText('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          {searchText && (
            <p className="text-gray-400 text-sm mt-2">
              Nalezeno: {filteredData.length} {filteredData.length === 1 ? 'oblast' : filteredData.length >= 2 && filteredData.length <= 4 ? 'oblasti' : 'oblastí'}
            </p>
          )}
        </div>

        {/* Seznam oblastí */}
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
  )
}

export default Home