import React from 'react';
import { AppUi } from './AppUi';
import { TodoProvider } from './TodoContext';

// const defaultTodos=[
//   {text:'Cortar Cebolla', completed:true},
//   {text:'Tomar curso de reactjs', completed:false},
//   {text:'Llorar con la llorona', completed:true},
//   {text:'Ver toda la serie Gambito de Dama', completed:false},
//   {text:'Usar estados derivados', completed:true},
//   {text:'Tender la cama', completed:false},
//   {text:'Cantar una canción', completed:false}
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');


function App() {

  
  return (
    <TodoProvider>
        <AppUi/>
    </TodoProvider>
    
  )
}
//cuando las funciones empiezan en mayus son componentes, todo lo dentro del return son elementos


export default App;
