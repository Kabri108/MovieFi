import React, { useState, Fragment, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FaAngleDown, FaCheck } from "react-icons/fa";
import { LanguageData, RatesData, TimesData, YearData } from '../../Data/FilterData';


function Filters( props) {
  const {
    categories,category,setCategory,language,setLanguage,year,setYear,times,setTimes,rates,setRates
  }=props?.data;
  
  const Filter = [
    {
      value: category,
      onChange: setCategory,
      items: categories?.length > 0 ? [{ title: "All Categories" }, ...categories]
        : [{ title: "No category found" }],
    },
    {
      value: year,
      onChange: setYear,
      items: YearData,
    },
    {
      value: language,
      onChange: setLanguage,
      items: LanguageData,
    },
    {
      value: times,
      onChange: setTimes,
      items: TimesData,
    },
    {
      value: rates,
      onChange: setRates,
      items: RatesData,
    },
  ];


  return (
    <>
      <div className='my-1 bg-dry border border-gray-800 grid md:grid-cols-5 grid-cols-2 lg:gap-12  gap-2 rounded p-2 shadow-lg'>
        {
          Filter.map((item, index) => (
            <Listbox key={index} value={item.value} onChange={item.onChange}>
              <div className="relative">
                <Listbox.Button className=' relative border border-gray-800 w-full text-white bg-main rounded-md cursor-default py-4 pl-6 pr-10 text-left text-sm '>
                  <span className=' truncate block'>{item.value.title}</span>
                  <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                    <FaAngleDown className='w-4 h-5' />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10">
                    {
                      item.items.map((iterm, i) => (
                        <Listbox.Option
                          key={i}
                          className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-subMain text-white' : 'text-main'
                            }`}
                          value={iterm}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                  }`}>{iterm.title}</span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <FaCheck className='w-5 h-5' aria-hidden='true' />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))
                    }
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          ))
        }
      </div>
    </>
  )
}

export default Filters
