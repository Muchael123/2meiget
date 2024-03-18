import React, { useContext, useEffect, useState } from "react";
import useFetch from "../hooks/UseFetch";
import { Button, Modal } from "flowbite-react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import Popup from "./Popup";
import toast, { Toaster } from "react-hot-toast";
import convertToDateTime from "../hooks/DateTimeConverter";

function Fetch() {
  const [input, setInput] = useState("");
  const { width, height } = useWindowSize();
  const [searchData, setSearchData] = useState("");
  const [isFound, setIsFound] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const HandleSearch = (e) => {
    toast.loading("Searching for your details", { icon: "🔍", duration: 1000 });
    const url = `https://tumeiget.vercel.app/search/?search=${input}`;
    e.preventDefault();
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          setIsFound(false);
          toast.error("No data found", { icon: "🤷‍♂️", duration: 1000 });
        } else {
          if (data.detail === "Not found.") {
            toast.error("ID not found", { icon: "🤷‍♂️", duration: 2000 });
            setIsFound(false);
            setOpenModal(false);
          } else {
            if (data.picked) {
              setOpenModal(false);
              toast.error("ID not found. But we have your details", {
                icon: "😢",
                duration: 2000,
              });
            } else {
              toast.success("ID found", { icon: "🎉", duration: 2000 });
              setSearchData(data);
              setIsFound(true);
            }
          }
        }
      })
      .finally(() => {});
  };

  return (
    <div className="h-full">
      <Toaster />
      <Modal
        className="p-5 md:translate-x-[150%] md:max-w-[350px]"
        dismissible
        position={"center"}
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>We found It!!!</Modal.Header>
        <Modal.Body>
          <div className="justify-center items-center flex flex-col">
            <p className="text-blue-300 font-semibold tracking-widest">
              ID details
            </p>
            <div>
              <p>ID Number:{searchData.id_no}</p>
              <p>Date found: {convertToDateTime(searchData.date_found)}</p>
              <p>Pick-Up Point: {searchData?.station?.name}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="flex flex-col items-center justify-center pt-6 p-2  h-full">
        <Confetti
          width={width}
          height={height}
          recycle={false}
          gravity={0.08}
          onConfettiComplete={() => setIsFound(false)}
          run={isFound}
          numberOfPieces={400}
        />
        <div>
          <h1 className="text-green-500 font-bold text-2xl text-start underline mb-4">
            Search for Your Lost Id
          </h1>
          <p className="text-gray-500 md:mb-4 mb-2 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Enter your details to store them in our secure database. If you lose
            your IDs, you can retrieve them using the information you provide.
          </p>

          <form className="flex flex-col p-2 md:mb-6 mb-4 lg:flex-row shadow-md shadow-slate-500/10 rounded-md lg:divide-x justify-between items-center">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              type="number"
              className="p-4 md:w-[60%] w-full outline-none rounded-md mb-4 md:mb-0"
              placeholder="Enter your ID number"
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
