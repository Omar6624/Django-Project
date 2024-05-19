// import { Fragment } from "react";
import PropTypes from "prop-types";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
export const SearchComponents = ({
  dateValue,
  searchValue,
  handleText,
  handleBlur,
  handleDate,
  handleBlurDate,
}) => {
  const handleClear = () => {
    handleBlur();
    handleBlurDate();
  };
  return (
    <div className="flex justify-between container p-4 mx-auto items-center ">
      <div className=" flex gap-7">
        <TextField
          id="search"
          label="Search"
          variant="standard"
          color="success"
          sx={{ width: 220 }}
          value={searchValue}
          onChange={handleText}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date Search"
            onChange={(newValue) => handleDate(newValue)}
            value={dateValue}
          />
        </LocalizationProvider>
      </div>
      <div>
        <button
          className="custom-btn delay-50 text-center items-center py-2 px-5"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
};
SearchComponents.propTypes = {
  dateValue: PropTypes.object.isRequired,
  searchValue: PropTypes.string.isRequired,
  handleText: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleDate: PropTypes.func.isRequired,
  handleBlurDate: PropTypes.func.isRequired,
};
