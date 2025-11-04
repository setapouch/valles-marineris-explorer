import { Ruler, Maximize2, ArrowDown } from 'lucide-react'

function MarsInfo({ title, description, length, width, depth }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-4 hover:bg-gray-700 transition-colors">
      <h2 className="text-2xl font-bold mb-3 text-orange-400">{title}</h2>
      
      {/* Rozměry */}
      <div className="flex gap-6 mb-4 text-sm">
        <div className="flex items-center gap-2">
          <Ruler className="w-4 h-4 text-orange-400" />
          <span className="text-gray-400">Délka:</span>
          <span className="font-semibold text-orange-300">{length} km</span>
        </div>
        <div className="flex items-center gap-2">
          <Maximize2 className="w-4 h-4 text-orange-400" />
          <span className="text-gray-400">Šířka:</span>
          <span className="font-semibold text-orange-300">{width} km</span>
        </div>
        <div className="flex items-center gap-2">
          <ArrowDown className="w-4 h-4 text-orange-400" />
          <span className="text-gray-400">Hloubka:</span>
          <span className="font-semibold text-orange-300">{depth} km</span>
        </div>
      </div>
      
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  )
}

export default MarsInfo
