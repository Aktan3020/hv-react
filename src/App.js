import { useState, Fragment } from 'react';
import './App.css';
import TodoCard from './components/TodoCart';
import Button from './components/UI/Button';
import Input from './components/UI/Input';

function App() {
  const [ todoList, setTodoList ] = useState([]) 
  const [ value, setValue ] = useState('')

  const addTodo = () => {
    setTodoList(prev => [...prev, { id: Date(), title: value, }])
  }
  const deleteTodo = (todo) => {
    const newState = todoList.filter(item => item.id !== todo.id)
    setTodoList(newState)
  }

  return (
    <div className='App'>
      <div className='container'>
        <Input title={value} setValue={setValue}/>
        <Button handleDo={addTodo}>
          Hello
        </Button>
        <div className='flexWrapper'>
          {todoList.map((item, i) =>
              <TodoCard key={i} todo={item} deleteTodo={deleteTodo}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;