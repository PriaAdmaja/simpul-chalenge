import searchIcon from './assets/icons/icon-search.svg'

function App() {
  return (
    <section className="flex h-screen bg-bg-main-primary">
      <section className="w-[285px] border-r-[1px] border-r-line-primary"></section>
      <section className="flex-1">
        <nav className='h-[58px] pl-5 flex items-center bg-bg-main-secondary'>
          <img src={searchIcon} alt='search' className='w-4 h-4'/>
        </nav>
      </section>
    </section>
  );
}

export default App;
