function MarsInfo({title = "Neznámá oblast", description = "Popis není k dispozici." , ...props}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default MarsInfo
