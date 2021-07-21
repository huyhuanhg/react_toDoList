import TaskForm from "./task_form/TaskForm";

function UpdatePage({computedMatch, ...args}) {
    return (
        <TaskForm {...args} computedMatch={computedMatch} type="update"/>
    );
}

export default UpdatePage;
