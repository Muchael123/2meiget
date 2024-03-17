import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import useFetch from "../../../hooks/UseFetch";
import convertToDateTime from "../../../hooks/DateTimeConverter";

function IdPick({ myStation }) {
  const [idData, setIdData] = useState();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(0);
  const HandleIdSearch = async (e) => {
    console.log("submitting");
    setLoading(true);
    toast.loading("submitting ID...", { icon: "🚀", duration: 1000 });
    e.preventDefault();
    console.log(id);
    try {
      const response = await fetch(
        `https://tumeiget.vercel.app/search/?search=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        toast.success("ID found", { icon: "😁🚀", duration: 5000 });
        setIdData(data);
        setLoading(false);
        console.log("ID found", data);
      } else if (response.status === 404) {
        toast.error("Id not found" + response.status, {
          icon: "😒",
          duration: 2000,
        });
        setIdData(null);
        setLoading(false);
      } else {
        setIdData(null);
        toast.error("Kindly check your network", { icon: "😒" });
        setLoading(false);
      }
    } catch (err) {
      console.error("from erro", err);
    }
  };
  const HandlePick = async (e) => {
    console.log("submitting");
    toast.loading("submitting ID...", { icon: "📤", duration: 1000 });
    e.preventDefault();
    console.log(idData.id_no);
    const response = await fetch("https://tumeiget.vercel.app/pick/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("user")}`,
      },
      body: JSON.stringify({ id_no: idData.id_no }),
    });
    if (response.ok) {
      toast.success("ID status updated successfully", { icon: "👍" });
      setIdData({})
    } else {
      toast.error("an error occured check network");
      console.error("ID add error:", response.status);
    }
  };
  
  return (
    <div className="w-full h-full">
      <Toaster />
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mb-5 font-semibold tracking-wider text-lg lg:text-3xl md:text-2xl"
      >
        Search and pick a lost Id
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p>Search for a lost Id when the owner comes to pick it up.</p>

        <form className="bg-gray-200 gap-3 pl-2 md:pl-4 justify-between  rounded-md md:max-w-[40vw] h-16 flex items-center">
          <input
            type="number"
            onChange={(e) => setId(e.target.value)}
            className="w-full h-[80%] rounded-md pl-3 outline-none md:text-lg"
            placeholder="search for the ID here"
          />
          <button
            onClick={HandleIdSearch}
            className="h-full bg-blue-500 rounded-tr-md rounded-br-md px-2 text-white font-semibold"
          >
            submit
          </button>
        </form>
        {idData !== null && idData !== undefined ? (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="rounded-lg bg-gray-200 mt-5 max-w-[350px] p-4 tracking-wide border-green-500 border-l-[5px]"
          >
            <h1 className="text-blue-500 font-semibold">
              The ID was found in the database
            </h1>
            <p>id Number: {idData?.id_no}</p>
            <p>date found: {convertToDateTime(idData?.date_found)}</p>
            <p>{idData?.picked ? "Already picked" : "Not yet picked"}</p>
            <p>station: {idData?.station?.name}</p>
            {idData?.station?.id === myStation && !idData?.picked && (
              <button
                className="bg-blue-500 py-2 w-full hover:bg-blue-400 rounded-md mt-3 hover:scale-105 transition-all duration-300 text-white "
                onClick={HandlePick}
              >
                Pick
              </button>
            )}
          </motion.div>
        ) : (
          <h1></h1>
        )}
      </motion.div>
    </div>
  );
}

export default IdPick;
