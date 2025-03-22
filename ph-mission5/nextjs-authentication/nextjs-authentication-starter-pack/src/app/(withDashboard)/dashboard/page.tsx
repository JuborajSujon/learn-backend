import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <p className="text-center">
            Logged-in user email: {session?.user?.email}
          </p>
          <Image
            src={session?.user?.image as string}
            alt="user image"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
