import React from "react";

const LoaderRow = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
      </th>
      <td className="px-6 py-4">
        <div className="h-2.5 animate-pulse ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
      </td>
      <td className="px-6 py-4">
        <div className="h-2.5 animate-pulse ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
      </td>
      <td className="px-6 py-4">
        <div className="h-2.5 animate-pulse ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
      </td>
      <td className="px-6 py-4 text-right flex items-center gap-3">
        <div className="h-2.5 animate-pulse ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
        <div className="h-2.5 animate-pulse ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
      </td>
    </tr>
  );
};

export default LoaderRow;
