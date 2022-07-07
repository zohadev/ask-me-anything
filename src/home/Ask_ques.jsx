import React from "react";
import axios from "axios";
import "./ask_ques.css";

function Ask() {
  const apiLink = "https://askapi2.herokuapp.com";
  const [question, setQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState(null);
  const handleSubmit = async (e) => {
    try {
      // const ask = document.querySelector(".ask");
      // add typewrite class to ask
      // ask.classList.add("typewriter");
      const { data } = await axios.post(`${apiLink}/api`, {
        question,
      });
      console.log(data);
      setAnswer(data);
      // setTimeout(() => {
      //   ask.classList.remove("typewriter");
      // }, 3000);
    } catch (err) {
      alert("something went wrong");
      console.log(err);
    }
  };
  return (
    <div className="bg-yellow-50 w-full h-screen flex flex-col items-center justify-center">
      <form
        className="flex flex-col items-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
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
            placeholder="ask any question"
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
            required
          />
        </div>

        {/* <!-- add a button htmlFor search --> */}
        <div className="mt-3">
          <button
            className="w-full max-w-xs px-4 py-2 bg-sky-200 rounded-lg shadow-lg"
            type="submit"
            id="submit"
            placeholder="Search"
          >
            just ask
          </button>
        </div>
      </form>
      <div>
        {/* a background to show the answer */}
        {answer && (
          <div className="mt-8 bg-yellow-100 rounded-lg shadow-md min-w-[50vw] max-w-[65vw] min-h-[45vh] flex flex-col items-center justify-center">
            <p className="typewriter ask text-gray-800 text-center px-4 py-4 font-mono">
              {answer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ask;
