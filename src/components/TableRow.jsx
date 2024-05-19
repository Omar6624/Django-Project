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
        <p>{items.id}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7">
        <p>{items.report_id}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7">
        <p>{items.company_name}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7">
        <p>{items.fiscal_year}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7">
        <p>{items.total_revenue}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7">
        <p>{items.gross_profit}</p>
      </td>
      <td className="p-3whitespace-nowrap  min-w-7">
        <p>{items.operating_expense}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7">
        <p>{items.net_income}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7">
        <p>{items.earnings_per_share}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7">
        <p>{items.total_assets}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7">
        <p>{items.total_liabilities}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7">
        <p>{items.shareholders_equity}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7">
        <p>{items.cash_flow_operations}</p>
      </td>
      <td className="p-3whitespace-nowrap  min-w-7">
        <p>{items.cash_flow_investing}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7">
        <p>{items.cash_flow_financing}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7">
        <p>{items.auditor_name}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7">
        <p>{items.audit_opinion}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7">
        <p>{items.report_date}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7">
        <p>{items.filing_date}</p>
      </td>
      <td className="p-3 whitespace-nowrap min-w-7">
        <p>{items.country}</p>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    auditor_name: PropTypes.string.isRequired,
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
    Column16: PropTypes.string.isRequired,
    Column17: PropTypes.string.isRequired,
    Column18: PropTypes.string.isRequired,
    Column19: PropTypes.string.isRequired,
    Column20: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default TableRow;
