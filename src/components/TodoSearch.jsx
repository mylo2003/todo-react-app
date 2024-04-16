import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoSearch() {

  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <div className="flex justify-center mx-auto w-[265px] h-[43px] bg-[#CBEFDA] shadow-xl rounded-xl ">
      <input
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        className="bg-[#CBEFDA] text-center  focus:placeholder:text-[#535353]/70 focus:outline-none placeholder:font-semibold placeholder:text-[#535353]"
        placeholder="Buscar tarea"
      />
     
      <i className="bx bx-search text-[#535353]  pt-1.5 text-2xl"></i>
    </div>
  );
}

export { TodoSearch };
