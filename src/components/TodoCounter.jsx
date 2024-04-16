import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoCounter() {

  const { totalTodos, completedTodos, loading } = React.useContext(TodoContext)

  return (
    <div className="text-center text-white mt-5 mb-5">
      <h1 className="font-bold text-4xl">TO-DO Mylo ✅</h1>
      <h2 className="font-semibold text-2xl mt-3 text-[#59FF9B]">
        {
          `
            ${loading == true ? 'Cargando TODOS... 🕓' : totalTodos == 0 ? 'Crea un TODO! ✍🏼' : totalTodos == completedTodos ? 'Terminaste!! 🎉' : `${completedTodos} / ${totalTodos} 📌`}
          `
        }
      </h2>
    </div>
  );
}

export { TodoCounter };