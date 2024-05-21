import PropTypes from "prop-types";
const TableRow = ({ items, onClick }) => {
  if (!items) {
    return null;
  }
  // console.log(typeof items)
  return (
    <tr
      className="border-b border-opacity-20  hover:bg-gray-200 bg-gray-100 text-md text-gray-900 hover:text-gray-700   transition-transform ease-in-out delay-50 hover:scale-[1.01] hover:cursor-pointer"
      onClick={() => onClick(items)}
    >
      {/* {Object.keys(items).map((item) => (
        <td
          key={items[item]}
          className="p-3 whitespace-nowrap min-w-7 max-w-64"
        >
          <p>{items[item]}</p>
        </td>
      ))} */}

      <td className="p-3 min-w-2">
        <p>{items.Index}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7 max-w-16">
        <p>{items.DVC_Code}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7  max-w-60">
        <p>{items.Company_Name}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7  max-w-60">
        <p>{items.Business_Nature}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7 max-w-60">
        <p>{items.Business_Sector}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7 max-w-60">
        <p>{items.Business_Industry}</p>
      </td>
      <td className="p-3whitespace-nowrap  min-w-7 max-w-60">
        <p>{items.Listed}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7 max-w-60">
        <p>{items.Legal_Status}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7 max-w-60">
        <p>{items.User_Key}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7 max-w-60">
        <p>{items.User_Name}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7 max-w-60">
        <p>{items.Firm_Key}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7 max-w-60">
        <p>{items.Firm_Name}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7 max-w-60">
        <p>{items.Service_Category}</p>
      </td>
      <td className="p-3whitespace-nowrap  min-w-7 max-w-60">
        <p>{items.Service_Name}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7 max-w-60">
        <p>{items.Document_Date}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7 max-w-60">
        <p>{items.Document}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7 max-w-60">
        <p>{items.Reference_Law}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7 max-w-60">
        <p>{items.DVC_Date}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7 max-w-60">
        <p>{items.Day}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7 max-w-60">
        <p>{items.Month}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7 max-w-60">
        <p>{items.Year}</p>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  items: PropTypes.shape({
    Index: PropTypes.number.isRequired,
    DVC_Code: PropTypes.string.isRequired,
    Company_Name: PropTypes.string.isRequired,
    Business_Nature: PropTypes.string.isRequired,
    Business_Sector: PropTypes.string.isRequired,
    Business_Industry: PropTypes.string.isRequired,
    Listed: PropTypes.string.isRequired,
    Legal_Status: PropTypes.string.isRequired,
    User_Key: PropTypes.string.isRequired,
    User_Name: PropTypes.string.isRequired,
    Firm_Key: PropTypes.string.isRequired,
    Firm_Name: PropTypes.string.isRequired,
    Service_Category: PropTypes.string.isRequired,
    Service_Name: PropTypes.string.isRequired,
    Document_Date: PropTypes.string.isRequired,
    Document: PropTypes.string.isRequired,
    Reference_Law: PropTypes.string.isRequired,
    Day: PropTypes.number.isRequired,
    Month: PropTypes.number.isRequired,
    Year: PropTypes.number.isRequired,
    DVC_Date: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default TableRow;
