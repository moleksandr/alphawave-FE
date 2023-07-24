// Dependencies
import React from "react";

// Export component
export const StandardTable = () => {
  return (
    <table className={"w-full h-full border-[1px] border-solid"}>
      <thead className="bg-lightBlue">
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={"border-[1px] border-solid border-gray-700"}>
            John Smith
          </td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
        </tr>
        <tr>
          <td className={"border-[1px] border-solid border-gray-700"}>
            Example company
          </td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
        </tr>
        <tr>
          <td className={"border-[1px] border-solid border-gray-700"}>
            example@example.com
          </td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
        </tr>
        <tr>
          <td className={"border-[1px] border-solid border-gray-700"}>
            example
          </td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
        </tr>
        <tr>
          <td className={"border-[1px] border-solid border-gray-700"}>
            (000) 000-0000
          </td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
          <td className={"border-[1px] border-solid border-gray-700"}></td>
        </tr>
      </tbody>
    </table>
  );
};
