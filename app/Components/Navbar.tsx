type Props = {
  filterList: string[];
  setFilterList: React.Dispatch<React.SetStateAction<string[]>>;
};

const Navbar = ({ filterList, setFilterList }: Props) => {
  const filterListHandler = (item: string) => {
    if (filterList.includes(item)) {
      setFilterList(filterList.filter((x) => x !== item));
    }
  };

  return (
    <div className='px-10 py-2 sm:py-0 flex justify-between items-center sm:h-14 bg-white rounded-md shadow-2xl '>
      <div className='filters flex flex-wrap justify-start items-center'>
        {filterList?.map((item, index) => {
          return (
            <div className='mr-2 my-2 flex items-center' key={index}>
              <span className=' bg-light px-2 pt-0.5 rounded-l h-[6] flex justify-center items-center text-primary '>
                {item}
              </span>
              <span
                className='bg-primary cursor-pointer py-0.5 px-2 rounded-r hover:bg-black text-white flex justify-centeri items-center'
                onClick={() => {
                  filterListHandler(item);
                }}
              >
                <svg
                  fill='none'
                  strokeWidth={3}
                  width={15}
                  height={22}
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                 
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18 18 6M6 6l12 12'
                  />
                </svg>
              </span>
            </div>
          );
        })}
      </div>
      <div className='buttons'>
        <p
          className='text-primary hover:underline cursor-pointer'
          onClick={() => setFilterList([])}
        >
          Clear
        </p>
      </div>
    </div>
  );
};

export default Navbar;
