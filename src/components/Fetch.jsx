import React, { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/UseFetch";
import { MyContext } from "../../hooks/Mycontext";

function Fetch() {
    const [input, setInput] = useState('')
    const url = `https://tumeiget.vercel.app/search/?search=${input}`
    const [searchData, setSearchData] = useState('')
    const {isFound, setIsFound} = useContext(MyContext)
    const {data, error, loading, refetch} = useFetch(url)
    const [Loading, setLoading] = useState(false)
    const HandleSearch = (e) => {
        e.preventDefault()
        refetch()
        if(data){
            setSearchData(data);
            setIsFound(true)
            console.log(searchData);}
    }
   
  return (
    <div className="flex flex-col items-center justify-center pt-6 p-2  h-full">
      <div>
        <p className="font-semibold mt-6">
          You too can also search for your lost Id Here:
        </p>
        <form className="flex flex-col p-2 lg:flex-row shadow-md shadow-slate-500/10 rounded-md lg:divide-x justify-center items-center">
          <input
            onChange={(e) => {setInput(e.target.value)
            console.log(input)}}
            type="number"
            className="w-full flex-1 p-4 outline-none rounded-md mb-4 md:mb-0"
            placeholder="Enter your ID or Reg No number"
          />
          <button
            type="submit"
            disabled={input <= 999999}
            className={`rounded-md md:w-fit w-full  p-4 ${
              input > 999999
                ? "cursor-pointer bg-blue-500 font-bold text-white"
                : "cursor-not-allowed text-gray-500 bg-gray-200"
            }`}  
            onClick={HandleSearch}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Fetch;
