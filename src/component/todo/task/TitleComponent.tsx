import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { ChangeEvent, useState } from "react";
import iconExpand from "../../../assets/icons/icon-expand.svg";
import iconTripleDot from '../../../assets/icons/icon-triple-dot.svg'

const TitleComponent = ({
  title,
  dueDate,
  editTitle,
  isShow,
  setIsShow,
}: {
  title: string;
  isShow: boolean;
  setIsShow: (d: boolean) => void;
  dueDate: string | Date | null;
  editTitle: (d: string) => void;
}) => {
  const [titleValue, setTitleValue] = useState<string>(title);

  dayjs.extend(duration);

  const dueDateValue =
    (dueDate === null ? 0 : dayjs(dueDate).valueOf()) - dayjs().valueOf();
  const dayLeft = dayjs.duration(dueDateValue).asDays();
  return (
    <section className="flex items-center flex-1 w-full gap-3">
      {title === "" ? (
        <section className="flex items-center px-4 h-10 w-full border-solid border border-border-dark rounded-md">
          <input
            value={titleValue}
            placeholder="Type Task Title"
            className="flex-1 outline-none placeholder:text-placeholder-color"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setTitleValue(e.target.value);
            }}
            onBlur={() => editTitle(titleValue)}
          />
        </section>
      ) : (
        <section className="flex items-center w-full">
          <p className="font-bold text-base text-bg-main-secondary">{title}</p>
        </section>
      )}
      {dueDate !== null && (
        <p className="text-[#eb5757] min-w-fit">
          {Math.ceil(dayLeft)} Days Left
        </p>
      )}
      {dueDate !== null && (
        <p className="min-w-fit">{dayjs(dueDate).format("DD/MM/YYYY")}</p>
      )}
      <img
        src={iconExpand}
        alt="expand"
        className={`${isShow ? "rotate-180" : ""} ease-out duration-300 cursor-pointer`}
        onClick={() => setIsShow(!isShow)}
      />
      <img src={iconTripleDot} alt="option" className="cursor-pointer"/>
    </section>
  );
};

export default TitleComponent;
