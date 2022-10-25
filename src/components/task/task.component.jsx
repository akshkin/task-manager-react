import React  from 'react'
import { useDispatch } from "react-redux"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteTask } from '../../store/task/task.action';
import {  MyTask } from './task.styles';
import CheckBoxOutlineBlank from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBox from '@mui/icons-material/CheckBox';

function Task({task, currentId, setCurrentId, openModal, handleChange, setTaskFields, taskFields}) {
 const dispatch = useDispatch()
  

  const editTask = () => {
    setCurrentId(task._id)
    openModal()
  }

  const textStyle = {
    textDecoration: task.completed ? "line-through" : "none"
  }

  const time = new Date(task.updatedAt)

  const deleteSelectedTask = () => {
   if( window.confirm("Are you sure you want to delete this task? This action cannot be undone.")){
     dispatch(deleteTask(task._id))
   }    
  }
  
  
  return (      
      <MyTask >
        <p style={textStyle}>{task.description}</p>
        <small>{time.toLocaleString()}</small>
        <div className="buttons">
          <button onClick={editTask}>
            <EditIcon className="icon"/>
          </button>
          <button onClick={deleteSelectedTask}>
            <DeleteIcon className="icon"/>
          </button>   
        </div>
      </MyTask> 
  )
}

export default Task