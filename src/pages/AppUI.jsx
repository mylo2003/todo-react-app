import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoBtn } from '../components/CreateTodoBtn';
import { LoadingTodo } from '../components/LoadingTodo';
import { SearchingTodo } from '../components/SearchingTodo';
import { TodoContext } from "../TodoContext/TodoContext";
import { Footer } from '../components/Footer';
import { TodoForm } from '../components/TodoForm';
import { Modal } from '../Modal/Modal';

function AppUI() {

  const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <LoadingTodo />}
        {error && <p>Hubo un error!!</p>}
        {(!loading && searchedTodos.length == 0) && <SearchingTodo />}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
          ))
        }

      </TodoList>
      <CreateTodoBtn />
      
      <Footer />
      
      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

    </>
  );
}

export { AppUI };