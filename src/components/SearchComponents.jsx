// import { Fragment } from "react";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
export const SearchComponents = () => {
  const [value, setValue] = useState(dayjs());
  return (
    <div className="container p-4 mx-auto flex justify-between">
      <TextField
        id="search"
        label="Search"
        variant="standard"
        color="success"
        sx={{ width: 220 }}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Controlled picker"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
    </div>
  );
};
