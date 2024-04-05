import { TodoCounter } from './components/TodoCounter.jsx';
import { TodoSearch } from './components/TodoSearch.jsx';
import { TodoList } from './components/TodoList.jsx';
import { TodoItem } from './components/TodoItem.jsx';
import { CreateTodoBtn } from './components/CreateTodoBtn.jsx';
import './css/index.css';

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true},
  { text: 'Visitar a la jeva', completed: false},
  { text: 'Llorar en mi cuarto', completed: false},
  { text: 'Aprender React.js', completed: false},
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      <TodoList>

      </TodoList>
      <CreateTodoBtn/>
    </>
  )
}

export default App;
