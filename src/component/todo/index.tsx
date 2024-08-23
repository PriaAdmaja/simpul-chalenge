import { useLocalStorage } from "@uidotdev/usehooks";
import { TaskListType } from "../../data/todo";
import Button from "../Button";
import Task from "./task";
import TaskTypeDropdown from "./task-type-dropdown";
import { useRef } from "react";

export type EditTaskProps = {
  newData: TaskListType;
  id: number;
};

const ToDo = () => {
  const [taskList, setTaskList] = useLocalStorage<TaskListType[]>(
    "todoList",
    []
  );
  console.log(taskList);
  const taskListRef = useRef<HTMLDivElement | null>(null);

  const createNewTask = () => {
    taskListRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
    if (taskList.length === 0) {
      const emptyData: TaskListType = {
        id: 1,
        date: null,
        title: "",
        description: "",
        is_finish: false,
        is_title_fix: false,
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
        is_title_fix: false,
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
    tempData[selectedIndex].is_title_fix = newData.is_title_fix;
    setTaskList(tempData);
  };

  const deleteTask = (id: number) => {
    const newData = [...taskList].filter((d) => d.id !== id);
    setTimeout(() => {
      setTaskList(newData);
    }, 200);
  };

  return (
    <section className="flex flex-col h-full">
      <header className="flex justify-between items-center mx-8 mt-6">
        <TaskTypeDropdown />
        <Button onClick={createNewTask}>New Task</Button>
      </header>

      <section
        className="ml-8 mr-5 flex-1 overflow-y-scroll mt-[22px] mb-6"
        ref={taskListRef}
      >
        {taskList.map((d, i) => {
          return (
            <section key={i}>
              <Task data={d} editTask={editTask} deleteTask={deleteTask} />
              {i !== taskList.length - 1 && (
                <div className="w-full h-[1px] bg-border-dark" />
              )}
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default ToDo;
