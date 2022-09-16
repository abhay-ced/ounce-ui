import "./App.css";
import TaskTwoClone from "./components/taskTwoClone/TaskTwoClone";
import TaskOne from "./pages/TaskOne";
import TaskTwo from "./pages/taskTwo/TaskTwo";
import Notification from "./components/notifications/Notification";
function App() {
  return (
    <div className="App">
      {/* <Notification /> */}
      {/* <TaskOne /> */}
      <TaskTwo />
    </div>
  );
}

export default App;
