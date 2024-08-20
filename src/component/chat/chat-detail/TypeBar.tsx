const TypeBar = () => {
  return (
    <section className="flex items-center px-5 h-10 w-full border-solid border border-border-dark rounded-md ">
      <input
        placeholder="Type a new message"
        className="flex-1 outline-none placeholder:text-placeholder-color"
      />
    </section>
  );
};

export default TypeBar;
