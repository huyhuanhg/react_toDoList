import TaskForm from "./task_form/TaskForm";
import Main from "../layouts/Main";

function CreatePage({createTask, createKey}) {
    return(
        <TaskForm createTask={createTask} createKey={createKey} type="create"/>
    );
}
export default CreatePage;
