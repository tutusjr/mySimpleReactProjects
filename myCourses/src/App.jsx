import { useEffect, useContext } from "react";
import "./App.css";
import Courses from "./components/Courses";
import Loading from "./components/Loading";
import CourseContext from "../context/CourseContext";

function App() {
  const { courses, fetchCourses, loading } = useContext(CourseContext);

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {courses.length === 0 ? (
            <div className="refresh">
              <h1>Kurs kalmadi</h1>
              <button className="button" onClick={fetchCourses}>
                Yenile
              </button>
            </div>
          ) : (
            <Courses courses={courses} />
          )}
        </>
      )}
    </>
  );
}

export default App;
