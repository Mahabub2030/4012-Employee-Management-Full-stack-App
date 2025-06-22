import { useEffect, useState } from "react";


const FilesPdf = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRemark, setFilterRemark] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("http://localhost:5000/filesPdf")
      .then((res) => res.json())
      .then((files) => setData(files))
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  const filteredData = data.filter((item) => {
    const matchSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toString().includes(searchTerm) ||
      item.group.toLowerCase().includes(searchTerm.toLowerCase());

    const matchRemark = filterRemark === "All" || item.remark === filterRemark;

    return matchSearch && matchRemark;
  });

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="p-6">
      {/* Search and Filter */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by Name, ID, Group"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded w-1/2"
        />
        <select
          value={filterRemark}
          onChange={(e) => setFilterRemark(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="All">All</option>
          <option value="AV">A/V</option>
          <option value="N/A">N/A</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="min-w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Group</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Actions</th>
              <th className="px-4 py-2">Remark</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.group}</td>
                <td className="px-4 py-2">{item.title}</td>
                <td className="px-4 py-2">{item.description}</td>
                <td className="px-4 py-2 text-center">
                  {item.file ? (
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      👁
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      item.status === "A/V" ? "bg-green-500" : "N/A" , "bg-red-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center items-center space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-300 rounded"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-4 py-2 bg-gray-300 rounded"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FilesPdf;
