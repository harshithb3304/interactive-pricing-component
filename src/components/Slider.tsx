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
    <div className="w-full">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="h-2 w-full appearance-none rounded-lg bg-gray-300"
        style={{
          background: `linear-gradient(to right, hsl(174,77%,80%) 0%, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%)${value}%, hsl(224, 65%, 95%) 100%)`,
        }}
        onChange={handleChange}
      />
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 40px;
          height: 40px;
          background-color: #fff; 
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 15px 15px hsl(174, 77%, 80%);
          background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='13'%3E%3Cg fill='%23ffffff' fill-rule='evenodd'%3E%3Cpath d='M16 2.558v7.884a1 1 0 001.735.679l3.639-3.943a1 1 0 000-1.356l-3.64-3.943A1 1 0 0016 2.558zM6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z'/%3E%3C/g%3E%3C/svg%3E") no-repeat; 
          background-position: center;
          background-color: hsl(174, 86%, 45%); 
        }
        input[type="range"]::-webkit-slider-thumb:hover{
          background-color: hsl(174, 77%, 80%);
        }
        input[type="range"]::-webkit-slider-thumb:active{
          background-color:hsl(174, 86%, 45%) ;
        }
        .dark input[type="range"]::-webkit-slider-thumb {
          box-shadow: 0 15px 15px transparent;
        }
      `}</style>
    </div>
  );
};

export default Slider;
