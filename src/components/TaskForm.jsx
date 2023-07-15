
import React from 'react';
import Draggable from "react-draggable";
import './TaskForm.css';

const TaskForm = (props) => {
    
   
    const {task, setTask, isEditing, isAddTask}= props;

    const inputHandler = (e) => {
        setTask({...task, [e.target.name]: e.target.value})
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if(isAddTask && !isEditing) {
            const newTask = {...task, id: Date.now().toString()};
     
            props.submitFormHandler(newTask);
        }
        else if(isEditing && !isAddTask) {
            props.editSubmitFormHandler();
        }
        
       setTask({...task, title:'',dueDate:''});
    };

    const resetHandler = () => {
        setTask({
            id: '',
            title: '',
            dueDate:'',
            complete: false,
        });
    };

    const closeHandler = () => {
        props.closeFormHandler();
    };

    const dragHandler = (e, data) => {
        console.log('event type', e.type);
        console.log({e, data})
    };

    return (
        <Draggable onDrag={dragHandler}>
            <div className='formContainer' >
                <button className='closeButton' onClick={closeHandler}>close</button>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Task Title</label>
                        <input name='title' type='text' value={task.title} onChange={inputHandler}/>
                    </div>
                    <div>
                        <label>Due Date</label>
                        <input name='dueDate' type='text' value={task.dueDate} onChange={inputHandler}/>
                    </div>
                    <div className='buttonStyle'>
                        <button type='button' onClick={resetHandler}>RESET</button>
                        <button type='submit'>OK</button>
                    </div>       
                </form>
             </div>  
        </Draggable>   
    )
}

export default TaskForm;