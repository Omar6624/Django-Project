import Table from "../components/Table";
import Nav from "../components/Nav";
const DataShowPage = () => {
  return (
    <div className="min-h-screen  bg-white dark:bg-neutral-600">
      <section className="w-full border-b-2 border-gay-300">
        <Nav />
      </section>
      <section>
        <Table />
      </section>
    </div>
  );
};

export default DataShowPage;
