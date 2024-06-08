import PropTypes from 'prop-types'
import { useContext } from 'react'
import CourseContext from '../../context/CourseContext'
export default function Course({course}) {

  const {deletebyId} = useContext(CourseContext)

  return (
    <div>
        <p>{course.id}</p>
        <p>{course.title}</p>
        <button onClick={() => deletebyId(course.id)}>sil</button>
    </div>
  )
}

Course.propTypes = {
  course: PropTypes.object,
  deletebyId: PropTypes.func
}