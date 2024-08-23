import { useLocalStorage } from "@uidotdev/usehooks";
import { TaskListType } from "../../data/todo";
import Button from "../Button";
import Task from "./task";
import TaskTypeDropdown from "./task-type-dropdown";

export type EditTaskProps = {
  newData: TaskListType;
  id: number;
};

const ToDo = () => {
  const [taskList, setTaskList] = useLocalStorage<TaskListType[]>(
    "todoList",
    []
  );

  const createNewTask = () => {
    if (taskList.length === 0) {
      const emptyData: TaskListType = {
        id: 1,
        date: null,
        title: "",
        description: "",
        is_finish: false,
      };
      setTaskList([emptyData]);
    } else {
      const idList = taskList.map((d) => d.id);
      const nextId = idList.sort((a, b) => b - a)[0] + 1;

      const emptyData: TaskListType = {
        id: nextId,
        date: null,
        title: "",
        description: "",
        is_finish: false,
      };

      const newData: TaskListType[] = [...taskList].concat([emptyData]);
      setTaskList(newData);
    }
  };

  const editTask = ({ newData, id }: EditTaskProps) => {
    const selectedIndex = taskList.findIndex((d) => d.id === id);
    const tempData = [...taskList];
    tempData[selectedIndex].date = newData.date;
    tempData[selectedIndex].description = newData.description;
    tempData[selectedIndex].title = newData.title;
    tempData[selectedIndex].is_finish = newData.is_finish;
    setTaskList(tempData);
  };

  return (
    <>
      <header className="flex justify-between items-center mx-8 mt-6">
        <TaskTypeDropdown />
        <Button onClick={createNewTask}>New Task</Button>
      </header>
      <section className="mx-8">
        {taskList.map((d, i) => {
          return (
            <>
              <Task key={i} data={d} editTask={editTask} />
              {i !== taskList.length - 1 && (
                <div className="w-full h-[1px] bg-border-dark" />
              )}
            </>
          );
        })}
      </section>
    </>
  );
};

export default ToDo;
