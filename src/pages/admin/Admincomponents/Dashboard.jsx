import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import convertToDateTime from "../../../../hooks/DateTimeConverter";

function Dashboard() {
  const [data, setData] = useState({});
  const [recents, setRecents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchStats();
    fetchRecents();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://tumeiget.vercel.app/stats/station/"
      );
      if (response.ok) {
        const { Found, collected, not_picked } = await response.json();
        setData({ Found, collected, not_picked });
      } else {
        toast.error("Failed to fetch stats");
        console.error("Stats fetch error:", response.status);
      }
    } catch (error) {
      toast.error("An error occurred while fetching stats");
      console.error("Stats fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecents = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("user");
      const response = await fetch("https://tumeiget.vercel.app/recent/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      if (response.ok) {
        const recentsData = await response.json();
        setRecents(recentsData);
        console.log(recentsData);
        // Process recents data if needed
      } else {
        toast.error("Failed to fetch recents");
        console.error("Recents fetch error:", response.status);
      }
    } catch (error) {
      toast.error("An error occurred while fetching recents");
      console.error("Recents fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full">
      <Toaster />
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="px-4 font-semibold tracking-widest text-lg lg:text-3xl md:text-2xl"
      >
        My Dashboard
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 lg:gap-8 text-white gap-4 md:gap-6  my-5 md:my-8 lg:grid-cols-3 justify-evenly"
      >
        <div
          className={`bg-blue-500  hover:cursor-pointer hover:scale-105 transition-all duration-300 flex rounded-2xl justify-center items-center flex-col lg:py-8`}
        >
          <p className="text-2xl mb-4 tracking-widest md:text-5xl">
            {loading ? "..." : data.Found}
          </p>
          <h1>Found ID's</h1>
        </div>
        <div
          className={`bg-gray-500  hover:cursor-pointer hover:scale-105 transition-all duration-300 flex rounded-2xl justify-center items-center flex-col lg:py-8`}
        >
          <p className="text-2xl mb-4 tracking-widest md:text-5xl">
            {loading ? "..." : data.collected}
          </p>
          <h1>Collected ID's</h1>
        </div>
        <div
          className={`bg-orange-500  hover:cursor-pointer hover:scale-105 transition-all duration-300 flex rounded-2xl justify-center items-center flex-col lg:py-8`}
        >
          <p className="text-2xl mb-4 tracking-widest md:text-5xl">
            {loading ? "..." : data.not_picked}
          </p>
          <h1> IDs not picked</h1>
        </div>
      </motion.div>
      <div className="h-[40vh] overflow-y-scroll">
        <h1 className="md:text-xl text-md font-semibold">Recents</h1>
        {recents.length === 0 ? (
          <h1>No recents yet</h1>
        ) : (
          <div className="flex flex-col md:gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-bold  p-4 rounded-lg flex justify-between items-center"
            >
              <h1>Id Number</h1>
              <h1>Date found</h1>
              <h1 className="hidden md:block">Station</h1>
            </motion.div>
            {recents.map((recent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="bg-gray-50  p-4 rounded-lg flex justify-between items-center"
              >
                <h1>{recent.id_no}</h1>
                <h1>{convertToDateTime(recent.date_found)}</h1>
                <h1 className="hidden md:block">{recent.station}</h1>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
