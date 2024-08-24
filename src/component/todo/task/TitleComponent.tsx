import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { ChangeEvent, useState } from "react";
import iconExpand from "../../../assets/icons/icon-expand.svg";
import iconTripleDot from "../../../assets/icons/icon-triple-dot.svg";

const TitleComponent = ({
  title,
  dueDate,
  editTitle,
  isShow,
  isFinish,
  setIsShow,
  deleteTask,
  editTitleStatus,
  isTitleFix,
}: {
  title: string;
  isShow: boolean;
  isFinish: boolean;
  setIsShow: (d: boolean) => void;
  dueDate: string | Date | null;
  editTitle: (d: string) => void;
  editTitleStatus: (d: boolean) => void;
  deleteTask: () => void;
  isTitleFix: boolean;
}) => {
  const [showOption, setShowOption] = useState<boolean>(false);

  dayjs.extend(duration);

  const dueDateValue =
    (dueDate === null ? 0 : dayjs(dueDate).valueOf()) - dayjs().valueOf();
  const dayLeft = dayjs.duration(dueDateValue).asDays();

  return (
    <section className="flex items-start flex-1 w-full gap-3">
      {!isTitleFix ? (
        <section className="flex items-center px-4 h-10 w-full border-solid border border-border-dark rounded-md">
          <input
            value={title}
            placeholder="Type Task Title"
            className="flex-1 outline-none placeholder:text-placeholder-color"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              editTitle(e.target.value);
            }}
            onBlur={() => {
              if (title !== "") {
                editTitleStatus(true);
              }
            }}
          />
        </section>
      ) : (
        <section className="flex items-center w-full relative">
          <p
            className={`font-bold text-base  ${
              isFinish ? "text-border-dark" : "text-bg-main-secondary"
            }`}
          >
            {isFinish ? <s> {title}</s> : title}
          </p>
        </section>
      )}
      {dueDate !== null && !isFinish && (
        <p className="text-[#eb5757] min-w-fit">
          {Math.ceil(dayLeft)} Days Left
        </p>
      )}
      <p
        className={`min-w-fit ${
          dueDate !== null ? "opacity-100" : "opacity-0"
        }`}
      >
        {dayjs(dueDate).format("DD/MM/YYYY")}
      </p>
      <button
        className="cursor-pointer flex justify-center items-center w-5 h-5 pt-1"
        onClick={() => setIsShow(!isShow)}
      >
        <img
          src={iconExpand}
          alt="expand"
          className={`${
            isShow ? "rotate-180" : ""
          } ease-out duration-300 w-[10px] h-[10px]`}
        />
      </button>
      <div className="relative min-w-fit">
        <button
          onClick={() => setShowOption(!showOption)}
          className="cursor-pointer min-w-fit pt-1"
        >
          <img src={iconTripleDot} alt="option" className="w-5" />
        </button>
        {showOption && (
          <button
            className="absolute right-0 top-6 text-[#eb5757] w-[126px] border border-solid border-border-dark text-left h-10 px-3 bg-white rounded-md hover:bg-slate-50"
            onClick={() => {
              deleteTask();
              setShowOption(false);
            }}
          >
            Delete
          </button>
        )}
      </div>
    </section>
  );
};

export default TitleComponent;
