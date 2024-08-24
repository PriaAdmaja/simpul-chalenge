import iconCLockDark from "../../../assets/icons/icon-clock-dark.svg";
import iconCLock from "../../../assets/icons/icon-clock.svg";
import DatePickerComponent from "./DatePickerComponent";

const DateComponent = ({
  date,
  editDate,
}: {
  date: string | Date | null;
  editDate: (newDate: string | null) => void;
}) => {
  
  return (
    <section className="flex gap-3 items-center py-3">
      <img
        src={date === null ? iconCLockDark : iconCLock}
        alt="clock"
        className="w-5 h-5"
      />
      <DatePickerComponent dateValue={date as string} setDateValue={editDate}/>
    </section>
  );
};

export default DateComponent;
