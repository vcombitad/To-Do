import React from 'react';
import './styles/TodoSearch.css'
import { TodoContext } from './TodoContext';

function TodoSearch ( ) {
  const {
    
            searchValue,
            setSearchValue,
            
  }= React.useContext(TodoContext)
    return(
      <input 
      className='input-search--todo' 
      placeholder="Search..."
      value={searchValue}
      onChange={(evento)=>{
      setSearchValue(evento.target.value)
      }}/>
    );
  }

  export {TodoSearch};