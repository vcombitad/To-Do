import React from 'react';
import './styles/TodosLoading.css'

function TodosLoading ({
  searchValue,
  setSearchValue
}) {
  
    return(
      <div className='loader'>
        Cargando...
      </div>
    );
  }

  export {TodosLoading};