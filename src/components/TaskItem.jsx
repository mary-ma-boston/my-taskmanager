
import { useState } from 'react';

import ConfirmDelete from './ConfirmDelete';
import './TaskItem.css';

const TaskItem = (props) => {
    const {id, title, dueDate, complete} = props.task;
    const [isConfirmDelete, setIsConfirmDelete] = useState(false);

    const handleComplete = () =>{
        props.completeHandler(id);
    };

    const handleEdit = () => {
        props.editHandler(id);
    };

    const handleConfirmDelete = () => {
        setIsConfirmDelete(true);
    }
    const handleDelete = () => {

        props.deleteHandler(id);
    };

    return (
        <>
          <tbody>
            <tr>
                <td><span>{title}</span></td>
                <td><span>{dueDate}</span></td>
                <td><button onClick={handleComplete} className='buttonStyle'>{complete? 'Mark Complete':'Mark Incomplete'}</button></td>
                <td><button onClick={handleEdit}>edit</button></td>
                <td><button onClick={handleConfirmDelete}>delete</button></td>
            </tr>
          </tbody>  
          {isConfirmDelete &&  <ConfirmDelete deleteHandler={handleDelete} setIsConfirmDelete={setIsConfirmDelete} />}
        </>
      
    )
}

export default TaskItem;