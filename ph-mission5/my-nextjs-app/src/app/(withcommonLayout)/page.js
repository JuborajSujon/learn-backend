"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/about");
  };
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home Page</h1>

      <div className="flex gap-2 mt-6">
        <Link href="/dashboard">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
            Dashboard
          </button>
        </Link>

        <button
          onClick={handleNavigate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
          About
        </button>
      </div>
    </div>
  );
};

export default HomePage;
