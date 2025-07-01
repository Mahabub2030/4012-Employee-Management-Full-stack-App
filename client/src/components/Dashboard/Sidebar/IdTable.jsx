const IdTable = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="overflow-x-auto ">
        <table className="display stripe hover min-w-full text-sm text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Job Description</th>
              <th className="p-2">Iqama Number</th>
              <th className="p-2">Iqama Date</th>
              <th className="p-2">DACO ID</th>
              <th className="p-2">DACO Date</th>
              <th className="p-2">Toatal days (Iqama)</th>
              <th className="p-2">Toatal days (DACoID)</th>
              <th className="p-2">Entry Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample Row */}
            <tr>
              <td className="p-2">PK200</td>
              <td className="p-2">Project Manager</td>
              <td className="p-2">121314</td>
              <td className="p-2">Abdulhakim Alammar</td>
              <td className="p-2">DMM-04-8942</td>
              <td className="p-2">1111825723</td>
              <td className="p-2">Saudi</td>
              <td className="p-2">--</td>
              <td className="p-2">Nov 11, 2024 11:53 PM</td>
            </tr>
            {/* Add more rows dynamically or map through data */}
          </tbody>
          <tfoot className="bg-gray-100">
            <tr>
              <th className="p-2">Package ID</th>
              <th className="p-2">Job Description</th>
              <th className="p-2">Job Code</th>
              <th className="p-2">Employee Name</th>
              <th className="p-2">DACO ID</th>
              <th className="p-2">Employee ID</th>
              <th className="p-2">Nationality</th>
              <th className="p-2">Nationality Code</th>
              <th className="p-2">Entry Date</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default IdTable;
