import Link from "next/link";
import React from "react";

const buttonStyle =
  "my-1 px-1 border rounded border-black border-solid hover:bg-cyan-600";

const RenderingTest = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-extrabold">Test four rendering types</h1>
      <Link href="/rendering/SSG" className={buttonStyle}>
        Static Site Generation
      </Link>
      <Link href="/rendering/ISR" className={buttonStyle}>
        Incremental Site Regeneration
      </Link>
      <Link href="/rendering/SSR" className={buttonStyle}>
        Server Side Rendering
      </Link>
      <Link href="/rendering/CSR" className={buttonStyle}>
        Client Side Rendering
      </Link>
    </div>
  );
};

export default RenderingTest;
