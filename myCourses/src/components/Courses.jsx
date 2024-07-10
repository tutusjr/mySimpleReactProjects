import PropTypes from "prop-types";
import CourseContext from "../../context/CourseContext";
import { useContext, useState } from "react";
export default function Courses() {
  const { courses } = useContext(CourseContext);
  const [index, setIndex] = useState(0);

  const { title, price, content } = courses[index];

  const random = () => {
    setIndex(Math.floor(Math.random() * courses.length));
  }

  const leftButton = () => {
    setIndex(index - 1);
    if(index === 0){
      setIndex(courses.length - 1);
    }
  }
  const rightButton = () => {
    setIndex(index + 1);
    if(index === courses.length - 1){
      setIndex(0);
    }
  };
  console.log(courses.length)
  console.log(index)
  return (
    <div className="courses-container">
      <div className="map-container">
        {/* {courses.map((course, index) => (
          <Course key={index} course={course} />
        ))} */}
        <button onClick={leftButton}>sol</button>
        <div className="card-container">
          <button onClick={random}>rastgele</button>
          <h2>{title}</h2>
          <h4>{price} TL</h4>
          <p className="card-content">{content}</p>
        </div>
        <button onClick={rightButton}>sag</button>
      </div>
    </div>
  );
}

Courses.propTypes = {
  courses: PropTypes.array,
  deletebyId: PropTypes.func,
};
