import iconSpin from "../assets/icons/icon-spin.svg";

const Loading = ({ text }: { text?: string }) => {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5">
        <img src={iconSpin} alt="spin" className="animate-spin select-none" />
        {text && <p className="text-center">{text}</p>}
      </div>
    </section>
  );
};

export default Loading;
