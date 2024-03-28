"use client";
import bgHeaderDesktop from "@/app/assets/images/bg-header-desktop.svg";
import bgHeaderMobile from "@/app/assets/images/bg-header-mobile.svg";
import { League_Spartan } from "next/font/google";
const leagueSpartan = League_Spartan({ subsets: ["latin"] });
import data from "@/data";
import Navbar from "./Components/Navbar";
import dot from "@/app/assets/images/dot.svg";
import { useState } from "react";
type StringArray = string[];
export default function Home() {
  const [filterList, setFilterList] = useState<StringArray>([]);
  console.log(data);
  console.log(filterList);

  const filterListHandler = (item: string) => {
    if (!filterList.includes(item)) {
      setFilterList([...filterList, item]);
    }
  };

  console.log(
    data.filter((item) => {
      for (const itm of item.languages) {
        return filterList.includes(itm);
      }
    })
  );

  return (
    <main
      className={`${leagueSpartan.className} bg-light flex flex-col min-h-screen pb-5 `}
    >
      <div className='w-full bg-primary'>
        <img
          src={bgHeaderDesktop.src}
          alt=''
          className='w-full sm:flex hidden'
        />
        <img
          src={bgHeaderMobile.src}
          alt=''
          className='w-full sm:hidden flex'
        />
      </div>
      <div className='flex-1 mt-10 container mx-0 sm:mx-auto max-w-screen-md lg:max-w-screen-lg md:max-w-screen-md px-2 sm:px-0  relative'>
        {filterList.length > 0 && (
          <div className='px-2 sm:px-0 w-full container mx-0 sm:mx-auto max-w-screen-md lg:max-w-screen-lg md:max-w-screen-md navbar top-[-40px]'>
            <Navbar filterList={filterList} setFilterList={setFilterList} />
          </div>
        )}
        {data
          .filter(
            (item) =>
              filterList.length === 0 ||
              filterList.every((lang) => item.languages.includes(lang))
          )

          .map((item) => {
            return (
              <div className='w-full bg-white mt-10 sm:mt-4 p-2 sm:p-4 hover:shadow-lg flex flex-col sm:flex-row justify-between sm:items-center rounded-md hover:border-l-4 hover:border-primary border-l-4 border-transparent relative'>
                <div className='flex items-start'>
                  <img
                    src={item.logo}
                    alt='Logo'
                    className='w-12 h-12 sm:w-16 sm:h-16 rounded-full absolute sm:static top-[-20px]'
                  />
                  <div className='flex flex-col ml-2 sm:ml-5 mt-7 sm:mt-0'>
                    <div className='flex'>
                      <p className='text-primary font-bold'>{item.company}</p>
                      <div className='flex items-center ml-4'>
                        {item.new && (
                          <div className='px-2  flex justify-center items-center text-white rounded-full bg-primary text-[12px]'>
                            <p className='uppercase pt-0.5'>New!</p>
                          </div>
                        )}
                        {item.featured && (
                          <div className='ml-2 px-2  flex justify-center items-center text-white rounded-full bg-black text-[12px]'>
                            <p className='uppercase pt-0.5'>Featured</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className='font-bold text-lg hover:text-primary mt-2 sm:mt-0 cursor-pointer'>
                      {item.position}
                    </p>
                    <div className='flex justify-between items-center w-[210px]'>
                      <p className='text-slate-500 text-[12px]'>
                        {item.postedAt}
                      </p>
                      <img
                        src={dot.src}
                        alt=''
                        className='w-1 h-1 fill-slate-500'
                      />
                      <p className='text-slate-500 text-[12px]'>
                        {item.contract}
                      </p>
                      <img
                        src={dot.src}
                        alt=''
                        className='w-1 h-1 fill-slate-500'
                      />
                      <p className='text-slate-500 text-[12px]'>
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
                <hr className='block sm:hidden my-3 border-[2px] border-light' />
                <div className='flex items-center flex-wrap'>
                  {item.languages?.map((i, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => filterListHandler(i)}
                        className='mr-2 mt-2 cursor-pointer bg-light px-2 py-1 rounded-md text-primary hover:bg-primary hover:text-white'
                      >
                        {i}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
}
