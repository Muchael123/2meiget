import React, { useContext, useState } from "react";
import { FaPagelines } from "react-icons/fa";
import useFetch from "../hooks/UseFetch";
import Fetch from "./Fetch";
import MyProvider, { MyContext } from "../hooks/Mycontext";

function Hero() {
  const {
    data: statsData,
    loading: statsLoading,
    error: statsError,
  } = useFetch("https://tumeiget.vercel.app/stats/");
  return (
    <MyProvider>
      <div className="flex flex-col gap-10  divide-solid divide-blue-500 h-[80%] md:flex-row justify-between items-center  w-full px-4 md:px-14 lg:px-20 mt-5">
        <div className="md:max-w-[50%]">
          <p className="md:text-6xl text-2xl text-green-500 font-semibold">
            <span className="text-blue-500 font-semibold">
              Helping students find their
            </span>{" "}
            Lost ID Cards
          </p>
          <p className=" mt-4 text-sm  font-light">
            Exciting update! Our app is geared up to shoot you a notification
            via SMS as soon as we locate your lost ID. Get ready for the
            ultimate scoop on where to retrieve it! 🌟 Stay tuned to your
            phone—we're on a mission to reunite you with your card, pronto!
          </p>
          <div className="gap-4  p-3 flex flex-col">
            <p className="md:text-sm text-xs mt-6 mb-3 font-semibold">
              Give your details so we'll alert you once we find your ID
            </p>
            <button className="text-md  text-center rounded-md bg-blue-500 py-3 md:py-4 font-semibold w-[60%] text-white">
              Give us Your Details
            </button>
          </div>
        </div>
        <div className="mx-3 h-full bg-blue-500 w-1" />
        <div className="flex  flex-col-reverse gap-2">
          <div>
            <p className="underline text-blue-500 mb-3 text-xl font-bold text-center">
              Our stats
            </p>
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
                {statsData && (
                  <p className="text-center text-5xl">{statsData.Found}</p>
                )}
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
                  <p className=" text-center text-5xl">{statsData.collected}</p>
                )}
                <p className="text-sm  text-center font-semibold">
                  Collected ID's🥳
                </p>
              </div>
            </div>
          </div>
          <Fetch />
        </div>
      </div>
    </MyProvider>
  );
}

export default Hero;
