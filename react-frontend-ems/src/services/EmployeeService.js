import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService{

    //Get Http request of all employee's in DB
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    //Create Http request to create employee in SQL DB
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    //Get Http request to get employee by id in SQL DB
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    //Put Http request to update employee in SQL DB
    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

}

export default new EmployeeService();