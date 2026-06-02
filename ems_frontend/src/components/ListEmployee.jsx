// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { deleteEmployee, listEmployee } from "../services/EmmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployee = () => {

  const [employeeData, setEmployeeData]= React.useState([]);

  useEffect(()=>{
    listEmployee().then((response)=>{
      setEmployeeData(response.data);
    }).catch((error)=>{
      console.log(error);
    });
  }, []);

  const navigate = useNavigate();

  const handleAddEmployee=()=>{
    navigate("/add-employee");
  }

  const handleUpdateEmployee=(id)=>{
    navigate(`/update-employee/${id}`);
  }

  const handleDeleteEmployee=(id)=>{
    // eslint-disable-next-line no-restricted-globals
    if(confirm("Are you sure you want to delete this employee?")){
      // call delete api here
      deleteEmployee(id)
        .then((response)=>{
          console.log(response.data);
          // after deleting employee, we need to fetch the updated list of employees
          listEmployee().then((response)=>{
            setEmployeeData(response.data);
          }).catch((error)=>{
            console.log(error);
          });
        })
        .catch((error)=>{
          console.log(error);
        });
        
    }
  } 

  return (
    <div className="container">
      <h2 className="text-center">List Of Employees</h2>
      <button className="btn btn-primary mb-2" onClick={handleAddEmployee}>
        Add Employee
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeData?.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button className="btn btn-info" onClick={() => handleUpdateEmployee(employee.id)}>
                  Update
                </button>
                <button className="btn btn-danger ml-2" onClick={() => handleDeleteEmployee(employee.id)} style={{ marginLeft: "10px" }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
