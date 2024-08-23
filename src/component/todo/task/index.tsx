import { EditTaskProps } from "..";
import { TaskListType } from "../../../data/todo";
import DateComponent from "./DateComponent";
import DescriptionComponent from "./DescriptionComponent";
import iconUncheck from "../../../assets/icons/icon-square.svg";
import iconCheck from "../../../assets/icons/icon-checklist.svg";
import TitleComponent from "./TitleComponent";
import { useState } from "react";

const Task = ({
  data,
  editTask,
}: {
  data: TaskListType;
  editTask: (props: EditTaskProps) => void;
}) => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const editDescription = (newDesc: string) => {
    const newData = { ...data, description: newDesc };
    editTask({ id: data.id, newData });
  };
  const editDate = (newDate: string | null) => {
    const newData = { ...data, date: newDate };
    editTask({ id: data.id, newData });
  };
  const editStatus = (newStatus: boolean) => {
    const newData = { ...data, is_finish: newStatus };
    editTask({ id: data.id, newData });
  };
  const editTitle = (newTitle: string) => {
    const newData = { ...data, title: newTitle };
    editTask({ id: data.id, newData });
  };

  return (
    <section className="flex items-start my-[22px]">
      <div
        className={` flex justify-center items-center ${
          data.title === "" ? "h-10 w-10" : "w-10 mt-2"
        }`}
      >
        <img
          src={data.is_finish ? iconCheck : iconUncheck}
          alt="check"
          className="w-[18px] h-[18px] cursor-pointer"
          onClick={() => editStatus(!data.is_finish)}
        />
      </div>
      <section className="flex flex-col flex-1 pr-[22px]">
        <TitleComponent
          title={data.title}
          editTitle={editTitle}
          dueDate={data.date}
          isShow={isShow}
          setIsShow={setIsShow}
        />

        <section
          className={`flex flex-col ease-out duration-300 ${
            isShow ? "h-fit" : "h-0"
          }`}
        >
          {isShow && (
            <>
              <DateComponent date={data.date} editDate={editDate} />
              <DescriptionComponent
                desc={data.description}
                editDesc={editDescription}
              />
            </>
          )}
        </section>
      </section>
    </section>
  );
};

export default Task;
