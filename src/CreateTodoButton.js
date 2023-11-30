import './styles/CreateTodoButton.css'


function CreateTodoButton ({setOpenModal}) {
    return (
        <button className='button-create--todo' onClick={
            
            ()=>{
                setOpenModal(state=>!state);//state=>!state es una forma de volver true o false o viceversa un estado 
            }         
        }>+</button>
    );
}

export{CreateTodoButton};