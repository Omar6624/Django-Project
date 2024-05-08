// import Table from "../components/Table";
import VerticalNav from "../components/VerticalNav";
import DropdownButton from "../components/DropdownButton";

const DataShowPage = () => {
  return (
    <div className="grid lg:grid-cols-7  max-lg:grid-cols-5 h-screen w-full">
      <div className=" hidden lg:flex lg:flex-shrink-0 h-ful border-r shadow-lg">
        <VerticalNav />
      </div>
      <div className="lg:hidden">
        <DropdownButton />
      </div>
    </div>
  );
};

export default DataShowPage;
