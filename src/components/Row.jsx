import React from "react";

import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

const Row = ({ id, title, short_name, fee }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </th>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">{short_name}</td>
      <td className="px-6 py-4">{fee}</td>
      <td className="px-6 py-4 text-right flex items-center gap-3">
        <EditBtn id={id} />   
        <DeleteBtn id={id} />
      </td>
    </tr>
  );
};

export default Row;
