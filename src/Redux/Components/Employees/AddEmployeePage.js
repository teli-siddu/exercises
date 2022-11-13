
import TextInput from '../../Common/TextInput'
const AddEmployeePage = function({employee,handleChange,submitForm,errors,resetForm,saving=false}) {

    return (
        <div className="add-employee-container">
            {/* <ul>
                {Object.entries(errors || {}).map(([prop, value]) => {
                    return (
                        <li className='error-message' key={prop}>
                            {value}
                        </li>
                    );
                })}
            </ul> */}
            <form>
                <div className="row">
                   
                    <div className="col-md-6">
                        <div className="form-group">
                        <TextInput name="FirstName" label="First Name" value={employee.FirstName} onChange={handleChange} error={errors.FirstName} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <TextInput name="LastName" label="Last Name" value={employee.LastName} onChange={handleChange} error={errors.FirstName} />
                        </div>
                    </div>
                   
                </div>
                <div className="row">
                <div className="col-md-6">
                        <div className="form-group">
                            <TextInput name="EmployeeId" label="Employe Id" value={employee.EmployeeId && employee.EmployeeId.toString()} readonly={true} onChange={handleChange} error={errors.EmployeeId} />
                           
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <TextInput name="Email" label="Email" value={employee.Email} onChange={handleChange} error={errors.Email} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <TextInput name="PhoneNumber" label="Phone Number" value={employee.PhoneNumber} onChange={handleChange} error={errors.PhoneNumber} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="form-group">

                            <button type="submit" className="btn btn-primary" disabled={saving} onClick={(e) => submitForm(e)}> {saving?"Please wait...":employee.id==0?"Add":"Update"}</button>
                          &nbsp;&nbsp;  <button type="button" className="btn btn-primary" onClick={(e) => resetForm(e)}> Clear</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default AddEmployeePage;