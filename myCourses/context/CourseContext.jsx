import { createContext, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
const CourseContext = createContext();

function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const deletebyId = (id) => {
    // axios.delete("http://localhost:3000/courses/" + id);
    setCourses(courses.filter((course) => course.id !== id));
  };

  const sharedvalues = {
    fetchCourses,
    deletebyId,
    courses,
    loading
  };
  return (
    <CourseContext.Provider value={sharedvalues}>
      {children}
    </CourseContext.Provider>
  );
}

CourseProvider.propTypes = {
  children: PropTypes.node,
};

export { CourseProvider };
export default CourseContext;
