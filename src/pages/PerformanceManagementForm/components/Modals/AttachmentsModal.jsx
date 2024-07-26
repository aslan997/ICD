import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const data = [
  {
    createdDate: "02-Jul-2024 01:11 PM",
    stage: "Mid-Year Review",
    filename: "1719911467_logo_dark.png",
  },
];

const AttachmentsModal = ({ open, setOpen }) => {
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
                <div className="flex justify-between items-center p-4 bg-tableHeader border-b">
                  <Dialog.Title
                    as="h3"
                    className="text-18 font-semibold leading-6"
                  >
                    Attachments
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
                  <div className="mt-5">
                    <label className="block text-14 font-500 mb-2 mt-4">
                      Select Attachments:{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      className="w-full px-3 py-2 border rounded text-14"
                    />
                  </div>
                  <div className="mt-5 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 mt-3">
                      <thead>
                        <tr className="bg-tableHeader">
                          <th className="px-4 text-14 font-head py-2 border border-tableBorder">
                            Created Date
                          </th>
                          <th className="px-4 text-14 font-head py-2 border border-tableBorder">
                            Stage
                          </th>
                          <th className="px-4 text-14 font-head py-2 border border-tableBorder">
                            Filename
                          </th>
                          <th className="px-4 text-14 font-head py-2 border border-tableBorder">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {data?.map((res, id) => (
                          <tr key={id}>
                            <td className="px-4 py-2 text-14 border border-tableBorder">
                              {res?.createdDate}
                            </td>
                            <td className="px-4 py-2 text-14 border border-tableBorder">
                              {res?.stage}
                            </td>
                            <td className="px-4 py-2 text-14 border border-tableBorder">
                              <span className="inline-flex items-center">
                                <Icon
                                  icon="entypo:attachment"
                                  className="mr-1"
                                />
                                <Link to="" className="hover:text-gold">
                                  {res?.filename}
                                </Link>
                              </span>
                            </td>
                            <td className="px-4 py-2 text-14 border border-tableBorder">
                              <button>
                                <Icon
                                  icon="ic:baseline-delete"
                                  className="h-5 w-5"
                                />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <hr />
                <div className="flex justify-start p-4">
                  <button className="bg-gold text-14 text-white px-4 py-2 rounded shadow-button mr-2">
                    Update
                  </button>
                  <button
                    className="bg-btnSecondary text-14 text-white px-4 py-2 rounded shadow-button"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AttachmentsModal;
