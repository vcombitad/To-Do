import React from "react";
import './styles/TodoForm.css'
import { TodoContext } from "./TodoContext";

function TodoForm () {
    const {
        setOpenModal,
        addTodo,
    }= React.useContext(TodoContext);

    const onSubmit = (event)=>{
        event.preventDefault();
        setOpenModal(false);
        addTodo(newValue);
    }
    const onCancel = ()=>{
        setOpenModal(false);
    }

    const onChange=(evt)=>{
        setNewValue(evt.target.value);
    }

    const [newValue, setNewValue]=React.useState('');
    return (
        <form onSubmit={onSubmit}>
            <label className="TodoForm-text--title">Escribe Tu Nuevo TODO</label>
            <textarea placeholder="Cortar cebolla"
                value={newValue}
                onChange={onChange}
            />
        <div className="TodoForm-buttonContainer">
            <button onClick={onCancel} type="button" className="TodoForm-Button--cancel">Cancelar</button>
            <button type="submit" className="TodoForm-Button--add">Añadir</button>
        </div>
        </form>
    )
}
export {TodoForm}