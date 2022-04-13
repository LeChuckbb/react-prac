import React from 'react';
import './TodoListItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

function TodoListItem({todo}){
  const { text, checked } = todo;
  console.log(checked);
  return(
    <div className='TodoListItem'>
      <div className="checkbox">
      {checked 
        ? <FontAwesomeIcon icon={faSquareCheck} /> 
        : <FontAwesomeIcon icon={faSquare} />}
        
        <span className='text'>{text}</span>
      </div>
      <div className="remove">
        <FontAwesomeIcon icon={faCircleMinus} />
      </div>
    </div>
  );
}

export default TodoListItem;