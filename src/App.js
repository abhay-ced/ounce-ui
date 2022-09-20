import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import TaskTwoClone from "./components/taskTwoClone/TaskTwoClone";
import TaskOne from "./pages/TaskOne";
import TaskTwo from "./pages/taskTwo/TaskTwo";
import Notification from "./components/notifications/Notification";
import TaxonomyAttempt from "./components/taskTwoClone/TaxonomyAttempt";
import TaxonomyListSelect from "./components/taskTwoClone/TaxonomySelectList";
import TaskThree from "./pages/taskThree/TaskThree";
import TaskFive from "./pages/taskFive/TaskFive";
import HeaderLayout from "./components/headerLayout/HeaderLayout";
function App() {
  return (
    <Router>
      <div className="App">
        <HeaderLayout>
          <Routes>
            <Route
              path="/"
              element={
                <h1 style={{ textAlign: "center" }}>
                  Click on navigation to see the other tasks
                </h1>
              }
            >
              {" "}
            </Route>
            <Route path="/form" element={<TaskOne />}></Route>
            <Route path="/tasktwo" element={<TaskTwo />}></Route>
            <Route path="/taxonomy" element={<TaxonomyAttempt />}></Route>
            <Route path="/select-api" element={<TaskThree />}></Route>
            <Route path="/badge" element={<TaskFive />}></Route>
          </Routes>
        </HeaderLayout>
      </div>
    </Router>
  );
}

export default App;
