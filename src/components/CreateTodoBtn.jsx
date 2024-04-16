import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function CreateTodoBtn() {

  const { setOpenModal } = React.useContext(TodoContext);
  
  return (
    <div className="flex justify-center items-center">
      <div className="w-[300px] h-[76px] flex justify-center items-center rounded-3xl bg-[#116762]/60 shadow-xl backdrop-blur-lg fixed bottom-10">
        <button onClick={
          () => {
            setOpenModal(value => !value);       
          }
        }
        >
          <i className='bx bxs-plus-circle text-6xl text-[#CBEFDA] transition-all hover:-rotate-225 hover:text-[#849f8f]'></i>
        </button>
      </div>
    </div>
  );
}

export { CreateTodoBtn };

