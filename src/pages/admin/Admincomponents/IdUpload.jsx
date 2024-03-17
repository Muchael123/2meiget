import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
function IdUpload() {
  const [disable, setDisabled] = useState(false);
  const [id, setId] = useState(0);
  const handleIDChange = (e) => {
    e.preventDefault();
    const idno = e.target.value;
    setId(idno);
    console.log(idno.toString().length);
    if (idno.toString().length > 5 && idno.toString().length < 9) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };
  const handleIdSubmit = async (e) => {
    console.log("submitting");
    toast.loading("submitting ID...", { icon: "📤", duration: 1000 });
    e.preventDefault();
    console.log(id);
    const response = await fetch("https://tumeiget.vercel.app/add/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("user")}`,
      },
      body: JSON.stringify({ id_no: id }),
    });
    if (response.ok) {
      toast.success("ID added successfully", { icon: "👍" });
      console.log("ID added successfully");
    } else {
      toast.error("an error occured check network");
      console.error("ID add error:", response.status);
    }
  };
  return (
    <div className="w-full h-full ">
      <Toaster />
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="px-4 font-semibold tracking-widest text-lg lg:text-3xl md:text-2xl"
      >
        Upload a lost and found ID
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-3 px-4"
      >
        <h1>
          Ensure the ID details you key in are{" "}
          <span className="font-semibold text-blue-500 text-xl">correct.</span>
        </h1>
        <h1>
          This ensures that{" "}
          <span className="font-semibold text-blue-500 text-xl">all IDs</span>{" "}
          are found by their owners
        </h1>
        <form className="mt-6">
          <h1 className="text-md text-blue-500 underline font-semibold">
            Enter the Identification details.
          </h1>
          <div className="flex flex-col mt-3">
            <label htmlFor="id" className="text-sm">
              ID Number
            </label>
            <input
              type="number"
              name="id"
              onChange={handleIDChange}
              id="id"
              max={999999999}
              maxLength={9}
              className="border-2 border-gray-300 outline-none max-w-[250px] p-2 rounded-lg"
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </div>
          <button
            onClick={handleIdSubmit}
            className={`mt-5 rounded-md  transition-all duration-200 font-semibold tracking-wider text-white px-5 py-2 w-[250px] ${
              disable
                ? "bg-blue-500 hover:bg-blue-400"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            {disable ? "Submit" : "Inalid ID"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default IdUpload;
