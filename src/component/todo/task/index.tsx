import { EditTaskProps } from "..";
import { TaskListType } from "../../../data/todo";
import DateComponent from "./DateComponent";
import DescriptionComponent from "./DescriptionComponent";
import iconUncheck from "../../../assets/icons/icon-uncheck.svg";
import iconCheck from "../../../assets/icons/icon-check.svg";
import TitleComponent from "./TitleComponent";
import { useState } from "react";

const Task = ({
  data,
  editTask,
  deleteTask
}: {
  data: TaskListType;
  editTask: (props: EditTaskProps) => void;
  deleteTask: (id: number) => void;
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
  const editTitleStatus = (newTitleStatus: boolean) => {
    const newData = { ...data, is_title_fix: newTitleStatus };
    editTask({ id: data.id, newData });
  };

  const deleteData = () => {
    deleteTask(data.id)
  }

  return (
    <section className="flex items-start my-[22px]">
      <div
        className={` flex justify-center items-center ${
          data.is_title_fix === false ? "w-10 h-10" : "w-10 h-6"
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
          deleteTask={deleteData}
          editTitleStatus={editTitleStatus}
          isTitleFix={data.is_title_fix}
          isFinish={data.is_finish}
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
