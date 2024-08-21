import Button from "../Button";
import TaskTypeDropdown from "./task-type-dropdown";

const ToDo = () => {
  return (
    <>
      <header className="flex justify-between items-center mx-8 mt-6">
        <TaskTypeDropdown />
        <Button>New Task</Button>
      </header>
    </>
  );
};

export default ToDo;
