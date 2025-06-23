import useAxiosSecure from "../../hooks/useAxiosSecure";
import Container from "../Shared/Container";
import { useQuery } from "@tanstack/react-query";
import Heading from "../Shared/Heading";
import LoadingSpinner from "../Shared/LoadingSpinner";

const Table = () => {
  const axiosSecure = useAxiosSecure();
  const { data: employees = [], isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/employees`);
      return data
    }
  });
  console.log(employees);

  if(isLoading) return <LoadingSpinner/>
    return (
      <Container>
        {employees && employees.length > 0 ? (
          <div className="mt-10">
            <div className="overflow-x-auto">
              <table className="table table-xs">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>DACO ID</th>
                    <th>SAP ID</th>
                    <th>Iqama Number</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Nationality</th>
                    <th>Joining Date</th>
                    <th>Work Location</th>
                    <th>Work Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample row — can be mapped from an array of objects */}
                  {employees.map((employe, index) => (
                    <tr key={employe._id}>
                      <td>{index + 1}</td>
                      <td>{employe.name}</td>
                      <td>{employe.position}</td>
                      <td>{employe.dacoId}</td>
                      <td>{employe.sapId}</td>
                      <td>{employe.iqamaNumber}</td>
                      <td>{employe.mobile}</td>
                      <td>{employe.email}</td>
                      <td>{employe.nationality}</td>
                      <td>{employe.joining}</td>
                      <td>{employe.workLocation}</td>
                      <td>{employe.workStatus}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>DACO ID</th>
                    <th>SAP ID</th>
                    <th>Iqama Number</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Nationality</th>
                    <th>Joining Date</th>
                    <th>Work Location</th>
                    <th>Work Status</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
            <Heading
              center={true}
              title="No Data Available In This Page !"
              subtitle="Please check with your responsible developer."
            />
          </div>
        )}
      </Container>
    );
};

export default Table;