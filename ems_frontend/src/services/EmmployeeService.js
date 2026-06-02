import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees";

export const listEmployee=()=>{
    return axios.get(EMPLOYEE_API_BASE_URL);
}

export const createEmployee=(employee)=>{
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
}

export const getEmployeeById=(id)=>{
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
}

export const updateEmployee=(id, employee)=>{
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
}

export const deleteEmployee=(id)=>{
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
}