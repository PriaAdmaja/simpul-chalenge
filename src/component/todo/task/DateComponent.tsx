import { DatePicker, DatePickerProps } from "antd";
import iconCLockDark from "../../../assets/icons/icon-clock-dark.svg";
import iconCLock from "../../../assets/icons/icon-clock.svg";
import iconCalendar from "../../../assets/icons/icon-calendar.svg";
import dayjs, { Dayjs } from "dayjs";

const DateComponent = ({
  date,
  editDate,
}: {
  date: string | Date | null;
  editDate: (newDate: string | null) => void;
}) => {
  const cellRender: DatePickerProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type !== "date") {
      return info.originNode;
    }

    if (typeof current === "number" || typeof current === "string") {
      return <div className="ant-picker-cell-inner">{current}</div>;
    }

    return (
      <div
        className={`w-[23px] h-[23px] rounded-full flex justify-center items-center ${
          dayjs(date).format("YYYY-MM-DD") ===
          dayjs(current).format("YYYY-MM-DD")
            ? "border border-solid border-primary"
            : ""
        }`}
      >
        {current.date()}
      </div>
    );
  };
  return (
    <section className="flex gap-3 items-center py-3">
      <img
        src={date === null ? iconCLockDark : iconCLock}
        alt="clock"
        className="w-5 h-5"
      />
      <DatePicker
        allowClear={false}
        value={date === null || date === undefined ? null : dayjs(date)}
        cellRender={cellRender}
        onChange={(date) => {
          if (date === null) {
            editDate(null);
          } else {
            editDate(dayjs(date).format("YYYY-MM-DD"));
          }
        }}
        variant="borderless"
        className="w-[193px] h-10 border border-solid border-border-dark rounded-md font-lato text-base text-bg-main-secondary placeholder:text-bg-main-secondary"
        placeholder="Set Date"
        format="DD/MM/YYYY"
        style={{ fontSize: "16px" }}
        suffixIcon={
          <img src={iconCalendar} alt="calendar" className="w-[13px]" />
        }
        placement="bottomLeft"
        popupClassName="font-lato"
      />
    </section>
  );
};

export default DateComponent;
