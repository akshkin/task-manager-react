import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Task from '../../components/task/task.component'

import { Container, Dialog, TasksContainer, SearchInput, SearchForm } from "./dashboard.styles"
import { createTask, getTasks, updateTask } from '../../store/task/task.action';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Button from '../../components/button/button.component';
import FadeLoader from "react-spinners/FadeLoader"
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

function Dashboard({ user }) {
  const [currentId, setCurrentId] = useState(null)
  const  {tasks, isLoading}  = useSelector(state => state.tasks)
  const [taskFields, setTaskFields] = useState({
    description: "",
    completed: false
  })
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)
  const dispatch = useDispatch()
  const task = useSelector(state => state.tasks.tasks.find(task => task._id === currentId))
  const [searchTerm, setSearchTerm] = useState('')
 
  useEffect(()=>{
    dispatch(getTasks())
  }, [currentId, user, dispatch])


  useEffect(() => {
    if(task) setTaskFields(task)
  }, [task])

  const clear = () => {
    setTaskFields({description: "", completed: false})
    setIsOpen(false)
    setCurrentId(null)
  }

  useEffect(() => {
    if(isOpen){
      ref.current?.showModal()      
    } else {
      ref.current?.close()
    }
  },[isOpen])

  const handleChange = event => {
    const { name, value, type, checked } = event.target
    setTaskFields({...taskFields, [name]: type === "checkbox" ? checked : value})
    if(checked) setTaskFields({...taskFields, completed: true}) 
  }

  const handleSearchChange = event => {
    event.preventDefault()
    setSearchTerm(event.target.value)    
  }
    
  const handleSubmit = event => {
    event.preventDefault()
    if(currentId){
      dispatch(updateTask(currentId, taskFields))
    }else{
      dispatch(createTask(taskFields))
    }
    clear()
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const filteredTasks = tasks.filter(task => task.description.toLowerCase().includes(searchTerm.toLowerCase()))
  
  

  if(!user) {
    return (
      <>
      <h2>Please sign in to see tasks</h2>
      </>
    )
  }

  return  (
    <Container>  
      <div>
        <h2>Hello, {user?.user.name}!</h2>
      </div>  
      <SearchForm>
        <SearchIcon className='icon'/>
        <SearchInput 
          type="search"
          onChange={handleSearchChange}
          placeholder="Search tasks"
        />
      </SearchForm>  
      {isLoading && <FadeLoader color="#36d7b7"/> }
      <>
        {isOpen && 
        <Dialog ref={ref}>
            <form onSubmit={handleSubmit}>
              <CloseIcon className='close-icon icon' onClick={() => setIsOpen(false)}/>
              <input 
                type="text"
                name="description"
                placeholder="Description"
                value={taskFields.description}
                onChange={handleChange}
              />
              <input 
                type="checkbox"
                name="completed"
                onChange={handleChange}
                checked={taskFields.completed}
              />
              { taskFields.completed ? <CheckBoxIcon className="icon" /> :  <CheckBoxOutlineBlankIcon className="icon" /> }
              <Button>Done</Button>
            </form>
          </Dialog> 
        }  
      
        <div className="row" >
          <h3>Add task </h3>
          <AddCircleIcon className="icon" onClick={openModal}/>
        </div>
        <TasksContainer>
          {          
            filteredTasks.map(task => <Task key={task._id} handleChange={handleChange} setTaskFields={setTaskFields} taskFields={taskFields} openModal={openModal} currentId={currentId} task={task} setCurrentId={setCurrentId}/>
            )
          }
        </TasksContainer>
      </>
    </Container>
    )
  
}

export default Dashboard