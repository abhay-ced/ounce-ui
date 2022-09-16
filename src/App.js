import "./App.css";
import TaskTwoClone from "./components/taskTwoClone/TaskTwoClone";
import TaskOne from "./pages/TaskOne";
import TaskTwo from "./pages/taskTwo/TaskTwo";
import Notification from "./components/notifications/Notification";
import TaxonomyAttempt from "./components/taskTwoClone/TaxonomyAttempt";
import TaxonomyListSelect from "./components/taskTwoClone/TaxonomySelectList";
function App() {
  return (
    <div className="App">
      {/* <Notification /> */}
      {/* <TaskOne /> */}
      {/* <TaskTwo /> */}
      {/* <TaskTwoClone /> */}
      <TaxonomyAttempt />
      {/* <TaxonomyListSelect /> */}
    </div>
  );
}

export default App;
