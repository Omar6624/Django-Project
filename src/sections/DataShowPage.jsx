import Table from "../components/Table";
import VerticalNav from "../components/VerticalNav";
import DropdownButton from "../components/DropdownButton";

const DataShowPage = () => {
  return (
    <div className="  lg:grid lg:grid-cols-7   h-screen w-full">
      <div className=" hidden lg:flex lg:flex-shrink-0 lg:h-ful border-r shadow-lg ">
        <VerticalNav />
      </div>
      <div className="lg:hidden max-lg:h-[70px] bg-gray-100 sticky top-0 shadow-md pt-1">
        <DropdownButton />
      </div>

      <div className="lg:col-span-3 w-full  p-3 border-dashed max-lg:border-b-4 border-gray-400  lg:border-r-4   ">
        <Table />
      </div>
      <div className="lg:col-span-3 w-full bg-slate-300 "></div>
    </div>
  );
};

export default DataShowPage;
