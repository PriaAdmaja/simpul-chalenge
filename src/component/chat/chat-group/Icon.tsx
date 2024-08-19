import iconPersonGray from "../../../assets/icons/icon-person-gray.svg";
import iconPerson from "../../../assets/icons/icon-person.svg";

const IconChatGroup = () => {
  return (
    <section className="relative h-[34px] w-[53px] cursor-pointer">
      <div className="w-[34px] h-[34px] rounded-full flex justify-center items-center bg-back-icon-person-bg">
        <img
          src={iconPersonGray}
          alt="person-gray"
          className="w-[18px] h-[18px]"
        />
      </div>
      <div className="w-[34px] h-[34px] rounded-full flex justify-center items-center bg-primary absolute right-0 top-0">
        <img src={iconPerson} alt="person" className="w-[18px] h-[18px]" />
      </div>
    </section>
  );
};

export default IconChatGroup;
