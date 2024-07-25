import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";
import Braeadcrumb from "../../../components/Breadcrumb/Braeadcrumb";

const ProfileTable = () => {
  const pageNames = ["Dashboard", "Profile"];
  const pageUrls = ["/dashboard", "/profile"];
  return (
    <div className="px-4 py-24">
      <Braeadcrumb pageNames={pageNames} pageUrls={pageUrls} />
      <div className="bg-white rounded shadow-card mt-4  p-4 w-full md:w-1/2">
        <h2 className="text-lg font-bold text-gold mb-4">User Profile</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200 border border-tableBorder">
              <tr className="bg-tableHeader">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-tableBorder">
                  Company
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-tableBorder">
                  ICD
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-tableBorder">
                  Full Name
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-tableBorder">
                  Michael Cheng
                </td>
              </tr>
              <tr className="bg-tableHeader">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-tableBorder">
                  Email Address
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-tableBorder">
                  hra@icd.gov.ae
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfileTable;
