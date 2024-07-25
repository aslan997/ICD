import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";

const ProfileTable = () => {
  return (
    <div className="px-4 py-24">
      <div className="text-sm breadcrumbs mb-4">
        <ul className="inline-flex items-center">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Icon icon="tabler:slash" />
          </li>
          <li>User Profile</li>
        </ul>
      </div>
      <div className="bg-white rounded shadow-card p-4 w-full md:w-1/2">
        <h2 className="text-lg font-bold text-yellow-600 mb-4">User Profile</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Company
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ICD
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Full Name
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Michael Cheng
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Email Address
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
