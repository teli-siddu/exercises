

const AddEmployee=()=>{
    return(
        <div className="add-employee-container">
<form>
    <div className="row">
        <div className="col-md-3">
            <div className="form-group">
                <label className="control-label">Employe Id</label>
                <input type="text" id="EmployeeId" name="EmployeeId" className="form-control" />
            </div>
        </div>
        <div className="col-md-3">
            <div className="form-group">
                <label htmlFor="" className="control-label">First Name</label>
                <input type="text" id="FirstName" name="FirstName" className="form-control" />
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-3">
            <div className="form-group">
                <label className="control-label">Email</label>
                <input type="text" id="Email" name="Email" className="form-control" />
            </div>
        </div>
        <div className="col-md-3">
            <div className="form-group">
                <label htmlFor="" className="control-label">Phone Number</label>
                <input type="text" id="PhoneNumber" name="PhoneNumber" className="form-control" />
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6 text-center">
            <div className="form-group">
            <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </div>
    </div>
</form>

        </div>
    )
}

export default AddEmployee;