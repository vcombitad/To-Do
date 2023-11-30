import React from "react";
import { FaWindowClose } from "react-icons/fa";

function CompleIcon({className, onClick}) {
    return (
        <FaWindowClose
            className={className}
            onClick={onClick}
        />
      )
}
export {CompleIcon}