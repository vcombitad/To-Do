import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext= React.createContext();


function TodoProvider({children}) {

    const {
        item:todos,
        saveItem:saveTodos,
        loading,
        error
    }=useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue]= React.useState('');
      const [openModal, setOpenModal]= React.useState(false);
    
      const todoComplete=(text)=>{
        const newTodos=[...todos];
        const todoIndex=newTodos.findIndex((todo)=>
        todo.text===text
        );
        if (newTodos[todoIndex].completed) {
          newTodos[todoIndex].completed=false;
        } else {
          newTodos[todoIndex].completed=true;
        }
        
        saveTodos(newTodos)
      }
      
      const addTodo= (text)=>{
        const newTodos=[...todos];
        newTodos.push({
            text,
            completed:false, 
        })
        
        saveTodos(newTodos)
      };

      const todoDelete=(text)=>{
        const newTodos=[...todos];
        const todoIndex=newTodos.findIndex((todo)=>
        todo.text===text
        );
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
      }
    
    
      const completedTodos= todos.filter(todos=>todos.completed).length;
    
      const searchTodo=todos.filter((todos=>{
        const noTildes = (text) => {
          return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        };
        const textInput=noTildes (todos.text.toLocaleLowerCase());
        const textSearched=noTildes (searchValue.toLocaleLowerCase());
       return textInput.includes(textSearched)
      }))
    
      const totalTodos=todos.length;
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            todoComplete,
            todoDelete,
            searchTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
        
    )
}





export{TodoProvider, TodoContext}