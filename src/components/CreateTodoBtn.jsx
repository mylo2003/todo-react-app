function CreateTodoBtn() {
  return (
    <footer className="w-full bg-[#116762]/60 shadow-xl backdrop-blur-lg fixed bottom-0">
      <div className="flex justify-center h-[76px] items-center">
        <button onClick={
          (event) => {
            console.log('hola di click en agregar tarea');
            console.log(event.target);
          }
        }
        >
          <i className='bx bxs-plus-circle text-6xl text-[#CBEFDA] transition-all hover:-rotate-225 hover:text-[#849f8f]'></i>
        </button>
      </div>
    </footer>
  );
}

export { CreateTodoBtn };

