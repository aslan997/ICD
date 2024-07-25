import React, { useRef, useState } from "react";
import ObjectTable from "./ObjectTable";
import Arrow from "../../../assets/arrow-accordion.png";
import { isCurrentYear } from "../../../helper/isCurrentYear";
import { Icon } from "@iconify/react/dist/iconify.js";
import CreateObjectiveModal from "./Modals/CreateObjectiveModal";
import LastYearObjectivesModal from "./Modals/LastYearObjectivesModal";

const ObjectiveAndKpis = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openObjectiveModal, setOpenObjectiveModal] = useState(false);
  const contentRef = useRef(null);

  const isSameYear = isCurrentYear(2024);

  return (
    <>
      <div className="shadow-card rounded mb-4">
        <div
          className="flex justify-between items-center cursor-pointer p-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <p className="text-lg font-semibold text-gold">Objective & KPIs</p>
            {isSameYear && (
              <div className="items-center inline-flex sm:hidden flex-wrap">
                <button
                  className="bg-gold text-14 h-7 text-white mr-2 rounded w-52 mt-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenObjectiveModal(true);
                  }}
                >
                  Copy Last Year's Objectives
                </button>
                <button
                  className="bg-gold text-14 h-7 text-white mr-2 flex items-center mt-2 justify-center rounded w-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(true);
                  }}
                >
                  {" "}
                  <Icon icon="mingcute:add-fill" className="text-white mr-1" />
                  Objective
                </button>
              </div>
            )}
          </div>
          <div className="inline-flex items-center">
            {isSameYear && (
              <div className="items-center hidden sm:inline-flex">
                <button
                  className="bg-gold text-14 h-7 text-white mx-2 rounded w-52"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenObjectiveModal(true);
                  }}
                >
                  Copy Last Year's Objectives
                </button>
                <button
                  className="bg-gold text-14 h-7 text-white mr-2 flex items-center justify-center rounded w-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(true);
                  }}
                >
                  {" "}
                  <Icon icon="mingcute:add-fill" className="text-white mr-1" />
                  Objective
                </button>
              </div>
            )}
            <span
              className="bg-gold w-26 h-26 rounded-full flex items-center justify-center transform transition-transform duration-300"
              style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
            >
              <img src={Arrow} className="h-2.5 w-2.5" />
            </span>
          </div>
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
          {/* <ObjectTable /> */}
        </div>
      </div>
      <CreateObjectiveModal open={open} setOpen={setOpen} />
      <LastYearObjectivesModal
        open={openObjectiveModal}
        setOpen={setOpenObjectiveModal}
      />
    </>
  );
};

export default ObjectiveAndKpis;
