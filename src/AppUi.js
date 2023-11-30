import React from 'react';
import { TodoCount } from './TodoCount';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoTitle } from './TodoTitle';
import { TodosLoading } from './TodosLoading';
import {TodosError} from './TodosError'
import {TodosCreateNew} from './TodosCreateNew'
import { TodoContext } from './TodoContext';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';


function AppUi() {

  const {
    loading,
    error,
    todoComplete,
    todoDelete,
    searchTodo,
    openModal,
    setOpenModal
    }=React.useContext(TodoContext)
    return (
        <React.Fragment>
          
          <div>
            
            <TodoTitle/>
            <TodoCount/> 
            <TodoSearch/>            
                <TodoList>

                  {loading && <TodosLoading/>}
                  {!loading && searchTodo.length===0 && <TodosCreateNew/>}
                  {error && <TodosError/>}


                {searchTodo.map(item=>(
                  <TodoItem 
                  key={item.text} 
                  text={item.text}
                  completed={item.completed} 
                  onComplete={()=>todoComplete(item.text)}
                  onDelete={()=>todoDelete(item.text)}
                  />
                ))}
              </TodoList>
              
          </div>
                <div>
                
                <CreateTodoButton
                  setOpenModal={setOpenModal}
                />  
                </div>
                {openModal && (
                  <Modal>
                    <TodoForm/>
                  </Modal>
                )}
          </React.Fragment>
      );
}

export {AppUi};