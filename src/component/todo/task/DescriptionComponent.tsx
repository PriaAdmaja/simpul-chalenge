import { ChangeEvent, useState } from "react";
import iconPen from "../../../assets/icons/icon-pen.svg";
import iconPenDark from "../../../assets/icons/icon-pen-dark.svg";

const DescriptionComponent = ({
  desc,
  editDesc,
}: {
  desc: string;
  editDesc: (d: string) => void;
}) => {
  const [editable, setEditable] = useState<boolean>(false);
  
  return (
    <section className="flex gap-3 items-start">
      <button
        onClick={() => {
          setEditable(!editable);
        }}
      >
        <img
          src={!desc || desc === "" ? iconPenDark : iconPen}
          alt="edit"
          className="w-[15px] h-[15px]"
        />
      </button>
      {editable ? (
        <textarea
          value={desc}
          className="flex-1 bg-inherit p-2"
          placeholder="No Description"
          onBlur={() => {
            setEditable(false);
          }}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            editDesc(e.target.value);
          }}
          autoFocus
        />
      ) : (
        <p
          onClick={() => {
            setEditable(true);
          }}
          className="flex-1 text-bg-main-secondary"
        >
          {desc === "" ? "No Description" : desc}
        </p>
      )}
    </section>
  );
};

export default DescriptionComponent;
