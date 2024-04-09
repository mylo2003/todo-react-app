function TodoSearch ( { searchValue, setSearchValue }) {
  return (
    <div className="flex justify-center mx-auto w-[265px] h-[43px] bg-[#CBEFDA] shadow-xl rounded-xl ">
      <input 
        value = {searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        className="bg-[#CBEFDA] placeholder:text-center placeholder:font-semibold placeholder:text-[#535353]"
        placeholder="Buscar tarea" 
      />
       <button className="transition-all hover:-translate-y-1"><i className='bx bx-search text-[#535353] hover:text-[#212121] text-2xl'></i></button>
    </div>
  );
}

export { TodoSearch };