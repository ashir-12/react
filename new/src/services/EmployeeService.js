import axios from "axios";


class EmployeeService {
  saveEmployee(employee) {
    return axios.post("http://localhost:8081/employees/add", employee);
  }
   getEmployee(){
     return axios.get("http://localhost:8081/employees");
   }

   deleteEmployee(id){
    return axios.delete("http://localhost:8081/employees/delete/"+id);
   }
}
export default new EmployeeService();