import TableRow from "./TableRow";
import { TableHeaders, DemoRowValues } from "../constant";
const Table = () => {
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800 ">
      <div className="overflow-auto  rounded-lg h-96 dark:bg-white bg-neutral-100 border-2 ">
        <table className="min-w-full text-sm font-montserrat  ">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead className=" text-white  bg-gray-600 dark:bg-gray-300 dark:text-black">
            <tr className="text-left">
              {TableHeaders.map((header) => (
                <th className="p-3" key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DemoRowValues.map((items) => (
              <TableRow
                key={items.Index}
                Index={items.Index}
                Column1={items.Column1}
                Column2={items.Column2}
                Column3={items.Column3}
                Column4={items.Column4}
                Column5={items.Column5}
                Column6={items.Column6}
                Column7={items.Column7}
                Column8={items.Column8}
                Column9={items.Column9}
                Column10={items.Column10}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
