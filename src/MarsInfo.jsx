function MarsInfo({title = "Neznámá oblast", description = "Popis není k dispozici."}) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-4 hover:bg-gray-700 transition-colors">
      <h2 className="text-2xl font-bold mb-2 text-orange-400">{title}</h2>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

export default MarsInfo
