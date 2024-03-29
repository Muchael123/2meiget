import React, { useEffect, useState } from "react";
import Fetch from "./Fetch";
import MyProvider from "../hooks/Mycontext";
import { Modal } from "flowbite-react";
import toast, { Toaster } from "react-hot-toast";

function Hero() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    id_no: "",
  });

  const [formError, setFormError] = useState({
    email: false,
    name: false,
    phone: false,
    id_no: false,
  });
  const [statsData, setStatsData] = useState(null);
  const [statsLoading, setStatsLoading] = useState(false);
  const [statsError, setStatsError] = useState(null);

  const validateEmail = (email) => {
    // Email validation regex
    const re =
      // eslint-disable-next-line no-useless-escape
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    switch (name) {
      case "name":
        setFormError((prevState) => ({
          ...prevState,
          name: value.length < 4 ? "Name should be at least 4 characters" : "",
        }));
        break;
      case "email":
        setFormError((prevState) => ({
          ...prevState,
          email: !validateEmail(value) ? "Invalid Email" : "",
        }));
        break;
      case "id_no":
        setFormError((prevState) => ({
          ...prevState,
          id_no:
            isNaN(value) || value < 99999 || value > 999999999
              ? "Invalid id"
              : "",
        }));
        break;
      case "phone":
        setFormError((prevState) => ({
          ...prevState,
          phone:
            value.length < 10 ? "Phone number Should be 10 characters" : "",
        }));
        break;
      default:
        break;
    }
  };

  const [openModal, setOpenModal] = useState(false);

  const HandleModal = () => {
    setOpenModal((prev) => !prev);
  };
  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (
      formError.name ||
      formError.email ||
      formError.id_no ||
      formError.phone ||
      !formData.name ||
      !formData.email ||
      !formData.id_no ||
      !formData.phone
    ) {
      return;
    }

    toast.loading("Submitting your details", { icon: "📤", duration: 1000 });
    try {
      fetch("https://tumeiget.vercel.app/add-details/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          setOpenModal(false);
          toast.success("Details submitted successfully", {
            icon: "🚀😁😎",
            duration: 1000,
          });

          if (isArray(data)) {
            toast.loading(data, { icon: "👍", duration: 2000 });
          }
        });
    } catch (error) {
      toast.loading("Error. Check your network", {
        icon: "😒  ",
        duration: 2000,
      });
      console.error(error);
    }
  };

  return (
    <MyProvider>
      <Toaster />
      <div className="flex flex-col gap-10  divide-solid divide-blue-500 h-[80%] md:flex-row justify-between items-center  w-full px-4 md:px-14 lg:px-20 mt-5">
        <Modal
          show={openModal}
          className="md:max-w-[450px] max-w-[85vw]"
          onClose={() => setOpenModal(false)}
        >
          <Modal.Header>Give us your details</Modal.Header>
          <Modal.Body>
            <form className="p-2 md:p-4 md:gap-6  mt-3 grid grid-cols-1 md:grid-cols-2 ">
              <div className="">
                <label>email</label>
                <input
                  name="email"
                  onChange={handleChange}
                  type="email"
                  className="p-2 w-full border-2 border-gray-300 rounded-md"
                />
                {formError.email && (
                  <p className="text-sm text-red-500">invalid email address</p>
                )}
              </div>
              <div className="">
                <label>Full Name</label>
                <input
                  name="name"
                  onChange={handleChange}
                  required
                  type="text"
                  className="p-2 w-full border-2 border-gray-300 rounded-md"
                />
                {formError.name && (
                  <p className="text-sm text-red-500">{formError.name}</p>
                )}
              </div>
              <div>
                <label>Phone Number</label>
                <input
                  name="phone"
                  onChange={handleChange}
                  required
                  type="number"
                  className="p-2 w-full border-2 border-gray-300 rounded-md"
                />
                {formError.phone && (
                  <p className="text-sm text-red-500">{formError.phone}</p>
                )}
              </div>
              <div>
                <label>Id Number</label>
                <input
                  name="id_no"
                  onChange={handleChange}
                  required
                  type="number"
                  className="p-2 w-full border-2 border-gray-300 rounded-md"
                />
                {formError.id_no && (
                  <p className="text-sm text-red-500">{formError.id_no}</p>
                )}
              </div>
              <button
                className="bg-blue-500 text-white hover:bg-blue-400 transition-all duration-200 hover:scale-105 font-semibold rounded-md py-2 md:py-3"
                onClick={handleModalSubmit}
              >
                Share Details
              </button>
              <button
                color="gray"
                className="bg-gray-200 transition-all duration-200 hover:scale-105 hover:bg-red-300 font-semibold rounded-md py-2 md:py-3"
                type="reset"
                onClick={() => setFormData({})}
              >
                Reset
              </button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <p className="mb-3 p-4 md:p-6">
              Thank you so much. KIndly take{" "}
              <a
                href="https://forms.gle/y6X8sFibS5JFV1GA9"
                target="_blank"
                className="text-blue-500 underline "
              >
                our survey
              </a>{" "}
              to help improve our services
            </p>
          </Modal.Footer>
        </Modal>
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
            <button
              className="text-md  text-center rounded-md bg-blue-500 py-3 md:py-4 font-semibold w-[60%] text-white"
              onClick={HandleModal}
            >
              Give us Your Details
            </button>
          </div>
        </div>
        <div className="mx-3 h-full bg-blue-500 w-1" />
        <div className="flex  flex-col-reverse gap-2">
          <div>
            <p className="underline text-blue-500 mb-3 text-x ">Our stats</p>
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
