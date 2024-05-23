import PropTypes from "prop-types";
import Frc from "../assets/images/Frc.png";
const PdfShow = ({ rowData }) => {
  if (!rowData) {
    return (
      <div className="m-3 bg-slate-100  border-2 border-gray-400 rounded-sm ">
        <div className="flex max-lg:flex-col items-center justify-self-center">
          <img src={Frc} alt="frc" />
          <div className=" text-[60px]  font-palanquin text-gray-600 pb-6 font-bold lg:ml-72 ">
            <p>DVST Report</p>
          </div>
        </div>
        <div className="flex flex-col m-2 p-2 text-gray-700 text-md border-2 border-dashed border-gray-400  border-spacing-7 font-palanquin gap-2 min-h-36"></div>
      </div>
    );
  }
  return (
    <div className="m-3 bg-slate-100  border-2 border-gray-400 rounded-sm ">
      <div className="flex max-lg:flex-col items-center justify-self-center">
        <img src="/public/Frc.png" alt="frc" />
        <div className=" text-[60px]  font-palanquin text-gray-600 pb-6 font-bold lg:ml-72 ">
          <p>DVST Report</p>
        </div>
      </div>
      <div className="flex flex-col m-2 p-2 text-gray-700 text-md border-2 border-dashed border-gray-400  border-spacing-7 font-palanquin gap-2">
        {Object.entries(rowData).map(([key, value]) => (
          <p key={key}>
            <span className=" text-lg">{key} : </span>
            <span>{value}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

PdfShow.propTypes = {
  rowData: PropTypes.object,
};

export default PdfShow;
