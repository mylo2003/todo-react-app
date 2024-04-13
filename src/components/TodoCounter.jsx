function TodoCounter({ total, completed, loading}) {
  return (
    <div className="text-center text-white mt-7 mb-5">
      <h1 className="font-bold text-4xl">TODO Mylo</h1>
      <h2 className="font-semibold text-2xl mt-5 text-[#59FF9B]">
        {
          `
            ${loading == true ? 'Cargando TODOS...' : total == 0 ? 'Crea un TODO!' : total == completed ? 'Terminaste!! 🎉' : `${completed} / ${total}`}
          `
        }
      </h2>
    </div>
  )
}

export { TodoCounter };