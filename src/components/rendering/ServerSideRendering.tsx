import React from "react";

const ServerSideRendering = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "no-cache",
  });
  const { fact } = await response.json();

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-extrabold">Server Side Rendering</h3>
      <p>{fact}</p>
    </div>
  );
};

export default ServerSideRendering;
