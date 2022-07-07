import React from "react";

function Ask() {
  const apiLink = "http://localhost:17333";
  const [question, setQuestion] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await fetch(`${apiLink}/ask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        question,
      },
    });
    console.log(data);
  };
  return (
    <div className="bg-yellow-50 w-full h-screen flex flex-col items-center justify-center">
      <form className="flex flex-col items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            name="search"
            minLength="6"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 outline-none"
            placeholder="Search"
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
            required
          />
        </div>

        {/* <!-- add a button htmlFor search --> */}
        <div className="mt-3">
          <button
            className="w-full max-w-xs p-2 bg-gray-200 rounded-lg shadow-md"
            type="submit"
            id="submit"
            placeholder="Search"
            onSubmit={handleSubmit}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Ask;
