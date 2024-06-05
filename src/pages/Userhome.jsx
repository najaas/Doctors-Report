import { useState } from "react";
import {
  FaSearch,
  FaDownload,
  FaCommentAlt,
  FaRegWindowClose,
} from "react-icons/fa";
import Profile from "../assets/Profile.png";
import Exit from "../assets/Exit.png";
import Print from "../assets/print.png";
import Logo from "../assets/logo.png";
import { MdFilterAlt } from "react-icons/md";

const patientReports = [
  {
    orderId: "AR0021",
    date: "01/05/2023",
    patientName: "Sankaranarayanan",
    hospitalId: "D402035000745",
    testName: "Anti-Leprotein Titer",
    doctorName: "Dr. Arul K. Thambi",
    eta: "03/05/2023",
    status: "Pending",
  },
  {
    orderId: "AR0022",
    date: "01/05/2023",
    patientName: "Baby Alan",
    hospitalId: "D402035000824",
    testName: "Anti-Leprotein Titer",
    doctorName: "Dr. Anjali Mathews",
    eta: "03/05/2023",
    status: "Final Report",
  },
  {
    orderId: "AR0023",
    date: "02/05/2023",
    patientName: "Baby.Aniruth",
    hospitalId: "D402035000987",
    testName: "Complete Blood Count",
    doctorName: "Dr. Raghav Gupta",
    eta: "04/05/2023",
    status: "Pending",
  },
  {
    orderId: "AR0024",
    date: "02/05/2023",
    patientName: " Warrier",
    hospitalId: "D402035001234",
    testName: "Thyroid Profile",
    doctorName: "Dr. Priya Desai",
    eta: "05/05/2023",
    status: "Final Report",
  },
  {
    orderId: "AR0025",
    date: "03/05/2023",
    patientName: "Kumar, Rohit",
    hospitalId: "D402035005678",
    testName: "Lipid Profile",
    doctorName: "Dr. Amit Sharma",
    eta: "05/05/2023",
    status: "Pending",
  },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [showDownloadPreview, setShowDownloadPreview] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null); // Add selected report state

  const handleDownloadClick = (report) => {
    console.log("Downloading report:", report.orderId);
    setSelectedReport(report);
    setShowDownloadPreview(true);
  };

  const handleCloseDownloadPreview = () => {
    setShowDownloadPreview(false);
    setSelectedReport(null);
  };

  const filteredReports = patientReports.filter(
    (report) =>
      report.patientName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterOption === "" || report.status === filterOption)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full h-[70px] flex justify-between items-center p-4 bg-white">
        <div className="w-[150px] h-[50px] bg-cover">
          <img src={Logo} alt="" />
        </div>
        <div className="flex items-center space-x-4">
          <h1 className="text-xl text-gray-500">Username</h1>
          <img src={Profile} className="w-[40px]" alt="Profile" />
          <img src={Exit} className="w-[40px]" alt="Exit" />
        </div>
      </div>

      <div className="p-4 bg-[#E4FBFB] shadow-md flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500 mb-2 sm:mb-0">
          Patient Reports
        </h1>
        <div className="flex items-center space-x-4">
          <button
            className="px-4 py-2 border border-gray-300 rounded bg-[#1F6CAB] text-white flex items-center"
            onClick={() => setShowFilter(!showFilter)}
          >
            <span className="ml-2">Apply Filter </span>
            <MdFilterAlt />
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by Doctor Name/Patient Name/Test Name..."
              className="px-4 py-2 border border-gray-300 rounded-l w-full sm:w-[420px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {showFilter && (
        <div className="bg-[#E4FBFB] p-4 rounded-md mb-4 mx-4 shadow-md">
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block mb-1 text-gray-700">From Date</label>
              <input
                type="date"
                className="block w-full mt-1 border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">To Date</label>
              <input
                type="date"
                className="block w-full mt-1 border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Patient Name</label>
              <input
                type="text"
                className="block w-full mt-1 border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Hospital ID</label>
              <input
                type="text"
                className="block w-full mt-1 border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Bill No</label>
              <input
                type="text"
                className="block w-full mt-1 border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Refer by</label>
              <select className="block w-full mt-1 border border-gray-300 rounded p-2">
                <option value="Doctor Name">Doctor Name</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Status</label>
              <select
                className="block w-full mt-1 border border-gray-300 rounded p-2"
                value={filterOption}
                onChange={(e) => setFilterOption(e.target.value)}
              >
                <option value="">All</option>
                <option value="Pending">Pending</option>
                <option value="Final Report">Final Report</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                className="px-4 py-2 bg-[#1F6CAB] text-white rounded"
                onClick={() => setShowFilter(!showFilter)}
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto flex-grow p-4">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-[#FFFFFF] text-black shadow-sm shadow-black">
            <tr>
              <th className="px-4 py-2 text-left">Order No.</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Patient Name</th>
              <th className="px-4 py-2 text-left">Hospital ID</th>
              <th className="px-4 py-2 text-left">Test Name</th>
              <th className="px-4 py-2 text-left">Doctor Name</th>
              <th className="px-4 py-2 text-left">ETA</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report, index) => (
              <tr key={index} className="border-b">
                <td className="border px-4 py-2 text-left">{report.orderId}</td>
                <td className="border px-4 py-2 text-left">{report.date}</td>
                <td className="border px-4 py-2 text-left group relative">
                  {report.patientName}
                  <div className="absolute hidden group-hover:block bg-[#B8FACE] border border-gray-300 rounded shadow-lg p-4 w-96 z-10">
                    <p>
                      <strong>Name:</strong> {report.patientName}
                    </p>
                    <div className="flex gap-4">
                      <p>
                        <strong>Age:</strong> 80 Y
                      </p>
                      <p>
                        <strong>Gender:</strong> Male
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <p>
                        <strong>Bill No:</strong> DH2223/000123456
                      </p>
                      <p>
                        <strong>Hospital ID:</strong> 01/05/2023
                      </p>
                    </div>
                  </div>
                </td>
                <td className="border px-4 py-2 text-left">
                  {report.hospitalId}
                </td>
                <td className="border px-4 py-2 text-left">
                  {report.testName}
                </td>
                <td className="border px-4 py-2 text-left">
                  {report.doctorName}
                </td>
                <td className="border px-4 py-2 text-left">{report.eta}</td>
                <td className="border px-4 py-2 text-left">{report.status}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    className="px-2 py-1 bg-[#1F6CAB] text-white rounded"
                    onClick={() => handleDownloadClick(report)}
                  >
                    <FaDownload />
                  </button>
                  <button className="px-2 py-1 bg-[#1F6CAB] text-white rounded ml-2">
                    <FaCommentAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showDownloadPreview && selectedReport && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-[#E4FBFB] rounded-lg p-4 shadow-md w-[90%] h-[90%] flex flex-col">
            <h2 className="text-xl font-medium mb-2">Downloading Report</h2>
            <div className="w-full h-[80%]">
              <img src={Print} className="w-full h-full" alt="" />
            </div>
            <div>
              <br />
              <div className="flex justify-end gap-2 mt-4">
                <button className="px-4 py-2 bg-[#1F6CAB] text-white rounded flex items-center gap-2">
                  <FaDownload /> Download
                </button>
                <button
                  className="px-4 py-2 bg-[#FF9B21] text-gray-700 rounded hover:bg-gray-400 mr-2 flex items-center gap-2"
                  onClick={handleCloseDownloadPreview}
                >
                  <FaRegWindowClose />
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;