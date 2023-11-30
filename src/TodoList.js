import './styles/TodoList.css'

function TodoList ({children}) {
    return(
      <div className='todolist-container'>
          <ul className='todolist-container--task'>
            {children}
          </ul>
      </div>
      
    );
  }

  export {TodoList};