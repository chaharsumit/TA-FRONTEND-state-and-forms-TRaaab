function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        className="form-control"
        id="firstName"
        name="firstName"
        type="text"
        placeholder="Enter First Name"
        value={props.firstName}
        onChange={props.handleChange}
        />
      <input
        className="form-control"
        id="lastName"
        name="lastName"
        type="text"
        placeholder="Enter Last Name"
        value={props.lastName}
        onChange={props.handleChange}
        />
      <input
        className="form-control"
        id="date"
        name="date"
        type="date"
        placeholder="Enter date"
        value={props.date}
        onChange={props.handleChange}
        />
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={props.email}
        onChange={props.handleChange}
        />
      <input
        className="form-control"
        id="address"
        name="address"
        type="text"
        placeholder="Enter Address"
        value={props.address}
        onChange={props.handleChange}
        />
    </div>
  );
}

export default Step1;