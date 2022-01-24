function headingHandler(step){
  let result = '';
  switch (step){
    case 1:
      result = "Sign UP";
      break;
    case 2:
      result = "Message";
      break;
    case 3:
      result = "Checkbox";
      break;
    default:
      break;
  }
  return result;
}

function Header(props){
  return (
    <>
      <ul className="menu flex">
        <li className="flex">
          <span className={props.currentStep >= 1 ? "form-status-active" : "form-status"}>
            {props.currentStep > 1 ? <i className="fas fa-check"></i> : 1}  
          </span><span>Sign Up</span>
        </li>
        <li className="flex">
          <span className={props.currentStep >= 2 ? "form-status-active" :"form-status"}>
            {props.currentStep > 2 ? <i className="fas fa-check"></i> : 2}   
          </span><span>Message</span>
        </li>
        <li className="flex">
          <span className={props.currentStep === 3 ? "form-status-active" : "form-status"}>3</span><span>Checkbox</span>
        </li>
      </ul>
      <div className="step-info">
        <p>Step {props.currentStep}/3</p>
        <h2>{headingHandler(props.currentStep)}</h2>
      </div>
    </>
  )
}

export default Header;