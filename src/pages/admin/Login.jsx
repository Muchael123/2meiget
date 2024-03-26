import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const notification = toast.loading("authenticating...");
    try {
      const response = await fetch(
        "https://tumeiget.vercel.app/account/login/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      ); // Add a comma here

      if (response.status === 200) {
        toast.success("Login successful", {
          id: notification,
        }); // Add a comma here

        // Login was successful
        const data = await response.json();

        const access_token = data.key;
        localStorage.setItem("user", access_token);

        // Store the access token in local storage (you can also use cookies)
        window.location.href = "/Home";
      } else if (response.status === 401) {
        // Handle authentication failure (e.g., display an error message)
        toast.error("Login failed, invalid credentials", {
          id: notification,
        });
        console.error("Login failed");
      } else {
        // Handle other status codes as needed
        toast.error("An error occurred" + response.status, {
          id: notification,
        });
        console.error("Unexpected status code:", response.status);
      }
    } catch (error) {
      // Add a catch block here
      toast.error("An internal error occurred", {
        id: notification,
      });
      console.error("An internal error occurred:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div class="w-screen  flex flex-row items-center justify-center bg-white">
      <Toaster />
      <div className="p-4 md:p-8 flex flex-col md:w-[50%]  items-center justify-center">
        <div className="w-full justify-center items-center flex">
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            src="/tumeiget.png"
            className="w-[50%]"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          class="mx-auto p-4 md:p-8 rounded-md md:rounded-xl space-y-4 bg-[#E0EBFD]"
        >
          <div class="space-y-2 text-center">
            <h1 class="text-3xl font-bold">welcome back!! Login</h1>
            <p class="text-gray-500 dark:text-gray-400">
              Enter your email below to login to your account
            </p>
          </div>
          <form class="space-y-4" onSubmit={handleSubmit}>
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="username"
              >
                username
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Admin123"
                required={true}
                name="username"
                onChange={handleChange}
                type="text"
              />
            </div>
            <div class="space-y-2">
              <div class="flex items-center">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="password"
                >
                  Password
                </label>
              </div>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="password"
                name="password"
                placeholder="********"
                required={true}
                onChange={handleChange}
                type="password"
              />
            </div>
            <button
              type="submit"
              class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 hover:bg-blue-600 text-white h-10 px-4 py-2 w-full"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
      <div className=" w-[50%] relative hidden md:block">
        <motion.img
          // initial={{ opacity: 0, x: 1000 }}
          // animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          animate={{
            scale: [0.8, 1, 1.3, 1],
          }}
          className="h-screen blur-md w-[100%]	 object-cover "
          src="/loginimg.jpg"
        />
        <div className="absolute top-0  w-[100%] h-screen flex flex-col justify-center items-center text-white">
          <p className="text-5xl font-bold mb-4">Hello Admin</p>
          <a href="/" className="text-[#E0EBFD]">
            Go to search page screen
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
