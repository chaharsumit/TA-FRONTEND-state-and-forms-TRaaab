function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <>
    <div className="form-group">
      <fieldset className="choice-checkbox flex">
        <label className="avatar-label flex">
          <input onChange={props.handleChange} type='checkbox' name="male"/>
          <img src="actor.png" className="avatar" />
        </label>
        <label className="avatar-label flex">
          <input onChange={props.handleChange}  type='checkbox' name="female"/>
          <img src="actress.png" className="avatar" />
        </label>
      </fieldset>
      <fieldset id="choice_Two" className="choice_Two flex">
        <label>
          <input onChange={props.handleChange} type="radio" id="choiceOne" value="I want to add this option" name="choiceTwo" />
          I want to add this option
        </label>
        <label>
          <input onChange={props.handleChange} type="radio" id="choiceTwo" value="Let me click on this checkbox and choose some cool stuff" name="choiceTwo" />
          Let me click on this checkbox and choose some cool stuff
        </label>
      </fieldset>     
    </div>
    <button className="btn btn-success">Submit</button>
    </>
  );
}


export default Step3;