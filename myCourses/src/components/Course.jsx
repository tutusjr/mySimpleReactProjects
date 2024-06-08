import PropTypes from "prop-types";
import { useContext } from "react";
import CourseContext from "../../context/CourseContext";
export default function Course({ course }) {
  const { deletebyId } = useContext(CourseContext);

  return (
    <div className="card-container">
        <h2>{course.title}</h2>
        <h4>{course.price} TL</h4>
      <p className="card-content">{course.content}</p>
      <button className="button" onClick={() => deletebyId(course.id)}>sil</button>
    </div>
  );
}

Course.propTypes = {
  course: PropTypes.object,
  deletebyId: PropTypes.func,
};
