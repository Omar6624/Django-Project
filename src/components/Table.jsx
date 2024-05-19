import TableRow from "./TableRow";
import { useState, Fragment, useEffect } from "react";
import { TableHeaders } from "../constant";
import PdfShow from "./PdfShow";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";
import propTypes from "prop-types";
const generatePdf = (id, pdfName) => {
  const el = document.getElementById(id);
  if (!el) {
    console.error("id not found");
    return;
  }
  const doc = new jsPDF();
  // const width = el.offsetWidth;
  const height = el.offsetHeight;
  html2canvas(el).then((canvas) => {
    // Convert the canvas to a data URL
    const imageData = canvas.toDataURL("image/png");

    // Add an image to the PDF document, keeping the width as A4 width (210mm)
    doc.addImage(imageData, "PNG", 0, 0, 210, (height * 210) / canvas.width);

    // Save the PDF
    doc.save(pdfName);
  });
};

const Table = ({ dateValue, searchValue }) => {
  const [rowData, setRowData] = useState(null);
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/data/").then((res) => setMyData(res.data));
  }, []);

  const rowClickHandle = (rows) => {
    setRowData(rows);
  };
  return (
    <Fragment>
      <div className="container p-4 mx-auto  ">
        <div className=" overflow-scroll  rounded-sm h-96 bg-neutral-100 border-2 shadow-sm max-w-full">
          <table className="min-w-full text-sm font-montserrat ">
            <thead>
              <tr className="text-center sticky top-0 text-white  bg-gray-600 z-10">
                {TableHeaders.map((header) => (
                  <th className="p-3" key={header}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {myData
                .filter((item) => {
                  if (!searchValue) return true; // If there's no search value, keep the item
                  const Match =
                    item.sector
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    item.country
                      .toLowerCase()
                      .includes(searchValue.toLowerCase());
                  if (dateValue === null) {
                    return Match;
                  } else {
                    return (
                      Match &&
                      item.report_date
                        .toLowerCase()
                        .includes(dateValue.toLowerCase())
                    );
                  }
                })
                .map((items) => (
                  <TableRow
                    key={items.id}
                    items={items}
                    onClick={() => rowClickHandle(items)}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-end container p-4 mx-auto  ">
        <button
          className="custom-btn delay-50 p-2"
          onClick={() => generatePdf("pdf-id", "Report")}
        >
          Download PDF
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 p-1 font-semibold "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </button>
      </div>
      <div className="container p-2 mx-auto" id="pdf-id">
        <PdfShow rowData={rowData} />
      </div>
    </Fragment>
  );
};

export default Table;
Table.propTypes = {
  dateValue: propTypes.string.isRequired,
  searchValue: propTypes.string.isRequired,
};
