import React, { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/UseFetch";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { MyContext } from "../../hooks/Mycontext";
import Popup from "./Popup";

function Fetch() {
    const [input, setInput] = useState('')
    const { width, height } = useWindowSize();
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
    <div className="h-full">
    <div className="flex flex-col items-center justify-center pt-6 p-2  h-full">
        <Confetti width={width} height={height} recycle={false} gravity={0.08} run={isFound} numberOfPieces={400} />
      <div>
        <h1 className="text-green-500 font-bold text-2xl text-start underline mb-4">Search for Your Lost Id</h1>
      <p className="text-gray-500 md:mb-4 mb-2 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Enter your details to store them in our secure database. If you lose your IDs, you can retrieve them using
              the information you provide.
            </p>

        <form className="flex flex-col p-2 md:mb-6 mb-4 lg:flex-row shadow-md shadow-slate-500/10 rounded-md lg:divide-x justify-between items-center">
          <input
            onChange={(e) => {setInput(e.target.value)
            console.log(input)}}
            type="number"
            className="p-4 md:w-[60%] w-full outline-none rounded-md mb-4 md:mb-0"
            placeholder="Enter your ID or Reg No number"
          />
          <button
            type="submit"
            disabled={input <= 999999}
            className={`rounded-md  w-full md:w-[30%]  p-4 ${
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
    </div>
  );
}

export default Fetch;
