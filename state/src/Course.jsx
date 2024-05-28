import { useState } from "react";
import Angular from "./assets/images/angular.jpg";
import Ccharp from "./assets/images/ccsharp.png";
import kompleweb from "./assets/images/kompleweb.jpg";
import bootstrap5 from "./assets/images/bootstrap5.png";
export default function Course() {
  const getRandomCourse = () => {
    const courseArray = [Angular, Ccharp, kompleweb, bootstrap5];
    return courseArray[Math.floor(Math.random() * courseArray.length)];
  };

  const addCourse = () => {
    setCourse([...course, getRandomCourse()]);
    console.log(course);
  };

  const [course, setCourse] = useState([]);

  return (
    <div>
      <button className="button" onClick={addCourse}>Kurs ekle</button>
      <div className="courses">
        {course.map((item, index) => (
          <img className="images" src={item} key={index} alt="" />
        ))}
      </div>
    </div>
  );
}
