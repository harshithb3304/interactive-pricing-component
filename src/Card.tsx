import { useState } from "react";
import Slider from "./Slider";
import { Switch } from "@headlessui/react";

const Card = () => {
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [enabled, setEnabled] = useState(false);
  const discount: number = 25;

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 bg-white rounded-xl mt-6 mb-6 shadow-md w-full max-w-[20rem] md:max-w-md lg:max-w-[45rem] xl:max-w-[45rem] transform transition-transform duration-500">
        <div className="flex flex-col md:lg:flex-row justify-between items-center">
          <div className="text-[color:hsl(225,20%,60%)] font-semibold font-manrope">
            100K PAGEVIEWS
          </div>
          <div className="flex items-center justify-center md:justify-start ">
            <p className="text-4xl font-manrope font-bold">
              $
              {enabled
                ? sliderValue * 12 * ((100 - discount) / 100)
                : sliderValue}
            </p>
            <p className="font-manrope font-semibold items-center justify-center ml-1 text-[color:hsl(225,20%,60%)]">
              {enabled ? "/year" : "/month"}
            </p>
          </div>
        </div>
        <div>
          <Slider value={sliderValue} onChange={handleSliderChange} />
        </div>
        <div className="flex flex-row gap-3 mt-8 justify-end items-center mr-4">
          <p className="text-[15px] text-[color:hsl(225,20%,60%)]">
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
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
          <p className="text-[15px] text-[color:hsl(225,20%,60%)]">
            Yearly Billing
          </p>
          <p className="text-[13px] text-[color:hsl(15,100%,70%)] bg-[color:hsl(14,92%,95%)] rounded-full px-3 py-1">
            {discount}% Discount
          </p>
        </div>
        <hr className="mt-[50px] w-full"></hr>
        <div className="flex flex-col md lg xl:flex-row justify-between items-center">
          <div>
            <ul className="mt-6">
              <li className="flex flex-row gap-4 text-[color:hsl(225,20%,60%)] text-[15px] font-manrope font-semibold">
                <img
                  src="/src/assets/icon-check.svg"
                  alt="Image 1"
                  className="w-6 h-6 mr-2"
                />
                Unlimited Website
              </li>
              <li className="flex flex-row gap-4 text-[color:hsl(225,20%,60%)] text-[15px] font-manrope font-semibold">
                <img
                  src="/src/assets/icon-check.svg"
                  alt="Image 2"
                  className="w-6 h-6 mr-2"
                />
                100% data ownership
              </li>
              <li className="flex flex-row gap-4 text-[color:hsl(225,20%,60%)] text-[15px] font-manrope font-semibold">
                <img
                  src="/src/assets/icon-check.svg"
                  alt="Image 3"
                  className="w-6 h-6 mr-2"
                />
                Email reports
              </li>
            </ul>
          </div>
          <div>
            <button className="w-[200px] p-2 bg-[color:hsl(227,35%,25%)] text-[color:hsl(226,100%,87%)] rounded-full hover:ring-1 hover:ring-offset-1 lg:hover:bg-white lg:hover:text-black m-6">
              Start my trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;