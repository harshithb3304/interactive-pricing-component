import "./App.css";
import { useEffect } from "react";
import Card from "./components/Card";

import { toggleTheme } from "./store/theme";
import { useAppDispatch, useAppSelector } from "./store/hooks";

function App() {
  const theme = useAppSelector((state) => state.themeToggle.value);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    dispatch(toggleTheme());
  };

  return (
    <main className="relative min-h-screen dark:bg-black">
      <div className="absolute z-0  h-1/2 w-full rounded-bl-[5rem] bg-[#F1F5FE] dark:bg-gray-900 lg:rounded-bl-[15rem]"></div>
      <div className="relative z-10 min-h-screen">
        <button
          className="z-50 m-2 rounded-full bg-transparent p-4 hover:bg-gray-300"
          onClick={handleThemeSwitch}
        >
          {theme === "dark" ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>{" "}
            </>
          ) : (
            <>
              <svg
                className="h-6 w-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
                />
              </svg>
            </>
          )}
        </button>
        <div className="relative mt-12 flex flex-col items-center justify-center">
          <svg
            className="absolute -z-10"
            xmlns="http://www.w3.org/2000/svg"
            width="146"
            height="145"
          >
            <g
              fill="none"
              fillRule="evenodd"
              className="stroke-[#CFD8EF] dark:stroke-gray-700"
            >
              <circle cx="63" cy="82" r="62.5" />
              <circle cx="105" cy="41" r="40.5" />
            </g>
          </svg>
          <h1 className="loading-screen mb-3 flex items-center justify-center font-manrope  text-2xl font-bold dark:text-white  md:text-3xl lg:text-4xl">
            Simple, traffic-based pricing
          </h1>
          <div className="flex flex-col items-center justify-center font-manrope text-xl font-semibold text-[color:hsl(225,20%,60%)] md:text-xl lg:flex-row  lg:text-xl">
            <p className="mr-1">Sign up for our 30-day trial.</p>
            <p>No credit card required</p>
          </div>
        </div>
        <div className="mt-24 px-6 pb-24 md:pb-20 lg:px-0 lg:pb-0">
          <Card />
        </div>
      </div>
    </main>
  );
}

export default App;
