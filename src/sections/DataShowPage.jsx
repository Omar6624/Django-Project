import Table from "../components/Table";
import VerticalNav from "../components/VerticalNav";
import DropdownButton from "../components/DropdownButton";
import { SearchComponents } from "../components/SearchComponents";
// import dayjs from "dayjs";
import { useState } from "react";

const DataShowPage = () => {
  const [dateValue, setDateValue] = useState(null);
  // console.log(dateValue.format("YY-MM-DD"));
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSeletValue] = useState("");
  const handleSelectValue = (event) => {
    setSeletValue(event.target.value);
  };

  const handleText = (e) => {
    setSearchValue(e.target.value);
  };
  const handleBlur = () => {
    setSearchValue("");
  };
  const handleDate = (newDate) => {
    setDateValue(newDate);
  };
  const handleBlurDate = () => {
    setDateValue(null);
  };

  return (
    <div className="  lg:grid lg:grid-cols-7 h-screen w-full">
      <div className=" hidden lg:flex lg:flex-shrink-0 h-full border-r shadow-lg sticky top-0 ">
        <VerticalNav />
      </div>
      <div className="lg:hidden max-lg:h-[70px] bg-gray-100 sticky top-0 shadow-md pt-1 z-30">
        <DropdownButton />
      </div>

      <div className="lg:col-span-6 w-full  p-3 pt-10">
        <SearchComponents
          searchValue={searchValue}
          selectValue={selectValue}
          handleText={handleText}
          handleBlur={handleBlur}
          handleDate={handleDate}
          handleBlurDate={handleBlurDate}
          handleSelectValue={handleSelectValue}
        />

        <Table
          dateValue={dateValue === null ? null : dateValue}
          searchValue={searchValue}
          selectValue={selectValue}
        />
      </div>
    </div>
  );
};

export default DataShowPage;
