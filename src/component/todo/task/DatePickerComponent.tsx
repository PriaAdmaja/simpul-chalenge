import {
  ChangeEvent,
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import iconCalendar from "../../../assets/icons/icon-calendar.svg";
import dayjs from "dayjs";
import iconExpand from "../../../assets/icons/icon-expand.svg";

const useOutsideComponent = (
  ref: MutableRefObject<HTMLDivElement | null>,
  cb: () => void
) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleCLickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }
    document.addEventListener("mousedown", handleCLickOutside);
    return () => removeEventListener("mousedown", handleCLickOutside);
  }, [cb, ref]);
};

const DatePickerComponent = ({
  dateValue,
  setDateValue,
}: {
  dateValue: string | null;
  setDateValue: (d: string) => void;
}) => {
  const [showDate, setShowDate] = useState<boolean>(false);
  const [isDateMove, setIsDateMove] = useState<boolean>(false);
  const [selectedMonth, setSelectedMonth] = useState<string>(
    dayjs().format("YYYY-MM")
  );

  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string | Date | null>();

  useEffect(() => {
    if (dateValue === null || dateValue === "") {
      setSelectedDate(dateValue);
    } else {
      setSelectedDate(dayjs(dateValue).format("DD/MM/YYYY"));
    }
  }, [dateValue]);

  const dateListRef = useRef<HTMLDivElement | null>(null);
  useOutsideComponent(dateListRef, () => {
    setShowDate(false);
    setIsDateMove(false);
  });

  const reduceMonth = () => {
    const newMonth = dayjs(selectedMonth)
      .subtract(1, "month")
      .format("YYYY-MM");
    setSelectedMonth(newMonth);
  };
  const addMonth = () => {
    const newMonth = dayjs(selectedMonth).add(1, "month").format("YYYY-MM");
    setSelectedMonth(newMonth);
  };

  const datesInMonth = useMemo(() => {
    const daysLength = dayjs(selectedMonth).daysInMonth();
    const startDay = dayjs(`${selectedMonth}-01`).day();
    const addNull = startDay === 0 ? 6 : startDay - 1;
    const result = [];

    for (let j = 0; j < addNull; j++) {
      result.push(null);
    }

    for (let i = 1; i <= daysLength; i++) {
      result.push(i);
    }

    return result;
  }, [selectedMonth]);

  const selectDate = (d: number) => {
    const date = `${selectedMonth}-${d < 10 ? "0" + String(d) : d}`;
    setSelectedDate(dayjs(date).format("DD/MM/YYYY"));
    setDateValue(date);
  };

  const sameDate = (d: number) => {
    const reversedDate = String(selectedDate).split("/").reverse().join("-");
    return (
      dayjs(reversedDate).format("YYYY-MM-DD") ===
      `${selectedMonth}-${d < 10 ? "0" + String(d) : d}`
    );
  };

  const saveDate = () => {
    const reversedDate = String(selectedDate).split("/").reverse().join("-");
    if (dayjs(reversedDate).format("YYYY-MM-DD") === "Invalid Date") {
      return setSelectedDate("");
    }
    setDateValue(reversedDate)
    setSelectedMonth(dayjs(reversedDate).format("YYYY-MM"));
  };

  return (
    <section
      className="relative w-[193px]"
      onBlur={() => {
        if (!isMouseEnter) {
          setShowDate(false);
          setIsDateMove(false);
        }
      }}
    >
      <section className="w-full flex items-center justify-between gap-2 h-10 px-4 border border-border-dark border-solid rounded-md">
        <input
          className="outline-none w-[80%] placeholder:text-bg-main-secondary"
          placeholder="Set Date"
          onFocus={() => {
            setShowDate(true);
            setTimeout(() => {
              setIsDateMove(true);
            }, 5);
          }}
          value={selectedDate as string}
          onBlur={saveDate}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSelectedDate(e.target.value);
          }}
        />
        <img src={iconCalendar} alt="calendar" className="w-4 h-4" />
      </section>
      {showDate && (
        <section
          className={`absolute w-[258px] min-h-fit bg-white rounded-md border border-solid border-border-dark mt-2 ${
            isDateMove ? "left-[161px]" : "left-0"
          } ease-out duration-300 p-4`}
          onMouseEnter={() => {
            setIsMouseEnter(true);
          }}
          onMouseLeave={() => {
            setIsMouseEnter(false);
          }}
          ref={dateListRef}
        >
          <div className="flex items-center justify-between">
            <img
              src={iconExpand}
              alt="left"
              className="w-3 h-3 rotate-90 cursor-pointer"
              onClick={reduceMonth}
            />
            <p className="text-bg-main-secondary ">
              {dayjs(selectedMonth).format("MMMM YYYY")}
            </p>
            <img
              src={iconExpand}
              alt="right"
              className="w-3 h-3 -rotate-90 cursor-pointer"
              onClick={addMonth}
            />
          </div>
          <section className="mt-2">
            <header className="grid grid-cols-7 text-bg-main-secondary w-full text-center">
              <p>M</p>
              <p>T</p>
              <p>W</p>
              <p>Th</p>
              <p>F</p>
              <p>S</p>
              <p>S</p>
            </header>
            <div className="grid grid-cols-7 text-bg-main-secondary font-normal">
              {datesInMonth.map((d, i) => {
                return (
                  <div
                    key={i}
                    className="flex justify-center items-center mt-2"
                  >
                    {d !== null && (
                      <button
                        className={`w-7 h-7 rounded-full hover:bg-slate-100 ${
                          sameDate(d)
                            ? "border border-solid border-primary"
                            : "border border-solid border-white"
                        }`}
                        onClick={() => {
                          selectDate(d);
                          setTimeout(() => {
                            setShowDate(false);
                            setIsDateMove(false);
                          }, 200);
                        }}
                      >
                        {d}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </section>
      )}
    </section>
  );
};

export default DatePickerComponent;
