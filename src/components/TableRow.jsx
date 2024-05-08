import PropTypes from "prop-types";
const TableRow = ({
  Index,
  Column1,
  Column2,
  Column3,
  Column4,
  Column5,
  Column6,
  Column7,
  Column8,
  Column9,
  Column10,
}) => {
  return (
    <tr className="border-b border-opacity-20 bg-neutral-300 text-md ">
      <td className="p-3 min-w-2">
        <p>{Index}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{Column1}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{Column2}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{Column3}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{Column4}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{Column5}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{Column6}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{Column7}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{Column8}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{Column9}</p>
      </td>
      <td className="p-3  min-w-7">
        <p>{Column10}</p>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
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
};

export default TableRow;
