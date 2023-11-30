import { DeleteIcon } from './DeleteIcon';
import './styles/TodoItem.css'

function TodoItem(props) {
    return (
      <li className={`todo-list ${props.completed&&"completed"}`}>
        <span className={`todo-list--option ${props.completed && "check"}`}
        onClick={props.onComplete}
        ></span>
        <p>{props.text}</p>
        {/* <span className='todo-list--clear'
        onClick={props.onDelete}
        >X</span> */}
        <DeleteIcon
        className="icon-delete"
        onClick={props.onDelete}
        />
      </li>
    );
  }

  export{TodoItem};
  