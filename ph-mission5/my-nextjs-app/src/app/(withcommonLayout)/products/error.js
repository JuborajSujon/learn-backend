"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="container mx-auto px-4 py-5 text-center space-y-3">
      <h1 className="text-center text-red-600 my-5 text-xl">
        Something went wrong
      </h1>
      <p className="text-center">Error Message: {error.message}</p>

      <button
        className="bg-yellow-500 hover:text-white text-black py-2 px-4 rounded shadow transition-all border hover:bg-slate-800"
        onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;
