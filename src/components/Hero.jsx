import React, { useContext, useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { FaPagelines } from "react-icons/fa";
import useFetch from "../../hooks/UseFetch";
import Fetch from "./Fetch";
import MyProvider, { MyContext } from "../../hooks/Mycontext";

function Hero() {
  const { width, height } = useWindowSize();
  const {
    data: statsData,
    loading: statsLoading,
    error: statsError,
  } = useFetch("https://tumeiget.vercel.app/stats/");
  return (
    <MyProvider>
       <Confetti width={width} height={height} />
      <div className="flex flex-col-reverse md:h-screen md:flex-row justify-evenly items-start  w-full px-4 md:px-14 lg:px-20 mt-5">
        <div className="md:text-6xl text-2xl font-semibold  md:max-w-[50%]">
          <FaPagelines />
          <p className="text-green-500 font-semibold">
            <span className="text-blue-500 font-semibold">
              Helping students find their
            </span>{" "}
            Lost ID Cards
          </p>
          <hr className="bg-blue-500 mt-2 h-1" />
          <p className=" mt-4 text-sm md:text-[1.5rem] font-light">
            Exciting update! Our app is geared up to shoot you a notification
            via SMS as soon as we locate your lost ID. Get ready for the
            ultimate scoop on where to retrieve it! 🌟 Stay tuned to your
            phone—we're on a mission to reunite you with your card, pronto!
          </p>
          <div className="w-full flex flex-row justify-between">
            <FaPagelines />
            <FaPagelines />
          </div>
          <p className="underline text-blue-500 mb-3 text-center">Our stats</p>
          <div className="flex flex-row justify-evenly">
            <div>
              {statsLoading && (
                <p className="text-sm text-blue-300">Loading...</p>
              )}
              {statsError && (
                <p className="text-red-500 md:text-md text-sm italic">
                  Error fetching Data
                </p>
              )}
              {statsData && <p className="text-center">{statsData.Found}</p>}
              <p className="text-sm font-semibold text-center">
                Lost ID's in our database👀
              </p>
            </div>
            <div>
              {statsLoading && (
                <p className="text-sm text-blue-300">Loading...</p>
              )}
              {statsError && (
                <p className="text-red-500 md:text-md text-sm italic">
                  Error fetching Data
                </p>
              )}
              {statsData && (
                <p className="text-center">{statsData.collected}</p>
              )}
              <p className="text-sm  text-center font-semibold">
                Collected ID's🥳
              </p>
            </div>
          </div>
        </div>
        <Fetch />
      </div>
    </MyProvider>
  );
}

export default Hero;
