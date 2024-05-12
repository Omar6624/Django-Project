import PropTypes from "prop-types";
const TableRow = ({ items, onClick }) => {
  if (!items) {
    return null;
  }
  return (
    <tr
      className="border-b border-opacity-20  hover:bg-gray-200 bg-gray-100 text-md text-gray-900 hover:text-gray-700   transition-transform ease-in-out delay-50 hover:scale-[1.01] hover:cursor-pointer"
      onClick={() => onClick(items)}
    >
      <td className="p-3 min-w-2">
        <p>{items.Index}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{items.Column1}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{items.Column2}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{items.Column3}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{items.Column4}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{items.Column5}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{items.Column6}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{items.Column7}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{items.Column8}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{items.Column9}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{items.Column10}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{items.Column11}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{items.Column12}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{items.Column13}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{items.Column14}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{items.Column15}</p>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  items: PropTypes.shape({
    Index: PropTypes.number.isRequired,
    Column1: PropTypes.string.isRequired,
    Column2: PropTypes.string.isRequired,
    Column3: PropTypes.string.isRequired,
    Column4: PropTypes.string.isRequired,
    Column5: PropTypes.string.isRequired,
    Column6: PropTypes.string.isRequired,
    Column7: PropTypes.string.isRequired,
    Column8: PropTypes.string.isRequired,
    Column9: PropTypes.string.isRequired,
    Column10: PropTypes.string.isRequired,
    Column11: PropTypes.string.isRequired,
    Column12: PropTypes.string.isRequired,
    Column13: PropTypes.string.isRequired,
    Column14: PropTypes.string.isRequired,
    Column15: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default TableRow;
