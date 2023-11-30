import React from 'react';
import { TodoContext } from './TodoContext';
import './styles/TodoCount.css'


function TodoCount () {

  const {
    completedTodos,
    totalTodos,   
  }= React.useContext(TodoContext)
    return(
     
      <div>
          <h2>
            Your Tasks
          </h2>
          <h2>        
        Has completado {completedTodos} de {totalTodos} TODOS
      </h2>
      </div>
      
    );
  }

  export {TodoCount};