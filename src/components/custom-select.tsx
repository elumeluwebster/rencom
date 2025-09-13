import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import React, { useState, useRef, useEffect } from "react";

import { options } from "@/utils/store";

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || "Select reason";

  return (
    <div className="relative w-full" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full p-3 text-left bg-[#F4F3EA] border border-[#EDEDED] rounded ${
          value ? "text-[black]" : "text-[#7a7a76]"
        } focus:outline-none focus:ring-2 focus:ring-[#0F3D1C]`}
      >
        {selectedLabel}
        {open ? (
          <FiChevronUp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black pointer-events-none" />
        ) : (
          <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black pointer-events-none" />
        )}
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-[#EDEDED] rounded shadow-md max-h-60 overflow-auto">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`p-3 text-sm cursor-pointer hover:bg-[#F4F3EA] ${
                value === opt.value ? "bg-[#F4F3EA]" : ""
              }`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
