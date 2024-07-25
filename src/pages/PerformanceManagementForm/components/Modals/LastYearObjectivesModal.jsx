import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Dialog, Transition } from "@headlessui/react";

const data = [
  {
    objective_code: "1",
    objective: "2024 Michael Testing 2024 Michael Testing",
  },
  {
    objective_code: "2",
    objective: "Objective 2",
  },
  {
    objective_code: "3",
    objective: "Objective 3",
  },
  {
    objective_code: "4",
    objective: "Objective 4",
  },
];

const LastYearObjectivesModal = ({ open, setOpen }) => {
  return (
    <Transition appear show={open} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-4xl">
                <div className="flex justify-between items-center p-4 bg-tableHeader">
                  <Dialog.Title
                    as="h3"
                    className="text-18 font-semibold leading-6"
                  >
                    Last Year's Objectives for Selection
                  </Dialog.Title>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500"
                    onClick={() => setOpen(false)}
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="bg-white px-4 pb-4 sm:pb-4">
                  <div className="mt-5 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 mt-3">
                      <thead>
                        <tr className="bg-tableHeader">
                          <th className="px-4 text-14 font-head py-2 border border-tableBorder">
                            Objective Code
                          </th>
                          <th className="px-4 text-14 font-head py-2 border border-tableBorder">
                            Objective
                          </th>
                          <th className="px-4 text-14 font-head py-2 border border-tableBorder text-center">
                            Select
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {data?.map((res, id) => (
                          <tr key={id}>
                            <td className="px-4 py-2 text-14 border border-tableBorder">
                              {res?.objective_code}
                            </td>
                            <td className="px-4 py-2 text-14 border border-tableBorder">
                              {res?.objective}
                            </td>
                            <td className="px-4 py-2 text-14 border border-tableBorder text-center">
                              <label className="custom-checkbox">
                                <input
                                  type="checkbox"
                                  id="customControlInline"
                                  className="form-check-input h-4 w-4 transition duration-150 ease-in-out"
                                />
                                <span></span>
                              </label>
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td className="px-4 py-2 text-14 border border-tableBorder"></td>
                          <td className="px-4 py-2 text-14 border border-tableBorder"></td>
                          <td className="px-4 py-2 text-14 border border-tableBorder text-center">
                            <span className="cursor-pointer hover:text-gold">
                              (Select All)
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex w-full justify-end mt-4">
                    <button className="text-14 mr-2 h-7 rounded bg-confirm text-white w-20">
                      Confirm
                    </button>
                    <button
                      className="text-14 h-7 rounded bg-cancel text-white w-20"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default LastYearObjectivesModal;
