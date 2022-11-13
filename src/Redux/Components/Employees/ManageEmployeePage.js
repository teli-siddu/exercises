import AddEmployeePage from "./AddEmployeePage";
import EmployeesList from "./EmployeesList";
import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import * as employeeActions from '../../Redux/Actions/EmployeesAction'
import {addEmployee,getEmployeeById} from '../../Redux/Actions/EmployeesAction'

function ManageEmployeePage() {
    const dispatch = useDispatch();
    const initialState={id:0,FirstName:"",LastName:"",EmployeeId:"",Email:"",PhoneNumber:""}
    const [employee,setEmployee]=useState(initialState)
    const [errors, setErrors]  = useState({});
    const [saving,setSaving]=useState(false)
    useEffect(()=>{
        dispatch(employeeActions.GetEmployees());
    },[dispatch])
    const employees = useSelector((state)=>state.employees.sort((a, b) => b.EmployeeId-a.EmployeeId));
    const maxEmpId=employees.length>0?Math.max(...employees.map(o => o.EmployeeId))+1:null;
    useEffect(()=>{
        setEmployee({
            ...employee,
            EmployeeId:maxEmpId && (maxEmpId+1)
        })
    },[employees])

function editEmployee(id){
    console.log(id)
   let employee=employees.find(x=>x.id==id)
   setEmployee(employee)
//    console.log(empId+JSON.stringify(employee) )
}
const submitForm=(e)=>{
    // console.log(Employee)
    // console.log(errors)
    e.preventDefault();
    if(!formIsValid())return;
    employee.id=randomNumberInRange(40,1000)
    setSaving(true);
    dispatch(addEmployee(employee)).then(()=>{
        setEmployee({
            ...initialState,
            EmployeeId:employee.EmployeeId+1
         })
         setSaving(false)
      console.log("initial state after submit"+JSON.stringify(employee))
    }).catch((error)=>{
        throw error;
        setSaving(false)
    }) ;
    
 }
 function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 const handleChange=(e)=>{
     const {name,value}=e.target
     setEmployee({
        ...employee,
        [name]:value
     })

    // console.log(Employee)
 }
function resetForm(){
    
    setEmployee(prevState=>({
        ...initialState,
        EmployeeId:maxEmpId
    }));
}
 function formIsValid(){
    const {EmployeeId,FirstName,Email,PhoneNumber} = employee;
    const errors={}
    //  if(!EmployeeId) errors.EmployeeId="Employee Id is required";
    if(!FirstName) errors.FirstName="First Name is required";
    if(!Email) errors.Email="Email Id is required";
    if(!PhoneNumber) errors.PhoneNumber="Phone Number is required";
    setErrors(errors);
    return Object.keys(errors).length==0;
 }
 
   
    
    return (
        <div className="manage-employees">
            {/* ManageEmployeePage */}
            <div className="row">
                <div className="col-md-6">
                    <AddEmployeePage employee={employee} errors={errors} handleChange={handleChange} submitForm={submitForm} resetForm={resetForm}  saving={saving}  />
                </div>
                <div className="col-md-6">
                    <EmployeesList employees={employees} editEmployee={editEmployee} />
                </div>
            </div>

        </div>
    )

}

export default ManageEmployeePage;


