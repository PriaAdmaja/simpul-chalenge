import { useState } from "react";
import iconExpand from "../../../assets/icons/icon-expand.svg";

const TaskTypeDropdown = () => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  return (
    <section className="relative w-[288px]">
      <button
        className="flex items-center justify-center gap-3 hover:scale-105 ease-out duration-100 border border-solid border-border-dark rounded-md px-4 py-2 mx-auto"
        onClick={() => setIsExpand(!isExpand)}
        type="button"
      >
        <p className="font-semibold text-bg-main-secondary">My Task</p>
        <img
          src={iconExpand}
          alt="expand"
          className={`w-[10px] ${
            isExpand ? "rotate-180" : ""
          } ease-out duration-100`}
        />
      </button>
      {isExpand && (
        <section className="absolute border border-solid border-border-dark bg-white rounded-md w-full mt-1 overflow-hidden">
          <button
            className="w-full py-2 px-4 font-semibold text-bg-main-secondary text-start hover:bg-slate-50"
            onClick={() => {
              setIsExpand(false);
            }}
          >
            Personal Errands
          </button>
          <div className="w-full h-[1px] bg-border-dark" />
          <button
            className="w-full py-2 px-4 font-semibold text-bg-main-secondary text-start hover:bg-slate-50"
            onClick={() => {
              setIsExpand(false);
            }}
          >
            Urgent To-Do
          </button>
        </section>
      )}
    </section>
  );
};

export default TaskTypeDropdown;
