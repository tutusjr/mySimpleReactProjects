
import PropTypes from 'prop-types'
import TaskCreated from './TaskCreated'
export default function TaskList({tasks, onDelete, updatedParams}) {
  return (
    <div className='task-list-container'>
        {tasks.map((item, index) => (
               <TaskCreated key={index} task={item} onDelete={onDelete} updatedParams={updatedParams}/>
        ))}
    </div>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func,
  updatedParams: PropTypes.func
}
