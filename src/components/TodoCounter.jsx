function TodoCounter ({ total, completed }) {
  return (
    <>
      <h1 className="font-bold text-3xl">TODO Mylo</h1>
      <h2 className="font-semibold">
        {completed} / {total}
      </h2>
    </>
  )
}

export { TodoCounter };