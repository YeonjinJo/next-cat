import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Link
        href="/rendering"
        className="my-1 px-1 border rounded border-black border-solid hover:bg-cyan-600"
      >
        Test
      </Link>
    </div>
  );
}
