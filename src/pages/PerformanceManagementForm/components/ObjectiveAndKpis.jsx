import React, { useRef, useState } from "react";
import ObjectTable from "./ObjectTable";
import Arrow from "../../../assets/arrow-accordion.png";

const ObjectiveAndKpis = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="border rounded-lg mb-4">
      <div
        className="flex justify-between items-center cursor-pointer p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-semibold text-gold">Objective & KPIs</p>
        <span
          className="bg-accordionArrowSpanBtn w-26 h-26 rounded-full flex items-center justify-center transform transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
        >
          <img src={Arrow} className="h-2.5 w-2.5" />
        </span>
      </div>
      <div
        ref={contentRef}
        className="transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: isOpen ? "max-content" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <ObjectTable />
        <ObjectTable />
      </div>
    </div>
  );
};

export default ObjectiveAndKpis;
