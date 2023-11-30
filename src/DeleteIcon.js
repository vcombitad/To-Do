import React from "react";
import { FaWindowClose } from "react-icons/fa";

const DeleteIcon = (props) => {
    const {className, onClick} = props
  return (
    <FaWindowClose
        className={className}
        onClick={onClick}
    />
  )
}


export {DeleteIcon}