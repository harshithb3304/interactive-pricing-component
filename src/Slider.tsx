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
          background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='13'%3E%3Cg fill='%2380FFF3' fill-rule='evenodd'%3E%3Cpath d='M16 2.558v7.884a1 1 0 001.735.679l3.639-3.943a1 1 0 000-1.356l-3.64-3.943A1 1 0 0016 2.558zM6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z'/%3E%3C/g%3E%3C/svg%3E") no-repeat; 
          background-position: center;
          background-color: hsl(174, 86%, 45%); 
        }
      `}</style>
    </div>
  );
};

export default Slider;
