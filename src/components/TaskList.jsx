import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = (props) => {
   
    return (
        <> 
        {props.tasks.length === 0? (<p>No tasks available.</p>):(
            <table>
                {
                    props.tasks.map(task => {
                        return (
                            <TaskItem 
                                key={task.id} 
                                task={task} 
                                completeHandler={props.completeHandler}
                                deleteHandler = {props.deleteHandler}
                                editHandler = {props.editHandler}
                            />
                        )
                    })
                }
            </table>
        )}
        </>  
    )
}

export default TaskList;