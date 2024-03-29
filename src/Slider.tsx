import React from "react";

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="w-full bg-gray-300 appearance-none h-2 rounded-lg"
        style={{
          background: `linear-gradient(to right, hsl(174, 86%, 45%) 0%, hsl(174, 86%, 45%) ${value}%, #d1d5db ${value}%, #d1d5db 100%)`,
        }}
        onChange={handleChange}
      />
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 30px;
          height: 30px;
          background-color: #fff; /* Change the color here */
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          background: url('/src/assets/icon-slider.svg') no-repeat; 
          background-position: center;
          background-color: hsl(174, 86%, 45%); 
        }
      `}</style>
    </div>
  );
};

export default Slider;
