import "./App.css";
import { useEffect, useState } from "react";
import Card from "./Card";

function App() {
  const [theme, setTheme] = useState<string>("light");

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <main className="h-screen dark:bg-black">
      <button
        className="bg-transparent hover:bg-gray-300 p-4 rounded-3xl"
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
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
              />
            </svg>
          </>
        )}
      </button>
      <h1 className="bg-[url('/src/assets/pattern-circles.svg')] dark:text-white bg-no-repeat bg-center bg-[length:230px_230px] md lg:bg-[length:250px_250px]  font-manrope font-bold text-2xl md:text-3xl lg:text-4xl  flex justify-center items-center min-h-[300px] md:min-h-[350px] lg:min-h-[350px] mb-3">
        Simple, traffic-based pricing
      </h1>
      <div className="font-manrope font-semibold text-xl md:text-xl lg:text-xl flex flex-col lg:flex-row justify-center items-center mt-[-9rem] text-[color:hsl(225,20%,60%)]">
        <p className="mr-1">Sign up for our 30-day trial.</p>
        <p>No credit card required</p>
      </div>
      <div className=" mt-[-3rem] md:mt[-10rem] lg:mt-[-11rem]">
        <Card />
      </div>
    </main>
  );
}

export default App;

{
  /* <svg
aria-hidden="true"
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 18 20"
>
<path
  stroke="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2"
  d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"
/>
</svg> */
}
