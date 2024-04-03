import React from "react";

const StaticSiteGeneration = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "force-cache",
  });
  const { fact } = await response.json();

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-extrabold">Static Site Generation</h3>
      <p>{fact}</p>
    </div>
  );
};

export default StaticSiteGeneration;

