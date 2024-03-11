"use client";

import React, { useEffect, useState } from "react";

const ClientSideRendering = () => {
  const [catString, setCatString] = useState<string>("");

  useEffect(() => {
    const fetchString = async () => {
      const response = await fetch(`https://catfact.ninja/fact`);
      const { fact } = await response.json();
      setCatString(fact);
    };
    fetchString();
  }, []);

  if (!catString) {
    return (
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-extrabold">Now Loading...</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-extrabold">Client Side Rendering</h3>
      <p>{catString}</p>
    </div>
  );
};

export default ClientSideRendering;
