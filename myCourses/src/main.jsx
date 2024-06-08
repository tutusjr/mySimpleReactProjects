import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CourseProvider } from "../context/CourseContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <CourseProvider>
        <App />
    </CourseProvider>
);
