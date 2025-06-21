import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";


const pdfData = [
  {
    id: "407703",
    name: "Abdul Hakim Omar Al-Kalde",
    title: "Project Manager",
    group: "MANAGMENT",
    file: "",
    description: "ID  For Abdul Hakim Omar Al-Kalde ",
    status: "N/A",
  },
  {
    id: "407703",
    name: "Abdul Hakim Omar Al-Kalde",
    title: "Project Manager",
    group: "MANAGMENT",
    file: "",
    description: "Job Offer  For Abdul Hakim Omar Al-Kalde ",
    status: "N/A",
  },
  {
    id: "407703",
    name: "Abdul Hakim Omar Al-Kalde",
    title: "Project Manager",
    group: "MANAGMENT",
    file: "",
    description: "Joining from For Abdul Hakim Omar Al-Kalde ",
    status: "N/A",
  },
  {
    id: "407703",
    name: "Abdul Hakim Omar Al-Kalde",
    title: "Project Manager",
    group: "MANAGMENT",
    file: "",
    description: "Cv For Abdul Hakim Omar Al-Kalde ",
    status: "N/A",
  },

  {
    id: "401798",
    name: "Shoeib Abou Zeid Mahmoud Awad",
    title: "Operation Manager",
    group: "MANAGMENT",
    file: "https://drive.google.com/file/d/10hpXcpAfxvaA38QVkoUR7hKeJRHTc_UB/view?usp=sharing",
    description: "Passprot for Engr. Shoeib Abou Zeid Mahmoud Awad",
    status: "A/V",
  },
  {
    id: "401798",
    name: "Shoeib Abou Zeid Mahmoud Awad",
    title: "Operation Manager",
    group: "MANAGMENT",
    file: "https://drive.google.com/file/d/1CjrJemtr1DNJZxL5A2ytuy5RitUaR5ob/view?usp=drive_link",
    description: "Iqama for Engr. Shoeib Abou Zeid Mahmoud Awad",
    status: "A/V",
  },
  {
    id: "401798",
    name: "Shoeib Abou Zeid Mahmoud Awad",
    title: "Operation Manager",
    group: "MANAGMENT",
    file: "",
    description: "Joining from for Engr. Shoeib Abou Zeid Mahmoud Awad",
    status: "N/A",
  },
  {
    id: "401798",
    name: "Shoeib Abou Zeid Mahmoud Awad",
    title: "Operation Manager",
    group: "MANAGMENT",
    file: "",
    description: "Job for Engr. Shoeib Abou Zeid Mahmoud Awad",
    status: "N/A",
  },
  {
    id: "401798",
    name: "Shoeib Abou Zeid Mahmoud Awad",
    title: "Operation Manager",
    group: "MANAGMENT",
    file: "",
    description: "CV for Engr. Shoeib Abou Zeid Mahmoud Awad",
    status: "N/A",
  },

  {
    id: "405721",
    name: "Ashraf Ahmed Abdulhadi",
    title: "Project Coordinator",
    group: "MANAGMENT",
    file: "https://drive.google.com/file/d/1MT75u3FnDT4W4GDNz2LEbsb0sM1d8CZX/view?usp=drive_link",
    description: "Iqama for Engr. Ashraf Ahmed Abdulhadi",
    status: "A/V",
  },
  {
    id: "405721",
    name: "Ashraf Ahmed Abdulhadi",
    title: "Project Coordinator",
    group: "MANAGMENT",
    file: "https://drive.google.com/file/d/1dVVw7_8laQJCUS-cdUfjOJ5pLVIfLc2_/view?usp=drive_link",
    description: "Passprot for Engr. Ashraf Ahmed Abdulhadi",
    status: "A/V",
  },
  {
    id: "405721",
    name: "Ashraf Ahmed Abdulhadi",
    title: "Project Coordinator",
    group: "MANAGMENT",
    file: "https://drive.google.com/file/d/1dVVw7_8laQJCUS-cdUfjOJ5pLVIfLc2_/view?usp=drive_link",
    description: "Job Offer for Engr. Ashraf Ahmed Abdulhadi",
    status: "N/A",
  },
  {
    id: "405721",
    name: "Ashraf Ahmed Abdulhadi",
    title: "Project Coordinator",
    group: "MANAGMENT",
    file: "https://drive.google.com/file/d/1dVVw7_8laQJCUS-cdUfjOJ5pLVIfLc2_/view?usp=drive_link",
    description: "CV for Engr. Ashraf Ahmed Abdulhadi",
    status: "N/A",
  },
  {
    id: "403698",
    name: "Ahmed Al-Dossary",
    title: "Project Administrator",
    group: "MANAGMENT",
    file: "",
    description: "CV for Ahmed Al-Dossary",
    status: "N/A",
  },
  {
    id: "403698",
    name: "Ahmed Al-Dossary",
    title: "Project Administrator",
    group: "MANAGMENT",
    file: "",
    description: "JoB Offcer for Ahmed Al-Dossary",
    status: "N/A",
  },
  {
    id: "403698",
    name: "Ahmed Al-Dossary",
    title: "Project Administrator",
    group: "MANAGMENT",
    file: "",
    description: "JoB Offcer for Ahmed Al-Dossary",
    status: "N/A",
  },

  {
    id: "407703",
    name: "Amir Hossain",
    title: "Foreman",
    group: "Airport N & S",
    file: "https://drive.google.com/file/d/1yvCeguxZt0vdrpRpQa1mtkx2DCrpqF8T/view?usp=drive_link",
    description: "this one  only Iqama.",
    status: "A/V",
  },
  {
    id: "405406",
    name: "ANTONIO JR ENARIO ",
    title: "Supervisor Nursery",
    group: "NURSERY",
    file: "https://drive.google.com/file/d/1-nNd5dVsq3wWt9xnsr473NSzeWDcpPfd/view?usp=sharing",
    description: "Iqama for ANTONIO JR ENARIO.",
    status: "A/V",
  },
  {
    id: "405406",
    name: "ANTONIO JR ENARIO ",
    title: "Supervisor Nursery",
    group: "NURSERY",
    file: "",
    description: "Joining  for ANTONIO JR ENARIO.",
    status: "N/A",
  },
  {
    id: "405406",
    name: "ANTONIO JR ENARIO ",
    title: "Supervisor Nursery",
    group: "NURSERY",
    file: "https://drive.google.com/file/d/1-nNd5dVsq3wWt9xnsr473NSzeWDcpPfd/view?usp=sharing",
    description: "Job Offfer for ANTONIO JR ENARIO.",
    status: "N/A",
  },
  {
    id: "405406",
    name: "ANTONIO JR ENARIO ",
    title: "Supervisor Nursery",
    group: "NURSERY",
    file: "https://drive.google.com/file/d/1-nNd5dVsq3wWt9xnsr473NSzeWDcpPfd/view?usp=sharing",
    description: "CV for ANTONIO JR ENARIO.",
    status: "N/A",
  },
];

const Files = () => {
  const [search, setSearch] = useState("");
  const [groupFilter, setGroupFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const groups = ["All", ...new Set(pdfData.map((item) => item.group))];

  const filteredData = pdfData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.id.includes(search);
      item.description.includes(search);
      item.title.includes(search);
      item.group.includes(search);
    const matchesGroup = groupFilter === "All" || item.group === groupFilter;
    return matchesSearch && matchesGroup;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="p-4 mt-10">
      {/* Filter Controls */}
      <div className="mb-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        {/* Search */}
        <div className="flex items-center  max-w-md shadow px-3 py-2 rounded-md">
          <FaSearch className=" mr-2 " />
          <input
            type="text"
            placeholder="Search by Name or ID"
            className="w-full text-sm bg-[#84B941] text-black"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Group Filter */}
        <select
          className="text-sm px-3 py-2 rounded border shadow"
          value={groupFilter}
          onChange={(e) => {
            setGroupFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          {groups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border text-sm 0">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-2 border">#</th>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Group</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Actions</th>
              <th className="p-2 border">Remark</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((file, index) => (
              <tr key={file.id} className="hover:bg-gray-50 text-gray-600">
                <td className="p-2 border text-center">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="p-2 border">{file.id}</td>
                <td className="p-2 border">{file.name}</td>
                <td className="p-2 border">{file.group}</td>
                <td className="p-2 border">{file.title}</td>
                <td className="p-2 border">{file.description}</td>
                <td className="p-2 border text-center flex justify-around ">
                  <a
                    href={file.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1  hover:bg-green-500 text-black rounded border  text-sm"
                  >
                    <MdOutlineRemoveRedEye />
                  </a>
                </td>
                <td
                  className={`p-2 border text-center text-sm ${
                    file.status === "N/A"
                      ? "bg-red-500 text-white text-sm"
                      : file.status === "A/V"
                      ? "bg-emerald-500 text-white" 
                      : ""
                  }`}
                >
                  {file.status}
                </td>
              </tr>
            ))}
            {currentData.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center p-4 text-gray-400">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 gap-2 flex-wrap">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-1 text-sm rounded ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Files;
