import Table from "../components/Table";
import VerticalNav from "../components/VerticalNav";
import DropdownButton from "../components/DropdownButton";
import { SearchComponents } from "../components/SearchComponents";

const DataShowPage = () => {
  return (
    <div className="  lg:grid lg:grid-cols-7 h-screen w-full">
      <div className=" hidden lg:flex lg:flex-shrink-0 h-full border-r shadow-lg sticky top-0 ">
        <VerticalNav />
      </div>
      <div className="lg:hidden max-lg:h-[70px] bg-gray-100 sticky top-0 shadow-md pt-1">
        <DropdownButton />
      </div>

      <div className="lg:col-span-6 w-full  p-3 pt-10">
        <SearchComponents />
        <Table />
      </div>
    </div>
  );
};

export default DataShowPage;
