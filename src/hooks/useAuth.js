// https://tumeiget.vercel.app/account/login/
import React from 'react'

async function useAuth({formData}) {
  const response = await fetch("https://tumeiget.vercel.app/account/login/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
}

export default useAuth