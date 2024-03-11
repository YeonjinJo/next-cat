import React from "react";

const IncrementalSiteRegeneration = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    next: {
      revalidate: 5,
    },
  });
  const { fact } = await response.json();

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-extrabold">Incremental Site Regeneration</h3>
      <p>{fact}</p>
    </div>
  );
};

export default IncrementalSiteRegeneration;
