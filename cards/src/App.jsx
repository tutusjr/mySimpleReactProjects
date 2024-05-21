import "./App.css";
import "bulma/css/bulma.css";
import Course from "./course";
import Angular from "./assets/images/angular.jpg";
import Ccharp from "./assets/images/ccsharp.png";
import kompleweb from "./assets/images/kompleweb.jpg";
import bootstrap5 from "./assets/images/bootstrap5.png";

function App() {
  return (
    <>
      <div className="app">
        <section className="hero is-link">
          <div className="hero-body">
            <h1 className="title">Kurslarim</h1>
          </div>
        </section>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column">
                <Course
                  image={Angular}
                  title="Angular"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam expedita autem animi! Tempora, eum? Reiciendis alias dolores quisquam fuga!"
                />
              </div>
              <div className="column">
                <Course
                  image={bootstrap5}
                  title="Bootstrap 5"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam expedita autem animi! Tempora, eum? Reiciendis alias dolores quisquam fuga!"
                />
              </div>
              <div className="column">
                <Course
                  image={kompleweb}
                  title="KompleWeb"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam expedita autem animi! Tempora, eum? Reiciendis alias dolores quisquam fuga!"
                />
              </div>
              <div className="column">
                <Course
                  image={Ccharp}
                  title="C ve C#"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam expedita autem animi! Tempora, eum? Reiciendis alias dolores quisquam fuga!"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
