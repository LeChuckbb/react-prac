import React from 'react';
import './TodoInsert.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function TodoInsert(){
  return(
    <div className='TodoInsert'>
      <input 
        type="text"
        placeholder='할 일을 입력하세요' />
        
        <button>
          <FontAwesomeIcon icon={faPlus} />
        </button>
    </div>
  );
}

export default TodoInsert;