import PropTypes from "prop-types";
import Course from "./Course";
import CourseContext from "../../context/CourseContext";
import { useContext } from "react";
export default function Courses() {
  const { courses } = useContext(CourseContext);
  return (
    <div className="courses-container">
      <div className="map-container">
        {courses.map((course, index) => (
          <Course key={index} course={course} />
        ))}
      </div>
    </div>
  );
}

Courses.propTypes = {
  courses: PropTypes.array,
  deletebyId: PropTypes.func,
};
