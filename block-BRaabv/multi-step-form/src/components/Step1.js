function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="form-group">

      <fieldset className="fieldset-row flex">

        <label className="flex flex-label"htmlFor="firstName">First Name
          <input
            className="form-control"
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter First Name"
            value={props.firstName}
            onChange={props.handleChange}
            />
        </label>     
        

        <label className="flex flex-label"htmlFor="lastName">Last Name
          <input
            className="form-control"
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter Last Name"
            value={props.lastName}
            onChange={props.handleChange}
            />
        </label>

      </fieldset>
      
      <fieldset className="fieldset-row flex">

        <label className="flex flex-label"htmlFor="date">Date of Birth
          <input
            className="form-control"
            id="date"
            name="date"
            type="date"
            placeholder="Enter date"
            value={props.date}
            onChange={props.handleChange}
            />
        </label>

        <label className="flex flex-label"htmlFor="email">Email Address
          <input
            className="form-control"
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            value={props.email}
            onChange={props.handleChange}
            />
        </label>

      </fieldset>
      

      <label className="flex flex-label"htmlFor="address">Address
        <input
          className="form-control"
          id="address"
          name="address"
          type="text"
          placeholder="Enter Address"
          value={props.address}
          onChange={props.handleChange}
          />
      </label>
      
    </div>
  );
}

export default Step1;