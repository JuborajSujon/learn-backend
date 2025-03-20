"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./About.module.css";

const AboutPage = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/contact");
  };
  return (
    <div className="container mx-auto px-4 py-5">
      <h1 className={styles.text_color}>About Page</h1>

      <div className="flex gap-2 mt-6">
        <Link href="/dashboard">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
            Dashboard
          </button>
        </Link>

        <button
          onClick={handleNavigate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
          Contact
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
