import React from 'react'

const EmptyRow = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
     
      <td className="px-6 py-4 text-center" colSpan={5}>There is no course.</td>
     
    </tr>
  )
}

export default EmptyRow
