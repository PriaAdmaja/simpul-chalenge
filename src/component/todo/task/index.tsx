import { EditTaskProps } from "..";
import { TaskListType } from "../../../data/todo";
import DateComponent from "./DateComponent";
import DescriptionComponent from "./DescriptionComponent";

const Task = ({
  data,
  editTask,
}: {
  data: TaskListType;
  editTask: (props: EditTaskProps) => void;
}) => {
  const editDescription = (newDesc: string) => {
    const newData = { ...data, description: newDesc };
    editTask({ id: data.id, newData });
  };
  const editDate = (newDate: string | null) => {
    const newData = { ...data, date: newDate };
    editTask({ id: data.id, newData });
  };

  return (
    <section className="flex flex-col gap-3 my-3">
      <DateComponent date={data.date} editDate={editDate}/>
      <DescriptionComponent
        desc={data.description}
        editDesc={editDescription}
      />
    </section>
  );
};

export default Task;
