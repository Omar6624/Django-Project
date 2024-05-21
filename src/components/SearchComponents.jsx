import PropTypes from "prop-types";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
export const SearchComponents = ({
  dateValue,
  searchValue,
  selectValue,
  handleText,
  handleBlur,
  handleDate,
  handleBlurDate,
  handleSelectValue,
}) => {
  const handleClear = () => {
    handleBlur();
    handleBlurDate();
  };
  return (
    <div className="flex justify-between container p-4 mx-auto items-center max-lg:flex-wrap gap-2 ">
      <div className=" flex gap-7">
        <FormControl>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Select
          </InputLabel>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            value={selectValue === "" ? "Company_Name" : selectValue}
            onChange={handleSelectValue}
          >
            <option value={"Company_Name"}>Company Name</option>
            <option value={"User_Name"}>Username</option>
            <option value={"Date"}>Date</option>
            <option value={"Business_Nature"}>Business Nature</option>
            <option value={"Business_Industry"}>Business Industry</option>
          </NativeSelect>
        </FormControl>
        <TextField
          id="search"
          label="Search"
          variant="standard"
          color="success"
          sx={{ width: 220 }}
          value={selectValue === "Date" ? "" : searchValue}
          onChange={handleText}
          disabled={selectValue === "Date" ? true : false}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date Search"
            onChange={(newValue) => handleDate(newValue)}
            value={selectValue !== "Date" ? null : dateValue}
            disabled={selectValue !== "Date" ? true : false}
          />
        </LocalizationProvider>
      </div>
      <div className="  flex">
        <button
          className="custom-btn delay-50 text-center items-center py-2 px-5  "
          onClick={handleClear}
        >
          Clear
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 font-semibold pl-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
SearchComponents.propTypes = {
  dateValue: PropTypes.object,
  selectValue: PropTypes.string,
  searchValue: PropTypes.string.isRequired,
  handleText: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleDate: PropTypes.func.isRequired,
  handleBlurDate: PropTypes.func.isRequired,
  handleSelectValue: PropTypes.func.isRequired,
};
