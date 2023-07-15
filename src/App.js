import React, {useState} from 'react';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [isAddTask, setIsAddTask] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState('');
  const [isTaskValid, setIsTaskValid] = useState(true);

  const [task, setTask] = useState({
    id: '',
    title: '',
    dueDate:'',
    complete: false,
  });

  const onSubmitHandler = (task) => {
    if(task.title===''|| task.dueDate==='') {
      setIsTaskValid(false);
      return 
    }
      setTaskList([...taskList, task]);
      setIsAddTask(false);  
      setIsTaskValid(true);  
  };

  const onEditSubmitHandler = () => {
    if(task.title === '' || task.dueDate === '') {
      setIsTaskValid(false);
      return 
    }
   
    const newDeleteTaskList = taskList.filter((item)=>item.id !== editId);
    const newTaskList = [task, ...newDeleteTaskList];
    setTaskList(newTaskList);
    setIsEditing(false);

    setIsTaskValid(true) 
  };

  const onCompleteHandler = (completeId) => {
    
    const completeIndex = taskList.findIndex(item => item.id === completeId);

    const newTaskList = [...taskList];
    
    newTaskList[completeIndex].complete = !newTaskList[completeIndex].complete;
    
    setTaskList(newTaskList);
  };

  const onDeleteHandler = (deleteId) => {
    const newTaskList =  taskList.filter(item => item.id !== deleteId);
    setTaskList(newTaskList);
  };

  

  const onEditHandler = (editId) => {
    setIsEditing(true);
    setEditId(editId);
    const editIndex = taskList.findIndex(item=>item.id === editId);
    const editTitle = taskList[editIndex].title;
    const editDueDate = taskList[editIndex].dueDate;
    setTask({...task, title: editTitle, dueDate: editDueDate});
  };

  const onCloseHandler = () => {
    setIsAddTask(false);
    setIsEditing(false);
  };



  return (
    <div className='mainContainer'>
        <div className='container'>
          <h1>Task Manager</h1>
          <button className='addButton' onClick={()=>setIsAddTask(true)}>Add Task</button>
          <TaskList tasks={taskList} completeHandler={onCompleteHandler} deleteHandler={onDeleteHandler} editHandler={onEditHandler}/>
          {!isTaskValid && <p>please input a valid task</p>}
        </div>
        {isAddTask && <TaskForm submitFormHandler={onSubmitHandler} closeFormHandler={onCloseHandler} task={task} setTask={setTask} isEditing={isEditing} isAddTask={isAddTask}/> }
        {isEditing && <TaskForm task={task} setTask={setTask}  closeFormHandler={onCloseHandler} editSubmitFormHandler={onEditSubmitHandler} isEditing={isEditing} isAddTask={isAddTask}/>} 
    </div>
  );
}

export default App;
