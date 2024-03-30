import { useState } from "react";
import Slider from "./Slider";
import { Switch } from "@headlessui/react";
import CheckmarkIcon from "./CheckmarkIcon";

const Card = () => {
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [enabled, setEnabled] = useState(false);
  const discount: number = 25;

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };
  return (
    <div className="mx-auto w-full max-w-screen-sm transform rounded-xl bg-white py-8 shadow-md transition-transform duration-500 dark:bg-gray-700 lg:py-12">
      <div className="px-6 lg:px-12">
        <div className="flex w-full flex-wrap items-center justify-center gap-10 lg:justify-between">
          <div className="font-manrope font-semibold tracking-widest text-[color:hsl(225,20%,60%)] dark:text-gray-300">
            100K PAGEVIEWS
          </div>
          <div className="order-3 flex items-center justify-center md:justify-start lg:order-2 ">
            <p className="font-manrope text-4xl font-bold dark:text-white">
              $
              {enabled
                ? sliderValue * 12 * ((100 - discount) / 100)
                : sliderValue}
            </p>
            <p className="ml-1 items-center justify-center font-manrope font-semibold text-[color:hsl(225,20%,60%)] dark:text-gray-300">
              {enabled ? "/ year" : "/ month"}
            </p>
          </div>

          <div className="order-2  w-full lg:order-3">
            <Slider value={sliderValue} onChange={handleSliderChange} />
          </div>
        </div>
        <div className="mt-12 flex flex-row items-center justify-center gap-3 lg:mr-4 lg:justify-end">
          <p className="flex-shrink-0 text-[15px] text-[color:hsl(225,20%,60%)] dark:text-gray-300">
            Monthly Billing
          </p>
          <div className="md:flex">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${
                enabled
                  ? "bg-[color:hsl(174,86%,45%)]"
                  : "bg-[color:hsl(223,50%,87%)]"
              } relative inline-flex h-6 w-11 items-center rounded-full hover:opacity-90`}
            >
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
          <p className="flex-shrink-0 text-[15px] text-[color:hsl(225,20%,60%)] dark:text-gray-300">
            Yearly Billing
          </p>
          <p className="flex items-center rounded-full bg-[color:hsl(14,92%,95%)] px-3 py-1 font-manrope text-xs font-bold text-[color:hsl(15,100%,70%)] lg:gap-x-2">
            <span className="lg:hidden">-</span>
            <span>{discount}%</span>
            <span className="hidden lg:block">Discount</span>
          </p>
        </div>
      </div>
      <hr className="mt-[50px] w-full dark:border-gray-600"></hr>
      <div className="mt-10 flex flex-col items-center justify-between gap-y-6 px-6 lg:flex-row lg:px-12">
        <ul className="space-y-2 font-manrope text-[15px] text-[color:hsl(225,20%,60%)] dark:text-gray-300">
          <li className="flex flex-row items-center justify-center gap-4  lg:justify-start ">
            <CheckmarkIcon /> <span>Unlimited Website</span>
          </li>
          <li className="flex flex-row items-center justify-center gap-4   lg:justify-start">
            <CheckmarkIcon /> <span>100% data ownership</span>
          </li>
          <li className="flex flex-row items-center justify-center gap-4  lg:justify-start">
            <CheckmarkIcon />
            <span>Email reports</span>
          </li>
        </ul>

        <button className="rounded-full bg-[color:hsl(227,35%,25%)] px-12 py-4  font-bold text-[color:hsl(226,100%,87%)] hover:ring-1 hover:ring-offset-1 dark:bg-blue-600 dark:text-white lg:hover:bg-white lg:hover:text-black">
          Start my trial
        </button>
      </div>
    </div>
  );
};

export default Card;
