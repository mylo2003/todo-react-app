import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm() {

  const { setOpenModal, addTodo } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit} className="text-white text-center">
      <label className="text-xl font-medium">Crea una tarea!</label>
      <textarea required value={newTodoValue} onChange={onChange} className="w-[250px] my-5 text-[#535353]/70 focus:outline-none focus:ring focus:ring-green-600  text-base text-center p-8 m-2 resize-none bg-[#CBEFDA] shadow-inner rounded-lg border-white" placeholder="Escribe tu tarea aquí"></textarea>
      <button type="button" onClick={onCancel} className="text-red-400 font-medium w-24 h-10 bg-red-100 rounded-xl mr-3 border border-red-400 transition-all hover:bg-red-200">Cancelar</button>
      <button type="submit" className="text-[#3ba766] font-medium w-24 h-10 bg-[#CBEFDA] rounded-xl border border-green-500 transition-all hover:bg-[#97e8b7]">Agregar</button>
    </form>
  )
}

export { TodoForm };