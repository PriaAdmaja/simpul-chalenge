import searchIcon from '../../assets/icons/icon-search-dark.svg'

const SearchBar = () => {
  return (
    <section className="flex items-center px-20 h-10 w-full border-solid border border-border-dark rounded-md ">
      <input placeholder='Search' className='flex-1 outline-none placeholder:text-placeholder-color'/>
      <img src={searchIcon} alt='search' className='w-3 h-3'/>
    </section>
  );
};

export default SearchBar;
